import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { theme } from "../theme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "20%",
    },
  })
);
