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
    <div>
      <h1 className="text-2xl font-bold">akl ddd Players</h1>

      <div>
        <h1>{allPlayers.length}</h1>
        {allPlayers.map((player) => (
          <AvailablePlayer player={player}></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
