import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import bannerImg from "../assets/imgs/bg-1.png";
import { addDataToLs, getDataFromLs } from "../utilities/localStorage";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showEmails, setShowEmails] = useState([]);
  const [personalMessage, setPersonalMessage] = useState("");

  //   for showing email when reloading:
  useEffect(() => {
    const storedEmails = getDataFromLs();
    setShowEmails(storedEmails);

    if (storedEmails.length > 0) {
      const lastEmail = storedEmails[storedEmails.length - 1];
      setPersonalMessage(`Welcome back, ${lastEmail}! Thanks for subscribing.`);
    }
  }, []);

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = getDataFromLs();
    if (existingData.includes(email)) {
      alert("This email is already subscribed!");
      return;
    }
    addDataToLs(email);
    const formData = [...existingData, email];
    setShowEmails(formData);
    toast("Email added to subscription list!");
    setPersonalMessage(`Thank you, ${email}, for subscribing!`);
  };

  return (
    <div>
      <div className="text-center ">
        <h2 className="font-bold text-lg mb-2">Subscribed Emails:</h2>
        {showEmails.length === 0 ? (
          <p>No emails yet.</p>
        ) : (
          <ul className="gap-x-4 text-gray-700 flex justify-center my-6 ">
            {showEmails.map((email, index) => (
              <li key={index} className="list-none ">
                {email}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border border-gray-400 bg-white rounded-2xl p-4 w-1/2 mx-auto relative h-[300px] ">
        <div className=" h-[300px] ">
          <img className="rounded-2xl w-full" src={bannerImg} alt="bg-img" />
          <div className="text-center p-8 rounded-md w-full h-[300px] mx-auto absolute z-30 top-12 left-0">
            <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-xl my-4">
              Get the latest updates and news right in your inbox!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="shadow outline-none  border border-gray-300 w-1/2 rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <button
                className="ml-2 shadow bg-gradient-to-r from-[#faa1bd] via-[#eaaa7a] to-[#fbce53] hover:bg-purple-400 focus:shadow-outline focus:outline-none hover:text-white font-bold py-2 px-4 rounded cursor-pointer"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            {/* ✅ Personalized Message */}
            {personalMessage && (
              <div className="mb-4 p-4  rounded text-green-800">
                <span className="font-extrabold">{personalMessage} </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
