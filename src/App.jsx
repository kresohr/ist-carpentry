import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
