<template>
 <div class="device" :style="styleObject" v-on:click="setSelected">
  <span v-if="width > 100">Device no {{idx + 1}}</span>
  <span v-if="width <= 100">{{idx + 1}}</span>
  <span class="type">
    <span v-if="data.isMobile">M</span>
    <span v-if="!data.isMobile">D</span>
  </span>
 </div>
</template>

<script>
export default {
  name: 'device',
  props: ['data', 'idx'],
  methods: {
    setSelected() {
      this.$emit('selected', this.idx);
    },
  },
  computed: {
    width() {
      const resolution = this.data.getCurrentResolution;
      const match = resolution.match(/(\d+)/gi);
      return match[0] / 10;
    },
    sizes() {
      const resolution = this.data.getCurrentResolution;
      const match = resolution.match(/(\d+)/gi);
      return {
        width: `${match[0] / 10}px`,
        height: `${match[1] / 10}px`,
      };
    },
    styleObject() {
      return {
        ...this.sizes,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.device {
  background-color: #00695C;
  margin: 10px;
  text-align: center;
  border-radius: 5%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.type {
  position: absolute;
  bottom: 2px;
  left: 5px;
}
</style>
