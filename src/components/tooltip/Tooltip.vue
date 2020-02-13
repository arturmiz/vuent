<template>
  <div class="vnt-tooltip">
    <slot></slot>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

export default {
  name: 'VntTooltip',

  mounted() {
    const parent = this.$parent.$el;
    const tooltip = createPopper(parent, this.$el, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [8, 8]
          }
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom', 'left', 'right']
          }
        }
      ],
    });

    showEvents.forEach(event => {
      parent.addEventListener(event, () => this.$el.setAttribute('data-show', ''));
    });

    hideEvents.forEach(event => {
      parent.addEventListener(event, () => this.$el.removeAttribute('data-show'));
    });

    this.$tooltip = tooltip;
  },

  destroyed() {
    this.$tooltip.destroy();
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-tooltip {
  @include component-base;

  display: none;
  border: 1px solid lighten(#000, 80%);
  background: #f2f2f2;
  padding: 8px;
  font-size: 12px;
  line-height: 1.2;

  /* &[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
  } */
}

.vnt-tooltip[data-show] {
  display: block;
}
</style>
