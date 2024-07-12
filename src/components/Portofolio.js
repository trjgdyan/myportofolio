import Image from "next/image";
import React from "react";
import databaseyunta from "../../public/assets/dashboard-dbyunta.png";
import fitmeal from "../../public/assets/dashboard-fitmeal.png";
import sinoki from "../../public/assets/signup-sinoki.png";

export default function Portfolio() {
  return (
    <section className="section__container portfolio__container" id="portfolio">
      <h2 className="section__header">My Project</h2>
      <p className="section__description">
        Explore a meticulously crafted showcase of my work, illustrating my
        expertise in web development, design, and more. Each project is a
        testament to my dedication to creating immersive, cutting-edge digital
        experiences.
      </p>
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <Image
            src={databaseyunta}
            width={400}
            height={400}
            alt="Dashboard Dbyunta"
          />
          <div className="portfolio__details">
            <h3>Sistem Database Warga</h3>
            <p>Sistem yang digunakan untuk mengelola data warga suatu desa</p>
          </div>
        </div>
        <div className="portfolio__card">
          <Image src={fitmeal} width={400} height={400} alt="Dashboard Fitmeal" />
          <div className="portfolio__details">
            <h3>Web App Fitmeal</h3>
            <p>Aplikasi pembelian makanan sehat online</p>
          </div>
        </div>
        <div className="portfolio__card">
          <Image
            src={sinoki}
            width={400}
            height={400}
            alt="Sign Up Page Sinoki"
          />
          <div className="portfolio__details">
            <h3>Mockup WEb SINOKI</h3>
            <p>
              Design web Sistem Infromasi Organisasi Kemahasiswaan Intra Kampus
              Polinema (SINOKI)
            </p>
          </div>
        </div>
        {/* <div className="portfolio__card">
          <Image src="assets/dashboard-laundree.png" width={400} height={400}alt="Dashboard Laundree" />
          <div className="portfolio__details">
            <h3>Web App Laundree</h3>
            <p>Aplikasi untuk pengelolaan laundry online</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
