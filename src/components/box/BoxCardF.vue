<template>
  <div class="box-cardF">
    <slot> </slot>
    <QCBoxSkin class="box-cardF__boxskin" type="top"  >
      <pre class="box-cardF__source" id="source" v-show="visibility" >{{ sc }}</pre>
      <div>
        <QCButton class="box-cardF__toggle" @click="toggle">
        <span class="box-cardF____toggle--close" v-show="visibility">
            △
            <span class="box-cardF____toggle--desp">隐藏代码</span>
        </span>
        <span class="box-cardF____toggle--open" v-show="!visibility">
            ▽
            <span class="box-cardF____toggle--desp">显示代码</span>
        </span>
        </QCButton>
        </div>
    </QCBoxSkin>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"


export default {
 name:"BoxCardF",
 props: {
  scourcecode: String,
},
setup(props:any) {
    const visibility = ref(false);
    const sc=ref(props.scourcecode);
    const toggle = () => {
      visibility.value = !visibility.value;
    };
    return{
        visibility,
        sc,
        toggle
    }
}
}
</script>

<style lang='scss' scoped>
@include b(box-cardF) {
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  @include e(source){
    text-align: left;
  }
  @include e(boxskin){
    text-align: center;
  }
  @include e(toggle){
    vertical-align:middle;
    margin-top:10px;
  }
}

</style>