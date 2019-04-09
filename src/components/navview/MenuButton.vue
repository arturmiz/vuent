<template>
  <button class="vnt-navview__pane-toggle"
          type="button"
          @click="togglePane">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="9"
         viewBox="0 0 16 9">
      <g transform="translate(-125.5 -80)">
        <line class="vnt-navview__pane-toggle-line"
              x2="16"
              transform="translate(125.5 80.5)" />
        <line class="vnt-navview__pane-toggle-line"
              x2="16"
              transform="translate(125.5 84.5)" />
        <line class="vnt-navview__pane-toggle-line"
              x2="16"
              transform="translate(125.5 88.5)" />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'VntNavViewMenuButton',

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

.vnt-navview__pane-toggle-line {
  fill: none;
  stroke: #010101;
  stroke-width: 1;
}
</style>
