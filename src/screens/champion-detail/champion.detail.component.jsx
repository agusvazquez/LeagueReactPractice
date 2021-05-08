import React from "react";

const ChampionDetail = ({ match }) => {
  const { params } = match;
  const { championId } = params;

  return (
    <div>
      <h1>{championId}</h1>
    </div>
  );
};

export default ChampionDetail;
