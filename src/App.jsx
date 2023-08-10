import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
