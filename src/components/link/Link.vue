<template>
  <span v-if="disabled"
        class="vnt-link vnt-link--disabled">
    <slot>hyperlink</slot>
  </span>
  <a v-else-if="typeof click === 'function'"
     class="vnt-link"
     :href="href"
     @click="handleClick">
    <slot>hyperlink</slot>
  </a>
  <a v-else
     class="vnt-link"
     :href="href">
    <slot>hyperlink</slot>
  </a>
</template>

<script>
export default {
  name: 'VntLink',

  props: {
    click: {
      type: Function,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '#'
    },
  },
  methods: {
    handleClick(event) {
      this.click();
      event.preventDefault();
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-link {
  @include component-base();

  color: var(--vnt-accent-color, $fallbackAccentColor);
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
