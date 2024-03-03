import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Proyectos from "./components/Proyectos/Proyectos";
import Skills from "./components/TechSkills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <About />

      <Skills />

      <Proyectos />

      <Contact />
    </div>
  );
}

export default App;
