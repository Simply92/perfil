import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import videoFile from "../../assets/video.mp4";

const About = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          maxHeight: "500px",
          overflow: "hidden",
          opacity: ".1",
          objectFit: "cover",
        }}
      >
        <ReactPlayer
          url={videoFile}
          width="100vw"
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
