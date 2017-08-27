<template>
  <div class="menuLayout">
    <ul class="navigation">
      <li v-for="menu in data">
        <div class="menuItem">
          <a class="menuItemA" href="javascript:void(0);" @click="menu.state = !menu.state">{{menu.type}}</a>
          <img src="../../assets/logo.png" v-if="menu.subList.length"
               v-bind:style="{width: '24px',height: '24px','margin-right':'20px',transition: 'transform .2s', transform: menu.state ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}"/>
        </div>
        <ul class="subMenu" v-bind:style="{height: menu.state ? menu.subList.length*50+'px':0}">
          <router-link class="menuItemAa" v-for="item in menu.subList" :key="item" :to="item.path">{{item.name}}
          </router-link>
          <!--<a class="menuItemAa" v-for="item in menu.subList" href="javascript:void(0);" @click="clickItem(item)">{{item}}</a>-->
        </ul>
      </li>
    </ul>
    <!-- 平移动画demo示例-->
    <!--<img src="../../assets/logo.png"-->
    <!--v-bind:style="{transition: '0.3s ease', transform: menuClass ? 'translate(0,30px)' : 'translate(0,-30px)'}"/>-->
    <!--</img>-->
  </div>
</template>
<script>
  export default{
    name: 'menu',
    data: function () {
      return {
        showUL: true,
        data: [
          {
            type: '首页',
            state: true,
            subList: [
              {name: 'Android', path: 'android'},
              {name: 'Wear', path: 'wear'},
              {name: 'TV', path: 'tv'},
              {name: 'Things', path: 'things'}
            ]
          },
          {
            type: '开发',
            state: false,
            subList: [
              {name: '培训', path: 'train'},
              {name: 'API', path: 'api'},
              {name: '参考', path: 'reference'},
              {name: 'Android Studio', path: 'as'}
            ]
          },
          {
            type: '分发',
            state: false,
            subList: [
              {name: 'Google Play', path: 'googleplay'},
              {name: '工具', path: 'tool'},
              {name: '控制台', path: 'console'}
            ]
          },
          {type: '关于', state: false, subList: []}
        ],
        menuClass: true
      }
    },
    methods: {
      clickItem: function (item) {
        this.$emit('menuclick', item)
      }
    }
  }
</script>
<style>
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
    display: flex;
    bottom: 0;
    flex-direction: column;
    margin: 0;
    background-color: #EFEFEF;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2);
  }

  .navigation {
    padding: 16px 0 0 0;
    list-style-type: none;
    background-color: #EFEFEF;
  }

  .menuItem {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #EFEFEF;
    /*z-index: 2;*/
    /*position: relative;*/
  }

  .subMenu {
    position: relative;
    background-color: #fff;
    padding: 0;
    /*z-index: 1;*/
    overflow: auto;
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
  }

  .menuItemI {
    background-image: url("../../assets/sprite_2x.png");
    background-size: 36px 900px;
  }
</style>
