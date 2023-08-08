import Home from "./pages/home";
import Login from "./pages/login";
import AboutPage from "./pages/about";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/header/header";
import Footer from "./components/footer/footer";
import Account from "./pages/account";
import ViewSheet from "./pages/viewSheet";
import UnitNav from "./components/unitNav";
import { ShiftHistory } from "./pages/shiftHistory";
import { StartSheet } from "./pages/startSheet";

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
        <Route path="/viewSheet" element={<ViewSheet />} />
        <Route path="/unitNav" element={<UnitNav />} />
        <Route path="/shiftHistory" element={<ShiftHistory />} />
        <Route path="/startSheet" element={<StartSheet />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
