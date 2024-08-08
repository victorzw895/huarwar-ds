# MUI Styling (Layout Components)

- We are using `@mui/material` specifically to simplify building layout components.
- Even with overrides, there is a limitation to how much we can customise props and prop values.
- Ideally we want Layout Component props to leverage the same Design System token values rather than the default number units implemented by MUI.

Example:

- With our Stack Layout component. We expose properties such as `spacing` and `marginX marginY`.
- Since it is a MUI component, it has been defined to accept those props with number values.

```tsx
// layout/stack/stack.tsx

// MUI default
function App() {
    return (
        <Stack spacing={8} marginX={3}>
            {/* <div>... */}
        </Stack>
    )
}

// Required behaviour
function App() {
    return (
        <Stack spacing={'space-125'} marginX={'space-75'}>
            {/* <div>... */}
        </Stack>
    )
}
```

See [layout/stack/stack.tsx](../lib/layout/stack/stack.tsx).

- We use [utils/getMuiSpacing.ts](../lib/styles/utils/getMuiSpacing.ts), to convert the design system token values and map them back to the number unit values that MUI component expects.
