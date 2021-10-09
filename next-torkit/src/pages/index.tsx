import type { NextPage } from "next";
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Home.style";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h1">Animation Experiment</Typography>
      <Typography variant="h2">Section 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi
        assumenda consectetur, consequatur distinctio exercitationem incidunt
        ipsa itaque minima modi, nisi odio placeat quam quas tempore. Aliquid
        architecto asperiores aspernatur harum, modi nisi porro quidem quo
        tempore voluptas. Aspernatur ea, eveniet maxime nemo nesciunt obcaecati
        quia quisquam repellat similique suscipit.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae
        fuga nemo nobis quaerat. Amet consequatur debitis doloremque eius
        laborum maiores modi rerum sapiente! Ab cupiditate deleniti, earum esse
        explicabo facere ipsam iste itaque magni molestiae nesciunt nobis nulla
        placeat possimus recusandae sint soluta voluptates.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        blanditiis culpa cumque doloremque doloribus esse est et eum facere
        fugit harum ipsam maxime minus optio perferendis provident quae qui quia
        reprehenderit, sapiente ut, veritatis voluptatem. At debitis delectus
        ipsa velit.
      </Typography>
    </Paper>
  );
};

export default Home;
