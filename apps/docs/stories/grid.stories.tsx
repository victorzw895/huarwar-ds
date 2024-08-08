import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@huarwar/ui";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => (
    <Grid container>
      <Grid xSmall={6}>
        <div style={{ border: "1px solid black" }}>6</div>
      </Grid>
      <Grid xSmall={5}>
        <div style={{ border: "1px solid black" }}>5</div>
      </Grid>
      <Grid xSmall={4}>
        <div style={{ border: "1px solid black" }}>4</div>
      </Grid>
      <Grid xSmall={3}>
        <div style={{ border: "1px solid black" }}>3</div>
      </Grid>
      <Grid xSmall={3}>
        <div style={{ border: "1px solid black" }}>3</div>
      </Grid>
      <Grid xSmall={2}>
        <div style={{ border: "1px solid black" }}>2</div>
      </Grid>
      <Grid xSmall={2}>
        <div style={{ border: "1px solid black" }}>2</div>
      </Grid>
      <Grid xSmall={2}>
        <div style={{ border: "1px solid black" }}>2</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
      <Grid xSmall={1}>
        <div style={{ border: "1px solid black" }}>1</div>
      </Grid>
    </Grid>
  ),
};
