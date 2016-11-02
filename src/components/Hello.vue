<template>
  <div>
    <div>
      Your browser is {{browser.name}}, {{browser.version}}!
    </div>
    <div>
      Your OS is {{os.name}}!
    </div>
  </div>
</template>

<script>
import ClientJS from 'clientjs';

const client = new ClientJS();
export default {
  name: 'hello',
  data() {
    return {
      browser: client.getBrowser(),
      os: client.getOS(),
    };
  },
};
</script>

<style scoped>
</style>
