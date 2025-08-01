import ContactFooter from "./components/ContactFooter";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Header />
      <Players />
            <Toaster position="top-center" reverseOrder={false} />
      {/* <ContactFooter /> */}
    </>
  );
}

export default App;
