const Contact = () => {
  const inputStyle =
    "p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold placeholder:text-white";
  const labelStyle = "font-bold text-white text-2xl";
  const formStyle = "py-2 flex flex-col gap-2";
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 mt-28">
        CONTACTO
      </h2>
      <form
        action="https://getform.io/f/nbvvzvmb"
        method="POST"
        className="flex flex-col py-10 md:w-1/2"
      >
        <div className={formStyle}>
          <label className={labelStyle} htmlFor="name">
            Nombre:
          </label>
          <input
            name="name"
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
            name="email"
            className={inputStyle}
            type="email"
            placeholder="Email de Registro"
          />
        </div>
        <div className={formStyle}>
          <label className={labelStyle}>Mensaje:</label>
          <textarea
            name="message"
            className={inputStyle}
            cols="30"
            rows="10"
            placeholder="Mensaje..."
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 my-4 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Contact;
