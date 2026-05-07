<template>
  <div class="container">
    <!-- 상단 내비게이션 -->
    <nav class="top-nav">
      <button @click="$router.go(-1)" class="back-button">
        <span class="icon">←</span> 뒤로가기
      </button>
    </nav>

    <!-- 헤더 섹션 -->
    <header class="guide-header">
      <h1>📖 수면 일기란?</h1>
      <p class="subtitle">매일의 수면 패턴과 습관을 기록하는 도구예요. 더 나은 수면 건강을 만드는 데 도움을 드립니다.</p>
    </header>

    <!-- 일정 안내 섹션 -->
    <section class="schedule-section">
      <div class="card">
        <h3 class="tag first">1차 수면 일기</h3>
        <p>3회의 수면 센터 방문 기간 중 1회차와 2회차 방문 사이에<br>3일간 집에서 수면 후 아침에 작성합니다.</p>
      </div>
      <div class="card">
        <h3 class="tag second">2차 수면 일기</h3>
        <p>3회의 수면 센터 방문 기간 중 2회차와 3회차 방문 사이에<br>최소 5일에서 최대 7일간 집에서 음악과 함께 수면 후 아침에 작성합니다.</p>
      </div>
    </section>

    <!-- 작성 방법 -->
    <section class="info-box">
      <h2>✏️ 작성 방법</h2>
      <ul>
        <li>기상 후 매일 아침, <strong>1시간 내</strong> 작성</li>
        <li>전날 밤 수면 상태를 떠올리며 체크</li>
        <li><strong>대략적인 시간</strong>으로 편안하게 기록</li>
        <li>2차는 <strong>음악과 함께 수면</strong> 후 작성</li>
      </ul>
    </section>

    <!-- 음악 청취 평가 -->
    <section class="music-eval-box">
      <h2>🎵 수면 음악 청취 경험 평가</h2>
      <p class="description">2차 수면 일기 <strong>마지막 날 아침에 한 번만</strong> 작성합니다.</p>
      <div class="step-guide">
        <span>마지막 날 클릭</span>
        <span class="arrow">→</span>
        <span>일기 내용 입력</span>
        <span class="arrow">→</span>
        <span>'다음으로' 클릭</span>
        <span class="arrow">→</span>
        <span>음악 청취 경험 평가</span>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <h2>❓ 자주 묻는 질문</h2>
      <div class="faq-item">
        <p class="question">Q. 일기 작성을 하루 빠뜨렸는데 어떡하죠?</p>
        <p class="answer">작성하지 못한 날은 남겨두고 오늘부터 시작하면 돼요.</p>
      </div>
      <div class="faq-item">
        <p class="question">Q. 평소와 다른 일이 있었다면?</p>
        <p class="answer">질병, 약 복용, 스트레스 등은 특이사항란에 기록해주세요.</p>
      </div>
    </section>

    <!-- 푸터 문의처 -->
    <footer class="guide-footer">
      <p>궁금한 점이 있으신가요?</p>
      <a href="mailto:clarissa0108@naver.com" class="email-link">
        clarissa0108@naver.com
      </a>
    </footer>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #0F172A;
  color: white;
  padding: 50px 24px;
  font-family: 'Pretendard', -apple-system, sans-serif;
  box-sizing: border-box;
}

/* 뒤로가기 버튼 */
.top-nav { margin-bottom: 30px; }
.back-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #CBD5E1;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
}

.guide-header { margin-bottom: 40px; }
.guide-header h1 { font-size: 1.8rem; margin-bottom: 12px; }
.subtitle { color: #94A3B8; font-size: 1rem; line-height: 1.5; }

/* 일정 카드 */
.schedule-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}
.card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 16px;
}
.tag { font-size: 0.9rem; margin-bottom: 12px; font-weight: 600; }
.tag.first { color: #818CF8; }
.tag.second { color: #34D399; }
.card p { font-size: 0.9rem; color: #E2E8F0; margin: 0; line-height: 1.4; }

/* 작성 방법 박스 */
.info-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 32px;
}
.info-box h2 { font-size: 1.2rem; margin-bottom: 16px; }
.info-box ul { padding-left: 20px; margin: 0; color: #CBD5E1; }
.info-box li { margin-bottom: 10px; font-size: 0.95rem; }

/* 음악 평가 박스 (강조 포인트) */
.music-eval-box {
  background: linear-gradient(135deg, #4338CA 0%, #1E1B4B 100%);
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.music-eval-box h2 { font-size: 1.1rem; margin-bottom: 8px; }
.description { font-size: 0.9rem; color: #E0E7FF; opacity: 0.9; }
.step-guide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  margin-top: 16px;
  color: #EEF2FF;
}

/* FAQ */
.faq-section h2 { font-size: 1.2rem; margin-bottom: 20px; color: #94A3B8; }
.faq-item { margin-bottom: 24px; }
.question { font-weight: 600; color: #818CF8; margin-bottom: 6px; }
.answer { color: #94A3B8; font-size: 0.9rem; margin: 0; }

/* 푸터 */
.guide-footer {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.guide-footer p { color: #64748B; font-size: 0.9rem; margin-bottom: 8px; }
.email-link { color: #818CF8; text-decoration: none; font-weight: 600; }

@media (max-width: 500px) {
  .schedule-section { grid-template-columns: 1fr; }
  .step-guide { flex-direction: column; gap: 8px; }
  .arrow { transform: rotate(90deg); opacity: 0.5; }
}
</style>
