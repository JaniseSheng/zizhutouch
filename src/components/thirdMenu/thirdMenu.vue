<template>
  <article class="subMenu">
    <div class="title">
      <span>{{obj.title}}</span>
    </div>
    <div class="button" @click="back">返回</div>
    <div class="mapImage">
      <div class="image" :style="{background: getUrl()}"></div>
    </div>
    <div class="text">
      <div class="txt">
        <div v-html="obj.text"></div>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      obj: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      getUrl () {
        return `url(${require(`./${this.obj.url}.png`)}) 0 0 no-repeat`
      },
      back () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .subMenu {
    width: 100%;
    height: 100%;
    background: url('./bgImage.png') 0 0 no-repeat;
    position: relative;
    overflow: hidden;
  }

  .subMenu .title {
    margin: 0 auto;
    width: 700px;
    height: 100px;
    margin-top: 160px;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height:50px;
  }

  .subMenu .mapImage {
    width: 50%;
    height: 663px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .subMenu .mapImage {
    width: 50%;
    height: 100%;
    display: inline-block;
    float: left;
  }

  .subMenu .button {
    position: absolute;
    height: 55px;
    width: 105px;
    line-height: 55px;
    text-align: center;
    bottom: 166px;
    right: 94px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    border: 4px solid #fff;
  }

  .subMenu .mapImage .image {
    width: 776px;
    height: 437px;
    margin: 0 auto;
    margin-top: 68px;
  }

  .subMenu .text {
    width: 50%;
    height: 100%;
    display: inline-block;
  }

  .subMenu .text .txt {
    width: 473px;
    height: 440px;
    font-size: 20px;
    color: #fff;
    margin-left: 145px;
    margin-top: 80px;
    line-height: 26px;
    text-indent: 2em;
    font-weight: 400;
  }
</style>
