<template>
  <article class="geography">
    <sub-menu :title="title" @click="nextSteep">
      <div class="map map1" @click="nextSteep(0)"></div>
      <div class="map map2" @click="nextSteep(1)"></div>
    </sub-menu>
  </article>
</template>

<script>
  import subMenu from '@/components/subMenu/subMenu'
  export default {
    data () {
      return {
        title: '大学校区'
      }
    },
    methods: {
      nextSteep (num) {
        this.$router.push({
          name: '6-1',
          params: {id: num}
        })
      }
    },
    components: {
      subMenu
    }
  }
</script>

<style scoped>
  .geography {
    width: 100%;
    height: 100%;
  }
  .geography .map {
    width: 510px;
    height: 201px;
    background: red;
    margin: 0 auto;
    margin-top: 165px;
    vertical-align: middle;
  }
  .geography .map1 {
    display: inline-block;
    margin-left: 402px;
    background: url('./jiaotong.png') 0 0 no-repeat;
  }
  .geography .map2 {
    display: inline-block;
    margin-left: 42px;
    background: url('./huadong.png') 0 0 no-repeat;
  }
</style>
