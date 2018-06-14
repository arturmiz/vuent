<template>
  <div class="playground">
    <vnt-slider v-model="sliderValue">Custom label</vnt-slider>
  </div>
</template>

<script>
import { VntSlider } from '../../../src/components';

export default {
  name: 'SliderLabel',
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
