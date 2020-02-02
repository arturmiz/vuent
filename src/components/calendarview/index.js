import CalendarView from './CalendarView.vue';

CalendarView.install = function (Vue) {
  Vue.component(CalendarView.name, CalendarView);
};

export default CalendarView;
