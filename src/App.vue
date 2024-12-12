<script setup>
// import { RouterLink, RouterView } from 'vue-router';ss
import BigHeader from './components/BigHeader.vue';
import Footer from './components/Footer.vue';
import Header from './components/MobileHeader.vue';

// import HelloWorld from './components/HelloWorld.vue';

</script>

<template>
  <div class="">
    <Header></Header>
    <BigHeader></BigHeader>
    <main>
      <div class="bigslam-page-wrapper" id="CRICKET CLUB">
        <div class="gdlr-core-page-builder-body">
          <div class="gdlr-core-pbf-wrapper " style="padding: 0px 0px 0px 0px;">
            <div class="gdlr-core-pbf-background-wrap"></div>
            <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
              <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                <div class="gdlr-core-pbf-element">
                  <div class="gdlr-core-revolution-slider-item gdlr-core-item-pdlr gdlr-core-item-pdb "
                    style="padding-bottom: 0px ;">
                    <RouterView />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
