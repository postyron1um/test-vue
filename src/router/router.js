import { createRouter, createWebHistory } from 'vue-router';
import PeopleList from '@/pages/PeopleList.vue';
import ChartPage from '@/pages/ChartPage.vue';

const routes = [
  { path: '/', component: PeopleList },
  { path: '/chart', component: ChartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
