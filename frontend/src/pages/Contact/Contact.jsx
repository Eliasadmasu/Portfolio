import "./contact.scss";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const refContact = useRef(null);
  const isInView = useInView(refContact, { once: true });
  return (
    <div className="ContactWrapeer" ref={refContact}>
      <motion.div
        className="contactLeft"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <div className="getInTouch">Get in Touch</div>
        <div className="getInTouchP">
          Have a project in mind or just want to say hello? I&#39;d love to hear
          from you! Feel free to reach out using the contact form below, and
          I&#39;ll get back to you as soon as possible.
        </div>
        <div className="emailPhoneAdressCont">
          <div className="emailContact">
            <span className="SecondaryTxtContact">Email:</span>
            <span className="mainTxtContact"> pithydevstudio@gmail.com</span>
          </div>
          <div className="phoneContact">
            <span className="SecondaryTxtContact">Phone:</span>
            <span className="mainTxtContact">+251984000054</span>
          </div>
          <div className="addressContact">
            <span className="SecondaryTxtContact">Address: </span>
            <span className="mainTxtContact">Ethiopia, Addis Ababa</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="contactRight"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.6 }}
      >
        <div className="socialMeadiaPCont">
          <div className="SMCont">
            <span className="SM">Social Media</span>
            <span className="SMparaG">
              Connect with me on social media to stay updated with my latest
              projects, design inspirations, Feel free to send a direct message
              or join the conversation.
            </span>
          </div>
          <div className="SMLogosCont">
            <a
              href="https://www.facebook.com/PithyDevStudio/"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook />
            </a>
            <a
              href="https://www.instagram.com/pithydev_studio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>
            <a href="tel:+25984000054" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/elias-admasu-50b114265/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="map"></div>
      </motion.div>
    </div>
  );
};
export default Contact;
