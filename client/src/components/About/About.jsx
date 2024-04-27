const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen bg-fondo bg-no-repeat bg-cover w-full min-w-[500px]"
    >
      <div className="md:max-w-[1000px] md:mx-auto flex flex-col justify-center h-full text-center w-full">
        <h2 className="md:text-4xl text-2xl sm:text-7xl font-bold text-white mt-28 md:mt-0">
          Full Stack Developer
        </h2>
        <h3 className="font-bold text-lime-50 py-4 text-xl md:text-3xl md:max-w-[1000px]">
          Hola, mi nombre es Pedro Matias Gonzalez, soy de Argentina, Buenos
          Aires y soy desarrollador web full stack recientemente graduado en
          HENRY, estoy en constante aprendizaje mejorando mis habilidades, lo
          que me permite ir creciendo de manera profesional.
        </h3>
      </div>
    </div>
  );
};

export default About;
