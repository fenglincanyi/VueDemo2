<template>
  <div class="menuLayout">

    <ul class="navigation">
      <!--<transition-group name="slide">-->
      <li v-for="menu in data">
        <div class="menuItem">
          <a class="menuItemA" href="javascript:void(0);" @click="handleOpen(menu)">{{menu.type}}</a>
          <img src="../../assets/logo.png"
               v-bind:style="{width: '24px',height: '24px','margin-right':'20px',transition: 'transform .2s', transform: menu.state ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}"/>
        </div>
        <!--<i v-bind:style="{'background-image':'../../assets/logo.png',width: '24px',height: '24px',-->
        <!--'margin-right':'20px',transition: 'transform .2s', transform: menuClass ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}"></i>-->
        <ul ref="sub1" class="subMenu" v-bind:style="{height: menu.state ? menu.subList.length*50+'px':0}">
          <a class="menuItemAa" v-for="item in menu.subList" href="commontitle.vue">{{item}}</a>
        </ul>
      </li>


      <!--<transition name="fade">-->
      <!--</transition>-->

      <!--<li class="menuItem">-->
      <!--<a class="menuItemA" href="commontitle.vue">设计</a>-->
      <!--<i class="menuItemI"></i>-->
      <!--</li>-->
      <!--<li class="menuItem" style="align-items: flex-start;">-->
      <!--<a class="menuItemA" href="commontitle.vue">开发</a>-->
      <!--<i class="menuItemI"></i>-->
      <!--</li>-->
      <!--</transition-group>-->
    </ul>


    <!-- 平移动画demo示例-->
    <!--<img src="../../assets/logo.png"-->
    <!--v-bind:style="{transition: '0.3s ease', transform: menuClass ? 'translate(0,30px)' : 'translate(0,-30px)'}"/>-->
    <!--<img/>-->
  </div>
</template>
<script>
  export default{
    name: 'menu',
    data: function () {
      return {
        showUL: true,
        subMenuHeight: 0,
        data: [
          {type: '首页', state: true, subList: ['Android', 'Wear', 'TV', 'Auto', 'Things']},
          {type: '开发', state: false, subList: ['培训', 'API', '参考', 'Android Studio']},
          {type: '分发', state: false, subList: ['Google Play', 'Play 控制台', '最佳做法']}
        ],
        menuClass: true
      }
    },
    methods: {
      handleOpen: function (menu) {
        menu.state = !menu.state
//        this.menuClass = !this.menuClass
      }
    },
    mounted: function () {
//      this.subMenuHeight = this.$refs.sub1.style.height
//      alert(this.$refs.sub1.offsetHeight)
    }
  }
</script>
<style>

  .fade-enter-active, .fade-leave-active {
    transition: .5s ease
  }

  .fade-enter, .fade-leave-to {
    transform: translate(0px, 100px);
  }

  /*.slide {*/
  /*transition: all .5s ease-in-out;*/
  /*overflow: hidden;*/
  /*max-height: 100px;*/
  /*}*/

  /*.slide-enter,*/
  /*.slide-leave-active {*/
  /*max-height: 0;*/
  /*}*/

  a {
    color: #039BE5;
    text-decoration: none;
    /*字体灰阶平滑*/
    -webkit-font-smoothing: antialiased;
  }

  a:hover {
    color: #aaa
  }

  .menuLayout {
    width: 250px;
    height: 100%;
    display: flex;
    bottom: 0;
    flex-direction: column;
    margin: 0;
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width:5px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius:15px;
    background:rgba(0,0,0,0.2);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(255,0,0,0.4);
  }

  .navigation {
    padding: 16px 0;
    height: 100%;
    list-style-type: none;
    background: #424242;
  }

  .menuItem {
    list-style-type: none;
    margin: 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #424242;
    /*z-index: 2;*/
    position: relative;
  }

  .subMenu {
    position: relative;
    background-color: #fff;
    padding: 0;
    /*z-index: 1;*/
    overflow: hidden;
    display: block;
    transition: height .3s;
    white-space: nowrap;
  }

  .menuItemA {
    display: block;
    font-size: 14px;
    padding: 0 0 0 20px;
    flex: 1;
    /*链接没有下划线*/
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
  }

  .menuItemAa {
    color: #444;
    display: block;
    font-size: 14px;
    padding: 0 0 0 36px;
    /*链接没有下划线*/
    background-color: #fff;
    text-decoration: none;
    height: 48px;
    flex: 1;
    line-height: 48px;
    letter-spacing: .24px;
    /*z-index: -1;*/
  }

  .menuItemI {
    background-image: url("../../assets/sprite_2x.png");
    background-size: 36px 900px;
  }
</style>
