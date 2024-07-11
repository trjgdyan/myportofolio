import React from "react";
import {
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";

const Contact = () => {
  return (
    <section className="section__container contact__container backdrop-sepia-0 bg-white/30 p-20 rounded-lg shadow-xl" id="contact">
      <div className="contact__content">
        <h2 className="section__header">Contact Me</h2>
        <p className="section__description">
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me!
        </p>
        <div className="flex justify-center gap-4">
          <div className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-[#6b4c38]">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill size={30} color="white" className="instagram" />
            </a>
          </div>
          <div className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-[#6b4c38]">
            <a
              href="https://github.com/trjgdyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill size={30} color="white" className="github" />
            </a>
          </div>
          <div className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-[#6b4c38]">
            <a
              href="https://www.linkedin.com/in/trijagadariyani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill size={30} color="white" className="linkedin" />
            </a>
          </div>
        </div>

        {/* <ul className="social__icons flex justify-center gap-5">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill size={36} color="white" className="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill size={36} color="white" className="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill size={36} color="white" className="linkedin" />
            </a>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Contact;
