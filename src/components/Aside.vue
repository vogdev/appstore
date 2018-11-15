<template>
 <div>
    <div class="bg-aside" id="bg-aside" onclick="toggleSideMenu()"></div>
    <div class="aside" id="aside">
      <aside class="menu">
        <ul class="menu-list">
          <li><router-link class="is-active shadow-1" to="/"><i class="fas fa-box-open"></i> All Apps</router-link></li>
          <li><router-link to="/"><i class="fab fa-windows"></i> Windows</router-link></li>
          <li><router-link to="/"><i class="fab fa-apple"></i> Mac</router-link></li>
          <li><router-link to="/"><i class="fab fa-android"></i> Android</router-link></li>
          <li><router-link to="/"><i class="fas fa-mobile"></i> iPhone</router-link></li>
          <li><router-link to="/"><i class="fab fa-linux"></i> Ubuntu</router-link></li>
        </ul>
      </aside>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Aside',
}
</script>

<style >
</style>
