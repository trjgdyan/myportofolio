import Image from "next/image";
import React from "react";
import bg from "../../public/assets/bg.png";
import fotoabout from "../../public/assets/coba1.jpeg";

export default function About() {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <Image
          src={bg}
          alt="bg"
          className="about__bg-1"
          width={400}
          height={400}
        />
        <Image
          src={bg}
          alt="bg"
          className="about__bg-2 "
          width={400}
          height={400}
        />
        <Image
          src={fotoabout}
          alt="about"
          className="about__img"
          width={400}
          height={400}
        />
      </div>
      <div className="about__content">
        <h2 className="section__header">About Me</h2>
        <p className="section__description">
          I am a proactive informatics engineering student at the State
          Polytechnic of Malang, passionate about website development, mobile
          development, UI/UX design and data processing. I am a self-motivated
          learner, possess strong public speaking skills, work well in teams,
          and am enthusiastic about staying updated on the latest technological
          advancements.
        </p>
        <div className="about__btn">
          <a
            href="https://drive.google.com/file/d/1X9I-9bYjLeCVFccWACh8J3rg6RhfpxHX/view" target="_blank" rel="noopener noreferrer"
            download
          >
            <button className="btn-custom">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}
