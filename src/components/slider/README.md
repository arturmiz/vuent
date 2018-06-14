# Slider

## How to use

```html

<vnt-slider></vnt-slider>

<!-- Disabled -->
<vnt-slider disabled>Control header</vnt-slider>

<!-- Vue instance use case  -->
<vnt-slider v-model="sliderValue">Control header</vnt-slider>

<!-- Custom step using HTML's range step attribute -->
<vnt-slider v-model="sliderValue" step="5">Control header</vnt-slider>
```

## Properties

#### `disabled`
Default: `false`

Determines whether the slider should be in disabled mode or not.

#### `label`
Default: `'Slider'`

The slider's label text.

#### `min`
Default: `0`

Minimum value.

#### `max`
Default: `100`

Maximum value.

#### `value`
Default: `50`

Sets the slider's value.
