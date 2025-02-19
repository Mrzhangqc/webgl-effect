<template>
  <div
    class="border-decoration"
    :style="position"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g>
        <path
          :d="`M0,0 L${width},0 L${width},${height} L0,${height} Z`" 
          :stroke="borderColor"
          stroke-width="2"
          fill="none"
        />
        <path
          :d="`
          M0,${lineWidth} L0,0 L${lineWidth},0 \ 
          M${width - 10},0 L${width},0 L${width},${lineWidth} \ 
          M${width},${height - lineWidth} L${width},${height} L${width - lineWidth},${height} \ 
          M${lineWidth},${height} L0,${height} L0,${height - lineWidth}
        `"
          :stroke="decorationColor"
          stroke-width="2"
          fill="none"
        />
      </g>
    </svg>
    <slot />
  </div>
</template>
<script setup>
import { defineProps, reactive, ref, toRefs } from 'vue'
const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
});

const state = reactive(props.position);
let { width, height } = toRefs(state);
width = parseFloat(width.value);
height = parseFloat(height.value);
const lineWidth = ref(10);
const borderColor = ref('#3867A9');
const decorationColor = ref('#35F5FD')
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