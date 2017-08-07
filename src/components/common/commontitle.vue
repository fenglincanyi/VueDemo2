<template>
  <div class="title-container">
    <a class="menuIcon" href="javascript:void(0);" @click="handleMenu">
    <span class="dac-nav-hamburger">
      <span class="dac-nav-hamburger-top"></span>
      <span class="dac-nav-hamburger-mid"></span>
      <span class="dac-nav-hamburger-bot"></span>
    </span>
    </a>
    <!--<span class="title-font">{{titleStr}}</span>-->
    <div style="width: 193px;display: flex; align-items: center;border-right: 1px solid rgba(0, 0, 0, 0.1);">
      <img src="../../assets/iii.png" style="width: 50px; height: 50px; border-radius: 50%"/>
      <span class="nameClass">{{username}}</span>
    </div>
    <div class="titleClass">{{titleStr}}</div>
    <!--搜索、退出-->
  </div>
</template>
<script>
  export default{
    name: 'commontitle',
    data: function () {
      return {
        titleStr: '',
        username: '张三'
      }
    },
    methods: {
      handleMenu: function () {
        this.$emit('menuShow', 'menu显示隐藏')
      }
    },
    created: function () {
      this.titleStr = this.$route.path.replace('/', '')
    }
  }
</script>
<style>

  .nameClass {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding-left: 20px;
    margin-left: 20px;
    text-align: center;
    /*单行文本 打点显示*/
    display: block;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 20px;
    -o-text-overflow: ellipsis; /* Opera */
    text-overflow: ellipsis; /* IE, Safari (WebKit) */
    color: #eceff1 !important;
  }

  .menuIcon {
    color: -webkit-link;
    cursor: auto;
    text-decoration: underline;
  }

  .titleClass {
    margin-left: 36px;
    line-height: 64px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 20px;
    text-transform: capitalize;
    color: #fff;
  }

  .title-container {
    width: 100%;
    height: 64px;
    margin: 0;
    padding-right: 40px;
    background-color: #6ab344;
    display: flex;
    flex-direction: row;
    /*justify-content: center;*/
    /*align-items: center;*/
    /*阴影*/
    vertical-align: middle;
    box-shadow: 2px 5px 6px #ddd;
    box-sizing: border-box;
  }

  .dac-nav-hamburger {
    display: inline-block;
    float: left;
    height: 15px;
    padding: 22px 20px;
    width: 18px;
  }

  .dac-nav-hamburger-top, .dac-nav-hamburger-mid, .dac-nav-hamburger-bot {
    background: rgba(0, 0, 0, 0.4);
    display: block;
    height: 2px;
    margin: 3px 0 0;
    opacity: .5;
    width: 100%;
  }

  .title-font {
    font-family: 'Roboto', 'Helvetica', sans-serif;
    font-size: 20px;
    color: #ffffff;
    /*首字母大写*/
    text-transform: capitalize;
  }
</style>
