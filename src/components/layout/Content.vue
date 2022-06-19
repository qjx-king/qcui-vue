<template>
  <main class="content">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'Content'
}
</script>
<style lang="scss" scoped>
@include b(content) {
  overflow: auto;
  flex: 1;
  overflow-y:auto;
}
</style>