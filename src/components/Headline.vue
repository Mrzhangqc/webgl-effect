<template>
  <div class="headline">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  props: ['title']
}
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