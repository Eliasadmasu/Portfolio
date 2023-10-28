import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  if (screenWidth < 768) {
    return (
      <div className="MobileApp">
        <div className="navCont">
          <Navbar />
        </div>
        <div className="main">
          <span id="home">
            <Home />
          </span>
          <span id="about">
            <About />
          </span>
          <span id="contact">
            <Contact />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="DesktopApp">
      <div className="navCont">
        <Navbar />
      </div>
      <div className="main">
        <span id="home">
          <Home />
        </span>
        <span id="about">
          <About />
        </span>
        <span id="contact">
          <Contact />
        </span>
      </div>
    </div>
  );
}

export default App;
