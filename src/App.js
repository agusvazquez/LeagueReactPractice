import ChampionList from "./screens/champion-list/champion.list.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";
import ChampionDetail from "./screens/champion-detail/champion.detail.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <AppContainer>
      <AppContainerWithPadding>
        <Router>
          <Route path="/" component={Header} />
          <Route exact path="/" component={ChampionList} />
          <Route exact path="/champions" component={ChampionList} />
          <Route
            exact
            path="/champions/:championId"
            component={ChampionDetail}
          />
        </Router>
      </AppContainerWithPadding>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const AppContainerWithPadding = styled.div`
  padding: 20px;
`;

export default App;
