import Image from "next/image";
import React from "react";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import js from "../../public/assets/js.png";
import php from "../../public/assets/php.png";
import java from "../../public/assets/java.png";
import laravel from "../../public/assets/laravel.png";
import flutter from "../../public/assets/flutter.png";
import mysql from "../../public/assets/mysql.png";
import nextjs from "../../public/assets/nextjs.png";
import figma from "../../public/assets/figma.png";
import tailwind from "../../public/assets/tailwind.png";
import bootstrap from "../../public/assets/bootstrap.png";
import mongodb from "../../public/assets/mongodb.png";

export default function Services() {
  const data = [
    { src: html, alt: "HTML", label: "HTML" },
    { src: css, alt: "CSS", label: "CSS" },
    { src: js, alt: "JS", label: "JS" },
    { src: php, alt: "PHP", label: "PHP" },
    { src: java, alt: "Java", label: "Java" },
    { src: laravel, alt: "Laravel", label: "Laravel" },
    { src: flutter, alt: "Flutter", label: "Flutter" },
    { src: mysql, alt: "MySQL", label: "MySQL" },
    { src: nextjs, alt: "Next.js", label: "Next.js" },
    { src: figma, alt: "Figma", label: "Figma" },
    { src: tailwind, alt: "Tailwind", label: "Tailwind" },
    { src: bootstrap, alt: "Bootstrap", label: "Bootstrap" },
    { src: mongodb, alt: "MongoDB", label: "MongoDB" },
  ];

  return (
    <section className="section__container service__container " id="service">
      <h2 className="section__header">My Skill</h2>
      <div className="backdrop-sepia-0 bg-white/30 rounded-lg p-20 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-5 justify-items-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-full bg-white p-5 h-24 w-24 mb-10 transform transition hover:scale-125 duration-500 flex flex-col items-center"
            >
              <div className="flex items-center justify-center flex-grow">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12"
                  width={500}
                  height={500}
                />
              </div>
              <p className="text-center mt-8">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
