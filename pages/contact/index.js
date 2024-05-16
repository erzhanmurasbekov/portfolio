import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailSent from "../../components/EmailSent";
import { BsArrowRight } from "react-icons/bs";

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
    <div className="custom-height xl:h-full bg-primary/30 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        {showCheckmark && <EmailSent />}
        <div className="flex justify-center custom-height overflow-y-auto pb-20 flex-col xl:flex-row gap-x-8">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center flex xl:w-[30vw] pt-36 md:pt-8 flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 className="h2">
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 md:gap-6 w-full mx-auto"
              onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full">
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
                  placeholder="Email"
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
                placeholder="Subject"
                className="input"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Message"
                className="textarea"
                name="message"
                value={message}></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex justify-center items-center overflow-hidden hover:border-accent group">
                <span className="translate-x-3.5 group-hover:-translate-y-[80%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-x-8 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[22px]" />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
