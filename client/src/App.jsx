import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Proyectos from "./components/Proyectos/Proyectos";
import Skills from "./components/TechSkills/Skills";
import { Box } from "@mui/material";
function App() {
  return (
    <Box>
      <NavBar />

      <About />

      <Skills />

      <Proyectos />
    </Box>
  );
}

export default App;
