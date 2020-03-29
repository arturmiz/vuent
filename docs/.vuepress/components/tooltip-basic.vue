<template>
  <div class="playground">
    <vnt-button>
      Hover me
      <vnt-tooltip>Tooltip text</vnt-tooltip>
    </vnt-button>
  </div>
</template>

<script>
import { VntTooltip, VntButton } from '../../../src/components';

export default {
  name: 'TooltipBasic',
  components: {
    VntButton,
    VntTooltip
  }
}
</script>
