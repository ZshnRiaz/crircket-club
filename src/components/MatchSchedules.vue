<script setup>
import LetestResults from "./LetestResults.vue";
import UpcomingMatch from "./UpcomingMatch.vue";
import UpcomingMatches from "./UpcomingMatches.vue";

</script>
<template>
  <div class="gdlr-core-pbf-wrapper " style="padding: 0px 0px 35px 0px;">
    <div class="gdlr-core-pbf-background-wrap"></div>
    <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
      <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
        <div class="gdlr-core-pbf-column gdlr-core-column-40 gdlr-core-column-first">
          <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
            <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
              <div class="gdlr-core-pbf-element">
                <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
                  style="padding-bottom: 0px ;">
                  <div class="gdlr-core-text-box-item-content">
                    <div class="sportspress sp-widget-align-none">
                      <div class="sp-template sp-template-event-list">
                        <div class="bigslam-sp-event-featured-holder clearfix">
                          <!-- saasdsad -->
                          <UpcomingMatch />
                          <upcoming-matches></upcoming-matches>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <letest-results></letest-results>
      </div>
    </div>

  </div>
</template>
