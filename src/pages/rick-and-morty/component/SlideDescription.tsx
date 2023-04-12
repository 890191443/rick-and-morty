import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SlideDescription = ({ getData }: { getData: () => void }) => {
  return (
    <Box
      sx={{
        bgcolor: "#eeeeee",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Rick and Morty Characters
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros. Television Distribution. The series
          follows the misadventures of Rick Sanchez, a cynical mad scientist,
          and his good-hearted but fretful grandson Morty Smith, who split their
          time between domestic life and interdimensional adventures that take
          place across an infinite number of realities, often traveling to other
          planets and dimensions through portals and on Rick's flying saucer.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={getData}>
            Get Rick and Morty Data
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SlideDescription;
