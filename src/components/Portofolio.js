import Image from "next/image";
import React from "react";
import databaseyunta from "../../public/assets/dashboard-dbyunta.png";
import skripsi from "../../public/assets/skripsi.png";
import projectmobile from "../../public/assets/projectmobile.jpeg";
import spmsMobile from "../../public/assets/spmsmobile.jpeg";

const projects = [
  {
    privateUi: true,
    title: "PPIC System",
    desc: "Developed a PPIC web system covering order management, sales revenue, stock and buffer, monthly, weekly, and daily production planning based on orders and inventory, as well as manpower planning for production needs.",
    href: "",
    tags: [
      "Web",
      "Manufacturing",
      "Planning",
      "Stock & Buffer",
      "Sales Revenue",
    ],
  },
  {
    img: spmsMobile,
    title: "Sparepart System",
    desc: "Spare parts Management System, built an integrated spare parts inventory system used by field and office staff, improving stock transparency and ease of ordering",
    href: "",
    tags: ["Mobile", "Inventory", "React Native"],
    portrait: true,
  },
  {
    privateUi: true,
    title: "Integration Call Maintenance",
    desc: "Developed a maintenance call integration feature between CNC machines and the Andon system to improve response time in handling machine issues and help minimize production downtime. ",
    href: "",
    tags: ["Desktop", "C#", "Integration"],
  },
  // {
  //   img: skripsi,
  //   title: "Logistic Route Optimization",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   href: "",
  //   tags: ["Web", "Logistics", "Optimization"],
  // },
  {
    img: skripsi,
    title: "Skripsi",
    desc: "Implementation of Augmented Reality in the Product Catalog Application for Batik Gedog Tuban MSMEs",
    href: "https://github.com/trjgdyan/ARBatikGedog",
    tags: ["AR", "Desktop"],
  },
  {
    img: databaseyunta,
    title: "Sistem Database Warga",
    desc: "A citizen database system for managing structured village resident data — personal, administrative, and population history.",
    href: "https://github.com/Online-Academy-MSIB/db-warga-yunta",
    tags: ["Web", "Database"],
  },
  // {
  //   img: fitmeal,
  //   title: "Fitmeal",
  //   desc: "An online healthy food ordering app that makes it easy to browse, choose, and buy healthy meals digitally.",
  //   href: "https://github.com/trjgdyan/web-fitmeal",
  //   tags: ["Web", "E-commerce"],
  // },
  // {
  //   img: ecommerce,
  //   title: "E-commerce Platform",
  //   desc: "A full-featured online shopping platform allowing users to search, select, and purchase products across categories.",
  //   href: "https://github.com/trjgdyan/e-commerce",
  //   tags: ["Web", "Full-stack"],
  // },
  // {
  //   img: sinoki,
  //   title: "SINOKI",
  //   desc: "Polinema's intra-campus student organization information system — managing and sharing org activities digitally.",
  //   href: "https://github.com/trjgdyan/SINOKI-POLINEMA",
  //   tags: ["Web", "Education"],
  // },
  {
    img: projectmobile,
    title: "Ez Verify",
    desc: "A mobile verification app prototype with an OCR system to scan and confirm information from physical documents.",
    href: "https://github.com/trjgdyan/Mobile_project-akhir",
    tags: ["Mobile", "OCR"],
    portrait: true,
  },
  // {
  //   img: edas,
  //   title: "EDAS Website",
  //   desc: "A decision support system using the EDAS method to help sellers determine the best-selling drinks on the market.",
  //   href: "https://github.com/trjgdyan/ProjectSPK_EDAS",
  //   tags: ["Web", "DSS"],
  // },
];

export default function Portofolio() {
  return (
    <section className="section" id="portfolio">
      <div className="label">What I've built</div>
      <h2 className="section-title">
        My <span className="accent-text">Projects</span>
      </h2>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "15px",
          maxWidth: "480px",
          lineHeight: 1.75,
          marginBottom: "48px",
          marginTop: "10px",
        }}
      >
        A selection of projects spanning web, mobile, and data — each one a
        real-world problem solved with code.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "18px",
        }}
      >
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="card project-card"
              style={{
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "190px",
                  overflow: "hidden",
                  background: "var(--bg-base)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                {p.privateUi ? (
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      fontWeight: 600,
                    }}
                  >
                    UI tidak dapat ditampilkan karena privasi perusahaan
                  </div>
                ) : (
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="project-img"
                    style={{
                      objectFit: p.portrait ? "contain" : "cover",
                      objectPosition: "top",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "20px 22px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        background: "var(--accent-light)",
                        padding: "3px 9px",
                        borderRadius: "99px",
                        border: "1px solid #c5d3f8",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "var(--accent)",
                    fontSize: "12.5px",
                    fontWeight: 700,
                  }}
                >
                  View on GitHub
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
