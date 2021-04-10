import { ReactComponent as Cloud1 } from "./assets/cloud1.svg";
import { ReactComponent as Cloud2 } from "./assets/cloud2.svg";
import { ReactComponent as Hills } from "./assets/hills.svg";

import "./App.css";

function App() {
  return (
    <div id="sky">
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
      <Cloud1 />
      <Cloud2 />
      <Hills />
    </div>
  );
}

export default App;
