<template>
  <third-menu :obj="obj"></third-menu>
</template>

<script>
  import thirdMenu from '@/components/thirdMenu/thirdMenu'
  import { data } from '@/base/js/nextFool'
  export default {
    data () {
      return {
        obj: {}
      }
    },
    created () {
      const id = this.$route.params.id
      this.obj = data[id - 1]
    },
    components: {
      thirdMenu
    }
  }
</script>
