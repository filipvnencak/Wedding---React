import "./App.css";
import loveImage from "./assets/svgs/undraw_love_is_in_the_air_re_lp58.svg";
import UseCountdown from "./CountDown";
import Game from "./seat";
export default function App() {
  return (
    <div className="App">
      <section>
        <h1 className="title">
          Radka& <br />
          Filip
        </h1>
        <Game />
        <img src={loveImage} alt="love" />
      </section>
      <section>
        <h2 id="date">01 | 07 | 23</h2>
        <UseCountdown />
      </section>
    </div>
  );
}
