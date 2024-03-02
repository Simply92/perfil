import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import redes from "../../utils/redes";
import { CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["Sobre mi", "Tecnologias", "Proyectos", "Contacto"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    handleCloseNavMenu();
  };

  return (
    <AppBar
      sx={{
        background: "#6b6b6b",
        alignItems: { xxs: "flex-start", md: "center" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          flexDirection: { xxs: "row-reverse", sm: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          backgroundColor: "#6b6b6b",
          height: 80,
        }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            ml: { xxs: 1, sm: 1, md: 4 },
            fontWeight: 700,
            letterSpacing: { xxs: 0, sm: 1 },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Pedro Matias Gonzalez
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xxs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xxs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() =>
                  handleScrollTo(page.replace(/\s+/g, "-").toLowerCase())
                }
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box
            sx={{
              display: {
                xxs: "none",
                sm: "flex",
              },
              justifyContent: "space-evenly",
              width: { xxs: 350, sm: 400, md: 500 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={() =>
                  handleScrollTo(page.replace(/\s+/g, "-").toLowerCase())
                }
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>

        <Box
          sx={{ display: { xxs: "none", md: "flex" }, flexDirection: "row" }}
        >
          {redes.map((red) => (
            <Box key={red.id} sx={{ padding: 1 }}>
              <Link to={red.url}>
                <CardMedia
                  component="img"
                  src={red.img}
                  alt={red.name}
                  sx={{ width: 30, cursor: "pointer" }}
                />
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
