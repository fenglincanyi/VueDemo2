<template>
  <div class="title-container">
    <a class="menuIcon" href="javascript:void(0)" @click="handleMenu">
    <span class="dac-nav-hamburger">
      <span class="dac-nav-hamburger-top"></span>
      <span class="dac-nav-hamburger-mid"></span>
      <span class="dac-nav-hamburger-bot"></span>
    </span>
    </a>
    <!--<span class="title-font">{{titleStr}}</span>-->
    <div
      style="width: 173px;display: flex; align-items: center;border-right: 1px solid rgba(0, 0, 0, 0.1);margin-left: 20px">
      <img src="../../assets/iii.png" style="width: 50px; height: 50px; border-radius: 50%"/>
      <span class="nameClass">{{username}}</span>
    </div>
    <div class="titleClass">{{titleStr}}</div>


    <a href="javascript:void(0)" @click="settingShow = !settingShow">
      <img class="settingClass" src="../../assets/settings.png"/>
    </a>
    <transition name="setting-content">
      <ul v-show="settingShow" class="settingMenu">
        <li class="itemClass" v-for="(item, i) in settingData" @click="selectItem(i)">{{item}}</li>
      </ul>
    </transition>


  </div>
</template>
<script>
  export default{
    name: 'commontitle',
    data: function () {
      return {
        titleStr: '',
        username: '张三',
        settingShow: false,
        settingData: ['设置', '退出']
      }
    },
    methods: {
      handleMenu: function () {
        this.$emit('menuShow', 'menu显示隐藏')
      },
      selectItem: function (index) {
        alert(index)
        this.settingShow = !this.settingShow
      }
    },
    created: function () {
      this.titleStr = this.$route.path.replace('/', '')
    }
  }
</script>
<style scoped>

  li:hover {
    background-color: #eeeeee;
  }

  .setting-content-active, .setting-content-leave-active {
    transition: opacity .5s
  }

  .setting-content-enter, .setting-content-leave-to {
    opacity: 0;
  }

  .nameClass {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding-left: 20px;
    margin-left: 10px;
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
    flex: 1;
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
    align-items: center;
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

  .settingClass {
    width: 24px;
    height: 24px;
    display: block;
  }

  .settingMenu {
    margin: 5px 0;
    border: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12);
    padding: 6px 0;
    z-index: 10;
    position: absolute;
    top: 50px;
    background-color: #fff;
    min-width: 100px;
    right: 4px
  }

  .itemClass {
    list-style: none;
    line-height: 36px;
    padding: 0 10px;
    margin: 0;
    cursor: pointer;
    font-weight: 500;
    color: gray;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
  }

  .title-font {
    font-family: 'Roboto', 'Helvetica', sans-serif;
    font-size: 20px;
    color: #ffffff;
    /*首字母大写*/
    text-transform: capitalize;
  }
</style>
