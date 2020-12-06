<template>
  <div class="vnt-select">

    <label v-if="label"
           class="vnt-select__title"
           :class="{'vnt-select__title--disabled': disabled}">
      <slot>{{ label }}</slot>
    </label>

    <div class="vnt-select__control"
         role="combobox">

      <div class="vnt-select__chosen"
           :class="{'vnt-select__chosen--disabled': disabled}"
           @click="toggleOptions">
        <span v-if="chosenText"
              class="vnt-select__chosen-label">{{ chosenText }}</span>
        <span v-else
              class="vnt-select__chosen-label">{{ placeholder }}</span>
        <span class="vnt-select__options-toggle"
              role="presentation"></span>
      </div>

      <vnt-dropdown-options :options="options"
                            :option-value="optionValue"
                            :option-text="optionText"
                            :opened.sync="isOpened"
                            @on-select="selectValue" />

    </div>

  </div>
</template>

<script>
import VntDropdownOptions from '../dropdown/Options.vue';

export default {
  name: 'VntSelect',

  components: {
    VntDropdownOptions
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
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
    placeholder: {
      type: String,
      default: ''
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

  methods: {
    selectValue(option) {
      if (!this.disabled) {
        this.$emit('input', option[this.optionValue]);
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
@import '../../scss/mixins/text';

.vnt-select {
  @include component-base();

  margin: 12px 0;
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
  @include text-overflow;

  padding: 0 12px;
}

.vnt-select__options-toggle {
  width: 9px;
  height: 9px;
  box-sizing: border-box;
  margin: 8px 9px;
  border-width: 1px;
  border-style: solid;
  border-color: lighten(#000, 20%);
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-45deg);

  .vnt-select__chosen--disabled & {
    border-left-color: #7f7f7f;
    border-bottom-color: #7f7f7f;
  }
}

</style>
