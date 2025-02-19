<template>
  <div class="headline">
    <h1>{{ props.title }}</h1>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title'])
</script>
<style lang="less" scoped>
  .headline{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

    h1{
      margin: 0;
      font-size: 30px;      
      color: #fff;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, serif;
      text-shadow: 0px 1px 5px #FFF;
    }
  }
</style>