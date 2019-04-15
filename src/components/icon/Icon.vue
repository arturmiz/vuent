<template>
  <span class="vnt-icon"
        :class="iconClass"
        v-bind="$attrs">
  </span>
</template>

<script>
export default {
  name: 'VntIcon',

  props: {
    name: {
      type: String,
      default: undefined
    }
  },

  computed: {
    iconClass() {
      return this.name ? `vnt-icon--${this.name}` : '';
    }
  }
};
</script>

<style lang="scss">
.vnt-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: 50% center;

  &--contact {
    background-image: svg-load('icons/contact.svg');
  }

  &--edit {
    background-image: svg-load('icons/edit.svg');
  }

  &--global-navigation {
    background-image: svg-load('icons/globalNavigation.svg', stroke=#000100);
  }

  &--save {
    background-image: svg-load('icons/save.svg');
  }

  &--settings {
    background-image: svg-load('icons/settings.svg');
  }
}
</style>

