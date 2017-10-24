<template>
  <article class="geography">
    <sub-menu :title="title">
      <div class="map">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li v-for="item in 16" :style="{background: getUrl(item)}" @click="nextFool(item)"></li>
              </ul>
            </div>
          </div>
          <!-- Add Scroll Bar -->
          <div class="swiper-scrollbar"></div>
      </div>
      </div>
    </sub-menu>
  </article>
</template>

<script>
  import subMenu from '@/components/subMenu/subMenu'
  import Swiper from 'swiper'
  export default {
    data () {
      return {
        title: '总体规划'
      }
    },
    mounted () {
      var slider = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        mousewheel: true
      })
      console.log(slider)
    },
    methods: {
      getUrl (item) {
        return `url(${require(`./${item}.png`)}) 0 0 no-repeat`
      },
      nextFool (item) {
        this.$router.push({
          name: '4-1',
          params: {
            id: item
          }
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
    width: 1400px;
    height: 641px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    font-size: 18px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .swiper-slide ul li {
    width: 251px;
    height: 151px;
    background: red;
    display: inline-block;
    margin-right: 99px;
    margin-bottom: 99px;
  }
  .swiper-slide ul li:nth-child(4n) {
    margin-right: 0;
  }
  .swiper-scrollbar {
    height: 96%;
    width: 21px;
    background: #fff;
    padding: 10px 0;
  }
</style>

<style>

  .swiper-scrollbar > div  {
    width: 50% !important;
    background: #77206c !important;
    margin: 0 auto;
  }
</style>
