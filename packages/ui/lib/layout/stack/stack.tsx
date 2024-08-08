import { Breakpoints } from "#/styles/constants/breakpoints";
import { getMuiSpacing } from "#/styles/utils/getMuiSpacing";
import { PropsWithChildren } from "react";
import { Space } from "#/styles/constants/space";
import { Stack as MUIStack, StackProps as MUIStackProps, GridDirection } from "@mui/material";

export type StackProps = PropsWithChildren & Pick<MUIStackProps, 'alignItems' | 'justifyContent'> & {
  spacing?: Space | Record<Breakpoints, Space>;
  component?: "div" | "span";
  direction?: GridDirection | Record<Breakpoints, GridDirection>;
  marginX?: Space | Record<Breakpoints, Space>;
  marginY?: Space | Record<Breakpoints, Space>;
};
export function Stack({
  children,
  spacing = 'space-0',
  component = "div",
  direction = "column",
  marginX = 'space-0',
  marginY = 'space-0',
  ...other
}: StackProps) {
  return (
    <MUIStack
      {...other}
      component={component}
      spacing={getMuiSpacing(spacing)}
      marginX={getMuiSpacing(marginX)}
      marginY={getMuiSpacing(marginY)}
      direction={direction}
    >
      {children}
    </MUIStack>
  );
}
