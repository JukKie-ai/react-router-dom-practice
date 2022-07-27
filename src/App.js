import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import EasterEgg from "./components/EasterEgg";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Homepage</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/profile/:username" element={<Profile></Profile>} />
        <Route path="/easteregg" element={<EasterEgg></EasterEgg>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <hr />
      <div>
        This is the footer and I won't change because I'm outside the{" "}
        <strong>Routes</strong> component
      </div>
    </Router>
  );
}

export default App;
