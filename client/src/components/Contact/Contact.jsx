import { Box, CardMedia, Typography } from "@mui/material";
import redes from "../../utils/redes";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      padding="40px"
    >
      <Typography variant="h2">Contacto</Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="50%"
          alignItems="center"
        >
          <Typography variant="h4">Redes</Typography>
          <Box display="flex" flexDirection="row">
            {redes.map((red) => (
              <Box key={red.id} sx={{ padding: 2 }}>
                <Link to={red.url}>
                  <CardMedia
                    component="img"
                    src={red.img}
                    alt={red.name}
                    sx={{ width: 30 }}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          width="50%"
        >
          <Typography variant="h6">Tel: +5491159722508</Typography>
          <Typography variant="h6">E-mail: pedrouner92@gmail.com</Typography>
          <Typography variant="h6">Buenos Aires, Argentina</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
