<template>
  <third-menu :obj="obj"></third-menu>
</template>

<script>
  import thirdMenu from '@/components/thirdMenu/thirdMenu'
  import { school } from '@/base/js/schoolConfig'
  export default {
    data () {
      return {
        obj: {}
      }
    },
    created () {
      const id = this.$route.params.id
      this.obj = school[id]
    },
    components: {
      thirdMenu
    }
  }
</script>
