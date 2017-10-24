<template>
  <article class="geography">
    <sub-menu :title="title">
      <div class="map">
        <ul>
          <li @click="nextSteep(0)"></li>
          <li @click="nextSteep(1)"></li>
          <li @click="nextSteep(2)"></li>
        </ul>
      </div>
    </sub-menu>
  </article>
</template>

<script>
  import subMenu from '@/components/subMenu/subMenu'
  export default {
    data () {
      return {
        title: '紫竹配套区'
      }
    },
    methods: {
      nextSteep (item) {
        this.$router.push({
          name: '7-1',
          params: {id: item}
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
    width: 980px;
    height: 314px;
    margin: 0 auto;
    margin-top: 165px;
  }
  .geography ul li {
    width: 351px;
    height: 101px;
  }
  .geography ul li:first-child {
    margin: 0 auto;
    background: url('./3.png');
  }
  .geography ul li:nth-child(2) {
    display: inline-block;
    background: url('./1.png');
  }
  .geography ul li:nth-child(3) {
    display: inline-block;
    margin-top: 112px;
    margin-left: 273px;
    background: url('./2.png');
  }
</style>
