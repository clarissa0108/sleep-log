import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import GuideView from '@/views/GuideView.vue'
import DailySleep from '@/views/DailySleep.vue'
import DiaryList from '@/views/DiaryList.vue'
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
      // 2차 수면일기 선택 페이지 (수면 시작 vs 작성하기)
      path: '/action',
      component: DailySleep 
    },
    {
      // 일기 목록 페이지
      path: '/list',
      component: DiaryList
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