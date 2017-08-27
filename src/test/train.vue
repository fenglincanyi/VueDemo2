<template>
  <div id="demo">
    <!--<button v-on:click="showUL = !showUL">-->
      train
    <!--</button>-->
    <!--<transition name="fade">-->
    <!--<p v-show="showUL" v-bind:style="{height: '20px', transition: '1s height ease'}">hello</p>-->
    <!--</transition>-->
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        showUL: true
      }
    }
//    methods: {
//      test: function () {
//
//        this.$refs.pp.height = 0
//      }
//    }
  }
</script>
<style>
  /*.fade-enter-active, .fade-leave-active {*/
  /*transition: .5s ease*/
  /*}*/

  .fade-enter {
    transition: 3s ease;
    height: 100px;
    /*transform: translate(0px, -100px);*/
  }

  .fade-leave {
    transition: 3s ease;
    height: 0;
  }
</style>
