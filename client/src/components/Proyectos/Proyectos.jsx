import { Box, CardContent, CardMedia, Typography, styled } from "@mui/material";
import Proyect1 from "../../assets/HyperMegaRed.jpeg";
import Proyect2 from "../../assets/PokemonLogo.png";
import Proyect3 from "../../assets/RickAndMorty.png";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

const Proyectos = () => {
  const ProductMedia = styled(CardMedia)({
    padding: 5,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    objectFit: "cover",
    // Estilos adicionales para dispositivos móviles
    "@media (max-width: 600px)": {
      width: "70px",
      height: "70px",
    },
  });
  const proyects = [
    {
      id: 0,
      name: "Hyper Mega Red",
      image: Proyect1,
      url: "https://pf-henry-sepia.vercel.app/",
      descripcion:
        "Proyecto final de curso full stack developer de Henry, tecnologias usadas vite, React, Redux Toolkit, Material UI, express, postgres, NodeJS ",
    },
    {
      id: 1,
      name: "Pokemon",
      image: Proyect2,
      url: "https://pi-pokemon-pedro-gonzalez.vercel.app/",
      descripcion:
        "Proyecto individual de curso full stack developer de Henry, se realizo con vite, React, Redux, express, postgres, NodeJS",
    },
    {
      id: 2,
      name: "Rick and Morty",
      image: Proyect3,
      url: "https://rick-and-morty-simply92.vercel.app/",
      descripcion:
        "Proyecto individual de curso full stack developer de Henry, se realizo con vite, React, Redux, express, postgres, NodeJS",
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="#006666"
      sx={{ mt: -2 }}
    >
      <Typography
        variant="h3"
        color="black"
        sx={{ fontSize: { xxs: 20, md: 50 } }}
      >
        PROYECTOS
      </Typography>
      <Box>
        {proyects.map((proyect) => (
          <Card
            key={proyect.id}
            sx={{
              padding: 2,
              mt: 5,
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 1px",
              borderRadius: 3,
              // minHeight: 400,
            }}
          >
            <Link to={proyect.url}>
              <ProductMedia
                component="img"
                src={proyect.image}
                alt={proyect.name}
                sx={{
                  width: { xxs: "110px", sm: "150px" },
                  height: { xxs: "110px", sm: "auto" },
                  cursor: "pointer",
                }}
              />
            </Link>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <Typography>{proyect.name}</Typography>
              <Typography>{proyect.descripcion}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Proyectos;
