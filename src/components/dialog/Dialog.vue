<template>
  <div class="vnt-dialog-overlay"
       v-if="opened">
    <div class="vnt-dialog"
         role="alert"
         tabindex="0"
         ref="dialog"
         @keyup.esc="hide">
      <h1 class="vnt-dialog__title">{{ title }}</h1>
      <p class="vnt-dialog__content">{{ content }}</p>
      <div class="vnt-dialog__actions">
        <vnt-button v-for="button in buttons"
                    :key="button.tag"
                    :click="buttonClick(button.result)">
          {{ button.label }}
        </vnt-button>
      </div>
    </div>
  </div>
</template>

<script>
import VntButton from '../button';

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
        { label: 'Cancel', tag: 'vnt-dialog-btn-dismiss' }
      ]
    };
  },

  watch: {
    opened() {
      this.$nextTick(() => {
        if (this.opened) {
          this.$refs.dialog.focus();
        }
      });
    }
  },

  mounted() {
    const slots = this.$slots.default || [];

    slots
      .filter((slot) => slot.tag && slot.tag.startsWith('vnt-dialog-btn-'))
      .forEach(({tag, data, children}) => {
        const attrs = data.attrs;

        const btn = {
          tag,
          label: children[0].text,
          result: attrs.result,
          isDefault: Object.keys(attrs).includes('default')
        };

        if (tag === 'vnt-dialog-btn-primary') {
          this.buttons.unshift(btn);
        } else if (tag === 'vnt-dialog-btn-dismiss') {
          const dismissBtn = this.buttons.find(btn => btn.tag === tag);
          if (dismissBtn) {
            Object.assign(dismissBtn, btn);
          } else {
            this.buttons.push(btn);
          }
        } else {
          this.buttons.splice(1, 0, btn);
        }
      });
  },

  methods: {
    hide() {
      this.$emit('update:opened', false);
    },

    buttonClick(result) {
      return function() {
        // TODO: do something with result
        console.log(result);
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.vnt-dialog {
  @include component-base;

  background: #fff;
  color: #000100;
  display: block;
  padding: 24px;
  min-width: 400px;
  border: 2px solid var(--vnt-accent-color, $fallbackAccentColor);
}

.vnt-dialog__title {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.vnt-dialog__content {
  margin: 16px 0;
}

.vnt-dialog__actions {
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
}

</style>
