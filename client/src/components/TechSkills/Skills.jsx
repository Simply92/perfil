import logos from "../../utils/logos";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col items-center w-full md:h-screen bg-[#0a192f] text-gray-300 min-w-[500px]"
    >
      <h3 className="text-4xl font-bold inline border-b-4 md:mt-28 mt-10">
        TECNOLOGIAS
      </h3>
      <div className="flex flex-row flex-wrap justify-center md:w-[600px] w-[400px] text-center py-8 md:gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex flex-col justify-center md:w-[150px] w-[120px] ml-2 mt-2 md:px-4 px-2 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="md:w-20 md:mx-auto"
            />
            <p className="md:my-4">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
