import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navPages = [
    { text: "Sobre mi", to: "about" },
    { text: "Tecnologias", to: "skills" },
    { text: "Proyectos", to: "proyect" },
    { text: "Contacto", to: "contact" },
  ];

  return (
    <div className="fixed w-full h-14 flex justify-between items-center px-4 bg-primary text-gray-300 mb-52">
      <div>
        <h1 className="md:text-4xl text-xl text-green-400">
          Pedro Matias Gonzalez
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {navPages.map((item, i) => (
          <li key={i}>
            <Link to={item.to} smooth={true} duration={500}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        {navPages.map((item, i) => (
          <li key={i} className="py-6 text-xl">
            <Link
              onClick={handleClick}
              to={item.to}
              smooth={true}
              duration={500}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/pedro-gonzalez-268321279/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Simply92"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
