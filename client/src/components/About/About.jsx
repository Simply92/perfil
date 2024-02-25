import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import videoFile from "../../assets/video.mp4";

const About = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(var(--black),var(--black2))",
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        // sx={{
        //   overflow: "hidden",
        //   opacity: ".1",
        //   left: "50%",
        //   minHeight: "100%",
        //   minWidth: "100%",
        //   position: "absolute",
        //   top: "50%",
        //   transform: "translate(-50%,-55%)",
        // }}
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
          }}
        >
          Full Stack Developer
        </Typography>
        <Typography variant="h4" sx={{ padding: "50px 400px 0px 440px" }}>
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
