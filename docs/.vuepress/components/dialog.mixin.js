import { VntDialog, VntButton } from '../../../src/components';

export default {
  components: {
    VntButton,
    VntDialog
  },
  data() {
    return {
      result: undefined,
      opened: false
    }
  },
  methods: {
    showDialog() {
      this.opened = true;
    },
    onresult(result) {
      this.result = result;
    }
  }
}
