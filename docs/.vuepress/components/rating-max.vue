<template>
  <div class="playground">
    <vnt-rating v-model="ratingValue" max="10" />
    <div class="result">ratingValue: {{ ratingValue }}</div>
  </div>
</template>

<script>
import { VntRating } from '../../../src/components';

export default {
  name: 'RatingMax',
  components: {
    VntRating
  },
  data() {
    return {
      ratingValue: 6.7
    }
  }
}
</script>
