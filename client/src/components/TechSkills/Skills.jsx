import logos from "../../utils/logos";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col items-center w-full h-full md:h-screen bg-primary text-gray-300 md:min-w-[500px]"
    >
      <h3>
        TECNOLOGIAS
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 mt-4 md:mt-10 mb-10">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex flex-col justify-center items-center md:w-[150px] w-[130px] ml-2 mt-2 md:px-4 px-2 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="w-12 md:w-20 md:mx-auto"
            />
            <p className="md:my-4">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
