import { useEffect, useState } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ handleChoosePlayer }) => {
  const [allPlayers, setAllPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <div className="my-6">
      <div className="grid md:grid-cols-3 gap-6 ">
        {allPlayers.map((player) => (
          <AvailablePlayer
            player={player}
            key={player.id + 1}
            handleChoosePlayer={handleChoosePlayer}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
