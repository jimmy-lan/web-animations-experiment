import type { NextPage } from "next";
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Home.style";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography>Hi there!</Typography>
    </Paper>
  );
};

export default Home;
