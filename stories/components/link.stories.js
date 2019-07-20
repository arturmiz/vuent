import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Link', module)
  .add('default', () => ({
    render: (h) => (
      <vnt-link href="http://google.com" title="Link to Google">Google</vnt-link>
    )
  }))
  .add('disabled', () => ({
    render: (h) => (
      <vnt-link href="http://google.com" title="Link to Google" disabled>Google</vnt-link>
    )
  }))
  .add('click', () => ({
    methods: {
      sayHi: action('click')
    },
    template: '<vnt-link :click="sayHi">Say Hi!</vnt-link>'
  }));
