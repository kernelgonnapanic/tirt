<template>
  <main>
    <span v-for="(val, key) in props">{{key}} - {{val}}</span>
  </main>
</template>

<script>
import 'clientjs';

export default {
  name: 'metrics',
  data() {
    return {
      client: new window.ClientJS(),
    };
  },
  computed: {
    props: function props() {
      return Object.keys(window.ClientJS.prototype).reduce((acc, key) => ({
        ...acc,
        [key]: this.client[key](),
      }), {});
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
