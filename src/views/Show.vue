<template>
  <div>
    <Navbar/>
    <Aside/>
    <section class="section main">
      <ShowApp/>
      <ShowPageApps/>
    </section>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Aside from '@/components/Aside.vue'
import ShowPageApps from '@/components/ShowPageApps.vue'
import ShowApp from '@/components/ShowApp.vue'
export default {
 components: {
    Aside,
    Navbar,
    ShowPageApps,
    ShowApp
  }
}
</script>
<style>
.is-multiline {
  display: flex;
}
.app-container{
  min-height: 400px;
  background-color: #fff;
  margin-top: 40px;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
}
.app-img-container {
  height: 250px;
  width: 250px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-img-container img{
  width: 80%;
}
.app-info {
  padding: 20px 10px;
}
.app-title{
  font-size: 30px;
  color: black;
  font-weight: 500;
}
.sub-info {
  display: flex;
  align-items: center;
}
.sub-info p{
  margin-left: 5px;
  color: black;
}
.download-btn {
  padding-bottom: calc(1.2em - 1px);
  padding-left: 1.75em;
  padding-right: 1.75em;
  padding-top: calc(1.2em - 1px);
  font-weight: 700;
  margin-right: 10px;
}
.app-description-title {
  color: #2e2e2e;
  font-weight: 500;
  font-size: 19px;
}
.older-versions-btn {
  border-color: #e5e5e5;
  color: #8e8e8e;
  font-weight: 500;
}
.ctas {
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin: 30px 0px;
}

@media only screen and (max-width: 768px) {
  .ctas {
    flex-direction: column;
    justify-content: center;
  }
  .download-btn {
    width: 100%;
    margin-bottom: 10px;
    margin-right: 0px;
  }
  .older-versions-btn {
    width: 100%;
  }
  .app-container {
    min-height: 400px;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
  }
  .app-img-container {
    height: 200px;
    width: 100%;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-img-container img {
    width: 170px;
  }
  .card {
    height: 190px;
    width: 95%;
    max-width: 135px;
    min-width: 105px;
    padding: 0px;
    margin: 5px auto;
  }
}
</style>
