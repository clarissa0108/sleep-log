<template>
  <div class="container">
    <!-- 상단 헤더 -->
    <nav class="top-nav">
      <button @click="$router.go(-1)" class="back-button">✕ 취소</button>
      <span class="day-title">{{ $route.params.day }}일차 기록</span>
      <button @click="saveDiary" class="save-top-btn">저장</button>
    </nav>

    <main class="form-content">
      <!-- 1. 작성 일자 -->
      <section class="form-section">
        <label class="form-label">작성 일자</label>
        <div class="date-display">
          <span class="date-text">{{ todayMonth }}월 {{ todayDate }}일</span>
        </div>
      </section>

      <!-- 2. 낮잠 시간 -->
      <section class="form-section">
        <label class="form-label">전날 낮잠 시간 (있다면 입력)</label>
        <div class="time-range-input">
          <input type="time" v-model="form.napStart" class="time-input">
          <span class="sep">~</span>
          <input type="time" v-model="form.napEnd" class="time-input">
        </div>
      </section>

      <!-- 3. 취침 관련 시간 -->
      <section class="form-section">
        <div class="input-group">
          <label class="form-label">지난 밤 잠자리로 들어간 시각</label>
          <input type="time" v-model="form.bedTime" class="time-input-full">
        </div>
        
        <div class="input-group">
          <label class="form-label">지난 밤 불을 끄고 잠을 청한 시각</label>
          <input type="time" v-model="form.lightOffTime" class="time-input-full">
        </div>

        <div class="input-group">
          <label class="form-label">잠들기까지 걸린 시간 (분)</label>
          <div class="num-input-wrap">
            <input type="number" v-model="form.toSleepMinutes" placeholder="0">
            <span class="unit">분</span>
          </div>
        </div>
      </section>

      <!-- 4. 중간에 깬 횟수 -->
      <section class="form-section">
        <div class="input-group">
          <label class="form-label">자다가 중간에 깬 횟수</label>
          <div class="num-input-wrap">
            <input type="number" v-model="form.wakeUpCount" placeholder="0">
            <span class="unit">회</span>
          </div>
        </div>

        <div class="input-group">
          <label class="form-label">깬 후 다시 잠들지 못한 시간 (분)</label>
          <div class="num-input-wrap">
            <input type="number" v-model="form.awakeMinutes" placeholder="0">
            <span class="unit">분</span>
          </div>
        </div>
      </section>

      <!-- 5. 기상 시각 -->
      <section class="form-section">
        <div class="input-group">
          <label class="form-label">오늘 완전히 눈을 뜬 시각</label>
          <input type="time" v-model="form.eyesOpenTime" class="time-input-full">
        </div>

        <div class="input-group">
          <label class="form-label">잠자리에서 완전히 빠져나온 시각</label>
          <input type="time" v-model="form.outOfBedTime" class="time-input-full">
        </div>
      </section>

      <!-- 6. 수면의 질 (1-10) -->
      <section class="form-section">
        <label class="form-label">지난 밤 수면의 질 (1~10)</label>
        <div class="rating-grid">
          <button v-for="n in 10" :key="'q'+n" 
            :class="['rate-btn', { active: form.sleepQuality === n }]"
            @click="form.sleepQuality = n">{{ n }}</button>
        </div>
      </section>

      <!-- 7. 개운함 정도 (1-10) -->
      <section class="form-section">
        <label class="form-label">오늘 아침 개운함 정도 (1~10)</label>
        <div class="rating-grid">
          <button v-for="n in 10" :key="'f'+n" 
            :class="['rate-btn', { active: form.feelingFresh === n }]"
            @click="form.feelingFresh = n">{{ n }}</button>
        </div>
      </section>

      <!-- 8. 특이사항 -->
      <section class="form-section">
        <label class="form-label">특이사항 (감기약 복용, 야근 등)</label>
        <textarea v-model="form.note" placeholder="내용을 입력해주세요." class="note-area"></textarea>
      </section>

      <button @click="saveDiary" class="submit-btn">저장하기</button>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const now = new Date();
const todayMonth = now.getMonth() + 1;
const todayDate = now.getDate();

const form = ref({
  napStart: '',
  napEnd: '',
  bedTime: '22:00',
  lightOffTime: '22:00',
  toSleepMinutes: null,
  wakeUpCount: null,
  awakeMinutes: null,
  eyesOpenTime: '07:00',
  outOfBedTime: '07:00',
  sleepQuality: null,
  feelingFresh: null,
  note: ''
});

const saveDiary = () => {
  console.log("저장 데이터:", form.value);
  alert("수면일기가 저장되었습니다.");
  router.push('/home');
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #0F172A;
  color: white;
  padding-bottom: 50px;
}

/* 상단바 */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  position: sticky;
  top: 0;
  background: #0F172A;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.back-button { background: none; border: none; color: #94A3B8; cursor: pointer; }
.day-title { font-weight: 600; font-size: 1.1rem; }
.save-top-btn { color: #818CF8; background: none; border: none; font-weight: 600; }

.form-content { padding: 24px; }

/* 섹션 스타일 */
.form-section {
  background: rgba(30, 41, 59, 0.5);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-label {
  display: block;
  font-size: 0.95rem;
  color: #CBD5E1;
  margin-bottom: 12px;
  font-weight: 500;
}

.input-group { margin-bottom: 20px; }
.input-group:last-child { margin-bottom: 0; }

/* 입력창 스타일 */
.time-input, .time-input-full, .num-input-wrap input, .note-area {
  background: #0F172A;
  border: 1px solid #334155;
  border-radius: 8px;
  color: white;
  padding: 12px;
  font-size: 1rem;
}

.time-range-input { display: flex; align-items: center; gap: 10px; }
.time-input { flex: 1; text-align: center; }
.time-input-full { width: 100%; box-sizing: border-box; }

.num-input-wrap { display: flex; align-items: center; gap: 10px; }
.num-input-wrap input { width: 80px; text-align: right; }
.unit { color: #94A3B8; }

/* 별점(숫자) 그리드 */
.rating-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.rate-btn {
  padding: 10px 0;
  border-radius: 8px;
  border: 1px solid #334155;
  background: transparent;
  color: #94A3B8;
  cursor: pointer;
}
.rate-btn.active {
  background: #818CF8;
  color: white;
  border-color: #818CF8;
}

.note-area { width: 100%; min-height: 100px; resize: none; box-sizing: border-box; }

.submit-btn {
  width: 100%;
  padding: 16px;
  background: #818CF8;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
}
</style>
