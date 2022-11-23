import "./Styles/App.css";
import Homepage from "./Components/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/JS/About";
import Compitition from "./Components/Compitition Page/JS/Compitition";
import OurRobots from "./Components/OurRobotsPage/JS/OurRobots";
import Sponsors from "./Components/SponsorPage/JS/Sponsors";
import SupportUs from "./Components/SupportUsPage/JS/SupportUs";
import Header from "./Components/Header/JS/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/compitition" element={<Compitition />} />
        <Route path="/ourrobots" element={<OurRobots />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/supportus" element={<SupportUs />} />
      </Routes>
    </main>
  );
}

export default App;
