import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// const API = "http://localhost:4000";
const API = "https://arul-nodeapp.herokuapp.com/";
function App() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));
  }, []);

  return (
    <div className="App phone-list-container">
      {mobiles.map((mobile) => (
        <Phone mobile={mobile} />
      ))}
    </div>
  );
}

export default App;

function Phone({ mobile }) {
  // const mobile = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus",
  // };
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}
