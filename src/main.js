import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QHead from '@/components/head.vue';
import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QPanel40 from '@/components/panel-40.vue';
import QPanel600 from '@/components/panel-600.vue';
import QRow from '@/components/row.vue';

const app = createApp(App);

[QHead, QIcon, QLayout, QPanel40, QPanel600, QRow].forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
