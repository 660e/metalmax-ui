import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QPanel40 from '@/components/panel-40.vue';

const app = createApp(App);

[QIcon, QLayout, QPanel40].forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
