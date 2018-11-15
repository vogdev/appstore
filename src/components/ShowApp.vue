<template>
  <div class="app-container shadow-1">
    <div class="app-img-container">
      <img :src="this.$store.getters.getCurentApp.image_url" :alt="this.$store.getters.getCurentApp.title">
    </div>
    <div class="app-info">
      <h1 class="app-title">{{this.$store.getters.getCurentApp.title}}</h1>
      <p>{{this.$store.getters.getCurentApp.subtitle}}</p>
      <div class="sub-info">
        <div class="app-ratings">
          <i class="fas fa-star" color="#747474"></i>
          <i class="fas fa-star" color="#747474"></i>
          <i class="fas fa-star" color="#747474"></i>
          <i class="fas fa-star" color="#747474"></i>
          <i class="fas fa-star" color="#d0d0d0"></i>
        </div>
        <p>{{this.$store.getters.getCurentApp.download_count}} downloads</p>
      </div>
      <div class="ctas">
        <a href="#" class="button is-link shadow-1 download-btn">Download v1.3</a>
        <a href="#" class="button shadow-1 older-versions-btn">Older versions </a>
      </div>
      <div class="app-description">
        <p class="app-description-title">description:</p>
        <p>{{this.$store.getters.getCurentApp.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowApp',
  mounted() {
    this.$store.dispatch('actionFetchAppInfo', this.$route.params[0])
  }
}
</script>

<style >
</style>
