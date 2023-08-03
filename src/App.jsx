import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Navbar />

      {/* <Route path="/homepage" exact component={Homepage} />
      <Route path="/test" exact component={Navbar} /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
