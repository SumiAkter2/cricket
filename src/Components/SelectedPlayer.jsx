import { MdDeleteForever } from "react-icons/md";
const SelectedPlayer = ({ player, handleRemovePlayer }) => {
  const { image, name, batting_hand } = player;
  return (
    <div className="flex justify-between items-center my-4 border border-gray-300 p-3 rounded-md">
      <div className="flex justify-start items-center gap-x-4">
        <img className="w-12 rounded-md" src={image} alt="player-img" />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="font-bold text-gray-500">{batting_hand}</p>
          {/* <p className="font-bold text-gray-500">{country}</p> */}
        </div>
      </div>
      <button
        onClick={() => handleRemovePlayer(player)}
        className="flex justify-center items-center gap-x-1 bg-gray-300 p-2 rounded-md hover:bg-red-600 cursor-pointer"
      >
        <MdDeleteForever /> Remove
      </button>
    </div>
  );
};

export default SelectedPlayer;
