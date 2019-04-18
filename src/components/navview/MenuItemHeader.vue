<template>
  <li class="vnt-navview__item-header">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'VntNavviewItemHeader',
};
</script>

<style lang="scss">
@import '../../scss/mixins/text';

.vnt-navview__item-header {
  @include text-overflow;

  display: none;
  font-size: 15px;
  font-weight: 600;
  padding-left: 10px;
  margin: 12px 0;

  &:empty {
    margin: 0;
  }

  .vnt-navview__pane--opened & {
    display: block;
  }
}
</style>
