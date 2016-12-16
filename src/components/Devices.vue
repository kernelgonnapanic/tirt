<template>
 <main>
   <device  v-for="(item, key) in devices"
            v-on:selected="openModal"
            :idx="key"
            :data="item">
   </device>
   <modal v-if="modalOpened"
          :data="selectedItem"
          v-on:closeModal="closeModal">
        </modal>
 </main>
</template>

<script>
import Device from './Device';
import Modal from './Modal';

export default {
  name: 'devices',
  props: ['devices', 'properties'],
  components: {
    Device,
    Modal,
  },
  methods: {
    openModal(idx) {
      console.log('open modal');
      this.modalOpened = true;
      this.selectedItem = this.devices[idx];
    },
    closeModal() {
      this.modalOpened = false;
      this.selectedItem = null;
    },
  },
  data() {
    return {
      modalOpened: false,
      selectedItem: null,
    };
  },
};
</script>

<style scoped>
  main {
    padding-top: 85px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
</style>
