<template>
 <nav class="navbar shadow-1 is-fixed-top">
  <div class="container">
    <div class="navbar-brand">
      <div class="navbar-item h-d" onclick="toggleSideMenu()">
        <i class="fas fa-bars"></i>
      </div>
        <router-link to="/" class="navbar-item" >
          <img src="@/assets/img/logo.svg" alt="" width="112" height="28">
        </router-link>
      <a class="navbar-item h-d" href="#">
        <i class="fas fa-search"></i>
      </a>
    </div>
    
    <div id="navMenuColorsuccess-example" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="app name">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      
      <div class="navbar-end">
        <a class="navbar-item" href="#">
          Log in
        </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
.navbar-item {
   cursor: pointer;
}
.navbar-item img {
  max-height: 100%;
}
.navbar-brand, .navbar-tabs {
  height: 100%;
}
.input.is-active, .input.is-focused, .input:active, .input:focus, .textarea.is-active, .textarea.is-focused, .textarea:active, .textarea:focus {
  border-color: #3273dc;
  box-shadow: none;
}
.input, .control.has-icons-left .select select {
  padding-left: 2.25em;
  border-radius: 0;
}
</style>
