<template>
  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Property</th>
        <th class="mdl-data-table__cell--non-numeric">Value</th>
      </tr>
    </thead>
    <tbody v-for="(val, key) in properties">
      <tr>
        <td class="mdl-data-table__cell--non-numeric">{{key}}</td>
        <td class="mdl-data-table__cell--non-numeric">{{val}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'metrics',
  props: ['socket', 'properties'],
};
</script>

<style scoped>
.mdl-data-table {
  top: 65px;
}
</style>
