import Vue from 'vue';
import 'clientjs';
import VueRouter from 'vue-router';
import Metrics from './components/Metrics';
import Devices from './components/Devices';

import App from './App';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/tirt',
  routes: [
    { path: '/', name: 'devices', component: Devices },
    { path: '/metrics', name: 'metrics', component: Metrics },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  },
});
