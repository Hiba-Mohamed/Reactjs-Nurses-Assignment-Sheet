import Home from "./home";
import Login from "./login";
import AboutPage from "./about";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/header/header";
import Footer from "./components/footer/footer";
import Account from "./account";
import CreateSheet from "./createSheet";
import { UnitView } from "./unitView";
import { ShiftHistory } from "./shiftHistory";

function App() {
  return (
    <div className="App">
      <Heading />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createSheet" element={<CreateSheet />} />
        <Route path="/unitView" element={<UnitView />} />
        <Route path="/shiftHistory" element={<ShiftHistory />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
