<template>
  <third-menu :obj="obj"></third-menu>
</template>

<script>
  import thirdMenu from '@/components/thirdMenu/thirdMenu'
  import { data } from '@/base/js/education'
  export default {
    data () {
      return {
        obj: {}
      }
    },
    created () {
      const id = this.$route.params.id
      console.log(data[id])
      this.obj = data[id]
    },
    components: {
      thirdMenu
    }
  }
</script>
