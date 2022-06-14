<template>
  <div class="main">
    QCComponent
    <div class="main__item" >
      <QCButton class="main__item--style">我的第一个按钮</QCButton>
      <QCButton class="main__item--style">水波 按钮</QCButton>
    </div>
    <div class="main__item">
      <QCInput placeholder="Please input"></QCInput>
    </div>
    <div class="main__item">
      <QCTextarea></QCTextarea>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
.main {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.main__item{
  margin-top: 10px;
}
.main__item--style{

}
</style>