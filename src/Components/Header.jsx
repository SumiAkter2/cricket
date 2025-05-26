import coinImg from "../assets/imgs/coin.png";
import logoImg from "../assets/imgs/logo-brand.png";
const Header = () => {
  return (
    <div className="">
      <div className="flex  justify-between items-center">
        <a href="/">
          <img src={logoImg} alt="logo-image" />
        </a>
        <div className="flex justify-between items-center gap-x-6">
          <a href="/">Home</a>
          <a href="/">Teams</a>
          <button className="flex justify-center items-center gap-x-1 py-2 px-4 border border-gray-200 rounded-md font-bold">
            0 Coins <img src={coinImg} alt="coin-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
