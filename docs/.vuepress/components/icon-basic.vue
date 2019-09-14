<template>
  <vnt-icon :name="name" />
</template>

<script>
import { VntIcon } from '../../../src/components';

export default {
  name: 'IconBasic',
  components: {
    VntIcon
  },
  props: ['name']
}
</script>
