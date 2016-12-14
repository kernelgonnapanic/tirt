import Vue from 'vue';
import 'clientjs';
import io from 'socket.io-client';
import VueRouter from 'vue-router';
import Metrics from './components/Metrics';
import Devices from './components/Devices';

const socket = io('192.168.1.128:3002');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Devices },
    { path: '/metrics', component: Metrics },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  data() {
    return {
      socket,
      client: new window.ClientJS(),
    };
  },
  created() {
    this.socket.emit('newClient', this.properties);
    window.addEventListener('unload', () => {
      this.socket.emit('close', this.properties);
    });
  },
  computed: {
    properties() {
      return Object.freeze(Object.keys(window.ClientJS.prototype).reduce((acc, key) => ({
        ...acc,
        [key]: this.client[key](),
      }), {}));
    },
  },
  template: `
    <div id="app">
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">
            Teoria i inżynieria ruchu teleinformatycznego
            </span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
              <router-link tag="a" class="mdl-navigation__link" to="/metrics">
                Metrics
              </router-link>
              <router-link tag="a" class="mdl-navigation__link" to="/">
                Devices
              </router-link>
            </nav>
          </div>
        </header>
      </div>
      <main>
        <div>
          <router-view class="view" :properties="properties" :socket="socket"></router-view>
        </div>
      </main>
    </div>
  `,
}).$mount('#app');
