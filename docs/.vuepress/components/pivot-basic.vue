<template>
  <div class="playground">
    <vnt-pivot>
      <vnt-pivot-item label="Item 1" active>
        <p>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
          Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a,
          ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.
          <br /><br />
          Phasellus fermentum in, dolor.
          Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames
          ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
        </p>
      </vnt-pivot-item>
      <vnt-pivot-item label="Item 2">
        <p>
          Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.
          Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam
          pede cursus vitae, ultricies.
        </p>
      </vnt-pivot-item>
      <vnt-pivot-item label="Item 3">
        <p>
          Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci
          luctus non, consectetuer lobortis quis, varius in, purus.
        </p>
      </vnt-pivot-item>
    </vnt-pivot>
  </div>
</template>

<script>
import { VntPivot } from '../../../src/components';

export default {
  name: 'PivotBasic',
  components: {
    VntPivot
  }
}
</script>
