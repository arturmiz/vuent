<template>
  <div class="playground">
    <vnt-rating v-model="ratingValue" disabled />
    <div class="result">ratingValue: {{ ratingValue }}</div>
  </div>
</template>

<script>
import { VntRating } from '../../../src/components';

export default {
  name: 'RatingDisabled',
  components: {
    VntRating
  },
  data() {
    return {
      ratingValue: 3.25
    }
  }
}
</script>
