<template>
  <div class="container">
    <Headline title="WEBGL DATA VISUALIZATION"/>
    <Border :position="cardPosition"><Card3D/></Border>
    <Border :position="mapPosition"><GlobalMap /></Border>
    <Border :position="radarPosition"><RadarEffect /></Border>
    <Border :position="testPosition"><Test /></Border>
  </div>
</template>

<script>
import Headline from '../components/Headline'
import Card3D from '../components/Card3D'
import GlobalMap from '../components/GlobalMap'
import RadarEffect from '../components/RadarEffect/dom.vue'
import Test from '../components/Test'
import Border from '../components/Border'

export default {
  name: 'HelloWorld',
  components: {
    Border,
    Headline,
    Card3D,
    GlobalMap,
    RadarEffect,
    Test
  },
  data() {
    return {
      cardPosition : {
        position:'absolute',
        left: "20px", 
        top: "60px",
        width: '400px',
        height: '400px'
      },
      mapPosition: {
        position:'absolute',
        left: "440px", 
        top: "60px",
        width: '400px',
        height: '400px'
      },
      radarPosition: {
        position:'absolute',
        left: "860px", 
        top: "60px",
        width: '400px',
        height: '400px'
      },
      testPosition: {
        position:'absolute',
        left: "20px", 
        top: "480px",
        width: '1240px',
        height: '400px'
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    background: #0C1439;
  }
</style>
