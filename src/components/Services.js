import Image from "next/image";
import React from "react";

export default function Services() {
  const data = [
    { src: "assets/html.png", alt: "HTML", label: "HTML" },
    { src: "assets/css.png", alt: "CSS", label: "CSS" },
    { src: "assets/js.png", alt: "JS", label: "JS" },
    { src: "assets/php.png", alt: "PHP", label: "PHP" },
    { src: "assets/java.png", alt: "Java", label: "Java" },
    { src: "assets/laravel.png", alt: "Laravel", label: "Laravel" },
    { src: "assets/flutter.png", alt: "Flutter", label: "Flutter" },
    { src: "assets/mysql.png", alt: "MySQL", label: "MySQL" },
    { src: "assets/nextjs.png", alt: "Next.js", label: "Next.js" },
    { src: "assets/figma.png", alt: "Figma", label: "Figma" },
    { src: "assets/tailwind.png", alt: "Tailwind", label: "Tailwind" },
    { src: "assets/bootstrap.png", alt: "Bootstrap", label: "Bootstrap" },
    { src: "assets/mongodb.png", alt: "MongoDB", label: "MongoDB" },
  ];

  return (
    <section className="section__container service__container " id="service">
      <h2 className="section__header">My Skill</h2>
      <div className="backdrop-sepia-0 bg-white/30 rounded-lg p-20 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-5 justify-items-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-full bg-white p-5 h-24 w-24 mb-10 transform transition hover:scale-110 duration-500 flex flex-col items-center"
            >
              <div className="flex items-center justify-center flex-grow">
                <Image src={item.src} alt={item.alt} className="w-12 h-12" />
              </div>
              <p className="text-center mt-8">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
