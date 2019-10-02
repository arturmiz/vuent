<template>
  <div class="vnt-listview"
       :class="{'vnt-listview--selectable': selectionMode === 'single'}"
       role="list">
    <slot></slot>
  </div>
</template>

<script>
import { SELECTION_MODE } from './SelectionMode';

export default {
  name: 'VntListview',

  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },

    selectionMode: {
      type: String,
      default: SELECTION_MODE.none
    }
  },

  provide() {
    return {
      selectionMode: this.selectionMode
    };
  }

  // beforeMount() {
  //   const slots = this.$slots.default || [];
  //   const itemTemplate = slots.find(el => el.tag === 'vnt-listview-item');

  //   if (itemTemplate) {
  //     this.$slots.itemTemplate = itemTemplate.children;
  //   }

  //   this.$slots.default = [];
  // }

};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-listview {
  @include component-base;

}
</style>
