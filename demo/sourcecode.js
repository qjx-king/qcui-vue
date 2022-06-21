export const sourcecode = {
    scbutton: `<div >
    <QCButton >我的第一个按钮</QCButton>
    <QCButton >水波纹按钮</QCButton>
</div>`,
    scgrid: `<div>
    <QCRow>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>

    <QCRow>
        <QCCol span="4" >span: 4</QCCol>
        <QCCol span="10" offset="4" >offset: 4, span: 10</QCCol>
    </QCRow>

    <QCRow>
        <QCCol offset="12" span="12" >offset: 12, span: 12</QCCol>
    </QCRow>
</div>`,
    scgrid2: `<div>
    <QCRow gutter="60">
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>
</div>`,
    scgrid3: `<div>
    <QCRow justify="center">
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>
</div>

<div>
    <QCRow justify="end">
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>
</div>

<div>
    <QCRow justify="space-between">
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>
</div>

<div>
    <QCRow justify="space-around">
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
        <QCCol span="8" >span: 8</QCCol>
    </QCRow>
</div>`,
    scinput:`<div >
    <QCInput placeholder="Please input"></QCInput>
</div>`,
    scinput1:`<div>
    <QCInputTitle style="width:230px"  name="title" placeholder="输入标题" >
      标题
    </QCInputTitle>
</div>`,
    scinput2:`<div>
    <QCTextarea></QCTextarea>
</div>`,
    scimage:`<div>
    <QCBImgeBox type="top" style="height:80px width:60px" image="https://img2.woyaogexing.com/2022/06/11/3301c60daddc7b6d!400x400.jpg">
    </QCBImgeBox>
</div>`,
    sctabs:`
<!--一般选项卡-->    
<div>
    <QCTabs class="Tab-exp1">
        <QCTab title="Tab 1">
            <h3>This is Tab 1</h3>
        </QCTab>
        <QCTab title="Tab 2">
            <h3>This is Tab 2</h3>
        </QCTab>
    </QCTabs>
</div>

<!--带图标选项卡-->
<div>
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
</div>

<!--底部显示选项卡-->
<div>
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
</div>`,
    sctabs1:`
<template>
<QCTabs>
    <template v-for="(i, index) in dynamicTabs" :key="index">
        <div class="tab-title" :name="\`tab-exp7-\${i}\`">
        <i class="ri-settings-3-fill" aria-hidden="true"></i>
        Tab {{ i }}
        </div>
    </template>
    <QCTab
        v-for="(i, idx) in dynamicTabs"
        :key="idx"
        :title-slot="\`tab-exp7-\${i}\`">
        <h3>This is Tab {{ i }}</h3>
    </QCTab>
</QCTabs>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data: () => {
    return { dynamicTabs: [1, 2, 3] };
  },
});
</script>
`
  };
  