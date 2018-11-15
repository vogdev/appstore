<template>
<div>
  <div class="content-container">
     <div class="section-header"><h1>Recommended for you</h1> <a href="#" class="button is-link shadow-1">See more</a></div>
     <div class="columns is-mobile cards">
        <div class="column" v-for="(app, index) in this.$store.getters.getApps.slice(1, 8)" :key="index">
          <div class="card">
            <div class="card-content">
              <router-link :to="{ path: `/show/${app.title}`}">
                <div class="card-cover">
                  <img :src="app.image_url">
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
  <div class="content-container">
     <div class="section-header"><h1>Recommended for you</h1> <a href="#" class="button is-link shadow-1">See more</a></div>
     <div class="columns is-mobile cards">
        <div class="column" v-for="(app, index) in this.$store.getters.getApps.slice(29, 36)" :key="index">
          <div class="card">
            <div class="card-content">
              <router-link :to="{ path: `/show/${app.title}`}">
                <div class="card-cover">
                  <img :src="app.image_url">
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
  <div class="content-container">
     <div class="section-header"><h1>Recommended for you</h1> <a href="#" class="button is-link shadow-1">See more</a></div>
     <div class="columns is-mobile cards">
        <div class="column" v-for="(app, index) in this.$store.getters.getApps.slice(9, 16)" :key="index">
          <div class="card">
            <div class="card-content">
              <router-link :to="{ path: `/show/${app.title}`}">
                <div class="card-cover">
                  <img :src="app.image_url">
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
</div>
</template>

<script>
export default {
  name: 'Apps',
}
</script>

<style >
</style>
