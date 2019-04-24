<template>
  <ul v-show="opened"
      class="vnt-dropdown-options"
      role="listbox">

    <li v-for="option in options"
        :key="getKey(option)"
        class="vnt-dropdown-options__item"
        role="listitem"
        @click="selectOption(option)">{{ getText(option) }}</li>

  </ul>
</template>

<script>
export default {
  name: 'VntDropdownOptions',

  props: {
    optionValue: {
      type: String,
      default: null
    },
    optionText: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    opened: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    opened(isOpened) {
      if (isOpened) {
        document.body.addEventListener('click', this.hide, true);
      } else {
        document.body.removeEventListener('click', this.hide, true);
      }
    }
  },

  methods: {
    getKey(option) {
      return this.getValue(option);
    },

    getText(option) {
      if (this.optionText) {
        return option[this.optionText];
      }
      return option;
    },

    getValue(option) {
      if (this.optionValue) {
        return option[this.optionValue];
      }
      return option;
    },

    selectOption(option) {
      this.$emit('on-select', option);
    },

    hide() {
      this.$emit('update:opened', false);
    },
  }

};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-dropdown-options {
  position: absolute;
  border: 1px solid lighten(#000, 80%);
  border-top: 0;
  background: #f2f2f2;
  padding: 5px 0;
  margin: 0;
  max-height: 190px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
   -ms-overflow-style: none;
}

.vnt-dropdown-options__item {
  @include component-base;
  @include text-overflow;

  line-height: 20px;
  color: #000100;
  cursor: pointer;
  display: block;
  padding: 8px 12px;

  &:hover {
    background: #dfdfdf;
  }
}
</style>
