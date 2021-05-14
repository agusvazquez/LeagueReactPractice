import React, { useEffect, useState } from "react";

import {
  getChampionFullImage,
  getChampionsDetail,
} from "../../league_api/champions.api";

import {
  ChampionTitle,
  ChampionName,
  SectionHeader,
  Text,
  Tip,
} from "./champion.detail.styles";

const ChampionDetail = ({ match }) => {
  const [championData, setChampionData] = useState(null);

  const { params } = match;
  const { championId } = params;

  useEffect(() => {
    getChampionsDetail(championId).then((response) => {
      if (response.ok) {
        const { data } = response;
        setChampionData(data.data[championId]);
      }
    });
  }, [championId]);

  if (championData == null) return <div />;

  const {
    name,
    title,
    allytips,
    enemytips,
    info,
    lore,
    partype,
    passive,
    recommended,
    skins,
    spells,
    stats,
    tags,
  } = championData;

  console.log(info);
  console.log(passive);
  console.log(recommended);
  console.log(spells);
  console.log(stats);

  //info: build a foda matrix or something
  // passive, spells, stats

  return (
    <div>
      <ChampionName>{name}</ChampionName>
      <ChampionTitle>{title}</ChampionTitle>

      <img src={getChampionFullImage(championId)} alt={championId} />

      <SectionHeader>Lore</SectionHeader>
      <Text>{lore}</Text>

      <Text>{partype}</Text>

      <SectionHeader>Ally Tips</SectionHeader>
      <ul>
        {allytips.map((tip, index) => {
          return <Tip key={index}>{tip}</Tip>;
        })}
      </ul>

      <SectionHeader>Enemy Tips</SectionHeader>
      <ul>
        {enemytips.map((tip, index) => {
          return <Tip key={index}>{tip}</Tip>;
        })}
      </ul>

      <SectionHeader>Tags</SectionHeader>
      {tags.map((tag, index) => {
        return <Text key={index}>{tag}</Text>;
      })}

      <SectionHeader>Skins</SectionHeader>
      {skins.map((skin) => {
        const { name, id } = skin;
        return <Text key={id}>{name}</Text>;
      })}
    </div>
  );
};

export default ChampionDetail;
