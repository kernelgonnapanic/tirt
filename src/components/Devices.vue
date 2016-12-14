<template>
 <main>
   <device v-for="(item, key) in devices" :idx="key" :data="item"></device>
 </main>
</template>

<script>
import Device from './Device';

export default {
  name: 'devices',
  components: {
    Device,
  },
  data() {
    return {
      devices: {},
    };
  },
  props: ['socket', 'properties'],
  created() {
    this.socket.emit('newClient', this.properties);
    this.socket.on('devices', (devices) => {
      console.log('devices', devices);
      this.devices = devices;
    });
  },
};
</script>

<style scoped>
  main {
    padding-top: 85px;
    display: flex;
  }
</style>
