import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayer = ({ player, handleChoosePlayer }) => {
  const { image, name, country, batting_hand, role, price } = player;

  return (
    <div className="flex justify-center w-[360px] p-8 border border-gray-300 rounded-2xl">
      <div>
        <img
          className="w-[300px] h-[250px] object-fit rounded-2xl"
          src={image}
          alt="players-img"
        />
        <h1 className="my-4 text-xl font-bold flex justify-start items-center gap-x-1">
          <FaUser /> {name}
        </h1>
        <div className=" flex justify-between items-center border-b py-4 border-gray-300">
          <p className="text-gray-500 flex justify-start items-center gap-x-1 ">
            <FaFlag /> {country}
          </p>
          <p className="px-2 py-1 bg-gray-200 rounded-md">{role}</p>
        </div>
        <h1 className="font-bold my-2">Ratting</h1>
        <div className=" flex justify-between items-center ">
          <p className="text-gray-800 flex justify-start items-center gap-x-1 ">
            Batting
          </p>
          <p className="text-gray-500  ">{batting_hand}</p>
        </div>
        <div className=" flex justify-between items-center mt-2">
          <p className="text-gray-800 flex justify-start items-center gap-x-1 ">
            Price: $ {price}
          </p>
          <button
            onClick={() => handleChoosePlayer(player)}
            className="text-gray-800 px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-300 cursor-pointer"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
