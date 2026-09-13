# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

Teacher containers are visible only in Teacher mode and can have an optional title. When nesting another container inside one, use four colons for the outer teacher fence, as shown below.

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: teacher
This note is visible only in Teacher mode.
:::

::: teacher Classroom setup
This teacher note has a custom title.
:::

:::: teacher
This teacher note contains another custom container.

::: warning
This warning is visible only in Teacher mode.
:::
::::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: teacher
This note is visible only in Teacher mode.
:::

::: teacher Classroom setup
This teacher note has a custom title.
:::

:::: teacher
This teacher note contains another custom container.

::: warning
This warning is visible only in Teacher mode.
:::
::::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
