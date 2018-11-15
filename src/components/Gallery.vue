<template>
<div class="gallery">
  <div class="owl-carousel owl-theme">
    <div class="item">
      <a href="show.html">
        <img src="http://blog.gamesdeal.com/wp-content/uploads/2018/06/JohnWall2K_NewestJTI-808x454.jpg" alt="">
        <div class="gallery-item">
          <div class="gallery-item-info">
            <h4>NBA 2K19</h4>
            <p>NBA 2K19 for mobile is the latest entry of the NBA2K.</p>
          </div>
        </div>
      </a>
    </div>
    <div class="item">
      <a href="show.html">
        <img src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Fortnite.jpg" alt="">
        <div class="gallery-item">
          <div class="gallery-item-info">
            <h4>Fortnite</h4>
            <p>Play Fortnite Battle Royale on the go!</p>
          </div>
        </div>
      </a>
    </div>
    <div class="item">
      <a href="show.html">
        <img src="https://img.bfmtv.com/c/1256/708/627/389b4913f6a91199c9bc6727828a9.jpeg" alt="">
        <div class="gallery-item">
          <div class="gallery-item-info">
            <h4>Minecraft</h4>
            <p>Explore infinite worlds and build everything. </p>
          </div>
        </div>
      </a>
    </div>
    <div class="item">
      <a href="show.html">
        <img src="https://assets3.sportsnet.ca/wp-content/uploads/2018/04/giannis-1-1040x572.jpg" alt="">
        <div class="gallery-item">
          <div class="gallery-item-info">
            <h4>APP name</h4>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>

<style>
  .owl-carousel {
    padding: 5px;
  }
  .owl-item {
    background-color: #3273dc;
    height: 250px;
    border-radius: 4px;
    overflow: hidden;
  }
  .owl-stage {
    right: 30px;
  }
  .gallery {
    padding-top: 30px;
  }
  .item {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .item img {
    object-fit: cover;
    height: 100%;
  }
  .item a {
    color: #fff!important;
  }
  .gallery-item {
    position: absolute;
    bottom: 0px;
    height: 70%;
    text-align: center;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.72));
  }
  .gallery-item h4 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  .gallery-item-info {
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
</style>

