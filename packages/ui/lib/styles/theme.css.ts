import { createTheme } from "@vanilla-extract/css";
import { makeRoleTokens } from "./utils/makeRoleTokens";
import { aliasContract } from "./aliasContract.css";
import { space } from "./constants/space";

const [theme, vars] = createTheme({
  ...makeRoleTokens(aliasContract), // generates role color based tokens
  space
});

export { theme, vars };
