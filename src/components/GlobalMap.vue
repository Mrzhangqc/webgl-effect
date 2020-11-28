<template>
  <div :style="position" class="global-map">
    <Border/>
    <div>地图</div>
  </div>
</template>
<script>
import Border from './Border'

export default {
  name:'GlobalMap',
  props: ['position'],
  components: {
    Border
  },
  data() {
    return {
      width: parseInt(this.position.width),
      height: parseInt(this.position.height),
    }
  }
}
</script>
<style lang="less" scoped>
  .global-map{
    position: absolute;
  }
</style>