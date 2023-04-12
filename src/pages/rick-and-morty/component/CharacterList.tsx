import { Character } from "../type/CharacterTypes";
import CardView from "./CardView";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const CharacterList = ({ characters }: { characters: Character[] }) => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {characters.map((character: Character, index: number) => (
            <CardView {...character} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CharacterList;
