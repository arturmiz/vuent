<template>
  <div class="vnt-autosuggest">

    <label class="vnt-autosuggest__label"
           :class="{'vnt-autosuggest__label--disabled': disabled}"
           v-if="label">
      {{ label }}
    </label>

    <div class="vnt-autosuggest__control"
         :class="{'vnt-autosuggest__control--focused-not-empty': hasFocusAndValue}"
         role="combobox">

      <input class="vnt-autosuggest__input"
             type="text"
             :disabled="disabled"
             :placeholder="placeholder"
             :value="value"
             @input="input"
             @focus="focus"
             @blur="blur"
             v-bind="$attrs" />

      <vnt-dropdown-options :options="hints"
                            :opened.sync="showHints"
                            @on-select="selectHint" />

    </div>

  </div>
</template>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-autosuggest {
  @include component-base();

  color: #000100;
  display: block;
  margin: 10px 0;
}

.vnt-autosuggest__label {
  display: block;
  padding: 10px 0;
  line-height: 20px;

  &--disabled {
    color: #999;
  }
}

.vnt-autosuggest__control {
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMyAxMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6cmdiYSgwLDAsMCwwLjgpO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTguNTMxLTEzYTQuNDE0LDQuNDE0LDAsMCwxLDEuMTg3LjE1OSw0LjQxNSw0LjQxNSwwLDAsMSwxLjA2Ni40NTEsNC41MjYsNC41MjYsMCwwLDEsLjkuNyw0LjUyNiw0LjUyNiwwLDAsMSwuNy45LDQuNDE1LDQuNDE1LDAsMCwxLC40NTEsMS4wNjZBNC40MTQsNC40MTQsMCwwLDEsMTMtOC41MzFhNC40MTQsNC40MTQsMCwwLDEtLjE1OSwxLjE4Nyw0LjQxNSw0LjQxNSwwLDAsMS0uNDUxLDEuMDY2LDQuNTI2LDQuNTI2LDAsMCwxLS43LjksNC41MjYsNC41MjYsMCwwLDEtLjkuNyw0LjQxNSw0LjQxNSwwLDAsMS0xLjA2Ni40NTEsNC40MTQsNC40MTQsMCwwLDEtMS4xODcuMTU5LDQuMzgsNC4zOCwwLDAsMS0xLjUyLS4yNjdBNC41NjMsNC41NjMsMCwwLDEsNS42NzUtNS4xTC42OTItLjEyMUEuMzkuMzksMCwwLDEsLjQwNiwwLC4zOS4zOSwwLDAsMSwuMTIxLS4xMjEuMzkuMzksMCwwLDEsMC0uNDA2LjM5LjM5LDAsMCwxLC4xMjEtLjY5Mkw1LjEtNS42NzVhNC41NjMsNC41NjMsMCwwLDEtLjc2OC0xLjMzNiw0LjM4LDQuMzgsMCwwLDEtLjI2Ny0xLjUyLDQuNDE0LDQuNDE0LDAsMCwxLC4xNTktMS4xODcsNC40MTUsNC40MTUsMCwwLDEsLjQ1MS0xLjA2Niw0LjUyNiw0LjUyNiwwLDAsMSwuNy0uOSw0LjUyNiw0LjUyNiwwLDAsMSwuOS0uNyw0LjQxNSw0LjQxNSwwLDAsMSwxLjA2Ni0uNDUxQTQuNDE0LDQuNDE0LDAsMCwxLDguNTMxLTEzWm0wLDguMTI1YTMuNTM3LDMuNTM3LDAsMCwwLDEuNDIyLS4yODksMy43MTMsMy43MTMsMCwwLDAsMS4xNjItLjc4NEEzLjcxMywzLjcxMywwLDAsMCwxMS45LTcuMTA5YTMuNTM3LDMuNTM3LDAsMCwwLC4yODktMS40MjJBMy41MzcsMy41MzcsMCwwLDAsMTEuOS05Ljk1M2EzLjcxMywzLjcxMywwLDAsMC0uNzg0LTEuMTYyQTMuNzEzLDMuNzEzLDAsMCwwLDkuOTUzLTExLjlhMy41MzcsMy41MzcsMCwwLDAtMS40MjItLjI4OSwzLjUzNywzLjUzNywwLDAsMC0xLjQyMi4yODksMy43MTMsMy43MTMsMCwwLDAtMS4xNjIuNzg0LDMuNzEzLDMuNzEzLDAsMCwwLS43ODQsMS4xNjIsMy41MzcsMy41MzcsMCwwLDAtLjI4OSwxLjQyMiwzLjUzNywzLjUzNywwLDAsMCwuMjg5LDEuNDIyLDMuNzEzLDMuNzEzLDAsMCwwLC43ODQsMS4xNjIsMy43MTMsMy43MTMsMCwwLDAsMS4xNjIuNzg0QTMuNTM3LDMuNTM3LDAsMCwwLDguNTMxLTQuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMykiLz48L3N2Zz4=');
    background-repeat: no-repeat;
    width: 13px;
    height: 13px;
    position: relative;
    margin-left: -24px;
  }

  &--focused-not-empty {
    &::after {
      display: none;
    }
  }
}

.vnt-autosuggest__input {
  @include component-input();

  padding: 0 30px 0 10px;

  &::-ms-clear {
    display: none;
  }

  .vnt-autosuggest__control--focused-not-empty & {
    padding-right: 0;
  }
}
</style>

<script>
import VntDropdownOptions from '../dropdown/Options.vue';

export default {
  name: 'VntAutosuggest',

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
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      hints: [],
      showHints: false,
      hasFocus: false
    };
  },

  computed: {
    hasFocusAndValue() {
      return this.hasFocus && String(this.value).length > 0;
    }
  },

  watch: {
    hints(hints) {
      this.showHints = hints.length > 0;
    }
  },

  methods: {
    input({target, value}) {
      const query = value || target.value;
      this.$emit('input', query);
      this.lookup(query);
    },

    focus() {
      this.toggleFocus();
    },

    blur() {
      this.toggleFocus();
    },

    toggleFocus() {
      this.hasFocus = !this.hasFocus;
    },

    lookup(query = '') {
      const lookupQuery = query.toLocaleLowerCase();
      this.hints = this.options
        .filter((option) =>
          String(option).toLocaleLowerCase().indexOf(lookupQuery) > -1)
        .sort();
    },

    selectHint(option) {
      if (!this.disabled) {
        this.$emit('input', option);
      }
    }

  }
};
</script>
