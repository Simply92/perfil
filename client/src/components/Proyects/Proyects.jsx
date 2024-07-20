import { Link } from "react-router-dom";
import { proyects } from "../../utils/proyects";

const Proyects = () => {
  return (
    <div
      name="proyect"
      className="w-full md:h-auto bg-primary py-2 flex flex-col justify-center items-center"
    >
      <h3>
        PROYECTOS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-10 gap-4 md:max-w-[1500px] md:min-w-[500px]">
        {proyects.map((proyect) => (
          <div
            key={proyect.id}
            className="flex md:flex-row p-4 flex-col items-center rounded-lg bg-white"
          >
            <img className="h-full p-3 md:w-1/3 w-[100px] rounded-s-lg md:p-10" src={proyect.image} alt={proyect.name} />
            <div className="flex justify-center items-center group content-div md:w-2/3 w-[250px] h-full relative">
              <div className="flex flex-col md:gap-10 group-hover:opacity-0">
                <span className="font-semibold px-4">
                  {proyect.descripcion}
                </span>
                <div className="flex flex-row flex-wrap items-center justify-center mt-2 gap-2">
                  {proyect.skills.map(skill => (
                    <img key={skill} className="h-10 w-10" src={skill} alt="Imagen de la tecnologia" />
                  ))}
                </div>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {proyect.name}
                </span>
                <div className="flex justify-center pt-4 text-center gap-4">
                  <Link to={proyect.git} target="_blank">
                    <button
                      className="text-center rounded-lg p-3
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Codigo
                    </button>
                  </Link>
                  <Link to={proyect.url} target="_blank">
                    <button
                      className="text-center rounded-lg p-3
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      URL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
