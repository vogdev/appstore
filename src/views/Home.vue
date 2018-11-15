<template>
  <div class="home">
    <Navbar/>
    <Aside/>
    <section class="section main">
      <Gallery/>
      <Apps/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Apps from '@/components/Apps.vue'
import Navbar from '@/components/Navbar.vue'
import Aside from '@/components/Aside.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'index',
  components: {
    Apps,
    Aside,
    Gallery,
    Navbar
  }
}
</script>
