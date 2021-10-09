import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "20%",
    },
    title: {
      fontSize: "3.25rem",
      marginBottom: theme.spacing(1.5),
    },
    paragraph: {
      fontSize: "1.25rem",
      marginBottom: theme.spacing(0.75),
    },
  })
);
