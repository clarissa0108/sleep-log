<template>
  <div class="container">
    <!-- 상단 내비게이션 -->
    <nav class="top-nav">
      <button @click="$router.go(-1)" class="back-button">
        <span class="icon">←</span> 뒤로가기
      </button>
    </nav>

    <!-- 헤더 섹션 -->
    <header class="header">
      <h1 class="title">1차 수면일기</h1>
      <p class="subtitle">당신의 수면을 기록해주세요</p>
    </header>

    <!-- 기록 진행 현황 (선택사항) -->
    <section class="status-summary">
      <div class="status-text">
        현재 진행도 <span>{{ completedCount }} / {{ totalDays }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: (completedCount / totalDays) * 100 + '%' }"></div>
      </div>
    </section>

    <!-- 일기 리스트 -->
    <main class="diary-list">
      <div v-for="day in totalDays" :key="day" class="list-item-wrapper">
        <button 
          class="diary-item" 
          :class="{ 'completed': diaryStatus[day], 'is-last': day === totalDays }"
          @click="goToDiaryEntry(day)"
        >
          <div class="item-info">
            <span class="day-label">{{ day }}일차 기록</span>
          </div>
          
          <div class="status-indicator">
            <span v-if="diaryStatus[day]" class="status-done">작성 완료</span>
            <span v-else class="status-todo">작성하기</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 총 작성 일수)
const totalDays = 3;

// 각 일차별 작성 여부 (실제 데이터는 API나 스토어에서 가져오게 됩니다)
const diaryStatus = ref({
  1: true,
  2: true,
  3: false,
});

const completedCount = computed(() => {
  return Object.values(diaryStatus.value).filter(status => status).length;
});

const goToDiaryEntry = (day) => {
  // console.log(`${day}일차 일기 작성 페이지로 이동`);
  router.push(`/diary/2/${day}`)
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #6D5BBB, #9B8375);
  color: white;
  padding: 50px 24px;
  font-family: 'Pretendard', -apple-system, sans-serif;
  box-sizing: border-box;
}

/* 네비게이션 */
.top-nav { margin-bottom: 30px; }
.back-button {
  background: rgba(255, 255, 255, 0.05);
  border: none;
  color: #94A3B8;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
}

/* 헤더 */
.header { margin-bottom: 40px; }
.title { font-size: 1.8rem; font-weight: 700; margin-bottom: 8px; }
.subtitle { color: #94A3B8; font-size: 1rem; }

/* 프로그레스 바 */
.status-summary {
  background: rgba(30, 41, 59, 0.5);
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 30px;
}
.status-text { font-size: 0.9rem; color: #CBD5E1; margin-bottom: 12px; }
.status-text span { color: #34D399; font-weight: bold; }
.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #34D399, #3B82F6);
  transition: width 0.3s ease;
}

/* 리스트 스타일 */
.diary-list { display: flex; flex-direction: column; gap: 12px; }
.diary-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}
.diary-item:active { transform: scale(0.98); background: rgba(255, 255, 255, 0.08); }

.item-info { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; }
.day-label { font-size: 1.05rem; font-weight: 600; }
.music-tag {
  font-size: 0.75rem;
  background: rgba(129, 140, 248, 0.2);
  color: #818CF8;
  padding: 2px 8px;
  border-radius: 4px;
}

.status-indicator { display: flex; align-items: center; gap: 8px; }
.status-done { color: #34D399; font-size: 0.85rem; font-weight: 600; }
.status-todo { color: #64748B; font-size: 0.85rem; }
.chevron { color: #475569; }

/* 완료된 항목 스타일 */
.diary-item.completed { border-color: rgba(52, 211, 153, 0.3); }

/* 하단 안내 */
.notice-footer { margin-top: 40px; text-align: center; }
.notice-footer p { font-size: 0.85rem; color: #64748B; }
</style>
