<template>
  <div class="vnt-rating"
       tabindex="0"
       :aria-label="value">
    <label class="vnt-rating__star"
           aria-hidden="true"
           @click="rate(n)"
           v-for="n in stars"
           :key="n"
           :class="{'vnt-rating__star--off': n > starsValue}">&#9733;</label>
  </div>
</template>

<script>
export default {
  name: 'VntRating',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    }
  },

  computed: {
    starsValue() {
      return Math.floor(Number(this.value));
    },
    stars() {
      const values = [];
      for(let i = this.max; i > 0; i--) { values.push(i); }
      return values;
    }
  },

  methods: {
    rate(n) {
      if (!this.disabled) {
        this.$emit('change', n);
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-rating {
  @include component-base();

  margin: 8px 0;
  display: inline-flex;
  flex-direction: row-reverse;
  font-size: 24px;
}

.vnt-rating__star {
  color: var(--vnt-accent-color, $fallbackAccentColor);
  display: inline-block;
  padding: 0 2px;
  cursor: pointer;

  &--off {
    color: lighten(#000, 60%);
  }

  &:hover,
  &--off:hover,
  &:hover ~ & {
    color: var(--vnt-accent-color, $fallbackAccentColor);
  }
}
</style>
