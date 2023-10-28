import { useEffect, useState } from "react";
import "./navbar.scss";
import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);

  console.log({ screenWidth });

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
      <div className="MobileNavBarCont">
        {!showNav ? (
          <div className="threeBarContOpen" onClick={() => setShowNav(true)}>
            <VscThreeBars size={30} />
          </div>
        ) : (
          <div className="TwoBarContClose" onClick={() => setShowNav(false)}>
            <IoMdClose size={30} />
          </div>
        )}
        {showNav && (
          <div className="navbarListCont">
            <a
              className="circle"
              href="#home"
              onClick={() => setShowNav(false)}
            >
              <HiHome size={30} /> Home
            </a>
            <a
              className="circle"
              href="#about"
              onClick={() => setShowNav(false)}
            >
              <BsPersonFill size={30} />
              About Me
            </a>
            <a
              className="circle"
              href="#contact"
              onClick={() => setShowNav(false)}
            >
              <FaPhone size={30} /> Contact Me
            </a>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="DesktopNavbarCont">
      <a className="circle" href="#home">
        <HiHome size={35} />
      </a>
      <a className="circle" href="#about">
        <BsPersonFill size={35} />
      </a>
      <a className="circle" href="#contact">
        <FaPhone size={35} />
      </a>
    </div>
  );
};
export default Navbar;
