import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [freeCoin, setFreeCoin] = useState(0);

  const handleAddFreeCoin = () => {
    console.log("added coin");
    setFreeCoin(freeCoin + 80000);
    toast("Hurrey ! Free Coin Addded!", {
      className: " text-center flex justify-center",
    });
    console.log(freeCoin);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header freeCoin={freeCoin} />
      <Banner handleAddFreeCoin={handleAddFreeCoin} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
