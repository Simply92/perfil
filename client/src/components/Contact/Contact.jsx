import { useForm } from "react-hook-form";
import Error from "../Error";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const menssage = async (data) => {
    const KEY = import.meta.env.VITE_API_KEY_FORM;
    try {
      const response = await axios.post(KEY, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status !== 200) {
        throw new Error('Error en el envío del formulario');
      }
      Swal.fire({
        text: 'Formulario enviado con éxito',
        icon: "success"
      })
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error!",
        text: "Hubo un error al enviar el formulario. Inténtelo de nuevo.",
        icon: "error"
      });
    }
  }

  const inputStyle =
    "p-2 bg-transparent border-4 border-solid text-white text-xl rounded-lg font-bold placeholder:text-white";
  const labelStyle = "font-bold text-white text-2xl";
  const formStyle = "py-2 flex flex-col gap-2";
  return (
    <div
      name="contact"
      className="w-full md:h-full bg-primary flex flex-col items-center justify-center p-4 min-w-[500px]"
    >
      <h3>
        CONTACTO
      </h3>
      <form
        className="flex flex-col py-10 md:w-1/2"
        onSubmit={handleSubmit(menssage)}
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
            {...register('name', {
              required: 'El nombre es obligatorio'
            })}
          />
          {errors.name && (
            <Error>{errors.name?.message}</Error>
          )}
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
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })}
          />
          {errors.email && (
            <Error>{errors.email?.message}</Error>
          )}
        </div>
        <div className={formStyle}>
          <label className={labelStyle}>Mensaje:</label>
          <textarea
            name="message"
            className={inputStyle}
            cols="30"
            rows="10"
            placeholder="Mensaje..."
            {...register('message', {
              required: 'Este campo es obligatorio'
            })}
          />
          {errors.message && (
            <Error>{errors.message?.message}</Error>
          )}
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
