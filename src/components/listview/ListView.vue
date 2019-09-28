<template>
  <div class="vnt-listview"
       role="list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VntListview',

  props: {
    selectionMode: {
      type: String,
      default: 'none'
    }
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
