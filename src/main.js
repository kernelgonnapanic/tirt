import Vue from 'vue';
import Metrics from './components/Metrics';
import Devices from './components/Devices';

const routes = {
  '/': 'Metrics',
  '/devices': 'Devices',
};

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  components: {
    Metrics,
    Devices,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
