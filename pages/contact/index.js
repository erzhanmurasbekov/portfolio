import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailSent from "../../components/EmailSent";
const Contact = () => {
  const [message, setMessage] = useState(
    "Hello! I would like to offer you to work for our company!"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ujgp8x8",
      "template_7czv69v",
      e.target,
      "DiYtUc-hEEZRGgzhB"
    );
    showAndHideCheckmark();
  };
  const showAndHideCheckmark = () => {
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
    }, 1000);
  };

  return (
    <div className="xl:h-full custom-height bg-primary/30">
      {showCheckmark && <EmailSent />}
      <div className="container overflow-y-auto  custom-height mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex pt-7 xl:py-0 flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2 text-center mb-10">
            Lets <span className="text-accent">connect.</span>
          </motion.h2>
          
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}>
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input"
                name="name_from"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                name="email_from"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="message"
              className="textarea"
              name="message"
              value={message}></textarea>
            <button
              onClick={showAndHideCheckmark}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex justify-center items-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
