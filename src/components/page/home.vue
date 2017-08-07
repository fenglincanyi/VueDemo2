<template>
  <div class="wapper">
    <commontitle style="position: fixed; z-index: 3" @menuShow="handleShow"></commontitle>
    <sidebar ref="sidebar" class="sidebarClass" v-bind:style="{width: isShowMenu ? '250px':0}"></sidebar>
  </div>
</template>
<script>
  import commontitle from '../common/commontitle.vue'
  import sidebar from '../common/sidebar.vue'

  export default{
    name: 'home',
    data: function () {
      return {
        isShowMenu: true
      }
    },
    components: {
      commontitle,
      sidebar
    },
    methods: {
      handleShow: function () {
        this.isShowMenu = !this.isShowMenu
      }
    }
  }
</script>
<style>
  .wapper {
    width: 100%;
    height: 100%;
  }

  .sidebarClass {
    position: fixed;
    top: 64px;
    z-index: 2;
    transition: width .2s;
  }
</style>
