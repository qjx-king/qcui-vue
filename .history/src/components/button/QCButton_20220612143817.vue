<template>
  <button class=" btn-cta ripple">
    <slot>{{ text }}</slot>
  </button>
</template>


<script lang="ts">
export default {
  name: "QCButton", // vue component name
  props: {
    text: {
      type: String,
      default: "按 钮",
    },
  },
  data() {
    return {};
  },
};
</script>

<style>



.ripple {
  position: relative;
  overflow: hidden;
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.5s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}


</style>