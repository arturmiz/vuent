<template>
  <div class="playground">
    <vnt-rating v-model="ratingValue" />
    <div class="result">ratingValue: {{ ratingValue }}</div>
  </div>
</template>

<script>
import { VntRating } from '../../../src/components';

export default {
  name: 'RatingBasic',
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
