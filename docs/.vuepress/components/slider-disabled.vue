<template>
  <div class="playground">
    <vnt-slider v-model="sliderValue" disabled></vnt-slider>
    <div class="result">sliderValue: {{ sliderValue }}</div>
  </div>
</template>

<script>
import { VntSlider } from '../../../src/components';

export default {
  name: 'SliderDisabled',
  components: {
    VntSlider
  },
  data() {
    return {
      sliderValue: 50
    }
  }
}
</script>
