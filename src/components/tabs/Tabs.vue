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

.vnt-tabs__container {

}

.vnt-tabs__tab {
  display: none;

  &--active {
    display: block;
  }
}
</style>

<script>
export default {
  name: 'VntTabs',

  data() {
    return {
      length: 0
    };
  },

  methods: {
    switchTab(index) {
      for(let i=0; i < this.length; i++) {
        this.$refs['nav-' + i].setAttribute('class', 'vnt-tabs__header');
        this.$refs['tab-' + i].setAttribute('class', 'vnt-tabs__tab');
      }

      this.$refs['nav-' + index].setAttribute('class',
        `${this.$refs['nav-' + index].getAttribute('class')} vnt-tabs__header--active`);

      this.$refs['tab-' + index].setAttribute('class',
        `${this.$refs['tab-' + index].getAttribute('class')} vnt-tabs__tab--active`);
    },
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
            'vnt-tabs__header--active': isActive
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
            'vnt-tabs__tab--active': isActive
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
