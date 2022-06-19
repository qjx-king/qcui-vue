<template>
  <div :style="'position: relative; background: url('+image+') center; background-size: cover;'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ImgeBox',
  props: {
    image: String,
    des: String
  }
}
</script>