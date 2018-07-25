<template>
  <div class="vnt-autosuggest">

    <label class="vnt-input__text"
           v-if="label">
      {{ label }}
    </label>

    <div class="vnt-autosuggest__control"
         role="combobox">

      <input class="vnt-autosuggest__input vnt-input__control "
             type="text"
             :disabled="disabled"
             :placeholder="placeholder"
             :value="value"
             @input="input" />

      <ul class="vnt-select__options"
          role="listbox"
          v-show="showHints">

        <li class="vnt-select__options-item"
            role="listitem"
            v-for="option in hints"
            :key="option"
            @click="selectHint(option)">{{ option }}</li>

      </ul>
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

.vnt-autosuggest__control {
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
}

.vnt-autosuggest__input {
  padding: 0 30px 0 10px;
}
</style>

<script>
export default {
  name: 'VntAutosuggest',

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
    };
  },

  watch: {
    hints(hints) {
      this.showHints = hints.length > 0;
    },

    showHints(hintsVisible) {
      if (hintsVisible) {
        document.body.addEventListener('click', this.hideHints, true);
      } else {
        document.body.removeEventListener('click', this.hideHints, true);
      }
    }
  },

  methods: {
    input($event) {
      const query = $event.target.value;
      this.$emit('input', query);
      this.lookup(query);
    },

    lookup(query) {
      this.hints = this.options
        .filter((option) => String(option).toLocaleLowerCase().indexOf(query) > -1);
    },

    selectHint(option) {
      if (!this.disabled) {
        this.$emit('input', option);
        this.showHints = false;
      }
    },

    hideHints() {
      if (!this.disabled) {
        this.showHints = false;
      }
    }

  }
};
</script>
