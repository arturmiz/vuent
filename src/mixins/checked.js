export default {
  model: {
    prop: 'checked',
    event: 'change'
  },

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
        this.$emit('change', !this.checked);
      }
    }
  }
};
