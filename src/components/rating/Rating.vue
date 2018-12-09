<template>
  <div class="vnt-rating"
       :class="{'vnt-rating--disabled': disabled}"
       tabindex="0"
       :aria-disabled="disabled"
       :aria-label="value">
    <label class="vnt-rating__star"
           v-for="n in stars"
           :key="n"
           :class="{'vnt-rating__star--off': n > starsValue}"
           :aria-disabled="disabled"
           :aria-label="n"
           tabindex="0"
           @click="rate(n)">&#9733;</label>
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
  display: inline-block;
  padding: 0 2px;

  .vnt-rating & {
    cursor: pointer;
    color: var(--vnt-accent-color, $fallbackAccentColor);

    &:hover,
    &:hover ~ .vnt-rating__star,
    &--off:hover {
      color: var(--vnt-accent-color, $fallbackAccentColor);
    }

    &--off {
      color: lighten(#000, 80%);
    }
  }

  .vnt-rating--disabled & {
    cursor: auto;
    color: lighten(#000, 60%);

    &:hover,
    &:hover ~ .vnt-rating__star {
      color: lighten(#000, 60%);
    }

    &--off,
    &--off:hover,
    &:hover ~ .vnt-rating__star--off {
      color: lighten(#000, 80%);
    }
  }
}
</style>
