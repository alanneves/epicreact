<template>
  <div class="container">
    <div class="child">Hello World</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: $color-primary;
  .child {
    color: $color-secondary;
  }
}
</style>
