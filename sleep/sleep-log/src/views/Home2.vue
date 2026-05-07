
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
      <h1 class="title">2차 수면일기</h1>
      <p class="subtitle">먼저 음악과 함께 수면을 취한 후<br>수면 일기를 작성해주세요.</p>
    </header>

    <!-- 메인 액션 버튼 섹션 -->
    <main class="action-grid">

      <!-- 2. 수면일기 작성하기 (아침에 하는 행동) -->
      <button class="action-card diary-write" @click="goToList">
        <div class="card-content">
          <div class="icon-circle">✏️</div>
          <div class="text-group">
            <span class="action-title">수면일기 작성하기</span>
          </div>
        </div>
      </button>

      <!-- 1. 수면 시작하기 (밤에 하는 행동) -->
      <button class="action-card sleep-start" @click="startSleep">
        <div class="card-content">
          <div class="icon-circle">🌙</div>
          <div class="text-group">
            <span class="action-title">수면 시작하기</span>
            <span class="action-desc">수면 음악과 함께 잠자리에 듭니다.</span>
          </div>
        </div>
      </button>
    </main>

    <!-- 하단 안내 문구 -->
    <footer class="footer-info">
      <p>※ 2차 수면일기는 음악과 함께 수면 후 작성합니다.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 수면 시작 페이지(음악 재생 등)로 이동
const startSleep = () => {
  console.log("수면 시작 및 음악 재생 페이지로 이동");
  router.push('/music');
};

// 일기 목록 페이지로 이동
const goToList = () => {
//   console.log("일기 리스트 페이지로 이동");
  router.push('/list');
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #071B41, #6D5BBB);
  color: white;
  padding: 50px 24px;
  font-family: 'Pretendard', -apple-system, sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.top-nav { margin-bottom: 20px; }
.back-button {
  background: none;
  border: none;
  color: #94A3B8;
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0;
}

.header { margin-bottom: 48px; }
.title { font-size: 1.8rem; font-weight: 700; margin-bottom: 12px; }
.subtitle { color: #94A3B8; font-size: 1rem; line-height: 1.5; }

.action-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 액션 카드 공통 스타일 */
.action-card {
  position: relative;
  width: 100%;
  padding: 30px 24px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
}

.action-card:active { transform: scale(0.97); }

.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-circle {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.text-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.action-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.action-desc {
  font-size: 0.9rem;
  color: #94A3B8;
}

/* 수면 시작 버튼 (강조) */
.sleep-start {
  background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
  border-color: rgba(99, 102, 241, 0.3);
}

.sleep-start .icon-circle {
  background: rgba(99, 102, 241, 0.2);
}

.action-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #6366F1;
  color: white;
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: 600;
}

/* 일기 작성 버튼 */
.diary-write {
  background: rgba(30, 41, 59, 0.5);
}

.diary-write .icon-circle {
  background: rgba(52, 211, 153, 0.1);
}

.footer-info {
  margin-top: auto;
  padding-top: 40px;
  text-align: center;
}

.footer-info p {
  color: #475569;
  font-size: 0.85rem;
}
</style>
