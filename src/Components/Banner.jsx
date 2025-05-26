import bannerImg from "../assets/imgs/banner-2.png";
import bgImg from "../assets/imgs/bg-1.png";
const Banner = ({ handleAddFreeCoin }) => {
  return (
    <div className="relative h-[500px] w-full bg-black rounded-3xl my-8">
      <img
        className="h-[500px] w-full  rounded-3xl z-10"
        src={bgImg}
        alt="bg-img"
      />

      <div className="text-white flex flex-col justify-center items-center h-full absolute z-50 top-0 md:left-54">
        <img
          className="md:w-[200px] w-[150px]"
          src={bannerImg}
          alt="banner-img"
        />
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="my-3">Beyond Boundaries Beyond Limits</p>
          <button
            onClick={handleAddFreeCoin}
            className="py-3 cursor-pointer px-2 rounded-xl text-black border border-[#E7FE29] btn"
          >
            <span className="py-2  rounded-lg px-4 bg-[#E7FE29] ">
              Claim Free Credit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
