<style lang="scss">
@import '../scss/mixins/component';

:root {
  --vnt-accent-color: #{$fallbackAccentColor};
}
</style>

<script>
const Vnt = {
  setAccentColor(color) {
    document.body.style.setProperty('--vnt-accent-color', color);
  }
};
export default Vnt;
</script>
