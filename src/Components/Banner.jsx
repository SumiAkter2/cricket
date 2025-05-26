import bannerImg from "../assets/imgs/banner-2.png";
import bgImg from "../assets/imgs/bg-1.png";
const Banner = () => {
  return (
    <div className="relative h-[500px] w-full bg-black rounded-3xl my-8">
      <img
        className="h-[500px] w-full absolute rounded-3xl"
        src={bgImg}
        alt="bg-img"
      />
      <div className="text-white flex flex-col justify-center items-center h-full">
        <img className="md:w-[200px]" src={bannerImg} alt="banner-img" />
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="my-3">Beyond Boundaries Beyond Limits</p>
          <button className="py-3 px-2 rounded-xl text-black border border-[#E7FE29]">
            <span className="py-2 rounded-lg px-4 bg-[#E7FE29] ">
              Claim Free Credit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
