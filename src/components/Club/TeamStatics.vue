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
  },
];
</script>
<template>
  <div class=" bigslam-sidebar-wrap clearfix bigslam-line-height-0 bigslam-sidebar-style-right">
    <div class=" bigslam-sidebar-center bigslam-column-40 bigslam-line-height">
      <div class="bigslam-page-wrapper" id="bigslam-page-wrapper">
        <div class="gdlr-core-page-builder-body">
          <div class="gdlr-core-pbf-section">
            <div class="gdlr-core-pbf-section-container gdlr-core-container clearfix">

              <div class="gdlr-core-pbf-element">
                <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                  style="padding-bottom: 10px ;">
                  <div class="gdlr-core-text-box-item-content">
                    <div class="sportspress sp-widget-align-none">
                      <div class="sp-template sp-template-player-statistics">
                        <h4 class="sp-table-caption">Players</h4>
                        <div class="sp-table-wrapper">
                          <table class="sp-player-statistics sp-data-table sp-scrollable-table">
                            <thead>
                              <tr>
                                <th class="data-name">#</th>
                                <th class="data-team">Player Name</th>
                                <th class="data-pts">Match</th>
                                <th class="data-ast">Inns</th>
                                <th class="data-stl">Runs</th>
                                <th class="data-blk">HS</th>
                                <th class="data-fgm">Avg</th>
                                <th class="data-fgm">50s</th>
                                <th class="data-fgm">100s</th>
                                <th class="data-fgm">4s</th>
                                <th class="data-fgm">6s</th>
                                <th class="data-fgm">Reg in Team</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(player, key) in players" :key="player.id"
                                :class="[key % 2 == 0 ? 'even' : 'odd']">
                                <td class="data-name">{{ player.id }}</td>
                                <td class="data-team">
                                  <router-link :to="`/player-detail/${player.id}`">{{ player.name }}</router-link>
                                </td>
                                <td class="data-pts">{{ player.match }}</td>
                                <td class="data-ast">{{ player.inns }}</td>
                                <td class="data-stl">{{ player.runs }}</td>
                                <td class="data-blk">{{ player.hs }}</td>
                                <td class="data-fgm">{{ player.avg }}</td>
                                <td class="data-fgm">{{ player.fifties }}</td>
                                <td class="data-fgm">{{ player.hundreds }}</td>
                                <td class="data-fgm">{{ player.fours }}</td>
                                <td class="data-fgm">{{ player.sixes }}</td>
                                <td class="data-fgm">{{ player.regInTeam }}</td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
    <div class=" bigslam-sidebar-right bigslam-column-20 bigslam-line-height bigslam-line-height">
      <div class=" bigslam-sidebar-area bigslam-item-pdlr">
        <div class="sp-widget-align-none">
          <div id="sportspress-countdown-2"
            class="widget widget_sportspress widget_countdown widget_sp_countdown bigslam-widget">
            <div class="sp-template sp-template-countdown">
              <div class="sp-countdown-wrapper">
                <h3 class="event-name sp-event-name">
                  <a href="#">Team Stats</a>
                </h3>
                <p class="countdown sp-countdown long-countdown">
                  <time datetime="2022-03-10 12:59:30" data-countdown="2022/03/10 12:59:30"><span>355
                      <small>Matches</small></span> <span>255 <small>Win</small></span> <span>90
                      <small>Loss</small></span>
                    <span>10 <small>Tie</small></span></time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
