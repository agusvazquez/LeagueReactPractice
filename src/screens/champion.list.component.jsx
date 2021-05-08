import React, { useEffect, useState, useMemo } from "react";
import ChampionCell from "../components/champion.cell.component";

import { getChampions } from "./../league_api/champions.api";

const ChampionList = () => {
  const [champions, setChampions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getChampions().then((response) => {
      console.log(response);
      if (response.ok) {
        setChampions(response.data.data);
      }
    });
  }, []);

  const filteredKeysMemoized = useMemo(() => {
    const championKeys = Object.keys(champions);
    const filteredKeys = championKeys.filter((key) => {
      return key.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredKeys;
  }, [champions, searchText]);

  return (
    <div>
      <input
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />

      <div
        style={{
          justifyContent: "space-between",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: 20,
        }}
      >
        {filteredKeysMemoized.map((championKey) => {
          const champion = champions[championKey];
          return <ChampionCell key={champion.name} champion={champion} />;
        })}
      </div>
    </div>
  );
};

export default ChampionList;
