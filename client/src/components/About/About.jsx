import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import videoFile from "../../assets/video.mp4";

const About = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(var(--black),var(--black2))",
        position: "relative",
        minHeight: "100%",
        minWidth: "100%",
        mt: 10,
      }}
    >
      <Box
        sx={{
          opacity: ".2",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <ReactPlayer
          url={videoFile}
          width="100%"
          height="100%"
          controls={false}
          playing
          muted
          loop
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="absolute"
        top="30%"
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#4FCE58",
            textDecoration: "none",
            fontSize: { xxs: 20, md: 50 },
            mt: { xxs: -6, md: -10 },
          }}
        >
          Full Stack Developer
        </Typography>
        <Typography
          variant="h4"
          sx={{
            padding: { xxs: 1, md: "50px 400px 0px 440px" },
            fontSize: { xxs: 15, md: 30 },
          }}
        >
          Hola, mi nombre es Pedro Matias Gonzalez, soy de Argentina, Buenos
          Aires y soy desarrollador web full stack recientemente graduado en
          HENRY, estoy en constante aprendizaje mejorando mis habilidades, lo
          que me permite ir creciendo de manera profesional.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
