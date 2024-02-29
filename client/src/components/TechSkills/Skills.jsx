import { Box, CardMedia, Typography } from "@mui/material";
import logos from "../../utils/logos";

const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        mb: 2,
        mt: -1,
        background: "black",
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        color="#006666"
        sx={{ mt: 5, fontSize: { xxs: 20, md: 50 } }}
      >
        TECNOLOGIAS
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ width: { xxs: 100, md: 500 }, height: "auto", mt: 2, mb: 5 }}
      >
        {logos.map((logo) => (
          <Box key={logo.id} sx={{ padding: { xxs: 1, md: 4 } }}>
            <CardMedia
              component="img"
              src={logo.img}
              alt={logo.name}
              sx={{
                width: { xxs: 30, md: 100 },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
