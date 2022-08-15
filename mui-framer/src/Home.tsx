import React, { FunctionComponent } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {}

const Home: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <Box
      component={motion.div}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: (theme) => theme.spacing(2.5),
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography
        variant="h2"
        component={motion.h2}
        sx={{
          marginBottom: (theme) => theme.spacing(1),
        }}
      >
        Home
      </Typography>
      <Typography
        variant="body1"
        component={motion.p}
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Welcome to my MUI and Framer Motion Experiment project! In this project,
        we will explore how to integrate MUI and Frame Motion together.
      </Typography>
      <Divider
        sx={{
          width: "30%",
          height: (theme) => theme.spacing(0.5),
          margin: (theme) => `${theme.spacing(1.5)} auto`,
        }}
      />
      <Stack
        direction="row"
        component={motion.div}
        sx={{
          marginTop: (theme) => theme.spacing(1),
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{ textTransform: "none" }}
          onClick={() => navigateToAbout()}
        >
          About
        </Button>
      </Stack>
    </Box>
  );
};

export { Home };
