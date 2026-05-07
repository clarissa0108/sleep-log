<template>
  <div class="container">
    <!-- 1. 헤더 섹션 -->
    <header class="header">
      <h1 class="title">수면 기록</h1>
      <p class="subtitle">오늘의 수면 상태를 기록해보세요</p>
    </header>

    <!-- 2. 안내 버튼 영역 -->
    <div class="guide-section">
      <button class="guide-btn" @click="openGuide">
        <span class="guide-icon">?</span>
        수면일기 작성 가이드 확인하기
      </button>
    </div>

    <!-- 3. 메인 버튼 섹션 -->
    <main class="button-grid">
      <!-- 1차 수면일기 -->
      <button class="diary-btn primary" @click="goToDiary(1)">
        <!-- <div class="icon-box">🌙</div> -->
        <div class="text-group">
          <span class="btn-title">1차 수면일기</span>
        </div>
        <div class="arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </button>

      <!-- 2차 수면일기 -->
      <button class="diary-btn secondary" @click="goToDiary(2)">
        <!-- <div class="icon-box">☀️</div> -->
        <div class="text-group">
          <span class="btn-title">2차 수면일기</span>
          <span class="btn-desc">수면 음악 중재</span>
        </div>
        <div class="arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </button>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDiary = (type) => {
  if (type === 1) {
    // 1차 수면일기는 바로 목록이나 작성 페이지로 이동
    router.push('diary/2/1');
  } else if (type === 2) {
    // 2차 수면일기는 '수면 시작하기/작성하기' 선택 페이지로 이동
    router.push('/action'); 
  }
};

const openGuide = () => {
    router.push('/guide')
//   alert('수면일기는 매일 정해진 시간에 작성하면 더 정확한 분석이 가능해요! 😴')
}
</script>

<style scoped>
/* 폰트 및 전체 배경 */
.container {
  min-height: 100vh;
  background-color: #0F172A; /* 어두운 네이비 배경 */
  color: white;
  padding: 50px 24px;
  font-family: 'Pretendard', -apple-system, sans-serif;
  box-sizing: border-box;
}

/* 헤더 스타일 */
.header {
  margin-bottom: 32px;
}

.title {
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
}

.subtitle {
  color: #94A3B8;
  font-size: 15px;
  margin: 0;
}

/* 안내 버튼 스타일 */
.guide-section {
  margin-bottom: 24px;
}

.guide-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  padding: 10px 18px;
  color: #A5B4FC;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}

.guide-btn:hover {
  background-color: rgba(99, 102, 241, 0.25);
}

.guide-icon {
  width: 20px;
  height: 20px;
  background-color: #6366F1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

/* 메인 버튼 스타일 */
.button-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.diary-btn {
  display: flex;
  align-items: center;
  padding: 28px 24px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;
  width: 100%;
}

.diary-btn:active {
  transform: scale(0.97);
}

/* 1차: 보라색 그라데이션 */
.primary {
  background: linear-gradient(145deg, #3730A3 0%, #1E1B4B 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 2차: 진한 회색/네이비 */
.secondary {
  background: linear-gradient(145deg, #1E293B 0%, #0F172A 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.icon-box {
  font-size: 36px;
  margin-right: 20px;
}

.text-group {
  flex: 1;
}

.btn-title {
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
  color: white;
}

.btn-desc {
  font-size: 14px;
  color: #94A3B8;
}

.arrow {
  color: #818CF8;
  opacity: 0.8;
}

/* 하단 내비게이션 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #1E293B;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #64748B;
  gap: 4px;
}

.nav-item.active {
  color: #818CF8;
}

.nav-item span {
  font-size: 10px;
}
</style>
