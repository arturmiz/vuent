<script>
export default {
  name: 'VntHeader',

  render(createElement) {
    let header = null;
    let subheader = null;

    if (this.$slots.header || this.$slots.default) {
      header = createElement('div', {
        attrs: {
          class: 'vnt-header__header'
        }
      }, this.$slots.header || this.$slots.default);
    }

    if (this.$slots.subheader) {
      subheader = createElement('div', {
        attrs: {
          class: 'vnt-header__subheader'
        }
      }, this.$slots.subheader);
    }

    return createElement('div', {
      attrs: {
        class: 'vnt-header'
      }
    }, [header, subheader]);
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-header {
  @include component-base();

  color: #000100;
  font-weight: 300;
}

%clear-margin {
  margin: 0.2em 0;

  & > * {
    margin: 0;
  }
}

.vnt-header__header {
  @extend %clear-margin;

  font-size: 46px;
  line-height: 62px;
}

.vnt-header__subheader {
  @extend %clear-margin;

  font-size: 34px;
  line-height: 46px;
}
</style>
