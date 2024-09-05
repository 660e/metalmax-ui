import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QPanel from '@/components/panel.vue';
import QScroll from '@/components/scroll.vue';
import QTeam from '@/components/team.vue';
import QTh from '@/components/th.vue';
import QTr from '@/components/tr.vue';

const app = createApp(App);

[QIcon, QLayout, QPanel, QScroll, QTeam, QTh, QTr].forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
