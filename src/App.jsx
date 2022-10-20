import { useState } from "react";
import "./App.css";
import loveImage from "./assets/svgs/undraw_love_is_in_the_air_re_lp58.svg";

export default function App() {
  return (
    <div className="App">
      <section>
        <h1 className="title">
          Radka& <br />
          Filip
        </h1>
        <img src={loveImage} alt="love" />
      </section>
      <section class="hidden">
        <h2 id="date">01 | 07 | 23</h2>
        <h2 id="countDown"></h2>
      </section>
    </div>
  );
}
