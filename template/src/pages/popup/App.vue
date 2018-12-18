<template>
  <div class="container">
    popup
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'popup',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  text-align: center;
}
</style>
