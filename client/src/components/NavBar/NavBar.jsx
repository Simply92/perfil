import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 mb-52">
      <div>
        <h1 className="text-4xl">Pedro Matias Gonzalez</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li>
          <Link to="proyect" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="proyect" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
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
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import redes from "../../utils/redes";
// import { CardMedia, Typography } from "@mui/material";
// import { Link } from "react-scroll";

// const pages = ["Sobre mi", "Tecnologias", "Proyectos", "Contacto"];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar
//       sx={{
//         background: "#6b6b6b",
//         alignItems: { xxs: "flex-start", md: "center" },
//       }}
//     >
//       <Toolbar
//         disableGutters
//         sx={{
//           flexDirection: { xxs: "row-reverse", sm: "row" },
//           justifyContent: { xs: "center", md: "space-between" },
//           backgroundColor: "#6b6b6b",
//           height: 80,
//         }}
//       >
//         <Typography
//           variant="h5"
//           noWrap
//           sx={{
//             display: "flex",
//             justifyContent: "flex-start",
//             ml: { xxs: 1, sm: 1, md: 4 },
//             fontWeight: 700,
//             letterSpacing: { xxs: 0, sm: 1 },
//             color: "inherit",
//             textDecoration: "none",
//           }}
//         >
//           Pedro Matias Gonzalez
//         </Typography>

//         <Box sx={{ flexGrow: 1, display: { xxs: "flex", sm: "none" } }}>
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xxs: "block", md: "none" },
//             }}
//           >
//             {pages.map((page) => (
//               <MenuItem key={page}>
//                 <Link to={page} smooth={true} duration={500}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </Link>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>
//         <Box display="flex" justifyContent="flex-end">
//           <Box
//             sx={{
//               display: {
//                 xxs: "none",
//                 sm: "flex",
//               },
//               justifyContent: "space-evenly",
//               width: { xxs: 350, sm: 400, md: 500 },
//             }}
//           >
//             {pages.map((page) => (
//               <Link key={page} to={page} smooth={true} duration={500}>
//                 <Button
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     color: "white",
//                     display: "flex",
//                     justifyContent: "space-around",
//                   }}
//                 >
//                   {page}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//         </Box>

//         <Box
//           sx={{ display: { xxs: "none", md: "flex" }, flexDirection: "row" }}
//         >
//           {redes.map((red) => (
//             <Box key={red.id} sx={{ padding: 1 }}>
//               <Link to={red.url}>
//                 <CardMedia
//                   component="img"
//                   src={red.img}
//                   alt={red.name}
//                   sx={{ width: 30, cursor: "pointer" }}
//                 />
//               </Link>
//             </Box>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default NavBar;
