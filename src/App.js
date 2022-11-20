import "./Styles/App.css";
import Homepage from "./Components/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default App;
