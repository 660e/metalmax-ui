import './main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QPagination from '@/components/pagination.vue';
import QPanel from '@/components/panel.vue';
import QTh from '@/components/th.vue';
import QTr from '@/components/tr.vue';

import QHead from '@/components/head.vue';
import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QRow from '@/components/row.vue';
import QTeam from '@/components/team.vue';

const app = createApp(App);

[QHead, QIcon, QLayout, QRow, QTeam].concat([QPagination, QPanel, QTh, QTr]).forEach(component => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
