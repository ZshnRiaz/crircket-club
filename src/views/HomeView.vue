<script setup>
import MatchSchedules from "@/components/MatchSchedules.vue";
import MiniCards from "@/components/MiniCards.vue";
import ScoreBanner from "@/components/ScoreBanner.vue";
import Standings from "@/components/Standings.vue";
import TopPlayers from "@/components/TopPlayers.vue";
import TopTeams from "@/components/TopTeams.vue";
</script>

<template>


  <!-- START Homepage REVOLUTION SLIDER 6.1.5 -->
  <p class="rs-p-wp-fix"></p>
  <rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery">
    style="background:#212121;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;">
    <rs-module id="rev_slider_1_1" style="display:none;" data-version="6.1.5">
      <rs-slides>
        <rs-slide data-key="rs-1" data-title="Slide" data-thumb="#" data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:d;">
          <img src="https://max-themes.net/demos/bigslam/bigslam/upload/slider-1-2.jpg" title="Homepage"
            class="rev-slidebg" data-no-retina="">

          <rs-layer id="slider-1-slide-1-layer-1" data-type="text" data-color="#ec4613" data-rsp_ch="on"
            data-xy="xo:40px,40px,40px,45px;y:m;yo:-3px,-3px,-3px,-170px;" data-text="s:17;l:22;ls:3px;a:inherit;"
            data-frame_0="tp:600;" data-frame_1="tp:600;st:180;sR:180;" data-frame_999="o:0;tp:600;st:w;sR:8520;"
            style="z-index:5;font-family:Roboto Condensed;text-transform:uppercase;">Hey! We Are
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-2" class="tp-shape tp-shapewrapper" data-type="shape" data-rsp_ch="on"
            data-xy="xo:183px,183px,183px,177px;y:m;yo:-2px,-2px,-2px,-171px;" data-text="a:inherit;"
            data-dim="w:35px;h:1px;" data-frame_0="tp:600;" data-frame_1="tp:600;st:360;sR:360;"
            data-frame_999="o:0;tp:600;st:w;sR:8340;" style="z-index:6;background-color:#ec4613;">
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-3" data-type="text" data-color="#ec4613" data-rsp_ch="on"
            data-xy="xo:32px,32px,32px,41px;y:m;yo:87px,87px,87px,-97px;"
            data-text="s:140,140,140,80;l:auto,auto,auto,60;fw:700;a:inherit;" data-frame_0="tp:600;"
            data-frame_1="tp:600;e:Power3.easeOut;st:530;sp:1500;sR:530;" data-frame_999="o:0;tp:600;st:w;sR:6970;"
            style="z-index:7;font-family:Roboto Condensed;">BIG
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-4" data-type="text" data-rsp_ch="on"
            data-xy="xo:239px,239px,239px,164px;y:m;yo:87px,87px,87px,-97px;"
            data-text="s:140,140,140,80;l:auto,auto,auto,60;fw:700;a:inherit;" data-frame_0="tp:600;"
            data-frame_1="tp:600;e:Power3.easeOut;st:540;sp:1500;sR:540;" data-frame_999="o:0;tp:600;st:w;sR:6960;"
            style="z-index:8;font-family:Roboto Condensed;">SLAM
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-5" data-type="text" data-rsp_ch="on"
            data-xy="xo:38px,38px,38px,44px;y:m;yo:181px,181px,181px,-27px;"
            data-text="s:33,33,33,23;l:33;ls:1px;fw:300;a:inherit;" data-frame_0="x:50px;tp:600;"
            data-frame_1="tp:600;st:700;sR:700;" data-frame_999="o:0;tp:600;st:w;sR:8000;"
            style="z-index:9;font-family:Roboto Condensed;">Basketball Club WordPress Theme
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-6" class="rev-btn" data-type="button" data-color="#000000"
            data-xy="xo:40px,40px,40px,47px;y:m;yo:265px,265px,265px,43px;"
            data-text="s:12;l:17;ls:1px;fw:700;a:inherit;" data-dim="h:auto,auto,auto,49px;" data-rsp_bd="off"
            data-padding="t:17,17,17,15;r:32,32,32,27;b:17,17,17,13;l:32,32,32,27;" data-border="bor:3px,3px,3px,3px;"
            data-frame_0="x:-200px;skX:85px;tp:600;" data-frame_1="tp:600;st:880;sR:880;"
            data-frame_999="o:0;tp:600;st:w;sR:7820;"
            data-frame_hover="c:#000;bgc:#fff;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;"
            style="z-index:10;background-color:#ffffff;font-family:Roboto;text-transform:uppercase;cursor:pointer;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Learn
            More
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-7" data-type="image" data-rsp_ch="on"
            data-xy="x:r;xo:418px,418px,418px,366px;y:b;yo:93px,93px,93px,111px;" data-text="l:22;a:inherit;"
            data-dim="w:85px,85px,85px,59px;h:43px,43px,43px,30px;" data-frame_0="tp:600;"
            data-frame_1="tp:600;st:1160;sR:1160;" data-frame_999="o:0;tp:600;st:w;sR:7540;" style="z-index:7;"><img
              src="https://max-themes.net/demos/bigslam/bigslam/upload/banner-1.png" width="85" height="43"
              data-no-retina="" alt="">
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-10" data-type="image" data-rsp_ch="on"
            data-xy="x:r;xo:229px,229px,229px,230px;y:b;yo:98px,98px,98px,113px;" data-text="l:22;a:inherit;"
            data-dim="w:150px,150px,150px,116px;h:14px,14px,14px,11px;" data-frame_0="tp:600;"
            data-frame_1="tp:600;st:1420;sR:1420;" data-frame_999="o:0;tp:600;st:w;sR:7280;" style="z-index:14;"><img
              src="https://max-themes.net/demos/bigslam/bigslam/upload/banner-2.png" width="150" height="14"
              data-no-retina="" alt="">
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-1-layer-11" data-type="image" data-rsp_ch="on"
            data-xy="x:r;xo:39px,39px,39px,92px;y:b;yo:92px,92px,92px,110px;" data-text="l:22;a:inherit;"
            data-dim="w:156px,156px,156px,113px;h:27px,27px,27px,20px;" data-frame_0="tp:600;"
            data-frame_1="tp:600;st:1710;sR:1710;" data-frame_999="o:0;tp:600;st:w;sR:6990;" style="z-index:15;"><img
              src="https://max-themes.net/demos/bigslam/bigslam/upload/banner-3.png" width="156" height="27"
              data-no-retina="" alt="">
          </rs-layer>
          <!---->
        </rs-slide>
        <rs-slide data-key="rs-3" data-title="Slide" data-thumb="#" data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:d;">
          <img src="https://max-themes.net/demos/bigslam/bigslam/upload/slider-2-1.jpg" title="Homepage"
            data-bg="p:center top;" class="rev-slidebg" data-no-retina="">
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-1" data-type="text" data-color="#ec4613" data-rsp_ch="on"
            data-xy="xo:40px,40px,40px,42px;y:m;yo:-3px,-3px,-3px,-165px;" data-text="s:17;l:22;ls:3px;a:inherit;"
            data-frame_0="tp:600;" data-frame_1="tp:600;st:180;sR:180;" data-frame_999="o:0;tp:600;st:w;sR:8520;"
            style="z-index:5;font-family:Roboto Condensed;text-transform:uppercase;">Meet the rookie!
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-2" class="tp-shape tp-shapewrapper" data-type="shape" data-rsp_ch="on"
            data-xy="xo:232px,232px,232px,234px;y:m;yo:-3px,-3px,-3px,-166px;" data-text="a:inherit;"
            data-dim="w:35px;h:1px;" data-frame_0="tp:600;" data-frame_1="tp:600;st:360;sR:360;"
            data-frame_999="o:0;tp:600;st:w;sR:8340;" style="z-index:6;background-color:#ec4613;">
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-3" data-type="text" data-color="#ec4613" data-rsp_ch="on"
            data-xy="xo:32px,32px,32px,37px;y:m;yo:87px,87px,87px,-96px;"
            data-text="s:115,115,115,60;l:auto,auto,auto,70;fw:700;a:inherit;" data-frame_0="tp:600;"
            data-frame_1="tp:600;e:Power3.easeOut;st:530;sp:1500;sR:530;" data-frame_999="o:0;tp:600;st:w;sR:6970;"
            style="z-index:7;font-family:Roboto Condensed;">BLAKE
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-4" data-type="text" data-rsp_ch="on"
            data-xy="xo:365px,365px,365px,213px;y:m;yo:87px,87px,87px,-96px;"
            data-text="s:115,115,115,60;l:auto,auto,auto,70;fw:700;a:inherit;" data-frame_0="tp:600;"
            data-frame_1="tp:600;e:Power3.easeOut;st:540;sp:1500;sR:540;" data-frame_999="o:0;tp:600;st:w;sR:6960;"
            style="z-index:8;font-family:Roboto Condensed;">GIFFIN
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-5" data-type="text" data-rsp_ch="on"
            data-xy="xo:38px,38px,38px,40px;y:m;yo:164px,164px,164px,-44px;"
            data-text="s:33,33,33,23;l:33;ls:1px;fw:300;a:inherit;" data-frame_0="x:50px;tp:600;"
            data-frame_1="tp:600;st:700;sR:700;" data-frame_999="o:0;tp:600;st:w;sR:8000;"
            style="z-index:9;font-family:Roboto Condensed;">Most Scoring Player in 2017
          </rs-layer>
          <!-- -->
          <rs-layer id="slider-1-slide-3-layer-6" class="rev-btn" data-type="button" data-color="#000000"
            data-xy="xo:40px,40px,40px,41px;y:m;yo:246px,246px,246px,32px;"
            data-text="s:12;l:17;ls:1px;fw:700;a:inherit;" data-rsp_bd="off"
            data-padding="t:17,17,17,15;r:32,32,32,27;b:17,17,17,15;l:32,32,32,27;" data-border="bor:3px,3px,3px,3px;"
            data-frame_0="x:-200px;skX:85px;tp:600;" data-frame_1="tp:600;st:880;sR:880;"
            data-frame_999="o:0;tp:600;st:w;sR:7820;"
            data-frame_hover="c:#000;bgc:#fff;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;"
            style="z-index:10;background-color:#ffffff;font-family:Roboto;text-transform:uppercase;cursor:pointer;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Learn
            More
          </rs-layer>
          <!-- -->
        </rs-slide>
      </rs-slides>
      <rs-progress class="rs-bottom" style="visibility: hidden !important;"></rs-progress>
    </rs-module>

  </rs-module-wrap>
  <!-- END REVOLUTION SLIDER -->

  <!-- Score Banner -->
  <score-banner></score-banner>
  <mini-cards></mini-cards>
  <MatchSchedules></MatchSchedules>
  <standings></standings>
  <TopPlayers></TopPlayers>
  <TopTeams></TopTeams>

</template>
