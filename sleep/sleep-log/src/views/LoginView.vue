<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1>슬립 로그</h1>
        <p>Sleep log</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
       <p>깊은 수면으로 떠날 준비 되셨나요?</p>
        <div class="input-group">
          <input v-model="userId" type="text" placeholder="부여받은 ID를 입력해주세요" />
        </div>

        <div class="input-group">
          <input v-model="name" type="text" placeholder="이름의 이니셜을 입력해주세요(예:KEW)" />
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
  // 실제 서비스라면 여기서 아이디/비번 검사를 합니다.
  if (userId.value && name.value) {
    console.log('로그인 성공!')
    
    // '/home' 경로로 이동
    router.push('/home') 
  } else {
    alert('로그인 정보를 입력해주세요.')
  }
}
</script>

<style scoped>
/* 배경 설정 */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0F172A; /* Figma 배경색으로 변경 가능 */
  font-family: sans-serif;
}

/* 카드 디자인 */
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #1E293B;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-header h1 {
  color: white;
  font-size: 2rem;
  margin-bottom: 8px;
}

.login-header p {
  color: #94A3B8;
}

/* 폼 스타일 */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  color: #CBD5E1;
  font-size: 0.9rem;
}

.input-group input {
  padding: 12px 16px;
  background-color: #0F172A;
  border: 1px solid #334155;
  border-radius: 12px;
  color: white;
  outline: none;
}

.input-group input:focus {
  border-color: #6366F1;
}

/* 버튼 스타일 */
.login-button {
  margin-top: 10px;
  padding: 14px;
  background-color: #6366F1;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.login-button:hover {
  background-color: #4F46E5;
}

.login-footer {
  margin-top: 24px;
  text-align: center;
  color: #94A3B8;
  font-size: 0.9rem;
}

.login-footer a {
  color: #818CF8;
  text-decoration: none;
}
</style>
