<template>
  <div v-bind:style="{width: divW, height: divH}">
    <img class="imgClass" src="../../assets/iii.png" v-bind:style="{width: w+'px', height:h+'px'}"/>
    <span>{{username}}</span>
  </div>
</template>
<script>
  export default{
    name: 'account',
    data: function () {
      return {
        w: 60,
        h: 60,
        username: '张三'
      }
    },
    computed: {
      divW: function () {
        return (this.w + 80) + 'px'
      },
      divH: function () {
        return (this.h + 100) + 'px'
      }
    }
  }
</script>
<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #424242;
  }

  span{
    font-family: "Helvetica","Arial",sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 16px;
    color: #eceff1 !important;
  }

  .imgClass {
    margin-top: 30px;
    border-radius: 50%;
  }
</style>
