import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import GuideView from '@/views/GuideView.vue'
import DiaryDaySelect1 from "@/views/DiaryDaySelect1.vue";
import Home2 from '@/views/Home2.vue'
import DiaryDaySelect2 from '@/views/DiaryDaySelect2.vue'
import DiaryEntryView from '@/views/DiaryEntryView.vue'
import SleepMusicView from '@/views/SleepMusicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home', // 이동할 주소
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView
    },
    {
      path: '/entry',
      name: 'entry',
      component: DiaryEntryView
    },
    {
      // 2차 수면일기 혹은 수면음악 선택 페이지 (수면 시작 vs 작성하기)
      path: '/action',
      name: 'action',
      component: Home2 
    },
    {
      // 2차 일기 목록 페이지
      path: '/list',
      component: DiaryDaySelect2
    },
    {
      path: '/daily-sleep', // 주소
      name: 'DiaryDaySelect1', 
      component: DiaryDaySelect1 
    },
    {
      path: '/music',
      name: 'music',
      component: SleepMusicView
    },
    {
      // :day는 동적인 숫자를 받겠다는 의미입니다.
      path: '/diary/2/:day',
      name: 'DiaryEntry',
      component: DiaryEntryView,
      props: true // 파라미터를 props로 바로 넘겨줄 수 있습니다.
    }
  ]
})

export default router