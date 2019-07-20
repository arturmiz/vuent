import { storiesOf } from '@storybook/vue';

storiesOf('Tabs', module)
  .add('default', () => ({
    render: (h) => (
      <vnt-tabs>
        <vnt-tab label="Tab 1" active>
          <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.</p>
        </vnt-tab>
        <vnt-tab label="Tab 2">
          <p>Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. </p>
        </vnt-tab>
        <vnt-tab label="Tab 3">
          <p>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae</p>
        </vnt-tab>
      </vnt-tabs>
    )
  }), {
    notes: `
      ## Configuration

      \`active\` attribute

      Determines which tab should be set as active.
      Must be added to \`vnt-tab\` element that should be active at start.
    `
  });
