<template>
  <article class="geography">
    <sub-menu :title="title">
      <div class="map"></div>
    </sub-menu>
  </article>
</template>

<script>
  import subMenu from '@/components/subMenu/subMenu'
  export default {
    data () {
      return {
        title: '总体规划'
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
    width: 843px;
    height: 663px;
    background: red;
    margin: 0 auto;
    margin-top: 50px;
    background: url('./map.png') 0 0 no-repeat;
  }
</style>
