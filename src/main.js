import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);
const components = import.meta.glob('@/components/*.vue');

Object.values(components).forEach(async module => {
  const component = await module();
  app.component(component.default.name, component.default);
});

app.use(router);
app.mount('#app');
