<template>
  <div class="app">
    <QCHeader class="app__header">
      <a href="https://cn.vuejs.org"  target="_blank">
        <QCBImgeBox class="app__header--leftlogo" image="../public/vue.jpeg" />
      </a>
      <a href="https://github.com/copperlib/qcui-vue"  target="_blank">
        <QCBImgeBox class="app__header--rightlogo" image="../public/github.png" />
      </a>
    </QCHeader>
    <QCTabs>
      <template name="tab1">
        <div class="tab-title">GRID</div>
      </template>
      <QCTab title-slot="tab1">
        <QCLayout class="app__layout">
          <QCContent class="app__layout--content">
            <QCCardF :scourcecode="scgrid" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <h4>GRID基本使用(通过基础的 24 分栏，迅速简便地创建布局。)</h4>
                <div class="card-main__title--fix">
                  Layout 组件提供了 24列栅格，通过在 Col 上添加 span
                  属性设置列所占的宽度百分比。此外，添加 offset
                  属性可以设置列的偏移宽度，计算方式与 span 相同。
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCRow class="card-main__row">
                  <QCCol span="8" class="card-main__row--col1">span: 8</QCCol>
                  <QCCol span="8" class="card-main__row--col2">span: 8</QCCol>
                  <QCCol span="8" class="card-main__row--col3">span: 8</QCCol>
                </QCRow>
                <br /><br />
                <QCRow>
                  <QCCol span="4" class="card-main__row--col1">span: 4</QCCol>
                  <QCCol span="10" offset="4" class="card-main__row--col3"
                    >offset: 4, span: 10</QCCol
                  >
                </QCRow>
                <br /><br />
                <QCRow>
                  <QCCol offset="12" span="12" class="card-main__row--col1"
                    >offset: 12, span: 12</QCCol
                  >
                </QCRow>
              </div>
            </QCCardF>
            <QCCardF :scourcecode="scgrid2" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <h4>设置列元素间距</h4>
                <div class="card-main__title--fix">
                  通过 gutter 属性可以设置列元素之间的间距，默认间距为 0。
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCRow class="card-main__row" gutter="60">
                  <QCCol span="8" class="card-main__row--col1">span: 8</QCCol>
                  <QCCol span="8" class="card-main__row--col2">span: 8</QCCol>
                  <QCCol span="8" class="card-main__row--col3">span: 8</QCCol>
                </QCRow>
              </div>
            </QCCardF>
            <QCCardF :scourcecode="scgrid3" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <h4>对齐方式</h4>
                <div class="card-main__title--fix">
                  通过 justify 属性可以设置主轴上内容的对齐方式，等价于 flex
                  布局中的 justify-content 属性。
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCRow class="card-main__row" justify="center">
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                </QCRow>

                <QCRow class="card-main__row" justify="end">
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                </QCRow>

                <QCRow class="card-main__row" justify="space-between">
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                </QCRow>

                <QCRow class="card-main__row" justify="space-around">
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
                  <QCCol span="6" class="card-main__row--col1">span: 6</QCCol>
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
                <QCButton class="card-main__item--styles"
                  >我的第一个按钮</QCButton
                >
                &nbsp;&nbsp;&nbsp;
                <QCButton class="card-main__item--styles">水波纹按钮</QCButton>
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
                <QCInputTitle
                  style="width: 230px"
                  name="title"
                  placeholder="输入标题"
                >
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
        <div class="tab-title">IMAGE</div>
      </template>
      <QCTab title-slot="tab4">
        <QCLayout class="app__layout">
          <QCContent class="app__layout--content">
            <QCCardF :scourcecode="scimage" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <div>
                  <span>图片BOX基本使用</span>
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCBImgeBox
                  type="top"
                  style="height: 180px; width: 320px"
                  image="https://img2.woyaogexing.com/2022/06/11/3301c60daddc7b6d!400x400.jpg"
                >
                </QCBImgeBox>
              </div>
            </QCCardF>
          </QCContent>
        </QCLayout>
      </QCTab>

      <template name="tab5">
        <div class="tab-title">TABS</div>
      </template>
      <QCTab title-slot="tab5">
        <QCLayout class="app__layout" horizontal>
          <QCContent class="app__layout--content">
            <QCCardF :scourcecode="sctabs" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <h4>选项卡示例1</h4>
                <div class="card-main__title--fix">
                  这是使用 Tabs 组件的最基本方式。
                  选项卡列表将显示在顶部，选项卡的名称来自每个选项卡组件的标题属性。
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCTabs class="Tab-exp1">
                  <QCTab title="Tab 1">
                    <h3>This is Tab 1</h3>
                  </QCTab>
                  <QCTab title="Tab 2">
                    <h3>This is Tab 2</h3>
                  </QCTab>
                </QCTabs>

                <QCBoxSkin type="bottom" class="card-main__title">
                  <h4>选项卡示例2</h4>
                  <div class="card-main__title--fix">
                    此示例显示，如果需要，可以使用自己的图标完全自定义选项卡列表项。由于没有导入相关依赖暂不提供
                  </div>
                </QCBoxSkin>
                <QCTabs>
                  <template name="config">
                    <div class="tab-title">
                      <i class="ri-settings-3-fill" aria-hidden="true"></i>
                      Config
                    </div>
                  </template>
                  <QCTab title-slot="config">
                    <h3>This is a config tab</h3>
                  </QCTab>
                  <QCTab title="Tab 2">
                    <h3>This is Tab 2</h3>
                  </QCTab>
                </QCTabs>

                <QCBoxSkin type="bottom" class="card-main__title">
                  <h4>选项卡示例3</h4>
                  <div class="card-main__title--fix">
                    底部显示选项卡列表项 reverse Tabs 组件上
                  </div>
                </QCBoxSkin>
                <QCTabs reverse>
                  <template name="tab1">
                    <div class="tab-title">
                      <i class="ri-settings-3-fill" aria-hidden="true"></i>
                      Config
                    </div>
                  </template>
                  <template name="tab2">
                    <div class="tab-title">
                      <i class="ri-settings-3-fill" aria-hidden="true"></i>
                      Tab 2
                    </div>
                  </template>
                  <QCTab title-slot="tab1">
                    <h3>This is a config tab</h3>
                  </QCTab>
                  <QCTab title-slot="tab2">
                    <h3>This is Tab 2</h3>
                  </QCTab>
                </QCTabs>
              </div>
            </QCCardF>
            <QCCardF :scourcecode="sctabs1" class="card-main">
              <QCBoxSkin type="bottom" class="card-main__title">
                <h4>动态生成选项卡</h4>
                <div class="card-main__title--fix">
                  此示例显示了从数组生成的选项卡列表。 这可用于动态生成选项卡
                </div>
              </QCBoxSkin>
              <div class="card-main__item">
                <QCTabs>
                  <template v-for="(i, index) in dynamicTabs" :key="index">
                    <div class="tab-title" :name="`tab-exp7-${i}`">
                      <i class="ri-settings-3-fill" aria-hidden="true"></i>
                      Tab {{ i }}
                    </div>
                  </template>
                  <QCTab
                    v-for="(i, idx) in dynamicTabs"
                    :key="idx"
                    :title-slot="`tab-exp7-${i}`"
                  >
                    <h3>This is Tab {{ i }}</h3>
                  </QCTab>
                </QCTabs>
              </div>
            </QCCardF>
          </QCContent>
        </QCLayout>
      </QCTab>
    </QCTabs>
    <QCFooter style="border: 1px; background: rgb(12, 170, 46); height: 130px"
      >我是底部</QCFooter
    >
  </div>
</template>


<script lang="ts">
import { ref, reactive } from "vue";
import { sourcecode } from "./sourcecode.js";
export default {
  name: "App",
  setup() {
    const visibility = ref(false);
    const sourceData = reactive(sourcecode);
    const toggle = () => {
      visibility.value = !visibility.value;
    };
    return {
      dynamicTabs: [1, 2, 3],
      visibility,
      toggle,
      ...sourceData,
    };
  },
};
</script>
<style lang="scss" scoped>
$max-width: 1200px;

@include b(app) {
  max-width: $max-width;
  margin-left: calc(50vw - 600px);
  //margin-top: 50px;
  position: relative;
  @media (max-width: $max-width) {
    margin-left: 0;
  }
  @include e(layout) {
    height: 850px;
    width: 100%;
    @include m(content) {
      overflow-y: auto;
      //margin-top: 10px;
      //margin-bottom: 10px;
    }
  }
  @include e(header) {
    width: 100%;
    height: 120px;
    // background: rgb(235, 88, 112);
    @include m(leftlogo) {
      display: inline-block;
      float: left;
      height: 80px;
      width: 80px;
      margin-top: 20px;
      margin-left: 45px;
    } 
     @include m(rightlogo) {
       display: inline-block;
       float: right;
       height: 98px;
       width: 98px;
      margin-top: 20px;
       margin-right: 45px;
     } 
  }
}

@include b(card-main) {
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  @include e(row) {
    margin-top: 20px;
    @include m(col1) {
      border-radius: 5px;
      background: rgb(147, 185, 255);
    }
    @include m(col2) {
      border-radius: 5px;
      background: rgb(235, 88, 112);
    }
    @include m(col3) {
      border-radius: 5px;
      background: rgb(247, 209, 88);
    }
  }
  @include e(item) {
    margin-top: 10px;
    margin-bottom: 10px;
    @include m(styles) {
      background: rgb(147, 185, 255);
    }
  }
  @include e(title) {
    @include m(fix) {
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>