# Slider

[[toc]]

## Basic

<slider-basic />

```html
<vnt-slider v-model="sliderValue"></vnt-slider>
```

## Disabled

<slider-disabled />

```html
<vnt-slider v-model="sliderValue" disabled></vnt-slider>
```

## Custom label

<slider-label />

```html
<vnt-slider v-model="sliderValue">Custom label</vnt-slider>
```

## Range

<slider-range />

```html
<vnt-slider v-model="sliderValue" min="-10" max="10"></vnt-slider>
```

## Configuration

Apart from following component's properties, the HTML standard attributes of `<input type="range" />` are also applicable.

### `disabled`
Default: `false`

Determines whether the slider should be in disabled mode or not.

### `label`
Default: `'Slider'`

The slider's label text.

### `min`
Default: `0`

Minimum value.

### `max`
Default: `100`

Maximum value.

### `value`
Default: `50`

Sets the slider's value.
