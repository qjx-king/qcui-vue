<template>
  <div class="app">
    <QCTabs direction="vertical">
      <template name="tab1">
        <div class="tab-title">
          GRID
        </div>
      </template>
      <QCTab title-slot="tab1">
        <QCLayout class="app__layout">
          <QCContent class="app__layout--content">
            
            <QCCardF :scourcecode="scgrid" class="card-main" >

              <QCBoxSkin type="bottom" class="card-main__title">
                    <div>
                      <span>GRID基本使用</span>
                    </div>
              </QCBoxSkin>
              <div class="card-main__item" >
              <QCRow class="card-main__row" gutter="20">
                <QCCol span="8" class="card-main__row--col1">span: 8</QCCol>
                <QCCol span="8" class="card-main__row--col2">span: 8</QCCol>
                <QCCol span="8" class="card-main__row--col3">span: 8</QCCol>
              </QCRow>
                </div>
            </QCCardF>
           
          </QCContent>
        </QCLayout>
      </QCTab>

      <template name="tab2">
        <div class="tab-title">button</div>
      </template>
      <QCTab title-slot="tab2">
        <QCLayout class="app__layout">
          <QCContent class="app__layout--content">
                <QCCardF :scourcecode="scbutton" class="card-main">
                  <QCBoxSkin type="bottom">
                    <div>
                      <span>BUTTON基本使用</span>
                    </div>
                  </QCBoxSkin>
                    <div class="card-main__item">
                      <QCButton class="card-main__item--style">我的第一个按钮</QCButton>
                      &nbsp;&nbsp;&nbsp;
                      <QCButton class="card-main__item--style">水波纹按钮</QCButton>
                    </div>
                </QCCardF>
          </QCContent>
        </QCLayout>
      </QCTab>

      <template name="tab3">
        <div class="tab-title">input</div>
      </template>
       <QCTab title-slot="tab3">
          <QCLayout class="app__layout">
            <QCContent class="app__layout--content">
              <QCCardF :scourcecode="scinput" class="card-main">
                <QCBoxSkin type="bottom">
                    <div>
                      <span>INPUT基本使用</span>
                    </div>
                  </QCBoxSkin>
                  <div class="card-main__item">
                    <QCInput placeholder="Please input"></QCInput>
                  </div>
              </QCCardF>
               <QCCardF :scourcecode="scinput1" class="card-main">
                <QCBoxSkin type="bottom">
                    <div>
                      <span>INPUT标题使用</span>
                    </div>
                  </QCBoxSkin>
                  <div class="card-main__item">
                    <QCInputTitle style="width:230px"  name="title" placeholder="输入标题" >
                      标题
                    </QCInputTitle>
                  </div>
              </QCCardF>
              <QCCardF :scourcecode="scinput2" class="card-main">
                <QCBoxSkin type="bottom">
                    <div>
                      <span>INPUT文本域使用</span>
                    </div>
                  </QCBoxSkin>
                  <div class="card-main__item">
                    <QCTextarea></QCTextarea>
                  </div>
              </QCCardF>
            </QCContent>
          </QCLayout>
       </QCTab>

      <template name="tab4">
        <div class="tab-title">
          IMAGE
        </div>
      </template>
      <QCTab title-slot="tab4">
        <QCLayout class="app__layout">
          <QCContent class="app__layout--content">
             <QCCardF :scourcecode="scimage" class="card-main" >
              <QCBoxSkin type="bottom" class="card-main__title">
                    <div>
                      <span>图片BOX基本使用</span>
                    </div>
              </QCBoxSkin>
              <div class="card-main__item" >
              <QCBImgeBox
                type="top"
                style="height:180px; width:320px"
                image="https://img2.woyaogexing.com/2022/06/11/3301c60daddc7b6d!400x400.jpg"
                >
                </QCBImgeBox>
              </div>
            </QCCardF>           
          </QCContent>
        </QCLayout>
      </QCTab>
    </QCTabs>
  </div>
</template>


<script lang="ts">
import { ref,toRefs } from "vue";
import { sourcecode } from './sourcecode.js';
export default {
  name: "App",
  
  setup() {
    const visibility = ref(false);
    const sourceData = toRefs(sourcecode);
    const toggle = () => {
      visibility.value = !visibility.value;
    };
    return {
      visibility,
      toggle,
      ...sourceData
    };
  },
};
</script>
<style lang="scss" scoped>
$max-width: 1200px;
.tab-title{
  
}
@include b(app) {
  max-width: $max-width;
  margin-left: calc(50vw - 600px);
  margin-top: 50px;
  position: relative;
  @media (max-width: $max-width) {
    margin-left: 0;
  }
  @include e(layout) {
    height: 850px;
    width: 100%;
    @include m(content){
      overflow-y: auto;
      margin-top: 10px;
      margin-bottom: 10px; 
    }
  }
}


@include b(card-main){
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  @include e(row){
    
    @include m(col1){
      border-radius: 5px;
      background: rgb(147, 185, 255);
    }
    @include m(col2){
      border-radius: 5px;
      background: rgb(235, 88, 112);
    }
    @include m(col3){
      border-radius: 5px;
      background: rgb(247, 209, 88);
    }
  }
  @include e(item){
    margin-top: 10px;
    margin-bottom: 10px;
    @include m(style){
      background: rgb(147, 185, 255);
  }
  
  }
}
</style>