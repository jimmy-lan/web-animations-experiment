import React, { FunctionComponent } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {}

const About: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
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
    >
      <Typography
        variant="h2"
        component={motion.h2}
        sx={{
          marginBottom: (theme) => theme.spacing(1),
        }}
      >
        About
      </Typography>
      <Typography
        variant="body1"
        component={motion.p}
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        This is a fun project! This project is written by awesome developer
        Jimmy Lan as a side experiment. Please have as much fun as possible with
        this project, thank you!
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
          onClick={() => navigateToHome()}
        >
          Home
        </Button>
      </Stack>
    </Box>
  );
};

export { About };
