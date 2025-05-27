import { useEffect, useState } from "react";
import bannerImg from "../assets/imgs/bg-1.png";
const Newsletter = () => {
  const [formData, setFormData] = useState({});
  const handleNewsletter = (e) => {
    e.preventDefault();
    // addDataToLs(formData);
    // const email = e.target.email.value;
    // setFormData({ ...formData, email });
    // console.log(formData);
  };
  useEffect(() => {
    console.log(typeof formData, "form data:", formData);
  }, [formData]);
  return (
    <div className="border border-gray-400 bg-white rounded-2xl p-4 w-1/2 mx-auto relative h-[300px] ">
      <div className=" h-[300px] ">
        <img className="rounded-2xl w-full" src={bannerImg} alt="bg-img" />
        <div className="text-center p-8 rounded-md w-full h-[300px] mx-auto absolute z-30 top-12 left-0">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-xl my-4">
            Get the latest updates and news right in your inbox!
          </p>
          <form onSubmit={handleNewsletter}>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="shadow outline-none  border border-gray-300 w-1/2 rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="ml-2 shadow bg-gradient-to-r from-[#faa1bd] via-[#eaaa7a] to-[#fbce53] hover:bg-purple-400 focus:shadow-outline focus:outline-none hover:text-white font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
