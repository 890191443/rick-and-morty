import "./App.css";
import RickAndMorty from "./pages/rick-and-morty/RickAndMorty";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#FFF", height: "100vh", width: "100%" }}>
          <RickAndMorty />
        </Box>
      </Container>
    </>
  );
}

export default App;
