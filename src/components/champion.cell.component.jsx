import React from "react";
import { getChampionFullImage } from "../league_api/champions.api";
import { Wrapper, Title, Subtitle, Button } from "./champion.cell.styles";

const ChampionCell = ({ champion }) => {
  const { id, name, title } = champion;
  return (
    <div
      style={{
        backgroundImage: `url(${getChampionFullImage(id)})`,
      }}
    >
      <Wrapper>
        <Title>{name}</Title>
        <Subtitle>{title}</Subtitle>

        <div style={{ flex: 1 }} />

        <Button to={`/champions/${id}`}>Details</Button>
      </Wrapper>
    </div>
  );
};

export default ChampionCell;
