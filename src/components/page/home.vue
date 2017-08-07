<template>
  <div class="wapper">
    <commontitle style="position: fixed; z-index: 3"></commontitle>
    <sidebar style="position: fixed;top: 64px;z-index: 2"></sidebar>
  </div>
</template>
<script>
  import commontitle from '../common/commontitle.vue'
  import sidebar from '../common/sidebar.vue'

  export default{
    name: 'home',
    components: {
      commontitle,
      sidebar
    }
  }
</script>
<style>
  .wapper {
    width: 100%;
    height: 100%;
  }
</style>
