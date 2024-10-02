import React from "react";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        backgroundImage: "url('/assets/homepageWiggle.svg')",
        backgroundRepeat: "repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 0,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <>
        <Typography
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontWeight: 900,
            fontSize: "7rem",
            color: "background.default",
            WebkitTextStroke: "4px #5C4033",
          }}
        >
          Julie Luciani
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Fira Code", monospace',
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Développeuse FullStack
        </Typography>

        <Typography variant="h2" color="secondary.main">
          A la recherche d'une école et d'une alternance
        </Typography>
      </>
    </Box>
  );
}
