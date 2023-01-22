import "./App.css";
import Game from "./game";
import { Routes, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./home";
import Form from "./form";
import AboutUs from "./aboutus";
import Quiz from "./quiz";

export default function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/form" element={<Form />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Container>
    </>
  );
}
