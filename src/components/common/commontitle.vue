<template>
  <div class="title-container">
    <span class="title-font">{{titleStr}}</span>
  </div>
</template>
<script>
  export default{
    name: 'commontitle',
    data: function () {
      return {
        titleStr: ''
      }
    },
    created: function () {
      this.titleStr = this.$route.path.substr(1, this.$route.path.length - 1)
    }
  }
</script>
<style>
  .title-container {
    height: 64px;
    margin: 0;
    padding: 0 40px 0 40px;
    background-color: #6ab344;
    display: flex;
    flex-direction: row;
    align-items: center;
    /*阴影*/
    box-shadow: 2px 5px 6px #ddd;
    box-sizing: border-box;
  }

  .title-font {
    font-family: 'Roboto', 'Helvetica', sans-serif;
    font-size: 20px;
    color: #ffffff;
    /*首字母大写*/
    text-transform: capitalize;
  }
</style>
