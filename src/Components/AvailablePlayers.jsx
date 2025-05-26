import { useEffect, useState } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <div className="my-12">
      <div className="grid md:grid-cols-3 gap-8 ">
        {allPlayers.map((player) => (
          <AvailablePlayer player={player} key={player.key}></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
