<template>
  <div class="content-container">
        <div class="section-header"><h1>SIMILAR APPS</h1></div>
          <div class="columns bulma is-multiline cards">
            <div class="column is-4-mobile is-3-tablet is-2-desktop" v-for="(app, index) in this.$store.getters.getShowPageApps" :key="index">
              <div class="card">
                <div class="card-content">
                  <router-link @click.native="fetch(app.title)" :to="{ path: `/show/${app.title}`}">
                    <div class="card-cover">
                      <img :src="app.image_url" :alt="app.title">
                    </div>
                    <div class="card-info">
                        <p class="card-title">{{app.title}}</p>
                        <p class="subtitle"> {{app.subtitle}} </p>  
                    </div>
                    <div class="ratings">
                      <i class="fas fa-star" color="#747474" v-for="(item, index) in Number(app.ratings)" :key="index + 40"></i>
                      <i class="fas fa-star" color="#d0d0d0" v-for="(item, index) in 5 - Number(app.ratings)" :key="index + 10"></i>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'ShowPageApps',
  methods:{
    fetch(title) {
      this.$store.dispatch('actionFetchAppInfo', title)
    }
  }
}
</script>

<style >
</style>
