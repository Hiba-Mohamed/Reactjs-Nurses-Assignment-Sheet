import Home from "./home";
import Login from "./login";
import AboutPage from "./about";
import Generate from "./generateSheet";
import {Routes, Route} from "react-router-dom";
import Heading from "./components/header/header";
import Footer from "./components/footer/footer";
import Account from "./account";
import CreateSheet from "./createSheet";

function App() {
  return (
  <div className="App">
<Heading></Heading>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/generateSheet" element={<Generate />} />
  <Route path="/account" element={<Account />} />
  <Route path="/createSheet" element={<CreateSheet />} />
</Routes>

<Footer></Footer>
  </div>)
}

export default App;

