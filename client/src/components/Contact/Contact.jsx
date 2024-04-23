import redes from "../../utils/redes";
import { Link } from "react-router-dom";

const Contact = () => {
  const inputStyle =
    "p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold placeholder:text-white";
  const labelStyle = "font-bold text-white text-2xl";
  const formStyle = "px-2 py-8 flex flex-row items-center gap-8";
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 mt-28">
        CONTACTO
      </h2>
      <form className="flex flex-col py-10 md:w-1/2">
        <div className={formStyle}>
          <label className={labelStyle} htmlFor="name">
            Nombre:
          </label>
          <input
            className={inputStyle}
            type="text"
            placeholder="Nombre completo"
          />
        </div>
        <div className={formStyle}>
          <label htmlFor="email" className="font-bold text-white text-2xl mr-7">
            Email:
          </label>
          <input
            className={inputStyle}
            type="email"
            placeholder="Email de Registro"
          />
        </div>
        <div className={formStyle}>
          <label className={labelStyle}>Mensaje:</label>
          <textarea
            className={inputStyle}
            cols="30"
            rows="10"
            placeholder="Mensaje..."
          />
        </div>
      </form>
      <div className="flex justify-center flex-row w-full">
        <div className="flex flex-col w-1/2 items-center py-10">
          <h4 className="text-2xl text-gray-300">Redes</h4>
          <div className="flex flex-row">
            {redes.map((red) => (
              <div key={red.id} className="p-4">
                <Link to={red.url}>
                  <img src={red.img} alt={red.name} className="w-24" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col items-center w-1/2">
          <h6 className="text-2xl text-gray-300">Tel: +5491159722508</h6>
          <h6 className="text-2xl text-gray-300">
            E-mail: pedrouner92@gmail.com
          </h6>
          <h6 className="text-2xl text-gray-300">Buenos Aires, Argentina</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
