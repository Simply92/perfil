import Proyect1 from "../../assets/HyperMegaRed.jpeg";
import Proyect2 from "../../assets/PokemonLogo.png";
import Proyect3 from "../../assets/RickAndMorty.png";
import { Link } from "react-router-dom";

const proyects = [
  {
    id: 0,
    name: "Hyper Mega Red",
    image: Proyect1,
    url: "https://pf-henry-sepia.vercel.app/",
    git: "https://github.com/gabiMaglia/PF_HENRY",
    descripcion:
      "Proyecto final de curso full stack developer de Henry, tecnologias usadas vite, React, Redux Toolkit, Material UI, express, postgres, NodeJS ",
  },
  {
    id: 1,
    name: "Pokemon",
    image: Proyect2,
    url: "https://pi-pokemon-pedro-gonzalez.vercel.app/",
    git: "https://github.com/Simply92/Proyecto_pi_Front",
    descripcion:
      "Proyecto individual de curso full stack developer de Henry, se realizo con vite, React, Redux, express, postgres, NodeJS",
  },
  {
    id: 2,
    name: "Rick and Morty",
    image: Proyect3,
    url: "https://rick-and-morty-simply92.vercel.app/",
    git: "https://github.com/Simply92/Frontend_rick_and_morty",
    descripcion:
      "Proyecto individual de curso full stack developer de Henry, se realizo con vite, React, Redux, express, postgres, NodeJS",
  },
];
const Proyectos = () => {
  return (
    <div
      name="proyect"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center items-center pb-8">
          <h3 className="text-4xl font-bold inline border-b-4 text-gray-300">
            PROYECTOS
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {proyects.map((proyect) => (
            <div
              key={proyect.id}
              style={{
                backgroundImage: `url(${proyect.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {proyect.name}
                </span>
                <div className="pt-8 text-center ">
                  <Link to={proyect.git} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Codigo
                    </button>
                  </Link>
                  <Link to={proyect.url} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      URL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
