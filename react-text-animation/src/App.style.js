import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "100vh",
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
