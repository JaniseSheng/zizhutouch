<template>
  <article class="subMenu" >
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div class="button" @click="back">返回</div>
    <slot></slot>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    thirdMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
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
    width: 500px;
    height: 100px;
    margin-top: 150px;
    color: #fff;
    font-size: 42px;
    font-weight: bold;
    text-align: center;
    line-height:50px;
  }
  .subMenu .button {
    position: absolute;
    height:55px;
    width: 105px;
    line-height:55px;
    text-align: center;
    bottom: 166px;
    right: 94px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    border: 4px solid #fff;
  }
</style>
