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

## SelectionMode

<listview-selection-single />

```html
<vnt-listview selectionMode="single">
  <vnt-listview-item v-for="fruit in fruits" :key="fruit" :click="pickFruit">
    {{ fruit }}
  </vnt-listview-item>
</vnt-listview>
```
