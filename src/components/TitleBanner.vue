<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});

</script>
<template>
  <div class="bigslam-page-title-wrap  bigslam-style-medium bigslam-left-align">
    <div class="bigslam-header-transparent-substitute"></div>
    <div class="bigslam-page-title-overlay"></div>
    <div class="bigslam-page-title-container bigslam-container">
      <div class="bigslam-page-title-content bigslam-item-pdlr">
        <h1 class="bigslam-page-title " style="padding-top: 200px; text-align: center;">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>
