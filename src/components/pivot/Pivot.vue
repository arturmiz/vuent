<style lang="scss">
@import '../../scss/mixins/component';

.vnt-pivot {
  @include component-base;

  color: #000100;
  display: block;
  margin: 10px 0;
}

.vnt-pivot__navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}

.vnt-pivot__header {
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

.vnt-pivot-item {
  display: none;
  margin: 15px 0;

  &--active {
    display: block;
  }
}
</style>

<script>
const ACTIVE_HEADER_CLASS = 'vnt-pivot__header--active';
const ACTIVE_ITEM_CLASS = 'vnt-pivot-item--active';

export default {
  name: 'VntPivot',

  data() {
    return {
      length: 0
    };
  },

  methods: {
    switchItem(itemIndex) {
      for(let i=0; i < this.length; i++) {
        this.$refs[`nav-${i}`].classList.remove(ACTIVE_HEADER_CLASS);
        this.$refs[`item-${i}`].classList.remove(ACTIVE_ITEM_CLASS);
      }

      this.$refs[`nav-${itemIndex}`].classList.add(ACTIVE_HEADER_CLASS);
      this.$refs[`item-${itemIndex}`].classList.add(ACTIVE_ITEM_CLASS);
    }
  },

  render(createElement) {
    const slots = this.$slots.default || [];
    const headers = [];
    const items = [];

    slots
      .filter(pivotItem => pivotItem.tag === 'vnt-pivot-item')
      .forEach((pivotItem, index) => {
        const attrs = pivotItem.data.attrs;
        const isActive = attrs && (!!attrs.active || attrs.active === '');

        const header = createElement('li', {
          staticClass: 'vnt-pivot__header',
          class: {
            [ACTIVE_HEADER_CLASS]: isActive
          },
          on: {
            click: this.switchItem.bind(this, index)
          },
          ref: `nav-${index}`,
          key: `nav-${index}`
        }, [attrs.label]);

        headers.push(header);

        const content = createElement('div', {
          staticClass: 'vnt-pivot-item',
          class: {
            [ACTIVE_ITEM_CLASS]: isActive
          },
          ref: `item-${index}`,
          key: `item-${index}`
        }, pivotItem.children);

        items.push(content);
      });

    this.length = items.length;

    return createElement('div', {
      staticClass: 'vnt-pivot'
    }, [
      createElement('ul', {
        staticClass: 'vnt-pivot__navigation'
      }, headers),
      createElement('div', {
        staticClass: 'vnt-pivot__container'
      }, items)
    ]);
  }
};
</script>
