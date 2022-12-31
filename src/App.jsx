import "./App.css";
import Game from "./game";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Form from "./form";
import AboutUs from "./aboutus";

export default function App() {
  return (
    <>
      <div className="navBar">
        <Link className={"link"} to={"/"}>
          R&F
        </Link>
        <Link className={"link"} to={"/form"}>
          Formulár
        </Link>
        <Link className={"link"} to={"/aboutus"}>
          O nás
        </Link>
        <Link className={"link"} to={"/game"}>
          Game
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/form" element={<Form />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}
