<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation">
            <router-link tag="a" class="mdl-navigation__link" :to="{name: 'metrics'}">
              Metrics
            </router-link>
            <router-link tag="a" class="mdl-navigation__link" :to="{name: 'devices'}">
              Devices
            </router-link>
          </nav>
        </div>
      </header>
    </div>
    <main>
      <div>
        <router-view class="view" :properties="properties" :devices="devices"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import 'clientjs';
import io from 'socket.io-client';
import { remove } from 'lodash';
import acquireIdForBrowser from './services/localstorage';

const socket = io('localhost:5000');

/* eslint-disable no-new */
export default {
  data() {
    return {
      socket,
      client: new window.ClientJS(),
      devices: [],
    };
  },
  created() {
    const id = acquireIdForBrowser(this.properties.getFingerprint);
    this.socket.emit('newClient', { hash: id, ...this.properties });

    this.socket.on('devices', (devices) => {
      this.devices = devices;
    });

    this.socket.on('newDevice', (device) => {
      this.devices.push(device);
    });

    this.socket.on('removeDevice', (deviceHash) => {
      remove(this.devices, d => d.hash === deviceHash);
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
};
</script>

<style scoped>
</style>
