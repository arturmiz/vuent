# ListView

[[toc]]

## Basic

<listview-basic />

```html
<vnt-listview>
  <vnt-listview-item v-for="fruit in fruits" :key="fruit">
    {{ fruit }}
  </vnt-listview-item>
</vnt-listview>
```

## Selectable

<listview-selection-single />

```html
<vnt-listview selectionMode="single">
  <vnt-listview-item v-for="fruit in fruits" :key="fruit" @pick="pickFruit">
    {{ fruit }}
  </vnt-listview-item>
</vnt-listview>
```
