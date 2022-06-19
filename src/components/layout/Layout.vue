<template>
  <section
    class="layout"
    :class="{'layout--horizontal': horizontal}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'Layout',
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(layout) {
  display: flex;
  flex-direction: column;
  
  @include m(horizontal) {
    flex-direction: row;
  }
}
</style>