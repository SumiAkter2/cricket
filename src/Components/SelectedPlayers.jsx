import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer }) => {
  const handlePage = () => {
    window.location.href = "/";
  };
  return (
    <div>
      {selectedPlayers.map((player, idx) => (
        <SelectedPlayer
          key={idx}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        ></SelectedPlayer>
      ))}

      <button
        onClick={handlePage}
        className="py-3 mt-12 cursor-pointer px-2 rounded-xl text-black border border-black"
      >
        <span className="py-2  rounded-lg px-4 bg-[#E7FE29] font-bold">
          Add More Player
        </span>
      </button>
    </div>
  );
};

export default SelectedPlayers;
