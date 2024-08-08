import { expect, afterEach } from "vitest";
import "vitest-axe/extend-expect";
import { cleanup } from "@testing-library/react";
import * as matchers from "vitest-axe/matchers";
import * as rtlMatchers from "@testing-library/jest-dom/matchers";
import "vitest-axe/extend-expect";

expect.extend(matchers);
expect.extend(rtlMatchers);

afterEach(() => {
  cleanup();
});
