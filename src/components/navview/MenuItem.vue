<template>
  <li class="vnt-navview__item"
      :class="{'vnt-navview__item--active': active}">
    <span class="vnt-navview__item-link"
          @click="handleClick">
      <vnt-icon :name="icon"
                class="vnt-navview__item-icon" />
      <span class="vnt-navview__item-label">
        <slot></slot>
      </span>
    </span>
  </li>
</template>

<script>
import VntIcon from '../icon/Icon.vue';

export default {
  name: 'VntNavviewItem',

  components: {
    VntIcon
  },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: undefined
    },
    icon: {
      type: String,
      default: null
    },
  },

  methods: {
    handleClick(event) {
      if (typeof this.click === 'function') {
        this.click();
        event.preventDefault();
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/text';

.vnt-navview__item {
  font-size: 15px;
  padding: 4px;
  margin: 8px -8px;
  box-sizing: border-box;
  height: 28px;
  border-left: 2px solid transparent;

  &--active {
    border-left-color: var(--vnt-accent-color);
  }
}

.vnt-navview__item-link {
  width: 100%;
  color: #000100;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: #000100;
    text-decoration: none;
  }
}

.vnt-navview__item-icon {
  flex: 0 0 auto;
  margin: 0 6px;
}

.vnt-navview__item-label {
  @include text-overflow;

  visibility: hidden;
  flex: 0 0 auto;
  padding-left: 4px;

  .vnt-navview__pane--auto & {
    @media screen and (min-width: 1008px) {
      visibility: visible;
    }
  }

  .vnt-navview__pane--opened & {
    visibility: visible;
  }
}
</style>
