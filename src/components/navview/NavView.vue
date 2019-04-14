<template>
  <article class="vnt-navview">
    <aside class="vnt-navview__pane"
           :class="{'vnt-navview__pane--auto': displayMode === 'auto',
                    'vnt-navview__pane--opened': isPaneOpened}">

      <div class="vnt-navview__pane-header">
          <vnt-navview-menu-button :is-pane-opened.sync="isPaneOpened" />

        <div class="vnt-navview__pane-title">
          <slot name="paneHeader">
          {{ paneTitle }}
          </slot>
        </div>
      </div>

        <ul class="vnt-navview__items">

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
    const content = slots.find(el => el.tag === 'vnt-navview-content');

    this.$slots.paneHeader = paneHeader ? paneHeader.children : [];
    this.$slots.content = content ? content.children : [];
    this.$slots.default = [];
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

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
  width: 48px;
  padding: 12px;
  overflow: hidden;
  box-sizing: border-box;
  background: #f2f2f2;
  transition: width cubic-bezier(0.8, 0, 0.2, 1) .3s;

  &--auto {

    @media screen and (min-width: 641px) {
      .vnt-navview__pane-title {
        visibility: visible;
      }
    }

    @media screen and (min-width: 1008px) {
      width: 320px;

      .vnt-navview__pane-toggle {
        display: none;
      }
    }
  }

  &--opened {
    flex: 0 0 auto;
    width: 100vw;

    @media screen and (min-width: 321px) {
      width: 320px;
    }
  }
}


.vnt-navview__pane-header {
  display: flex;
  max-height: 20px;
}

.vnt-navview__pane-title {
  padding: 0 12px;
  font-weight: 600;
  visibility: hidden;

  .vnt-navview__pane--opened & {
    visibility: visible;
  }
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
