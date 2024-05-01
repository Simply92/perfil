import { Link } from "react-router-dom";
import { proyects } from "../../utils/proyects";

const Proyects = () => {
  return (
    <div
      name="proyect"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] min-w-[500px]"
    >
      <div className="md:max-w-[1500px] mx-auto p-4 flex flex-col w-full md:h-screen">
        <div className="flex justify-center items-center pb-8">
          <h3 className="text-4xl font-bold inline border-b-4 text-gray-300 md:mt-28">
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
                overflow: "hidden",
              }}
              className="shadow-lg shadow-[#26303d] group container rounded-md 
              flex justify-center text-center items-center content-div bg-white"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {proyect.name}
                </span>
                <div className="pt-8 text-center">
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

export default Proyects;
