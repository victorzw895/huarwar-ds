import { describe, it } from "vitest";
import { Stack } from "./stack";
import { screen, render } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { axe } from "vitest-axe";

describe("Stack Component", () => {
  it("renders component with correct children text", async () => {
    render(
      <Stack
        component="span"
        spacing={'space-75'}
        data-testid="ta.stack.container"
        children="test stack"
      />,
    );

    const { getByText } = within(screen.getByTestId("ta.stack.container"));

    expect(getByText("test stack")).toBeInTheDocument();
  });

  it("renders component with html (span)", async () => {
    const { container } = render(
      <Stack
        component="span"
        spacing={'space-75'}
        data-testid="ta.stack.container"
        children="test stack"
      />,
    );

    const span = container.querySelector("span");

    expect(span).toBeInTheDocument();
  });

  it("renders component with html (div) when no component is passed", async () => {
    const { container } = render(
      <Stack
        spacing={'space-75'}
        data-testid="ta.stack.container"
        children="test stack"
      />,
    );

    const divEl = container.querySelector("div");
    const spanEl = container.querySelector("span");

    expect(divEl).toBeInTheDocument();
    expect(spanEl).not.toBeInTheDocument();
  });

  it("passes a11y", async () => {
    const { container } = render(<Stack spacing={'space-75'} children="sample text" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
