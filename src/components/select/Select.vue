<template>
  <div class="vnt-select">

    <label class="vnt-select__title"
           :class="{'vnt-select__title--disabled': disabled}">
      <slot>{{ label }}</slot>
    </label>

    <div class="vnt-select__control"
         role="combobox">

      <div class="vnt-select__chosen"
           :class="{'vnt-select__chosen--disabled': disabled}"
           @click="toggleOptions">
        <span class="vnt-select__chosen-label"
              v-text="chosenText"></span>
        <span class="vnt-select__options-toggle"
              role="presentation"></span>
      </div>

      <ul class="vnt-select__options"
          role="listbox"
          v-show="isOpened">

        <li class="vnt-select__options-item"
            role="listitem"
            v-for="option in options"
            :key="option[optionValue]"
            @click="selectValue(option)">{{ option[optionText] }}</li>

      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VntSelect',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Select'
    },
    optionValue: {
      type: String,
      default: 'value'
    },
    optionText: {
      type: String,
      default: 'label'
    },
    options: {
      type: Array,
      default() {
        return [];
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
      const chosenOption = this.options.find(option => option[this.optionValue] === this.value);
      return chosenOption ? chosenOption[this.optionText] : '';
    }
  },

  watch: {
    isOpened(newIsOpened) {
      if (newIsOpened) {
        document.body.addEventListener('click', this.toggleOptions, true);
      } else {
        document.body.removeEventListener('click', this.toggleOptions, true);
      }
    }
  },

  methods: {
    selectValue(option) {
      if (!this.disabled) {
        this.$emit('input', option[this.optionValue]);
        this.isOpened = false;
      }
    },

    toggleOptions() {
      if (!this.disabled) {
        this.isOpened = !this.isOpened;
      }
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

  &--disabled {
    color: lighten(#000, 60%);
  }
}

.vnt-select__control {
  position: relative;
}

.vnt-select__chosen {
  @include component-base();

  color: lighten(#000, 40%);
  height: 30px;
  line-height: 30px;
  display: flex;
  border: 2px solid lighten(#000, 60%);
  justify-content: space-between;

  &--disabled {
    background-color: lighten(#000, 80%);
    border-color: #a3a3a3;
  }

  &:not(&--disabled) {
    &:hover {
      border-color: lighten(#000, 40%);
      color: lighten(#000, 20%);
      cursor: pointer;
    }
  }

}

.vnt-select__chosen-label {
  padding: 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

@mixin icon-select-options-toggle($fillColor) {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.777 6.416"><path class="vnt-select__options-toggle-arrow" d="M6-3.9l5.361-5.361.527.527L6-2.848.111-8.736l.527-.527Z" transform="translate(-0.111 9.264)"/></svg>');

  .vnt-select__options-toggle-arrow {
    fill: $fillColor;
  }
}

.vnt-select__options-toggle {
  @include icon-select-options-toggle( lighten(#000, 20%) );

  background-position: center center;
  background-repeat: no-repeat;
  width: 12px;
  margin: 0 9px;

  .vnt-select__chosen--disabled & {
    @include icon-select-options-toggle(#7f7f7f);
  }
}

.vnt-select__options {
  position: absolute;
  border: 1px solid lighten(#000, 80%);
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
