<template>
  <div class="container">
    <HeaderRSI></HeaderRSI>
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderRSI from "./components/HeaderRSI.vue"

export default {
  name: 'App',
  components: {
    HeaderRSI,
  },
  data() {
    return {
    }
  },
  
  created() {
  }
}
</script>

<style>

.container {
  text-align: center;
}

</style>
