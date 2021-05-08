import ChampionList from "./screens/champion-list/champion.list.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";
import ChampionDetail from "./screens/champion-detail/champion.detail.component";

function App() {
  return (
    <AppContainer>
      <h1>Header</h1>
      <Router>
        <Route exact path="/" component={ChampionList} />
        <Route exact path="/champions" component={ChampionList} />
        <Route exact path="/champions/:championId" component={ChampionDetail} />
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 20px;
`;

export default App;
