import coinImg from "../assets/imgs/coin.png";
import logoImg from "../assets/imgs/logo-brand.png";
const Header = ({ freeCoin }) => {
  return (
    <div className="fixed top-0 md:w-6xl w-full  z-50 rounded-xl">
      <div className=" flex bg-base-300/50 backdrop-blur-3xl justify-between items-center  px-6 pb-3 ">
        <a href="/">
          <img src={logoImg} alt="logo-image" />
        </a>
        <div className="flex justify-between items-center gap-x-6">
          <a href="/">Home</a>
          <a href="/">Teams</a>
          <button className="flex  justify-center items-center gap-x-1 py-2 px-4 border border-gray-200 rounded-md font-bold cursor-pointer">
            {freeCoin} Coins <img src={coinImg} alt="coin-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
