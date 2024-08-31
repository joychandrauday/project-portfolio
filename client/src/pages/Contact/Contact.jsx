import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u91pz5u",
        "template_29g239l",
        form.current,
        "5CbP7jY4Ml1DYI3w9"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          toast.error("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="flex flex-col items-center justify-center  lg:pt-5 lg:pl-24">
      <div className="bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg shadow-xl shadow-black lg:p-10 md:p-4 p-4 mx-auto flex flex-col lg:flex-row gap-16 w-full">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-center lg:text-right mb-4">Contact Me</h1>
          <p className="text-center lg:text-right text-gray-600 mb-8">
            Feel free to reach out to me via email or through my social media
            profiles.
          </p>
          <div className="flex gap-2 justify-center lg:justify-end mb-4">
            <a
              href="https://linkedin.com/in/joychandrauday"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                <FaLinkedin />
                Linkedin
              </button>
            </a>
            <a
              href="https://github.com/joychandrauday"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                <FaGithub />
                Github
              </button>
            </a>
            <a
              href="https://facebook.com/joychandraudayy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-400"
            >
              <button className="btn bg-primary text-yellow-400 rounded-none hover:translate-y-[-4px] hover:translate-x-1 hover:border hover:border-yellow-400">
                <FaFacebook />
                Facebook
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-center lg:text-left mb-4">Leave a Message</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your E-Mail Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn bg-primary text-yellow-400 rounded-none hover:border hover:border-yellow-400 py-2 px-6">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
