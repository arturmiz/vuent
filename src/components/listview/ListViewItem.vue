<template>
  <div class="vnt-listview-item"
       role="listitem"
       tabindex="0"
       @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { SELECTION_MODE } from './SelectionMode';

export default {
  name: 'VntListviewItem',

  inject: ['selectionMode'],

  props: {
    click: {
      type: Function,
      default: undefined
    },
    item: {
      type: [Object, String, Number],
      default: undefined
    }
  },

  methods: {
    handleClick(...args) {
      if (typeof this.click === 'function' && this.selectionMode === SELECTION_MODE.single) {
        this.click(...args, this.item);
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-listview-item {
  @include component-base;
  @include text-overflow;

  display: flex;
  align-items: center;
  padding: 4px 12px;
  box-sizing: border-box;
  height: 40px;
  outline: none;

  .vnt-listview--selectable & {
    &:focus {
      outline: auto;
    }

    &:active,
    &:focus,
    &:hover {
      background-color: #e7e7e7;
    }
  }
}
</style>
