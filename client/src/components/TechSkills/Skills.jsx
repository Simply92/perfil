import { Box, CardMedia, Typography } from "@mui/material";
import logos from "../../utils/logos";

const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ mb: 2, background: "black", width: "100%" }}
    >
      <Typography variant="h3" color="#4FCE58" sx={{ mt: 5 }}>
        Tech Skills
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ width: 600, height: "auto", mt: 2, mb: 5 }}
      >
        {logos.map((logo) => (
          <Box key={logo.id} sx={{ padding: 4 }}>
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
