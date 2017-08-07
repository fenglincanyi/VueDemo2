<template>
  <div class="wapper">
    <commontitle style="position: fixed; z-index: 3" @menuShow="handleShow"></commontitle>
    <sidebar class="sidebarClass" @menuclick="showPage" v-bind:style="{width: isShowMenu ? '250px':0}"></sidebar>
    <!--<contentlayout class="contentLayout" v-bind:style="{left: isShowMenu ? '250px':0}"-->
                   <!--:pageMsg="pageMsg"></contentlayout>-->
    <router-view class="contentLayout" v-bind:style="{left: isShowMenu ? '250px':0}"></router-view>
  </div>
</template>
<script>
  import commontitle from '../common/commontitle.vue'
  import sidebar from '../common/sidebar.vue'
  import contentlayout from '../common/contentlayout.vue'

  export default{
    name: 'home',
    data: function () {
      return {
        isShowMenu: true,
        pageMsg: ''
      }
    },
    components: {
      commontitle,
      sidebar,
      contentlayout
    },
    methods: {
      handleShow: function () {
        this.isShowMenu = !this.isShowMenu
      },
      showPage: function (item) {
        this.pageMsg = item
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

  .contentLayout {
    position: fixed;
    left: 250px;
    width: 100%;
    height: 100%;
    top: 64px;
  }
</style>
