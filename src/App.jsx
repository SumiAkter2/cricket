import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import AllPlayers from "./Components/AllPlayers";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [freeCoin, setFreeCoin] = useState(0);
  const [selecPlayers, setSelecPlayers] = useState(0);

  const handleAddFreeCoin = () => {
    console.log("added coin", freeCoin);
    setFreeCoin(freeCoin + 80000);
    // toast("Hurrey ! Free Coin Addded!", {});
    toast.success("🎉 Free Coin Addded!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  // handle choose player:
  const handleChoosePlayer = (selectedPlayer) => {
    // console.log("available free coin:", freeCoin);
    if (freeCoin >= selectedPlayer.price && selecPlayers < 6) {
      setSelecPlayers(selecPlayers + 1);

      if (freeCoin >= selectedPlayer.price) {
        toast.success("😊 Hurrey! Selected player", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log("price");
      }
    } else if (freeCoin < selectedPlayer.price && selecPlayers < 6) {
      console.log("sorry not available");
      toast.error("😢 Sorry! Insufficient balance!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (selecPlayers <= 6) {
      console.log("6 players");
      toast.error("Sorry! you can added only 6 players.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <Header freeCoin={freeCoin} />
        <Banner handleAddFreeCoin={handleAddFreeCoin} />
        <AllPlayers
          handleChoosePlayer={handleChoosePlayer}
          selecPlayers={selecPlayers}
        />

        <div className="relative ">
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
