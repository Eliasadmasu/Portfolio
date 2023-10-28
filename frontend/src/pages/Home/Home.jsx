import "./home.scss";
import facebook from "../../assets/logos_facebook.svg";
import instagram from "../../assets/instagram1.svg";
import whatsapp from "../../assets/logos_whatsapp-icon1.svg";
import linedin from "../../assets/skill-icons_linkedin1.svg";
import { motion } from "framer-motion";
import AnimateLetter from "../../components/AnimateLetter/AnimateLetter";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
const Home = () => {
  const [shouldShowSwipe, setShouldShowSwipe] = useState(true);
  const word = " Elias,";
  const letters = word.split("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setShouldShowSwipe(false);
      } else {
        setShouldShowSwipe(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home-Container">
      <div className="top">
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={instagram} alt="" />
        </a>
        <a href="">
          <img src={whatsapp} alt="" />
        </a>
        <a href="">
          <img src={linedin} alt="" />
        </a>
      </div>
      <div className="bottom">
        <motion.div className="bottom_left">
          <div className="centerBottomLeft">
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bottom_left_in hi"
            >
              Hi,
            </motion.div>
            <motion.div className="textGap">
              <motion.span
                className="bottom_left_in am"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                I&#39;m
              </motion.span>
              <motion.span className="bottom_left_elias">
                <AnimateLetter
                  letters={letters}
                  className="bottom_left_in hi"
                />
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="bottom_left_in webdev"
            >
              Web Developer
            </motion.div>
            <motion.div
              className="bottom_left_in skill"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <Typewriter
                loop={false}
                typeSpeed={120}
                words={[
                  "Front end,",
                  "Back end,",
                  "Mern stack developer",
                  "...And more.",
                ]}
              />
              {/* Front end, back end, mern stack dev. */}
            </motion.div>
          </div>
        </motion.div>
        <div className="bottom_right">
          <motion.div
            className="bottom_right_imageCont"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <img
              src="https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {shouldShowSwipe && (
        <div className="SwipeCont">
          <div className="swipe-text">Swipe</div>
          <motion.div
            className="swipe-arrow"
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            🔽
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Home;
