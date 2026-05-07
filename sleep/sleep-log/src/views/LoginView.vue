<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <div class="logo-circle">🌙</div>
        <h1>슬립 로그</h1>
        <p>Your Deep Sleep Journey</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <p class="welcome-text">깊은 수면으로 떠나는 여행</p>
        
        <div class="input-group">
          <input v-model="userId" type="text" placeholder="부여받은 ID를 입력해주세요" />
        </div>

        <div class="input-group">
          <input v-model="name" type="text" placeholder="이름의 이니셜 (예: KEW)" />
        </div>

        <button type="submit" class="login-button">출발</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' 

const userId = ref('')
const name = ref('')
const router = useRouter() 

const handleLogin = () => {
  if (userId.value && name.value) {
    console.log('로그인 성공!')
    router.push('/home') 
  } else {
    alert('로그인 정보를 입력해주세요.')
  }
}
</script>

<style scoped>
/* 1. 배경: 요청하신 색상으로 변경 (위: 071B41, 아래: 6D5BBB) */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #071B41, #6D5BBB);
  font-family: 'Pretendard', -apple-system, sans-serif;
}

/* 2. 카드: 군더더기 없는 깔끔한 디자인 */
.login-card {
  width: 90%;
  max-width: 380px;
  padding: 40px 28px;
  background: rgba(255, 255, 255, 0.08); /* 은은한 투명도 */
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo-circle {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.login-header h1 {
  color: #FFFFFF;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.login-header p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.welcome-text {
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 300;
}

/* 3. 입력창: 네온 제거, 매트하고 깔끔한 스타일 */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-group input {
  width: 100%;
  padding: 16px;
  background-color: #132350;
  border: 1px solid #132350;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  transition: border 0.2s;
  box-sizing: border-box;
}

.input-group input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5); /* 네온 대신 차분한 강조 */
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

/* 4. 버튼: 배경색과 조화로운 솔리드 스타일 */
.login-button {
  margin-top: 12px;
  padding: 16px;
  background-color: #3C3C80;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.login-button:hover {
  opacity: 0.9;

}
</style>
