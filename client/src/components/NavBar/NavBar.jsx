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
import git from "../../assets/github.svg";

const pages = ["Sobre mi", "Habidades", "Proyectos", "Contacto"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  console.log(redes);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          flexDirection: { xs: "row-reverse", sm: "row" },
          justifyContent: "space-between",
          backgroundColor: "black",
          height: 80,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ mr: { xs: 14, sm: 2 }, ml: { sm: 5 } }}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: { xs: 0.6, sm: 2 },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pedro Matias Gonzalez
          </Typography>
          <Typography
            variant="body1"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: { xs: 0.6, sm: 2 },
              color: "#4FCE58",
              textDecoration: "none",
            }}
          >
            React || Redux || JavaScript || nodeJS || HTML || CSS
          </Typography>
        </Box>
        <CardMedia variant="img" src={git} sx={{ width: 50, height: 50 }} />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
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
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "space-evenly",
              width: { md: 500 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
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

        {/* <Box
          display="flex"
          flexDirection="row"
          backgroundColor="white"
          alignItems="center"
        >
          {redes.map((red) => (
            <Box key={red.id} sx={{ width: 150 }}>
              <CardMedia
                variant="img"
                src={red.img}
                alt={red.name}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
          ))}
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
