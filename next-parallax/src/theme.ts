import { createTheme } from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
  interface TypeBackground {
    home: string;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      home: "#FEDCC8",
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: "3.25rem",
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(2),
};

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: "2.5rem",
  fontWeight: theme.typography.fontWeightMedium,
  marginTop: theme.spacing(1.25),
  marginBottom: theme.spacing(1.75),
};

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: "1rem",
  marginBottom: theme.spacing(1.25),
};
