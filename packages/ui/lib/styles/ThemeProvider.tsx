import { ThemeProvider as MUIProvider } from "@mui/material";
import { muiTheme } from "./muiTheme";
import { PropsWithChildren } from "react";
import { theme } from "./theme.css";

type ThemeProviderProps = PropsWithChildren & {
  brand: string;
};

export const ThemeProvider = ({ children, brand }: ThemeProviderProps) => {
  return (
    <MUIProvider theme={muiTheme}>
      <div className={`${theme} ${brand}`}>{children}</div>
    </MUIProvider>
  );
};
