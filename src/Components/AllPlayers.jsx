import { useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const AllPlayers = ({
  handleChoosePlayer,
  selectedPlayers,
  handleRemovePlayer,
}) => {
  const [available, setAvailable] = useState(true);
  const handleAvailable = () => {
    setAvailable(true);
    console.log("abaible", available);
  };
  const handleSelected = () => {
    setAvailable(false);
    console.log("selected", available);
  };
  return (
    <div className="mt-12 mb-60">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">
          {" "}
          {`${
            available === true
              ? " Available Players "
              : `Selected Players : (${selectedPlayers.length}/6)`
          }`}
        </h1>

        <div className="flex  justify-center items-center border border-gray-300 rounded-md font-bold cursor-pointer gap-0 ">
          <button
            onClick={handleAvailable}
            className={`${
              available === true
                ? `bg-[#E7FE29] px-4 py-2 cursor-pointer rounded-l-md text-black`
                : `bg-transparent px-4 py-2 cursor-pointer rounded-l-md text-gray-500`
            }`}
          >
            Available
          </button>
          <button
            onClick={handleSelected}
            className={`${
              available === false
                ? `bg-[#E7FE29] px-4 py-2 cursor-pointer rounded-l-md text-black`
                : `bg-transparent px-4 py-2 cursor-pointer rounded-l-md text-gray-500`
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {available === true ? (
          <AvailablePlayers handleChoosePlayer={handleChoosePlayer} />
        ) : (
          <SelectedPlayers
            handleRemovePlayer={handleRemovePlayer}
            selectedPlayers={selectedPlayers}
          />
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
