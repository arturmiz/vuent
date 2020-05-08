import { storiesOf } from '@storybook/vue';

/* eslint no-undef: 0 */
storiesOf('CalendarDatePicker', module)
  .add('default', () => ({
    data() {
      return {
        date: ''
      };
    },
    template: `
      <div>
        <vnt-calendar-datepicker v-model="date" />
        <p class="result">date: {{ date }}</p>
      </div>`
  }))
  .add('disabled', () => ({
    data() {
      return {
        date: '2020-01-15'
      };
    },
    template: `
      <div>
        <vnt-calendar-datepicker v-model="date" disabled />
        <p class="result">date: {{ date }}</p>
      </div>`
  }))
  .add('with date', () => ({
    data() {
      return {
        date: '2020-01-15'
      };
    },
    template: `
      <div>
        <vnt-calendar-datepicker v-model="date" />
        <p class="result">date: {{ date }}</p>
      </div>`
  }));
