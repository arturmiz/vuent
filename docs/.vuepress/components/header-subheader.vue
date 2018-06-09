<template>
  <div class="playground">
    <vnt-header>
      <span slot="header">Header</span>
      <span slot="subheader">Subheader</span>
    </vnt-header>
  </div>
</template>

<script>
import { VntHeader } from '../../../src/components';

export default {
  name: 'HeaderSubheader',
  components: {
    VntHeader
  }
}
</script>
