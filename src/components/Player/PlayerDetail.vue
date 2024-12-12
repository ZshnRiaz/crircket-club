<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const currentPlayer = computed(() =>
  players.find((player) => player.id == playerId)
);
const route = useRoute();

// Access the id from the route
const playerId = route.params.id;
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
  <div class="">


    <div class="bigslam-page-wrapper" id="bigslam-page-wrapper">
      <div class="bigslam-content-container bigslam-container">
        <div class=" bigslam-sidebar-wrap clearfix bigslam-line-height-0 bigslam-sidebar-style-right">
          <div class=" bigslam-sidebar-center bigslam-column-40 bigslam-line-height">
            <div class="gdlr-core-page-builder-body">
              <div class="gdlr-core-pbf-section">
                <div class="gdlr-core-pbf-section-container gdlr-core-container clearfix">
                  <div class="gdlr-core-pbf-element">
                    <div
                      class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr">
                      <div class="gdlr-core-title-item-title-wrap ">
                        <h3 class="gdlr-core-title-item-title gdlr-core-skin-title " style="font-size: 26px ;">{{
                          currentPlayer.name }}<span
                            class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="gdlr-core-pbf-element">
                    <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                      <div class="gdlr-core-text-box-item-content">
                        <div class="sportspress sp-widget-align-none">
                          <div class="sp-template sp-template-player-photo sp-template-photo sp-player-photo">
                            <img width="213" height="300" :src="currentPlayer.image"
                              class="attachment-sportspress-fit-medium size-sportspress-fit-medium wp-post-image"
                              alt="">
                          </div>
                          <div class="sp-template sp-template-player-details sp-template-details">
                            <div class="sp-list-wrapper">
                              <dl class="sp-player-details">
                                <dt>#</dt>
                                <dd>{{ currentPlayer.id }}</dd>
                                <dt>Name</dt>
                                <dd>{{ currentPlayer.name }}</dd>
                                <dt>Matches</dt>
                                <dd>{{ currentPlayer.match }}</dd>
                                <dt>Innings</dt>
                                <dd>{{ currentPlayer.inns }}</dd>
                                <dt>Runs</dt>
                                <dd>{{ currentPlayer.runs }}</dd>
                                <dt>High Score</dt>
                                <dd>{{ currentPlayer.hs }}</dd>
                                <dt>Average</dt>
                                <dd>{{ currentPlayer.avg }}</dd>
                                <!-- <dt>Fifties</dt>
                                <dd>{{ currentPlayer.fifties }}</dd> -->
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class=" bigslam-sidebar-right bigslam-column-20 bigslam-line-height bigslam-line-height">
            <div class="bigslam-sidebar-area bigslam-item-pdlr">
              <div class="sp-widget-align-none">
                <div id="sportspress-countdown-2"
                  class="widget widget_sportspress widget_countdown widget_sp_countdown bigslam-widget">
                  <div class="sp-template sp-template-countdown">
                    <div class="sp-countdown-wrapper">
                      <h3 class="event-name sp-event-name">
                        <a href="#">Achievements</a>
                      </h3>
                      <p class="countdown sp-countdown long-countdown">
                        <time datetime="2022-03-10 12:59:30" data-countdown="2022/03/10 12:59:30">
                          <span>{{ currentPlayer.hundreds }} <small>100s</small></span>
                          <span>{{ currentPlayer.fifties }} <small>50s</small></span>
                          <span>{{ currentPlayer.sixes }} <small>6s</small></span>
                          <span>{{ currentPlayer.fours }} <small>4s</small></span>
                        </time>
                      </p>
                    </div>
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
