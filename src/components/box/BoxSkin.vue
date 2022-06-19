<template>
  <div class="box-skin" :class="type? 'box-skin--'+type: ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BoxSkin',
  props: {
    type: {
      validator: function (value) {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    }
  }
}
</script>
<style lang="scss" scoped>

$border-width-base: 1Px !default;
$border-style-base: solid !default;
$border-color-base: #E5E5E5;
$border-base: $border-width-base $border-style-base $border-color-base !default;

@include b(box-skin) {
  background-color: #FFFFFF;
  @include m(top) {
    border-top: $border-base;
  }
  @include m(bottom) {
    border-bottom: $border-base;
  }
}
</style>