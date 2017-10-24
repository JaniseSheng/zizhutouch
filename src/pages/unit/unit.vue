<template>
  <article class="subMenus">
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
        title: '股东单位'
      }
    },
    components: {
      subMenu
    }
  }
</script>

<style scoped>
  .subMenus {
    width: 100%;
    height: 100%;
  }
  .subMenus .map {
    width: 1482px;
    height: 643px;
    background: red;
    margin: 0 auto;
    margin-top: 50px;
    background: url('./map.png') 0 0 no-repeat;
  }
</style>
