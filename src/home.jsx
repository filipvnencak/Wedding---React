import React from "react";
import UseCountdown from "./CountDown";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import loveImage from "./assets/svgs/undraw_love_is_in_the_air_re_lp58.svg";

export default function Home() {
  return (
    <>
      <Box mt={"10vh"}>
        <Typography
          mb={"1vh"}
          fontFamily={"Pacifico"}
          variant="h1"
          fontSize={"10vh"}
          textAlign={"center"}
        >
          Radka& <br />
          Filip
        </Typography>
        <img src={loveImage} alt="love" />
        <Typography
          p={"1.2vh"}
          fontFamily={"Pacifico"}
          variant="h2"
          fontSize={"10vh"}
          sx={{
            backgroundColor: "#147d66",
            width: "70vh",
            borderRadius: "3vh",
            fontSize: "10vh",
            mt: 20,
            float: "center",
            textAlign: "center",
          }}
        >
          01 | 07 | 23
        </Typography>
        <UseCountdown />
      </Box>
      <section>
        <Link to={"/aboutus"}>O nás</Link>
        <Link to={"/form"}>Formulár</Link>
        <Link to={"/place"}>Zasadací poriadok</Link>
        <Link to={"/quiz"}>O nás</Link>
      </section>
    </>
  );
}
