import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QHead from '@/components/head.vue';
import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QPanel from '@/components/panel.vue';
import QRow from '@/components/row.vue';

const app = createApp(App);

[QHead, QIcon, QLayout, QPanel, QRow].forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
