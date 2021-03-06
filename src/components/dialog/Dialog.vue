<template>
  <div v-if="opened"
       class="vnt-dialog-overlay">
    <div ref="dialog"
         class="vnt-dialog"
         role="dialog"
         tabindex="0"
         :aria-label="title"
         @keyup.esc="dismiss">
      <h1 class="vnt-dialog__title">
        {{ title }}
      </h1>
      <p class="vnt-dialog__content">
        {{ content }}
      </p>
      <div class="vnt-dialog__actions"
           :class="{'vnt-dialog__actions--single': buttons.length === 1}">
        <vnt-button v-for="button in buttons"
                    :key="button.tag"
                    :ref="button.tag"
                    :primary="button.isDefault"
                    :click="buttonClick(button.result)">
          {{ button.label }}
        </vnt-button>
      </div>
    </div>
  </div>
</template>

<script>
import VntButton from '../button';

const BTN_PREFIX = 'vnt-dialog-btn-';
const PRIMARY_BTN = `${BTN_PREFIX}primary`;
const DISMISS_BTN = `${BTN_PREFIX}dismiss`;
const DEFAULT_BTN_ATTR = 'default';

export default {
  name: 'VntDialog',

  components: {
    VntButton
  },

  props: {
    opened: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      buttons: [
        { label: 'Cancel', tag: DISMISS_BTN }
      ]
    };
  },

  watch: {
    opened() {
      this.$nextTick(() => {
        if (this.opened) {
          let focusedElement = this.$refs.dialog;

          if (this.$refs[PRIMARY_BTN]) {
            const [primaryBtn] = this.$refs[PRIMARY_BTN];

            if (primaryBtn && primaryBtn.primary) {
              focusedElement = primaryBtn.$el;
            }
          }

          focusedElement.focus();
        }
      });
    }
  },

  mounted() {
    const slots = this.$slots.default || [];

    slots
      .filter((slot) => slot.tag && slot.tag.startsWith(BTN_PREFIX))
      .forEach(({tag, data, children}) => {
        const { attrs } = data;

        const btn = {
          tag,
          label: children[0].text,
          result: attrs.result,
          isDefault: tag === PRIMARY_BTN && Object.keys(attrs).includes(DEFAULT_BTN_ATTR)
        };

        this.placeButton(btn);
      });
  },

  methods: {
    placeButton(btn) {
      const { tag } = btn;

      if (tag === PRIMARY_BTN) {
        this.buttons = [btn, ...this.buttons];
      } else if (tag === DISMISS_BTN) {
        const nonDismissBtns = this.buttons.filter(button => button.tag !== tag);
        this.buttons = [...nonDismissBtns, btn];
      } else {
        const [leftBtn, ...buttons] = this.buttons;

        if (leftBtn.tag === PRIMARY_BTN) {
          this.buttons = [leftBtn, btn, ...buttons];
        } else {
          this.buttons = [btn, leftBtn, ...buttons];
        }
      }
    },

    hide() {
      this.$emit('update:opened', false);
    },

    dismiss() {
      this.$emit('result', null);
      this.hide();
    },

    buttonClick(result = null) {
      return () => {
        this.$emit('result', result);
        this.hide();
      };
    }
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-dialog-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 10000;
}

.vnt-dialog {
  @include component-base;

  background: #fff;
  color: #000100;
  display: block;
  padding: 24px;
  min-width: 400px;
  max-width: 50vw;
  border: 1px solid var(--vnt-accent-color, $fallbackAccentColor);
}

.vnt-dialog__title {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.vnt-dialog__content {
  margin: 16px 0 24px;
}

.vnt-dialog__actions {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .vnt-button {
    flex: 1 1 0;
    max-width: 50%;
    padding: 0 8px;
  }

  &--single {
      justify-content: flex-end;
  }
}

</style>
