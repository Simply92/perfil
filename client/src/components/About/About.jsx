const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen h-full bg-fondo bg-no-repeat bg-cover w-full md:min-w-[500px] flex items-center"
    >
      <div className="md:max-w-[1000px] md:mx-auto px-2 text-center text-white">
        <h1 className="md:text-5xl text-lg sm:text-7xl font-bold mt-20 md:mt-30">
          Full Stack Developer
        </h1>
        <h2 className=" font-extrabold py-2 text-sm md:h-full md:text-4xl md:max-w-[1000px]">
          Hola, mi nombre es Pedro Matias Gonzalez, soy de Buenos Aires,
          Argentina y soy desarrollador full stack, estoy en constante
          aprendizaje mejorando mis habilidades, lo que me permite ir creciendo
          de manera profesional.
        </h2>
      </div>
    </div>
  );
};

export default About;
