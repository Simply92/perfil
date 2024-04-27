import redes from "../../utils/redes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#0a192f] flex flex-col items-center justify-center p-4 min-w-[500px]">
      <div className="flex justify-center md:flex-row flex-col w-full">
        <div className="flex flex-col md:w-1/2 items-center py-10">
          <h4 className="text-xl text-gray-300">Redes</h4>
          <div className="flex flex-row">
            {redes.map((red) => (
              <div key={red.id} className="p-2">
                <Link to={red.url}>
                  <img src={red.img} alt={red.name} className="w-14" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col items-center md:w-1/2">
          <h6 className="text-xl text-gray-300">Tel: +5491159722508</h6>
          <h6 className="text-xl text-gray-300">
            E-mail: pedrouner92@gmail.com
          </h6>
          <h6 className="text-xl text-gray-300">Buenos Aires, Argentina</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
