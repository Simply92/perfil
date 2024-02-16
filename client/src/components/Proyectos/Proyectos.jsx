import { Box, CardContent, CardMedia, Typography, styled } from "@mui/material";
import Proyect1 from "../../assets/HyperMegaRed.jpeg";
import Proyect2 from "../../assets/PokemonLogo.png";
import Card from "@mui/material/Card";

const Proyectos = () => {
  const ProductMedia = styled(CardMedia)({
    padding: 5,
    height: 140,
    width: 140,
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
      descripcion:
        "Proyecto final de curso full stack developer de Henry, tecnologias usadas vite, React, Redux Toolkit, Material UI, express, postgres, NodeJS ",
    },
    {
      id: 1,
      name: "Pokemon",
      image: Proyect2,
      descripcion:
        "Proyecto individual de curso full stack developer de Henry, se realizo con vite, React, Redux, express, postgres, NodeJS",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3">PORTFOLIO</Typography>
      <Box display="flex" flexDirection="column">
        {proyects.map((proyect) => (
          <Card
            display="flex"
            key={proyect.id}
            sx={{ flexDirection: "column" }}
          >
            <ProductMedia
              component="img"
              src={proyect.image}
              alt={proyect.name}
              sx={{
                width: { xxs: "140px", sm: "150px" },
                cursor: "pointer",
              }}
            />
            <CardContent>
              <Typography>{proyect.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Proyectos;
