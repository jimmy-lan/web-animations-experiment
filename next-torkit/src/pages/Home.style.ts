import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "20%",
    },
    sectionTitle: {
      marginTop: theme.spacing(6),
    },
  })
);
