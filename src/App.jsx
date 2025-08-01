import { useState } from "react";
import ContactFooter from "./components/ContactFooter";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { Toaster } from "react-hot-toast";

function App() {
  const [coins, setCoins] = useState(0);

  return (
    <>
      <Header coins={coins} setCoins={setCoins} />
      <Players coins={coins} setCoins={setCoins} />
      <Toaster position="top-center" reverseOrder={false} />
      <ContactFooter />
    </>
  );
}

export default App;
