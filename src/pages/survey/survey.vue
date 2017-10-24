<template>
  <article class="geography">
    <third-menu :obj="obj" >
    </third-menu>
  </article>
</template>

<script>
  import thirdMenu from '@/components/thirdMenu/thirdMenu'
  export default {
    data () {
      return {
        obj: {
          text: `
          <p>
            紫竹国家高新技术产业开发区位于上海市闵行区东南角，规划面积13平方公里，由大学校区、研发基地和紫竹配套区三部分组成。
          </p>
          <p>自2002年奠基以来，紫竹始终以“生态、人文、科技”为发展理念，集教育、科研、人才、资本、产业等优势于一体，大力发展战略性新兴产业，致力于打造"东方硅谷"。形成了以信息软件、航空、生命科学、数字视听、智能制造、新能源与新材料为支柱的产业集群，已成为全球高端研发和技术聚集区。</p>
          <p>是中国唯一一家以民营经济为主体运作的国家级高新区；</p>
          <p>在国家级高新区中综合排名第16位;</p>
          <p>是"长江经济带国家级转型升级示范开发区"</p>
          <p>是上海建设"具有全球影响力的科技创新中心"的重要承载区。</p>
              `,
          title: '紫竹概况',
          url: 'gaikuang'
        }
      }
    },
    components: {
      thirdMenu
    }
  }
</script>

<style scoped>
  .geography {
    width: 100%;
    height: 100%;
  }
  .geography .mapImage {
    width: 50%;
    height: 663px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .geography .mapImage {
    width: 50%;
    height: 100%;
    display: inline-block;
    float: left;
  }

</style>
