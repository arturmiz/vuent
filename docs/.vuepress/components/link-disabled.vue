<template>
  <div class="playground">
    <vnt-link href="http://google.com" disabled>Google</vnt-link>
  </div>
</template>

<script>
import { VntLink } from '../../../src/components';

export default {
  name: 'LinkDisabled',
  components: {
    VntLink
  }
}
</script>
