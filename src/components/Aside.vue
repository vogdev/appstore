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

<style>
.aside {
  transition: all 0.3s ease;
  width: 250px;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 30px 15px;
  margin-top: 62px;
  border-right: 1px solid #e9e9e9;
  z-index: 20;
}
.menu-list svg{
  margin: 0px 15px;
  width: 18px!important;
  height: 18px;
  color: #3273dc;
}
.menu-list a.is-active svg {
  background-color: #3273dc;
  color: #fff;
}
.menu-list a {
  border-radius: 2px;
  display: block;
  padding: 0.7em .75em;
}
.menu-list li{
  font-weight: 500;
    font-size: 17px;
}
.show-aside {
  margin-left: -2px!important;
}
.bg-aside{
  transition: all 0.3s ease;
  display: none;
}
.show-bg-aside {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 19;
  display: block;
}
</style>
