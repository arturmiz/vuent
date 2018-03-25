export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('update:checked', !this.checked);
      }
    }
  }
};
