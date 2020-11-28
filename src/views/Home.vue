<template>
  <div class="container">
    <Headline title="WEBGL DATA VISUALIZATION"/>
    <Card3D :position="cardPosition"/>
    <GlobalMap :position="mapPosition"/>
    <RadarEffect :position="radarPosition"/>
  </div>
</template>

<script>
import Headline from '../components/Headline'
import Card3D from '../components/Card3D'
import GlobalMap from '../components/GlobalMap'
import RadarEffect from '../components/RadarEffect/dom.vue'

export default {
  name: 'HelloWorld',
  components: {
    Headline,
    Card3D,
    GlobalMap,
    RadarEffect
  },
  data() {
    return {
      cardPosition : {
        position:'absolute',
        left: "50px", 
        top: "60px",
        width: '400px',
        height: '400px'
      },
      mapPosition: {
        position:'absolute',
        left: "500px", 
        top: "60px",
        width: '400px',
        height: '400px'
      },
      radarPosition: {
        position:'absolute',
        left: "950px", 
        top: "60px",
        width: '400px',
        height: '400px'
      }
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
