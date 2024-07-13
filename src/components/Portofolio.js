import Image from "next/image";
import React from "react";
import databaseyunta from "../../public/assets/dashboard-dbyunta.png";
import fitmeal from "../../public/assets/dashboard-fitmeal.png";
import sinoki from "../../public/assets/signup-sinoki.png";
import ecommerce from "../../public/assets/ecommerce.png";
import edas from "../../public/assets/edas.png";
import projectmobile from "../../public/assets/projectmobile.jpeg";

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
            <p>
              The Citizen Database System is a system used to manage complete
              and structured data regarding the residents of a village,
              including personal, administrative and population history
              information.
            </p>
          </div>
        </div>
        <div className="portfolio__card">
          <Image
            src={fitmeal}
            width={400}
            height={400}
            alt="Dashboard Fitmeal"
          />
          <div className="portfolio__details">
            <h3>Fitmeal</h3>
            <p>
              The Fitmeal Web App is an online healthy food purchasing
              application that makes it easy for users to choose and buy various
              healthy food options easily via a digital platform.
            </p>
          </div>
        </div>

        <div className="portfolio__card">
          <Image
            src={ecommerce}
            width={400}
            height={400}
            alt="Dashboard e-commerce"
          />
          <div className="portfolio__details">
            <h3>E-commerce</h3>
            <p>
              Online Shopping Application is a platform that allows users to
              search, select and purchase various products from various
              categories practically through their devices.
            </p>
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
            <h3>SINOKI</h3>
            <p>
              The Polinema Intra-Campus Student Organization Information System
              (SINOKI) website is a digital platform that facilitates the
              management and dissemination of information on student
              organization activities at Polinema.
            </p>
          </div>
        </div>

        <div className="portfolio__card flex flex-col items-center">
          <div className="flex justify-center w-full">
            <Image
              src={projectmobile}
              width={400}
              height={400}
              alt="Dashboard Ez-Verify"
              className="h-48 w-24"
            />
          </div>
          <div className="portfolio__details text-center mt-4">
            <h3>Ez Verify</h3>
            <p>
              Ez-Verify is a simple verification application prototype equipped
              with an OCR system to scan and confirm information from physical
              documents
            </p>
          </div>
        </div>

        <div className="portfolio__card">
          <Image
            src={edas}
            width={400}
            height={400}
            alt="Dashboard e-commerce"
          />
          <div className="portfolio__details">
            <h3>EDAS Website</h3>
            <p>
              The Decision Support System for Selecting the Most Sold Drinks is
              an application that helps sellers determine which drinks are the
              best sellers on the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
