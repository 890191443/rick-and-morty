import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Character } from "../type/CharacterTypes";
import StatusIcon from "./StatusIcon";
import { green, yellow, red } from "@mui/material/colors";

const CardWrapper = styled(Card)({
  display: "flex",
  flexDirection: "column",
});

const CardMediaWrapper = styled(CardMedia)({
  paddingTop: "56.25%",
});

const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
});

const statusColors: { [key: string]: string } = {
  Alive: green[500],
  Dead: red[500],
  unknown: yellow[500],
};

const CardView = (character: Character, index: number) => {
  return (
    <Grid item xs={12} sm={6} md={3} key={character.id}>
      <CardWrapper>
        <CardMediaWrapper
          image={character.image}
          title={character.name}
          style={{ maxHeight: 140 }}
        />
        <CardContentWrapper>
          <Typography variant="h5">
            <StatusIcon color={statusColors[character.status]} />
            {character.name}
          </Typography>
          <Typography variant="body2" color={statusColors[character.status]}>
            <p> {character.status}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Species: {character.species}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Gender: {character.gender}</p>
          </Typography>
        </CardContentWrapper>
      </CardWrapper>
    </Grid>
  );
};

export default CardView;
