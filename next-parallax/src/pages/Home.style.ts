import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      perspective: 100,
      height: "100vh",
      overflowX: "hidden",
      overflowY: "auto",
      position: "absolute",
      top: 0,
      left: "50%",
      right: 0,
      bottom: 0,
      marginLeft: -1500,
      background: theme.palette.background.home,
    },
    parallaxLayer: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      "& img": {
        display: "block",
        position: "absolute",
        bottom: 0,
      },
    },
    parallaxCover: {
      background: "#2D112B",
      display: "block",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      height: 2000,
      zIndex: 2,
    },
  })
);
