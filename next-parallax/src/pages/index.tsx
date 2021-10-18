import type { NextPage } from "next";
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Home.style";
import { Parallax } from "../components";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid asperiores atque aut, debitis dignissimos ducimus eaque, error
        exercitationem hic illum laudantium modi molestias porro quas saepe
        tenetur, vel vitae.
      </Typography>
      <Parallax>
        <Typography>Hi there!</Typography>
      </Parallax>
    </Paper>
  );
};

export default Home;
