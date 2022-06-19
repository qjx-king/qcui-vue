<template>
  <div class="aside">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Aside",
};
</script>
<style lang="scss" scoped>
@include b(aside) {
  overflow: auto;
  flex-shrink: 0;
}
</style>