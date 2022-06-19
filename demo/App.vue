<template>
  <div class="main">
    QCComponent
    <div class="main__item">
      <QCButton class="main__item--style">我的第一个按钮</QCButton>
      <QCButton class="main__item--style">水波纹按钮</QCButton>
    </div>
    <div class="main__item">
      <QCInput placeholder="Please input"></QCInput>
    </div>
    <div class="main__item">
      <QCTextarea></QCTextarea>
    </div>
    <br />
    <br />
    <div class="main__item">
      <QCInputTitle class="main__item--fix"  name="title" placeholder="输入标题" >
        标题
      </QCInputTitle>
    </div>
    
     <br />
    <br />
    <br />
    <div>
      <span>栅格</span>
      <QCRow class="main__row" gutter="20">
        <QCCol span="8" class="main__row--col">span: 8</QCCol>
        <QCCol span="8" class="main__row--col">span: 8</QCCol>
        <QCCol span="8" class="main__row--col">span: 8</QCCol>
      </QCRow>
    </div>
    <br />
    <br />
    <br />
    <div>
      <span>type属性控掉box的上下边框显示</span>
      <QCBoxSkin type="top"></QCBoxSkin>
    </div>
    <br />
    <br />
    <br />
    <div>
      <span>图片背景box</span>
      <QCBImgeBox
        type="top"
        class="main__image"
        image="https://img2.woyaogexing.com/2022/06/11/3301c60daddc7b6d!400x400.jpg"
      ></QCBImgeBox>
    </div>
     <br />
    <br />
    <br />
    <div>
      <span>左右布局</span>
      <QCLayout class="main__layout" style="height: 270px; width: 370px" horizontal>
        <QCAside style="background: red;  width: 70px">我是左侧</QCAside>
        <QCContent
          style="background: green; overflow-y: scroll; height: 270px"
          class="main__layout"
        >
          <div style="height: 470px">
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
          </div>
        </QCContent>
      </QCLayout>
    </div>
    <br />
    <br />
    <br />
    <div>
      <span>上下布局</span>
      <QCLayout class="main__layout" style="height: 270px; width: 370px">
        <QCHeader style="background: pink" class="main__layout"
          >我是头部</QCHeader
        >
        <QCContent
          style="background: green; overflow-y: scroll; height: 270px"
          class="main__layout"
        >
          <div style="height: 470px">
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
          </div>
        </QCContent>
        <QCFooter style="background: yellow" class="main__layout"
          >我是底部</QCFooter
        >
      </QCLayout>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script lang="ts">

</script>
  
<style>
.main {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.main__item {
  margin-top: 10px;
}
.main__item--style {
}
.main__item--fix{
   width: 250px
}
.main__row--col {
  border: 1px solid red;
}
.main__image {
  height: 200px;
  width: 300px;
}
</style>