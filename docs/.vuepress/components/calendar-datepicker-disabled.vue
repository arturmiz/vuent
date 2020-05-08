<template>
  <div class="playground">
    <vnt-calendar-datepicker v-model="date" disabled />
    <div class="result">date: {{ date }}</div>
  </div>
</template>

<script>
import { VntCalendarDatepicker } from "../../../src/components";

export default {
  name: "CalendarDatepickerBasic",
  components: {
    VntCalendarDatepicker
  },
  data() {
    return {
      date: "2020-04-05"
    };
  }
};
</script>
