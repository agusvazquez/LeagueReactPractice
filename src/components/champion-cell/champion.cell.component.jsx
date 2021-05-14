import React from "react";
import { getChampionFullImage } from "../../league_api/champions.api";
import {
  ChampionContainer,
  Wrapper,
  Title,
  Button,
} from "./champion.cell.styles";

const ChampionCell = ({ champion }) => {
  const { id, name } = champion;
  return (
    <ChampionContainer
      style={{
        backgroundImage: `url(${getChampionFullImage(id)}) `,
        backgroundSsize: "cover",
      }}
    >
      <Wrapper>
        <Title>{name}</Title>

        <div style={{ flex: 1 }} />

        <Button to={`/champions/${id}`}>Details</Button>
      </Wrapper>
    </ChampionContainer>
  );
};

export default ChampionCell;
