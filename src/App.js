import { ReactComponent as Cloud1 } from "./assets/cloud1.svg";
import { ReactComponent as Cloud2 } from "./assets/cloud2.svg";
import { ReactComponent as Hills } from "./assets/hills.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";

import "./App.css";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getNumberOfStars = () => getRandomArbitrary(100, 200);

const getAnimationDuration = () => getRandomArbitrary(2000, 5000);

const getStarStyles = () => {
  const size = getRandomArbitrary(2, 6) + "px";
  return {
    top: getRandomArbitrary(0, 80) + "vh",
    left: getRandomArbitrary(0, 100) + "vw",
    width: size,
    height: size,
    animationDuration: getAnimationDuration() + "ms",
  };
};

const numberOfStars = getNumberOfStars();

const spawnStars = new Array(numberOfStars)
  .fill(0)
  .reduce((acc, cur, index) => {
    return [
      ...acc,
      {
        index,
        ...getStarStyles(),
      },
    ];
  }, []);

function App() {
  return (
    <div>
      <input id="toggler" type="checkbox" />
      <div id="sky" className="day">
        <div className="winds" id="winds1">
          <div id="wind1" className="wind"></div>
          <div id="wind2" className="wind"></div>
          <div id="wind3" className="wind"></div>
        </div>

        <div className="winds">
          <div id="wind1" className="wind"></div>
          <div id="wind2" className="wind"></div>
          <div id="wind3" className="wind"></div>
        </div>
        <div id="sun"></div>
        <div id="stars">
          {spawnStars.map(({ index, ...star }) => (
            <div key={index} id="star" style={star}></div>
          ))}
        </div>

        <Cloud1 />
        <Cloud2 />
        <Hills />
        <Moon />
      </div>
    </div>
  );
}

export default App;
