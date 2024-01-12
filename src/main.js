import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MyHome from './components/MyHome.vue';
import MyAbout from './components/MyAbout.vue';
import MyCalendar from './components/MyCalendar.vue';
import App from './App.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MyHome },
    { path: '/about', component: MyAbout },
    { path: '/calendar', component: MyCalendar },
  ],
});

app.use(router);

app.mount('#app');
