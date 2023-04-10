import "./App.css";
import RickAndMorty from "./pages/rick-and-morty/RickAndMorty";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "#FFF", height: "100vh", width: "100%" }}>
            <Routes>
              <Route path="/" element={<RickAndMorty />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
