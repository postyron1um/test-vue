import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import myUIcomponents from '@/components/UI'
const app = createApp(App)

myUIcomponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount('#app');
