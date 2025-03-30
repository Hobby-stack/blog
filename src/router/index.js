import Test from '@/components/test.vue';
import Details from '@/pages/Details.vue';
import Home from '@/pages/Home.vue';
import LoginPageAll from '@/pages/LoginPageAll.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/login', 
    name: 'Login',
    component: LoginPageAll 
  },
  { 
    path: '/blog', 
    name: 'BlogDetails',
    component: Details
  },
  {
    path: '/post',
    name: 'post',
    component: Test
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;