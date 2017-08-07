<template>
  <router-view></router-view>
</template>
<script>
  export default{
    props: ['pageMsg'] // 接收父组件发来的消息
  }
</script>
<style>
  .contentClass {
    background-color: aqua;
  }
</style>
