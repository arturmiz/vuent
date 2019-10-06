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
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-listview {
  @include component-base;

}
</style>
