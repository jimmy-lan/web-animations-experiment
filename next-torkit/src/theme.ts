import { createTheme } from "@material-ui/core";

export const theme = createTheme({});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: "3.25rem",
  marginBottom: theme.spacing(2),
};

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: "1rem",
  marginBottom: theme.spacing(1.25),
};
