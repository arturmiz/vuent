<script>
export default {
  name: 'VntNavview',

  render(createElement) {
    const slots = this.$slots.default || [];
    const content = slots.find(el => el.tag === 'vnt-navview-content');

    return createElement('article', {
      staticClass: 'vnt-navview'
    }, [
      createElement('aside', {
        staticClass: 'vnt-navview__sidebar'
      }),
      createElement('section', {
        staticClass: 'vnt-navview__content'
      }, content.children)
    ]);
  }
};
</script>

<style lang="scss">
@import '../../scss/mixins/component';

.vnt-navview {
  @include component-base;

  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}

.vnt-navview__sidebar {
  flex: 1 1 0;
  background: #f2f2f2;
  max-width: 320px;
  overflow: hidden;
  padding: 12px;
  box-sizing: border-box;

  @media screen and (min-width: 640px) {
    min-width: 320px;
  }
}

.vnt-navview__content {
  flex: 2 2 0;
  background: #fff;
  padding: 0 12px;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (min-width: 640px) {
    padding: 0 24px;
  }
}
</style>
