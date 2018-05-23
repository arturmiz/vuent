<template>
  <div class="vnt-select">

    <label class="vnt-select__title">
      <slot>{{ label }}</slot>
    </label>

    <div class="vnt-select__control"
         role="combobox">

      <div class="vnt-select__chosen"
           @click="toggleOptions">

        <span class="vnt-select__chosen-label"
              v-text="chosenText"></span>

        <svg class="vnt-select__options-toggle"
             role="presentation"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 11.777 6.416">
          <path d="M6-3.9l5.361-5.361.527.527L6-2.848.111-8.736l.527-.527Z"
                transform="translate(-0.111 9.264)"/>
        </svg>

      </div>

      <ul class="vnt-select__options"
          role="listbox"
          v-show="isOpened">

        <li class="vnt-select__options-item"
            v-for="option in options"
            :key="option.value"
            @click="selectValue(option)">{{ option.label }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VntSelect',

  props: {
    label: {
      type: String,
      default: 'Select'
    },
    options: {
      type: Array,
      default() {
        return [
          { value: 1, label: 'List item 1'},
          { value: 2, label: 'List item 2'},
          { value: 3, label: 'List item 3 that has a much much much longer string than others'},
          { value: 4, label: 'List item 4'},
          { value: 5, label: 'List item 5'},
          { value: 6, label: 'List item 6'},
        ];
      }
    },
    value: {
      type: [Number, String, Object],
      default: null
    }
  },

  data() {
    return {
      isOpened: false,
    };
  },

  computed: {
    chosenText() {
      const chosenOption = this.options.find(option => option.value === this.value);
      return chosenOption ? chosenOption.label : '';
    }
  },

  methods: {
    selectValue(option) {
      this.$emit('input', option.value);
      this.isOpened = false;
    },

    toggleOptions() {
      this.isOpened = !this.isOpened;
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-select {
  @include component-base();

  margin: 10px 0;
}

.vnt-select__title {
  display: block;
  line-height: 30px;
  margin-bottom: 4px;
  color: #000100;
}

.vnt-select__control {
  position: relative;
}

.vnt-select__chosen {
  @include component-base();

  height: 30px;
  line-height: 30px;
  display: flex;
  border: 2px solid lighten(#000, 60%);
  justify-content: space-between;

  &:hover {
    border-color: lighten(#000, 40%);
  }
}

.vnt-select__chosen-label {
  padding: 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.vnt-select__options-toggle {
  width: 12px;
  padding: 0 9px;
  color: lighten(#000, 20%);
  cursor: pointer;
}

.vnt-select__options {
  position: absolute;
  border: 1px solid #ccc;
  background: #f2f2f2;
  padding: 5px 0;
  margin: 0;
  max-height: 190px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}

.vnt-select__options-item {
  @include component-base();

  line-height: 20px;
  color: #000100;
  cursor: pointer;
  display: block;
  padding: 8px 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
