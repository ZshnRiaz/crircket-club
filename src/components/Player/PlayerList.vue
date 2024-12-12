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
  <div class="bigslam-page-wrapper" id="bigslam-page-wrapper">
    <div class="gdlr-core-page-builder-body">
      <div class="gdlr-core-pbf-section">
        <div class="gdlr-core-pbf-section-container gdlr-core-container clearfix">
          <div class="gdlr-core-pbf-element">
            <div class="gdlr-core-sp-player-item gdlr-core-item-pdb clearfix ">
              <div class="gdlr-core-sp-player-item-holder gdlr-core-js-2 clearfix" data-layout="fitrows">
                <div class="gdlr-core-item-list  gdlr-core-item-pdlr gdlr-core-column-15" style=""
                  v-for="player in players" :key="player.id">
                  <div class="gdlr-core-sp-player-grid">
                    <div class="gdlr-core-sp-player-thumbnail gdlr-core-media-image gdlr-core-zoom-on-hover">
                      <router-link :to="`/player-detail/${player.id}`"><img :src="player.image" width="600" height="800"
                          alt=""></router-link>
                    </div>
                    <h3 class="gdlr-core-sp-player-title"><router-link :to="`/player-detail/${player.id}`">{{
                      player.name }}</router-link>

                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
