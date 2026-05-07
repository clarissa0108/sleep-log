<template>
  <div class="container">
    <!-- 상단 닫기 -->
    <nav class="top-nav">
      <button @click="$router.go(-1)" class="close-button">
        <span class="icon">✕</span> 닫기
      </button>
    </nav>

    <main class="player-content">
      <!-- 중앙 비주얼 -->
      <div class="visualizer-area">
        <div class="glow-circle shadow"></div>
        <div class="glow-circle inner"></div>
        <div class="music-icon">🎵</div>
      </div>

      <!-- 곡 정보 -->
      <div class="music-info">
        <h2 class="music-title">깊은 수면을 위한 중재 음악</h2>
        <p class="music-desc">편안한 마음으로 소리에 집중해보세요</p>
      </div>

      <!-- 플레이어 컨트롤 -->
      <div class="controls">
        <div class="time-info">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
        </div>

        <div class="play-btns">
          <button class="play-main-btn" @click="togglePlay">
            <span v-if="isPlaying">⏸</span>
            <span v-else>▶</span>
          </button>
        </div>

        <!-- 추가된 버튼 영역 -->
        <div class="action-area">
          <button class="save-go-btn" @click="saveAndGoToDiary">
            수면기록 저장하고 수면일기 쓰러가기
          </button>
        </div>
      </div>
    </main>

    <!-- 하단 수면 모드 안내 -->
    <footer class="sleep-tips">
      <p>음악이 끝나면 자동으로 정지됩니다.<br>화면을 엎어두셔도 괜찮아요.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(1800);

const progress = computed(() => (currentTime.value / duration.value) * 100);

const togglePlay = () => { isPlaying.value = !isPlaying.value; };

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// 수면 기록 저장 및 일기 목록으로 이동
const saveAndGoToDiary = () => {
  console.log("현재까지의 수면 음악 청취 기록 저장 중...");
  // 기록 저장 로직(API 호출 등)이 들어갈 자리
  
  // 2차 수면일기 리스트 페이지로 이동
  router.push('/diary/2/list');
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: radial-gradient(circle at center, #1E293B 0%, #0F172A 100%);
  color: white;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.close-button { background: none; border: none; color: #64748B; cursor: pointer; }

.player-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 애니메이션 비주얼 */
.visualizer-area {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.glow-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  animation: pulse 4s infinite ease-in-out;
}
.glow-circle.shadow { width: 100%; height: 100%; }
.glow-circle.inner { width: 70%; height: 70%; background: rgba(99, 102, 241, 0.15); animation-delay: 1s; }
.music-icon { font-size: 2.5rem; z-index: 2; }

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.5; }
}

.music-info { text-align: center; margin-bottom: 30px; }
.music-title { font-size: 1.2rem; font-weight: 600; margin-bottom: 8px; }
.music-desc { color: #94A3B8; font-size: 0.85rem; }

/* 컨트롤러 및 버튼 */
.controls { width: 100%; max-width: 320px; }
.time-info { display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748B; margin-bottom: 8px; }
.progress-bar { height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 2px; margin-bottom: 30px; }
.progress-fill { height: 100%; background: #6366F1; box-shadow: 0 0 8px rgba(99, 102, 241, 0.4); }

.play-btns { display: flex; justify-content: center; margin-bottom: 32px; }
.play-main-btn {
  width: 64px; height: 64px; border-radius: 50%; border: none;
  background: white; color: #0F172A; font-size: 1.2rem;
  display: flex; align-items: center; justify-content: center; cursor: pointer;
}

/* 새로 추가된 버튼 스타일 */
.action-area { margin-top: 10px; width: 100%; }
.save-go-btn {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #CBD5E1;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.save-go-btn:active {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.sleep-tips { text-align: center; margin-top: 20px; }
.sleep-tips p { color: #475569; font-size: 0.8rem; line-height: 1.5; }
</style>
