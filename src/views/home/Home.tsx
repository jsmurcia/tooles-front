import { Footer, Sections } from "./components";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="home">
        <div className="home__banner items-center flex justify-center flex-col">
          <img src="./img/logo.png" alt="logo" className="home__logo" />
          <h1 className="home__title">-Technical test</h1>
        </div>
        <div>
          <svg
            className="home__waves w-full relative"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="home__parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <Sections />
      <Footer />
    </div>
  );
};
