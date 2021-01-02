import { storiesOf } from '@storybook/vue';

const items = [
  { label: 'Pivot 1', active: true, text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.' },
  { label: 'Pivot 2', active: false, text: 'Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.' },
  { label: 'Pivot 3', active: false, text: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae' }
];

const createData = () => ({
  items
});

/* eslint no-undef: 0,
          no-unused-vars: 0 */
storiesOf('Pivot', module)
  .add('default', () => ({
    render: (h) => (
      <vnt-pivot>
        <vnt-pivot-item label="Pivot 1" active>
          <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.</p>
        </vnt-pivot-item>
        <vnt-pivot-item label="Pivot 2">
          <p>Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. </p>
        </vnt-pivot-item>
        <vnt-pivot-item label="Pivot 3">
          <p>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae</p>
        </vnt-pivot-item>
      </vnt-pivot>
    )
  }), {
    notes: `
      ## Configuration

      \`active\` attribute

      Determines which tab should be set as active.
      Must be added to \`vnt-pivot-item\` element that should be active at start.
    `
  })
  .add('active', () => ({
    data: () => createData(),
    template: `
      <span>
        <vnt-pivot>
          <vnt-pivot-item v-for="item in items" :key="item.label" :label="item.label" :active="item.active">
            <p>{{ item.text }}</p>
          </vnt-pivot-item>
        </vnt-pivot>
      </span>`
  }));
