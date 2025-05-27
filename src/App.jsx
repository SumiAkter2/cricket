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
  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };
  const handleAddFreeCoin = () => {
    setFreeCoin(freeCoin + 80000);
    toast.success("🎉 Free Coin Addded!", toastOptions);
  };
  // handle choose player:
  const handleChoosePlayer = (choosePlayer) => {
    if (selectedPlayers.length >= 6) {
      toast.warn("❌ Sorry! you can added only 6 players.", toastOptions);
      return;
    } else if (freeCoin < choosePlayer.price) {
      toast.warn("😢 Sorry! Insufficient balance!", toastOptions);
      return;
    }

    setSelectedPlayers([...selectedPlayers, choosePlayer]);
    setFreeCoin(freeCoin - choosePlayer?.price);
    console.log(freeCoin);

    toast.success("😊 Hurrey! Selected player", toastOptions);

    const alreadyAdded = selectedPlayers.some(
      (pl) => pl.id === choosePlayer.id
    );
    if (alreadyAdded) {
      toast.warn("❌ Sorry! you cann't add same player.", toastOptions);
    }
  };

  // handle remove player:
  const handleRemovePlayer = (player) => {
    const confirmedRemove = window.confirm(
      `Are you sure  to remove Player ${player.name}`
    );
    if (!confirmedRemove) {
      toast.success("✅  Not Removed !", toastOptions);
      return;
    }
    const remainingPlayer = selectedPlayers.filter((pl) => pl.id !== player.id);
    toast.error("🚫 Removed Player!", toastOptions);
    setSelectedPlayers(remainingPlayer);
    // console.log("remove:", player, selectedPlayers);
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
        <div className="md:absolute -top-40">
          <Newsletter />
        </div>
        <Footer />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
