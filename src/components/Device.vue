<template>
 <div class="device" :style="styleObject">
   <span>Device no {{idx + 1}}</span>
 </div>
</template>

<script>
export default {
  name: 'device',
  props: ['data', 'idx'],
  computed: {
    width() {
      const resolution = this.data.getCurrentResolution;
      console.log('resolution', resolution);
      const data = resolution.match('/(\d+)/gi');
      console.log(data);
      console.log('idx', this.idx);
    },
    styleObject() {
      return {
        width: this.width,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.device {
  width: 160px;
  height: 90px;
  background-color: #00695C;
  margin: 0 20px;
  text-align: center;
  line-height: 90px;
  border-radius: 5%;
  color: white;
}
</style>
