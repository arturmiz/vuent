<style lang="scss">
@import '../../scss/mixins/component';

.vnt-tabs {
  @include component-base;

  color: #000100;
  display: block;
  margin: 10px 0;
}

.vnt-tabs__navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}

.vnt-tabs__header {
  display: inline-block;
  padding: 0 0 8px 0;
  margin: 0 8px;
  font-size: 24px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &--active {
    border-bottom: 2px solid var(--vnt-accent-color, $fallbackAccentColor);
  }
}

.vnt-tabs__tab {
  display: none;
  margin: 15px 0;

  &--active {
    display: block;
  }
}
</style>

<script>
const ACTIVE_HEADER_CLASS = 'vnt-tabs__header--active';
const ACTIVE_TAB_CLASS = 'vnt-tabs__tab--active';

export default {
  name: 'VntTabs',

  data() {
    return {
      length: 0
    };
  },

  methods: {
    switchTab(tabIndex) {
      for(let i=0; i < this.length; i++) {
        this.$refs[`nav-${i}`].classList.remove(ACTIVE_HEADER_CLASS);
        this.$refs[`tab-${i}`].classList.remove(ACTIVE_TAB_CLASS);
      }

      this.$refs[`nav-${tabIndex}`].classList.add(ACTIVE_HEADER_CLASS);
      this.$refs[`tab-${tabIndex}`].classList.add(ACTIVE_TAB_CLASS);
    }
  },

  render(createElement) {
    const slots = this.$slots.default || [];
    const headers = [];
    const tabs = [];

    slots
      .filter(tab => tab.tag === 'vnt-tab')
      .forEach((tab, index) => {
        const attrs = tab.data.attrs;
        const isActive = Object.keys(attrs).indexOf('active') > -1;

        const header = createElement('li', {
          staticClass: 'vnt-tabs__header',
          class: {
            [ACTIVE_HEADER_CLASS]: isActive
          },
          on: {
            click: this.switchTab.bind(this, index)
          },
          ref: `nav-${index}`,
          key: `nav-${index}`
        }, [attrs.label]);

        headers.push(header);

        const content = createElement('div', {
          staticClass: 'vnt-tabs__tab',
          class: {
            [ACTIVE_TAB_CLASS]: isActive
          },
          ref: `tab-${index}`,
          key: `tab-${index}`
        }, tab.children);

        tabs.push(content);
      });

    this.length = tabs.length;

    return createElement('div', {
      staticClass: 'vnt-tabs'
    }, [
      createElement('ul', {
        staticClass: 'vnt-tabs__navigation'
      }, headers),
      createElement('div', {
        staticClass: 'vnt-tabs__container'
      }, tabs)
    ]);
  }
};
</script>
