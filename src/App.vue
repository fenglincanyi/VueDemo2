<template>
  <div id="app" style="height: 100%">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    el: '#app'
  }
</script>

<style>
  * {
    margin: 0;
  }

  body {
    height: 100%;
  }

  html {
    height: 100%;
  }


</style>
