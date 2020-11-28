<template>
  <div class="border-decoration">
    <span 
      :class="`border-${line}`"
      v-for="line in [1, 2, 3, 4]"
      :key="line"
    ></span>
  </div>
</template>
<style lang="less" scoped>
  .border-decoration{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border: 1px solid #3867A9;

    span{
      position: absolute;
      border: 1px solid #35F5FD;
      width: 10px;
      height: 10px;
    }
    .border-1{
      top: -1px;
      left: -1px;
      border-right: none;
      border-bottom: none;
    }
    .border-2{
      top: -1px;
      right: -1px;
      border-left: none;
      border-bottom: none;
    }
    .border-3{
      bottom: -1px;
      left: -1px;
      border-top: none;
      border-right: none;
    }
    .border-4{
      bottom: -1px;
      right: -1px;
      border-top: none;
      border-left: none;
    }
  }
</style>