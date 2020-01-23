<template>
  <article class="vnt-navview">
    <aside class="vnt-navview__pane"
           :class="{'vnt-navview__pane--auto': displayMode === 'auto',
                    'vnt-navview__pane--opened': isPaneOpened}">
      <div>
        <div class="vnt-navview__pane-header">
          <vnt-navview-menu-button :is-pane-opened.sync="isPaneOpened" />

          <div class="vnt-navview__pane-title">
            <slot name="paneHeader">
              {{ paneTitle }}
            </slot>
          </div>
        </div>

        <ul class="vnt-navview__items">
          <slot name="items"></slot>
        </ul>
      </div>

      <ul class="vnt-navview__pane-footer">
        <slot name="paneFooter"></slot>
      </ul>
    </aside>

    <div class="vnt-navview__viewport">
      <header v-if="header"
              class="vnt-navview__header">
        <vnt-header>{{ header }}</vnt-header>
      </header>
      <section class="vnt-navview__content">
        <slot name="content">
          Content goes here
        </slot>
      </section>
    </div>

  </article>
</template>

<script>
import VntHeader from '../header/Header.vue';
import VntNavviewMenuButton from './MenuButton.vue';

const DISPLAY_MODES = {
  AUTO: 'auto',
};

export default {
  name: 'VntNavview',

  components: {
    VntNavviewMenuButton,
    VntHeader
  },

  props: {
    displayMode: {
      type: String,
      default: DISPLAY_MODES.AUTO
    },
    header: {
      type: String,
      default: null
    },
    paneTitle: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      isPaneOpened: false
    };
  },

  beforeMount() {
    const slots = this.$slots.default || [];
    const paneHeader = slots.find(el => el.tag === 'vnt-navview-pane-header');
    const items = slots.find(el => el.tag === 'vnt-navview-items');
    const content = slots.find(el => el.tag === 'vnt-navview-content');
    const paneFooter = slots.find(el => el.tag === 'vnt-navview-pane-footer');

    if (paneHeader) {
      this.$slots.paneHeader = paneHeader.children;
    }

    if (content) {
      this.$slots.content = content.children;
    }

    if (paneFooter) {
      this.$slots.paneFooter = paneFooter.children;
    }

    this.$slots.items = items ? items.children : [];
    this.$slots.default = [];
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';
@import '../../scss/mixins/text';

.vnt-navview {
  @include component-base;

  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.vnt-navview__pane {
  box-sizing: border-box;
  background: #f2f2f2;
  transition: width cubic-bezier(0.8, 0, 0.2, 1) .3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &--auto {
    @media screen and (max-width: 640px) {
      width: 0;

      .vnt-navview__item-icon {
        visibility: hidden;
      }

      .vnt-navview__pane-toggle {
        position: relative;
        top: 12px;
        left: 12px;
      }
    }

    @media screen and (min-width: 641px) and (max-width: 1007px) {
      width: 48px;
      padding: 12px;
      overflow: hidden;

      .vnt-navview__pane-title {
        visibility: visible;
      }
    }

    @media screen and (min-width: 1008px) {
      width: 320px;
      padding: 12px;
      overflow: hidden;

      .vnt-navview__pane-title {
        visibility: visible;
      }

      .vnt-navview__pane-toggle {
        display: none;
      }
    }
  }

  &--opened {
    flex: 0 0 auto;
    width: 100vw;
    padding: 12px;
    overflow: hidden;

    @media screen and (min-width: 321px) {
      width: 320px;
    }

    &.vnt-navview__pane--auto {
      @media screen and (max-width: 640px) {
        width: 320px;

        .vnt-navview__item-icon {
          visibility: visible;
        }

        .vnt-navview__pane-toggle {
          position: static;
        }
      }
    }
  }
}

.vnt-navview__pane-header {
  display: flex;
  max-height: 20px;
}

.vnt-navview__pane-title {
  @include text-overflow;

  padding: 0 12px;
  font-weight: 600;
  visibility: hidden;

  .vnt-navview__pane--opened & {
    visibility: visible;
  }
}

.vnt-navview__items,
.vnt-navview__pane-footer {
  list-style: none;
  margin: 24px 0;
  padding: 0;
  width: 100%;

  &:empty {
    margin: 0;
  }
}

.vnt-navview__pane-footer {
  margin-bottom: 0;
}

.vnt-navview__viewport {
  flex: 2 2 0;
  background: #fff;
  padding: 12px;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (min-width: 641px) {
    padding: 0 24px;
  }
}

.vnt-navview__content {
  margin: 8px 0;
}
</style>
