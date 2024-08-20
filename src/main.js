import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QLayout from '@/components/layout.vue';

const app = createApp(App);

[QLayout].forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
