import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const QComponents = import.meta.glob('@/views/mmr/components/*.vue');
Object.values(QComponents).forEach(async (module) => {
  const component = await module();
  app.component(component.default.name, component.default);
});

app.use(router);
app.mount('#app');
