<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.$store.dispatch('actionSetApps')
      this.$store.dispatch('actionSetGalleries')
    }
  }
</script>

<style>
</style>
