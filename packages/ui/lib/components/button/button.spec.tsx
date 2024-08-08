import { describe, it } from "vitest";
import { Button } from "./button";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

describe("Button Component", () => {
  it("renders button", async () => {
    render(<Button children="hello world" />);

    await userEvent.click(screen.getByText("hello world"));
  });

  it("passes a11y", async () => {
    const { container } = render(<Button children="hello world" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
