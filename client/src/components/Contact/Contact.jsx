import { Box, CardMedia, Typography } from "@mui/material";
import redes from "../../utils/redes";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h2">Contacto</Typography>
      <Typography variant="h3">Hablemos</Typography>
      <Box display="flex" flexDirection="row">
        {redes.map((red) => (
          <Box key={red.id} sx={{ padding: 1 }}>
            <CardMedia
              component="img"
              src={red.img}
              alt={red.name}
              sx={{ width: 30 }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
