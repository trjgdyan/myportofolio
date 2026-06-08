"use client";

import React from "react";

const milestones = [
  {
    id: 1,
    role: "Full Stack Web Developer (MSIB 6)",
    company: "PT Yunta Mandiri",
    period: "Feb — Jun 2024",
    tag: "Internship",
  },
  {
    id: 2,
    role: "System Development Internal",
    company: "PT Exedy Prima Indonesia",
    period: "Aug — Nov 2024",
    tag: "Internship",
  },
  {
    id: 3,
    role: "Software Developer (Automotive Manufacturing)",
    company: "PT Indoprima Gemilang",
    period: "Oct 2025 — Sekarang",
    tag: "Full-Time",
    isCurrent: true,
  },
];

export default function Journey() {
  return (
    <div className="section-alt" style={{ width: "100%", overflow: "hidden" }}>
      <section
        className="section-alt-inner"
        id="journey"
        style={{ paddingBottom: "80px", paddingTop: "80px" }}
      >
        <div className="label">Roadmap</div>
        <h2 className="section-title" style={{ marginBottom: "80px" }}>
          Pengalaman & <span className="accent-text">Perjalanan</span>
        </h2>

        {/* TRACK MASTER WRAPPER */}
        <div style={{ position: "relative", width: "100%" }}>
          {/* GARIS UTAMA — Menusuk tepat di tengah-tengah diameter bulatan secara horizontal */}
          <div
            style={{
              position: "absolute",
              top: "14px", // Kalibrasi sumbu Y tepat di pertengahan tinggi dot tracker
              left: "0",
              right: "0",
              height: "2px",
              background:
                "linear-gradient(to right, var(--accent) 0%, var(--border-strong) 70%, var(--border) 100%)",
              zIndex: 0,
            }}
          />

          {/* Horizontal Flex Container */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              overflowX: "auto",
              paddingBottom: "20px",
              width: "100%",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              zIndex: 1,
              position: "relative",
            }}
            className="horizontal-scroll-container"
          >
            {milestones.map((m) => (
              <div
                key={m.id}
                className="journey-node-group"
                style={{
                  flex: "1 0 280px",
                  scrollSnapAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Memaksa seluruh anak komponen (dot & teks) berada di center tengah absolut
                  position: "relative",
                }}
              >
                {/* 1. DOT SEJAJAR — Ditusuk garis tepat di ekuator tengahnya */}
                <div
                  className="roadmap-dot"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: m.isCurrent
                      ? "var(--accent)"
                      : "var(--bg-surface)",
                    border: "4px solid var(--accent)",
                    boxShadow: m.isCurrent
                      ? "0 0 14px var(--accent-mid)"
                      : "var(--shadow-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3,
                    transition:
                      "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s ease",
                  }}
                >
                  {/* Inner center dot pin */}
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: m.isCurrent ? "#ffffff" : "var(--accent)",
                    }}
                  />
                </div>

                {/* Jarak spacer tak terlihat antara dot dengan kepala kartu */}
                <div style={{ height: "24px" }} />

                {/* 2. MINIMALIST CARD — Berada pas gantung di bawah titik sumbu koordinat tengah */}
                <div
                  className="card"
                  style={{
                    padding: "20px",
                    background: "var(--bg-card)",
                    border: m.isCurrent
                      ? "1.5px solid var(--accent-mid)"
                      : "1px solid var(--border)",
                    boxShadow: m.isCurrent
                      ? "var(--shadow-md)"
                      : "var(--shadow-sm)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "center", // Konten teks rata tengah seimbang
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    if (!m.isCurrent)
                      e.currentTarget.style.borderColor = "var(--accent-mid)";

                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const dot = parent.querySelector(".roadmap-dot");
                      if (dot) {
                        dot.style.transform = "scale(1.25)";
                        dot.style.background = "var(--accent-mid)";
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    if (!m.isCurrent)
                      e.currentTarget.style.borderColor = "var(--border)";

                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const dot = parent.querySelector(".roadmap-dot");
                      if (dot) {
                        dot.style.transform = "scale(1)";
                        dot.style.background = m.isCurrent
                          ? "var(--accent)"
                          : "var(--bg-surface)";
                      }
                    }
                  }}
                >
                  {/* Meta Label Periode & Kategori */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9.5px",
                        fontWeight: 800,
                        color: m.isCurrent ? "#ffffff" : "var(--accent)",
                        background: m.isCurrent
                          ? "var(--accent)"
                          : "var(--accent-light)",
                        padding: "2px 8px",
                        borderRadius: "99px",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {m.tag}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                      }}
                    >
                      {m.period}
                    </span>
                  </div>

                  {/* Core Titles */}
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      lineHeight: "1.3",
                      marginBottom: "4px",
                    }}
                  >
                    {m.role}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {m.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .horizontal-scroll-container::-webkit-scrollbar {
          height: 5px;
        }
        .horizontal-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .horizontal-scroll-container::-webkit-scrollbar-thumb {
          background: var(--border-strong);
          border-radius: 99px;
        }
        @media (max-width: 600px) {
          .horizontal-scroll-container > div {
            flex: 0 0 250px !important;
          }
        }
      `}</style>
    </div>
  );
}
