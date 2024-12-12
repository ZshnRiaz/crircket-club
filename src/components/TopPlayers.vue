<script setup>
const players = [
  {
    id: 1,
    name: "Shahid Afridi",
    match: 27,
    inns: 48,
    runs: 1716,
    hs: 156,
    avg: 36.51,
    fifties: 8,
    hundreds: 5,
    fours: 220,
    sixes: 54,
    regInTeam: "02/10/2024",
    image: 'https://shyambhatia.com/wp-content/uploads/2022/06/Shahid-Afridi.png'
  },
  {
    id: 2,
    name: "Virat Kohli",
    match: 111,
    inns: 201,
    runs: 8456,
    hs: 183,
    avg: 59.33,
    fifties: 44,
    hundreds: 28,
    fours: 750,
    sixes: 125,
    regInTeam: "01/11/2020",
    image: 'https://shyambhatia.com/wp-content/uploads/2022/06/virat-kohli.png'
  },
  {
    id: 3,
    name: "Chris Gayle",
    match: 103,
    inns: 102,
    runs: 7432,
    hs: 215,
    avg: 40.2,
    fifties: 20,
    hundreds: 25,
    fours: 500,
    sixes: 350,
    regInTeam: "03/15/2018",
    image: 'https://shyambhatia.com/wp-content/uploads/2022/06/chris-gayle.png'
  },
  {
    id: 4,
    name: "AB de Villiers",
    match: 110,
    inns: 100,
    runs: 7800,
    hs: 162,
    avg: 52.5,
    fifties: 35,
    hundreds: 22,
    fours: 650,
    sixes: 200,
    regInTeam: "05/25/2017",
    image: 'https://shyambhatia.com/wp-content/uploads/2022/06/ab-de-villiers.png'
  },
  {
    id: 5,
    name: "Kane Williamson",
    match: 75,
    inns: 125,
    runs: 5500,
    hs: 148,
    avg: 45.8,
    fifties: 20,
    hundreds: 15,
    fours: 400,
    sixes: 50,
    regInTeam: "07/12/2016",
    image: 'https://shyambhatia.com/wp-content/uploads/2022/06/kane-williamson.png'
  },
];
</script>
<template>
  <div class="gdlr-core-pbf-wrapper " style="padding: 75px 0px 30px 0px;" data-skin="Player Carousel">
    <div class="gdlr-core-pbf-background-wrap">
      <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"
        style="background-image: url('https://max-themes.net/demos/bigslam/bigslam/uploadhp-bg-player.jpg') ;background-size: cover ;background-position: center ;"
        data-parallax-speed="0.1"></div>
    </div>
    <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
      <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
        <div class="gdlr-core-pbf-element">
          <div class="gdlr-core-sp-player-item gdlr-core-item-pdb clearfix  gdlr-core-item-pdlr">
            <div class="gdlr-core-block-item-title-wrap  gdlr-core-left-align">
              <div class="gdlr-core-block-item-title-inner">
                <h3 class="gdlr-core-block-item-title" style="font-size: 37px ;">Top Players</h3>
                <!-- <span
                  class="gdlr-core-separator gdlr-core-style-1"></span><a
                  class="gdlr-core-block-item-read-more gdlr-core-style-default" href="#" target="_self"
                  style="color: #ec4613 ;border-color: #ec4613 ;">View All Players</a> -->
              </div>

            </div>
            <div class="gdlr-core-flexslider flexslider gdlr-core-js-2 " data-type="carousel" data-column="4"
              data-nav="navigation" data-nav-parent="gdlr-core-sp-player-item" data-disable-autoslide="1">
              <ul class="slides">
                <li class="gdlr-core-item-mglr" v-for="player in players" :key="player.id">
                  <div class="gdlr-core-sp-player-grid">
                    <div class="gdlr-core-sp-player-thumbnail gdlr-core-media-image gdlr-core-zoom-on-hover">
                      <router-link :to="`/player-detail/${player.id}`" href="#"><img :src="player.image" width="600"
                          height="846" alt=""></router-link>
                    </div>
                    <h3 class="gdlr-core-sp-player-title">
                      <router-link :to="`/player-detail/${player.id}`">{{ player.name }}</router-link>

                    </h3>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
