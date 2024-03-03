import logos from "../../utils/logos";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col items-center bg-[#0a192f] text-gray-300"
    >
      <h3 className="text-4xl font-bold inline border-b-4">TECNOLOGIAS</h3>
      <div className="flex flex-row flex-wrap justify-center w-[600px] text-center py-8">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex flex-col justify-center w-[150px]  ml-2 mt-2 px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={logo.img} alt={logo.name} className="w-20 mx-auto" />
            <p className="my-4">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
