/* eslint-disable */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vuent!',
    checkboxChecked: false,
    toggleChecked: false,
    radioValue: '456',
    sliderValue: 20,
    chosenValue: 1,
    ratingValue: 2,
    optionsList: [
      { value: 1, label: 'List item 1'},
      { value: 2, label: 'List item 2'},
      { value: 3, label: 'List item 3 that has a much much much longer string than others'},
      { value: 4, label: 'List item 4'},
      { value: 5, label: 'List item 5'},
      { value: 6, label: 'List item 6'},
    ],
    dialogVisible: false
  },
  methods: {
    dialogToggle() {
      this.dialogVisible = !this.dialogVisible;
    },
    linkClick() {
      window.alert('123');
    }
  }
});
