<template>
  <span v-if="disabled"
        class="vnt-link vnt-link--disabled">
    <slot>hyperlink</slot>
  </span>
  <a v-else
     class="vnt-link">
    <slot>hyperlink</slot>
  </a>
</template>

<script>
export default {
  name: 'VntLink',

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-link {
  @include component-base();

  color: $accentColor;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #666;
  }

  &:active {
    color: rgba(0,0,0,.4);
  }

  &--disabled {
    color: rgba(0,0,0,.4);

    &:hover {
      color: rgba(0,0,0,.4);
    }
  }
}
</style>
