import { Breakpoints } from "#/styles/constants/breakpoints";
import { getMuiSpacing } from "#/styles/utils/getMuiSpacing";
import { Unstable_Grid2, type Grid2Props } from "@mui/material";
import { PropsWithChildren } from "react";

export type GridProps = PropsWithChildren &
  Pick<Grid2Props, "container"> &
  Partial<Record<Breakpoints, number>>;

export const Grid = ({ children, container, ...rest }: GridProps) => {
  const containerProps: Grid2Props = container
    ? {
        container,
        columns: {
          xSmall: 2,
          small: 2,
          medium: 4,
          large: 6,
          xLarge: 12,
          xxLarge: 12,
        },
        columnSpacing: getMuiSpacing({
          xSmall: 'space-200',
          small: 'space-200',
          medium: 'space-300',
          large: 'space-300',
          xLarge: 'space-300',
          xxLarge: 'space-300',
        }),
        marginX: getMuiSpacing({
          xSmall: 'space-200',
          small: 'space-200',
          medium: 'space-300',
          large: 'space-300',
          xLarge: 'space-400',
        }),
      }
    : { component: "div" };

  return (
    <Unstable_Grid2 {...containerProps} {...rest}>
      {children}
    </Unstable_Grid2>
  );
};
