import { motion, transform } from "framer-motion";
import "./aniamte.scss";

const AnimateLetter = ({ letters }) => {
  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.3,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    };
  };

  return (
    <motion.div className="BigCont">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          whileHover={() => rubberBand()}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: index * 0.4, duration: 1.5 },
          }}
          className="Big"
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default AnimateLetter;
