<template>
  <button class="btn-ctaripple ">
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

.btn-cta {
  position: relative;
  padding: 15px 24px;
  border-radius: 4px;
  background-color: #1976d2;
  color: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.15), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-size: 18px;
  outline: 0;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.25s;
}
.btn-cta:hover {
  background-color: #276aac;
}

.btn-cta::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle, #ccc 10%, transparent 10.1%);
  transform: scale(10);
  opacity: 0;
  transition: all 0.6s;
}
.btn-cta:active::after {
  transform: scale(0);
  opacity: 0.5;
  transition: 0s;
}



/* 阿里点击效果 */
.ripple {
    position: relative;
/* //此处不需要设置overflow:hidden,因为after元素需要溢出显示 */
}
.ripple:focus{
    outline: none;
}

.ripple:after {
    content: "";
    display: block;
    position: absolute;
    /* //扩大伪类元素4个方向各10px */
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    pointer-events: none;
    background-color: #333;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all .3s;
}

.ripple:active:after {
    opacity: .3;
    /* //设置初始状态 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}




/* 自定义水波纹效果 */

.def--ripple {
  position: relative;
  overflow: hidden;
}

.def--ripple:after {
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

.def--ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}


</style>