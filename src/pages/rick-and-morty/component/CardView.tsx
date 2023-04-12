import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Character } from "../type/CharacterTypes";
import CardActions from "@mui/material/CardActions";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import { green, yellow, red } from "@mui/material/colors";
const CardView = (character: Character, index: number) => {
  const statusColors: { [key: string]: string } = {
    Alive: green[500],
    Dead: red[500],
    unknown: yellow[500],
  };

  const statusGender: { [key: string]: any } = {
    Female: (
      <WomanIcon
        sx={{
          bgcolor: "#b39ddb",
          borderRadius: 5,
          p: 0.5,
          mb: -1,
          color: "white",
        }}
      />
    ),
    Male: (
      <ManIcon
        sx={{
          bgcolor: "#80d8ff",
          borderRadius: 5,
          mb: -1,
          p: 0.5,
          color: "white",
        }}
      />
    ),
    unknown: (
      <NoAccountsIcon
        sx={{
          bgcolor: "#b0bec5",
          borderRadius: 5,
          mb: -1,
          p: 0.5,
          color: "white",
        }}
      />
    ),
  };

  return (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography>
            <p>
              gender: {character.gender} {statusGender[character.gender]}
            </p>
            <p>count of episode : {character.episode?.length}</p>
            {character.location.dimension && (
              <p>location: {character.location.dimension}</p>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography color={statusColors[character.status]}>
            {character.status}
          </Typography>
          <Typography>{character.species}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardView;
