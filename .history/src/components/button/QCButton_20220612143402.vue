<template>
  <button class="btn-cta"><slot>{{ text }}</slot></button>
</template>


<script lang="ts">
export default {
  name: "QCButton", // vue component name
  props: {
    text: {
      type: String,
      default: "按 钮"
    }
  },
  data() {return{}}
};
</script>

<style>











.btn-cta {
  position: relative;
  padding: 15px 24px;
  border-radius: 4px;
  background-color: #1976d2;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.15), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-size: 18px;
  outline: 0;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  transition: background-color .25s;
}
.btn-cta:hover {
  background-color: #276aac;
}

.btn-cta::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle, #ccc 10%, transparent 10.1%);
  transform: scale(10);
  opacity: 0;
  transition: all .6s;
}
.btn-cta:active::after {
  transform: scale(0);
  opacity: .5;
  transition: 0s;
}
</style>