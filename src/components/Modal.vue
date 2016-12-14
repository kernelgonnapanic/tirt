<template>
 <div class="modal mdl-dialog">
   <div class="mdl-dialog__content">
     <div class="row title">
       <div class="first-column">Property</div>
       <div class="second-column">Value</div>
       <div class="close" v-on:click="closeModal">
        <i class="material-icons">close</i>
       </div>
     </div>
     <div class="row" v-for="(val, key) in data">
       <div class="first-column">{{key}}</div>
       <div class="second-column">{{val}}</div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['data'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  background-color: white;
  z-index: 100;
  overflow-y: scroll;
}
.title {
  font-size: 18px;
  border-bottom: 1px solid rgba(0,0,0,.54);
  margin-bottom: 10px;
}
.row {
  display: flex;
}
.first-column {
  flex-basis: 200px;
}
.second-column {
  flex-basis: 400px;
}
.close {
  cursor: pointer;
}
</style>
