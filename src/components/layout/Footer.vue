<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
@include b(footer) {
  position: relative fixed;
  bottom: 0px;
  width: 100%;
}
</style>