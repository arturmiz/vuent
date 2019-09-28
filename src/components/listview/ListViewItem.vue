<template>
  <div class="vnt-listview-item"
       role="listitem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VntListviewItem'
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-listview-item {
  @include component-base;
  @include text-overflow;

  padding: 12px 8px;

  &:active {
    background-color: #f9f9f9;
  }
}
</style>
