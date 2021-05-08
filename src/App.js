import "./App.css";

import { useEffect, useState } from "react";
import { getChampions } from "./league_api/champions.api";

function App() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    getChampions().then((response) => {
      console.log(response);
      if (response.ok) {
        setChampions(response.data.data);
      }
    });
  }, []);

  const championKeys = Object.keys(champions);
  return (
    <div className="App">
      <h1>Test</h1>

      {championKeys.map((championKey) => (
        <h4 key={champions[championKey].name}>{champions[championKey].name}</h4>
      ))}
    </div>
  );
}

export default App;
