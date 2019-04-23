<template>
  <button class="vnt-navview__pane-toggle"
          type="button"
          @click="togglePane">
    <vnt-icon name="global-navigation" />
  </button>
</template>

<script>
import VntIcon from '../icon/Icon.vue';

export default {
  name: 'VntNavviewMenuButton',

  components: {
    VntIcon
  },

  props: {
    isPaneOpened: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    togglePane() {
      this.$emit('update:isPaneOpened', !this.isPaneOpened);
    }
  }
};
</script>

<style lang="scss">
.vnt-navview__pane-toggle {
  background: transparent;
  border: 0;
  padding: 0 4px;
  cursor: pointer;
}
</style>
