import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import QIcon from '@/components/icon.vue';
import QLayout from '@/components/layout.vue';
import QTeam from '@/components/team.vue';
// import QThead from '@/components/thead.vue';
// import QTr from '@/components/tr.vue';

import './style.scss';

const app = createApp(App);

[QIcon, QLayout, QTeam].forEach(component => {
  app.component(component.name!, component);
});

app.use(router);
app.mount('#app');
