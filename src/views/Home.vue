<template>
  <div class="container">
    <Headline title="WEBGL DATA VISUALIZATION" />
    <Border :position="cardPosition">
      <Card3D />
    </Border>
    <Border :position="mapPosition">
      <QuickStart />
    </Border>
    <Border :position="radarPosition">
      <RadarEffect />
    </Border>
    <Border :position="motionPosition">
      <Motion />
    </Border>
    <Border :position="testPosition">
      <GlobalMap />
    </Border>
  </div>
</template>

<script setup>
  import { defineAsyncComponent, reactive } from 'vue';

  const Headline = defineAsyncComponent(() => import('../components/Headline.vue'));
  const Card3D = defineAsyncComponent(() => import('../components/Card3D.vue'));
  const Motion = defineAsyncComponent(() => import('../components/Motion.vue'));
  const GlobalMap = defineAsyncComponent(() => import('../components/GlobalMap.vue'));
  const RadarEffect = defineAsyncComponent(() => import('../components/RadarEffect/dom.vue'));
  const QuickStart = defineAsyncComponent(() => import('../components/QuickStart/index.vue'));
  const Border = defineAsyncComponent(() => import('../components/Border.vue'));

  const cardPosition = reactive({
    position:'absolute',
    left: "20px", 
    top: "60px",
    width: '400px',
    height: '400px'
  })
  const mapPosition = reactive({
    position:'absolute',
    left: "440px", 
    top: "60px",
    width: '400px',
    height: '400px'
  });
  const radarPosition = reactive({
    position:'absolute',
    left: "860px", 
    top: "60px",
    width: '400px',
    height: '400px'
  });
  const testPosition = reactive({
    position:'absolute',
    left: "20px", 
    top: "480px",
    width: '400px',
    height: '400px'
  });
  const motionPosition = reactive({
    position:'absolute',
    left: "440px", 
    top: "480px",
    width: '400px',
    height: '400px'
  });
</script>

<style scoped lang="less">
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    background: #0C1439;
  }
</style>
