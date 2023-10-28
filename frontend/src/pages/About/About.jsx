import "./about.scss";
import mongoo from "../../assets/mongodb-wordmark.svg";
import express from "../../assets/expressjs-dark.svg";
import react from "../../assets/react-wordmark.svg";
import node from "../../assets/logos_nodejs.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const refAboutMe = useRef(null);
  const isInViewAM = useInView(refAboutMe, { once: true });
  const refAboutMeP = useRef(null);
  const isInViewrefAboutMeP = useInView(refAboutMeP, { once: true });
  const refLogos1 = useRef(null);
  const isInView = useInView(refAboutMe, { once: true });
  const isInViewLogos1 = useInView(refLogos1, { once: true });

  return (
    <div className="AboutCont">
      <div className="leftAbout">
        <motion.div
          ref={refAboutMe}
          style={{
            transform: isInViewAM ? "none" : "translateX(-100px)",
            opacity: isInViewAM ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="aboutmeTxt"
        >
          About Me
        </motion.div>
        <motion.div
          ref={refAboutMe}
          className="aboutmeparagraph"
          style={{
            transform: isInView ? "none" : "translateX(-110px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        >
          Welcome to PithyDev Studio - Where Creativity Meets Innovation! I’m
          Elias, a passionate Web developer dedicated to transforming ideas into
          engaging digital experiences. With a keen eye for detail and a knack
          for creating visually appealing designs, I specialize in responsive
          web development, Custom Website using Mern Stack.
        </motion.div>
        <div className="aboutmeLogosCont">
          <motion.div
            ref={refLogos1}
            style={{
              transform: isInViewLogos1 ? "none" : "translateX(-100px)",
              opacity: isInViewLogos1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={mongoo} alt="" />
            <img src={express} alt="" />
          </motion.div>
          <motion.div
            style={{
              transform: isInViewLogos1 ? "none" : "translateX(100px)",
              opacity: isInViewLogos1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={react} alt="" />
            <img src={node} alt="" />
          </motion.div>
        </div>
      </div>
      <div
        className="rightAbout"
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        <div className="WSMAPART">What Sets Me Apart?</div>
        <div className="WSMAPARTParagraph">
          <motion.span
            ref={refAboutMeP}
            style={{
              transform: isInViewrefAboutMeP ? "none" : "translateX(115px)",
              opacity: isInViewrefAboutMeP ? 1 : 0,
              transition: " all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            1.Creative Excellence: I believe in the power of creativity to solve
            problems. Each project I undertake is approached with fresh ideas
            and innovative solutions, ensuring your brand stands out in today’s
            competitive market.
          </motion.span>
          <motion.span
            style={{
              transform: isInView ? "none" : "translateX(130px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            2. Client-Centric Approach: Your satisfaction is my top priority. I
            collaborate closely with clients, ensuring their vision is not only
            realized but exceeded. I value communication and transparency,
            keeping you informed at every stage of the creative process.
          </motion.span>
          <motion.span
            style={{
              transform: isInView ? "none" : "translateX(155px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            3. Technical Proficiency: With a strong foundation in Mern stack, I
            bring technical expertise to complement my creative skills.
          </motion.span>
          <motion.span
            style={{
              transform: isInView ? "none" : "translateX(160px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            4. Timely Delivery: I understand the importance of deadlines. Rest
            assured, your project will be completed efficiently and delivered on
            time, without compromising on quality.
          </motion.span>
        </div>
      </div>
    </div>
  );
};
export default About;
