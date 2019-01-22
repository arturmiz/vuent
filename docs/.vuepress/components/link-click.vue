<template>
  <div class="playground">
    <vnt-link :click="sayHi">Say Hi!</vnt-link>
  </div>
</template>

<script>
import { VntLink } from '../../../src/components';

export default {
  name: 'LinkClick',
  components: {
    VntLink
  },
  methods: {
    sayHi() {
      window.alert('Hi!');
    }
  }
}
</script>
