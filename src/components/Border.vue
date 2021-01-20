<template>
  <div class="border-decoration" :style="position">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g>
        <path :d="`M0,0 L${width},0 L${width},${height} L0,${height} Z`" 
          :stroke="borderColor" stroke-width="2" fill="none"></path>
        <path :d="`
          M0,${lineWidth} L0,0 L${lineWidth},0 \ 
          M${width - 10},0 L${width},0 L${width},${lineWidth} \ 
          M${width},${height - lineWidth} L${width},${height} L${width - lineWidth},${height} \ 
          M${lineWidth},${height} L0,${height} L0,${height - lineWidth}
        `"
        :stroke="decorationColor" stroke-width="2" fill="none" />
      </g>
    </svg>
    <slot></slot>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Border',
  props: ['position'],
  setup(props) {
    const state = reactive(props.position)
    const { width, height } = toRefs(state)
    return {
      width: parseFloat(width.value),
      height: parseFloat(height.value),
      lineWidth: 10,
      borderColor: '#3867A9',
      decorationColor: '#35F5FD'
    }
  }
}
</script>
<style lang="less">
  .border-decoration{
    position: absolute;
    left: 0;
    top: 0;
    width: 400px;
    height: 400px;
    z-index: 1;
    overflow: visible;
    > svg,
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    > div {
      z-index: 2;
    }
  }
</style>