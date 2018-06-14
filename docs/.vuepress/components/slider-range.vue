<template>
  <div class="playground">
    <vnt-slider v-model="sliderValue" min="-10" max="10"></vnt-slider>
    <div class="result">sliderValue: {{ sliderValue }}</div>
  </div>
</template>

<script>
import { VntSlider } from '../../../src/components';

export default {
  name: 'SliderRange',
  components: {
    VntSlider
  },
  data() {
    return {
      sliderValue: 3
    }
  }
}
</script>
