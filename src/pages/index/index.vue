<template>
  <article class="menu">
    <div class="title">
      <span></span>
    </div>
    <menu class="content">
      <ul @click="nextMenu">
        <li data-menu="1"></li>
        <li data-menu="2"></li>
        <li data-menu="3"></li>
        <li data-menu="4"></li>
        <li data-menu="5"></li>
        <li data-menu="6"></li>
        <li data-menu="7"></li>
      </ul>
    </menu>
  </article>
</template>

<script>
  export default {
    methods: {
      nextMenu (e) {
        if (!e.target.getAttribute('data-menu')) {
          return
        }
        const name = '1-' + e.target.getAttribute('data-menu')
        this.$router.push({name})
      }
    }
  }
</script>

<style scoped>
  .menu {
    width: 100%;
    height: 100%;
    background: url('./bgImage.png') 0 0 no-repeat;
    overflow: hidden;
  }

  .title {
    width: 1347px;
    height: 198px;
    background: url('./titleImage.png') center no-repeat;
    margin: 0 auto;
    margin-top: 58px;
  }

  .content {
    height: 882px;
    padding-left: 0;
  }

  .content ul {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .content li {
    width: 178px;
    height: 208px;
    position: absolute;
  }

  .content li:first-child {
    left: 235px;
    bottom: 110px;
    background: url('./_menu1.png') 0 0 no-repeat;
  }

  .content li:nth-child(2) {
    left: 397px;
    bottom: 347px;
    background: url('./_menu2.png') 0 0 no-repeat;

  }

  .content li:nth-child(3) {
    left: 624px;
    bottom: 516px;
    background: url('./_menu3.png') 0 0 no-repeat;
  }

  .content li:nth-child(4) {
    left: 916px;
    bottom: 613px;
    background: url('./_menu4.png') 0 0 no-repeat;
  }

  .content li:nth-child(5) {
    right: 521px;
    bottom: 572px;
    width: 244px;
    background: url('./_menu5.png') 0 0 no-repeat;
  }

  .content li:nth-child(6) {
    right: 327px;
    bottom: 348px;
    background: url('./_menu6.png') 0 0 no-repeat;
  }

  .content li:nth-child(7) {
    right: 215px;
    bottom: 91px;
    background: url('./_menu7.png') 0 0 no-repeat;
  }
</style>
