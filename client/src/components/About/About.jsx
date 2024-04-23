const About = () => {
  return (
    <div
      name="about"
      className="h-screen bg-fondo bg-no-repeat w-full bg-cover "
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full text-center">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Full Stack Developer
        </h2>
        <h3 className="font-bold text-lime-50 py-4 text-3xl max-w-[1000px]">
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
