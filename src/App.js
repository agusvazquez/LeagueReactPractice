import "./App.css";
import ChampionList from "./screens/champion.list.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Router>
        <Route exact path="/" component={ChampionList} />
      </Router>
    </div>
  );
}

export default App;
