<template>
  <label class="vnt-radio">
    <input class="vnt-radio__input"
           type="radio"
           :disabled="disabled"
           :name="name"
           v-bind="$attrs"
           @change="toggle" />
    <span class="vnt-radio__icon"></span>
    <span class="vnt-radio__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VntRadio',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Radio'
    },
    name: {
      type: String,
      default: 'radio'
    }
  },

  mounted() {
    if (!this.$vnode) {
      return;
    }

    const vModel = this.$vnode.data.model || {};
    const vModelValue = vModel.value;

    if (!!vModelValue && vModelValue === this.$attrs.value) {
      const input = this.$el.querySelector('input');
      input.setAttribute('checked', true);
    }
  },

  methods: {
    toggle($event) {
      if (!this.disabled) {
        this.$emit('input', $event.target.value);
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-radio {
  @include component-base();

  position: relative;
  display: flex;
  align-items: center;
  min-height: 30px;
}

.vnt-radio__input {
  position: absolute;
  visibility: hidden;

  &:checked + .vnt-radio__icon {
    border-color: $accentColor;

    &:after {
      content: '';
    }
  }

  &:disabled + .vnt-radio__icon {
    border-color: #999;
  }

  &:disabled:checked + .vnt-radio__icon {
    &:after {
      background: #999;
    }
  }
}

.vnt-radio__icon {
  background: transparent;
  border: 2px solid #333;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  flex: 0 0 auto;

  &:after {
    background: #000100;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
  }
}

.vnt-radio__text {
  padding: 0 9px;
  color: #000100;
  line-height: 20px;

  .vnt-radio__input:disabled ~ & {
    color: #999;
  }
}
</style>
