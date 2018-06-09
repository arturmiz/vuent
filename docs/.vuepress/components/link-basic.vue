<template>
  <div class="playground">
    <vnt-link href="http://google.com" title="Link to Google">Google</vnt-link>
  </div>
</template>

<script>
import { VntLink } from '../../../src/components';

export default {
  name: 'LinkBasic',
  components: {
    VntLink
  }
}
</script>
