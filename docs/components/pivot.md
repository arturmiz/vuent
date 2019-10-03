# Pivot

[[toc]]

## Basic

<pivot-basic />

```html
<vnt-pivot>
  <vnt-pivot-item label="Item 1" active>
    <p>...</p>
  </vnt-pivot-item>
  <vnt-pivot-item label="Item 2">
    <p>...</p>
  </vnt-pivot-item>
  <vnt-pivot-item label="Item 3">
    <p>...</p>
  </vnt-pivot-item>
</vnt-pivot>
```

## Configuration

#### `active` attribute

Determines which pivot-item should be set as active.
Must be added to `vnt-pivot-item` element that should be active at start.
