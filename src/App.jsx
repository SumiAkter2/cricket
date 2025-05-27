import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import AllPlayers from "./Components/AllPlayers";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newsletter from "./Components/Newsletter";

function App() {
  const [freeCoin, setFreeCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleAddFreeCoin = () => {
    // console.log("added coin", freeCoin);
    setFreeCoin(freeCoin + 80000);
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
  const handleChoosePlayer = (choosePlayer) => {
    if (freeCoin >= choosePlayer.price && selectedPlayers.length < 6) {
      setSelectedPlayers([...selectedPlayers, choosePlayer]);

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
    } else if (freeCoin < choosePlayer.price && selectedPlayers.length < 6) {
      toast.warn("😢 Sorry! Insufficient balance!", {
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
    } else if (selectedPlayers.length <= 6) {
      toast.warn("Sorry! you can added only 6 players.", {
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

  // handle remove player:
  const handleRemovePlayer = (player) => {
    const remainingPlayer = selectedPlayers.filter((pl) => pl.id !== player.id);
    toast.error("Removed Player Done!", {
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
    setSelectedPlayers(remainingPlayer);
    console.log("remove:", player, selectedPlayers);
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto ">
        <Header freeCoin={freeCoin} />
        <Banner handleAddFreeCoin={handleAddFreeCoin} />
        <AllPlayers
          handleChoosePlayer={handleChoosePlayer}
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
        />
      </div>
      <div className="relative">
        <div className="absolute -top-40">
          <Newsletter />
        </div>
        <Footer />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
