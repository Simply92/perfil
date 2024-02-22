import { Box, CardMedia, Typography } from "@mui/material";
import logos from "../../utils/logos";

const Skills = () => {
  console.log(logos);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ mt: 2, mb: 2 }}
    >
      <Typography variant="h3">Tech Skills</Typography>
      <Box display="flex" flexDirection="row" alignItems="center">
        {logos.map((logo) => (
          <Box key={logo.id} sx={{ padding: 3 }}>
            <CardMedia
              component="img"
              src={logo.img}
              alt={logo.name}
              sx={{
                width: 100,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
