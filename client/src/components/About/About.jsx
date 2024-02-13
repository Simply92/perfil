import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import videoFile from "../../assets/video.mp4";

const About = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(var(--black),var(--black2))",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          left: "50%",
          minWidth: "100%",
          opacity: ".1",
          position: "absolute",
          top: "8%",
          transform: "translate(-50%,-50%)",
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
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#4FCE58",
            textDecoration: "none",
          }}
        >
          Full Stack Developer
        </Typography>
        <Typography>
          Hola, mi nombre es Pedro Matias Gonzalez, soy desarrollador full stack
          de Argentina, Buenos Aires.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
