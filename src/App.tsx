import "./App.css";
import RickAndMorty from "./pages/rick-and-morty/RickAndMorty";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<RickAndMorty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
