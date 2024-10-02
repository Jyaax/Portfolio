import React from "react";
import { Box, Typography } from "@mui/material";

export default function WhoAmI() {
  return (
    <Box
      sx={{
        backgroundColor: "background.secondary",
        backgroundImage: "url('/assets/whoamiWiggle.svg')",
        backgroundRepeat: "repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        paddingLeft: 5,
        paddingRight: 5,
        color: "primary.main",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography>Ajouter image</Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography variant="h1">Qui suis-je?</Typography>
        <Box>
          <Typography>
            <strong>Enchantée !</strong> Moi c’est{" "}
            <strong>Julie Luciani</strong> (oui, comme la chanteuse Clara, mais
            non, elle n’est pas de ma famille).
          </Typography>
          <br />
          <Typography>
            Actuellement alternante en <strong>développement FullStack</strong>,
            je valide mon <strong>bachelor “développeur web”</strong> à l'école{" "}
            <strong>HETIC</strong>. Je compte poursuivre mes études dans ce
            domaine avec un master et suis donc à la recherche d'une nouvelle
            école et d'une entreprise pour la <strong>rentrée 2025</strong>.
          </Typography>
          <br />
          <Typography>
            Récemment prise de passion par la <strong>photographie</strong>,
            j'apprécie également la <strong>musique</strong>, le{" "}
            <strong>sport</strong> et les <strong>jeux-vidéos</strong> sous
            toutes leurs formes (et j’adore <strong>One Piece</strong>).
          </Typography>
          <br />
          <Typography>
            Jusqu'à présent, j'ai principalement travaillé (en entreprise
            notamment) avec une stack <strong>JavaScript</strong> (TypeScript,
            React.js, Vue.js, Node.js) et j'aimerais élargir mes compétences au
            travers de <strong>nouveaux projets</strong>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
