import { useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const AllPlayers = ({ handleChoosePlayer, selecPlayers }) => {
  const [aviable, setAvailable] = useState(true);
  const handleAvailable = () => {
    setAvailable(true);
    console.log("abaible", aviable);
  };
  const handleSelected = () => {
    setAvailable(false);
    console.log("selected", aviable);
  };
  return (
    <div className="my-4">
      <div className="flex justify-between -items-center">
        <h1 className="text-2xl font-bold">Available Players</h1>

        <div className="flex  justify-center items-center border border-gray-300 rounded-md font-bold cursor-pointer gap-0">
          <button
            onClick={handleAvailable}
            className={`${
              aviable === true
                ? `bg-[#E7FE29] px-4 py-2 cursor-pointer rounded-l-md text-black`
                : `bg-transparent px-4 py-2 cursor-pointer rounded-l-md text-gray-500`
            }`}
          >
            Available
          </button>
          <button
            onClick={handleSelected}
            className={`${
              aviable === false
                ? `bg-[#E7FE29] px-4 py-2 cursor-pointer rounded-l-md text-black`
                : `bg-transparent px-4 py-2 cursor-pointer rounded-l-md text-gray-500`
            }`}
          >
            Selected ({selecPlayers})
          </button>
        </div>
      </div>
      <div>
        {aviable === true ? (
          <AvailablePlayers handleChoosePlayer={handleChoosePlayer} />
        ) : (
          <SelectedPlayers selecPlayers={selecPlayers} />
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
