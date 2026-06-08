"use client";
import React from "react";

export default function Education() {
  const mainCertifications = [
    {
      title: "Winners of the 2023 Student Entrepreneurship Program",
      issuer: "Malang State Polytechnic",
      icon: "🏆",
      link: "https://drive.google.com/file/d/1j6orDMtE1xbC1Pm650IMzJaXmGfD-BA8/view?usp=sharing",
      iconBg: "#e6f4ea",
      iconBorder: "#b7e1cd",
    },
    {
      title: "BNSP Professional Competency",
      issuer: "Badan Nasional Sertifikasi Profesi",
      icon: "🏅",
      link: "https://drive.google.com/file/d/1Q0arqAOEXz7SLL9TusV72-8fsehomGZt/view?usp=sharing",
      iconBg: "#fff8e6",
      iconBorder: "#ffe4a0",
    },
    {
      title: "Junior Web Developer",
      issuer: "Digital Talent Scholarship",
      icon: "💻",
      link: "https://drive.google.com/file/d/1pYmfP6EFv_aKdJOWKfAaXfBTr-miPWHJ/view?usp=sharing",
      iconBg: "#e8f0fe",
      iconBorder: "#c5d3f8",
    },
  ];

  return (
    <section
      className="section"
      id="education"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="label" style={{ textAlign: "center" }}>
        Background
      </div>
      <h2 className="section-title" style={{ textAlign: "center" }}>
        <span className="accent-text">Education & Certifications</span>
      </h2>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          maxWidth: "680px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* ==================== DEGREE CARD (FULL WIDTH) ==================== */}
        <div className="card" style={{ padding: "28px 32px" }}>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                background: "var(--accent-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                flexShrink: 0,
              }}
            >
              🎓
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Malang State Polytechnic
                  </h3>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--text-secondary)",
                      marginTop: "2px",
                    }}
                  >
                    D4 Informatics Engineering
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    background: "var(--bg-base)",
                    border: "1px solid var(--border)",
                    padding: "3px 10px",
                    borderRadius: "99px",
                    whiteSpace: "nowrap",
                  }}
                >
                  2021 – 2025
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--accent-light)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid #c5d3f8",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    3.74
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--accent-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GPA
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--text-muted)",
                    fontSize: "13px",
                  }}
                >
                  <span>📍</span> Malang, East Java
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== HORIZONTAL CERTIFICATIONS ROW ==================== */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {mainCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flex: "1 1 calc(33.333% - 10px)",
                minWidth: "180px",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: cert.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                  border: `1px solid ${cert.iconBorder}`,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.3",
                  }}
                >
                  {cert.title}
                </div>
                <div
                  style={{
                    fontSize: "11.5px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  {cert.issuer}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
