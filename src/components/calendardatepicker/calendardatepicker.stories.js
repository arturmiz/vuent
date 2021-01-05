import CalendarDatePicker from './CalendarDatePicker.vue';

export default {
  title: 'CalendarDatePicker',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  date: null
});

const template = `
  <div>
    <vnt-calendar-datepicker v-model="date" :disabled="disabled" />
    <p class="result">date: {{ date }}</p>
  </div>
`;

export const Default = (args, { argTypes }) => ({
  components: { CalendarDatePicker },
  data: () => createData(),
  props: Object.keys(argTypes),
  template
});

export const WithDate = (args, { argTypes }) => ({
  components: { CalendarDatePicker },
  data: () => {
    return {
      date: '2020-01-15'
    };
  },
  props: Object.keys(argTypes),
  template
});
