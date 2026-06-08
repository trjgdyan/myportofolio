"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import powerbi from "../../public/assets/powerbi.png";

const categories = [
  {
    id: "backend",
    label: "Backend & Systems",
    icon: "⚙️",
    skills: [
      { src: laravel, alt: "Laravel", label: "Laravel" },
      { src: php, alt: "PHP", label: "PHP" },
      { src: java, alt: "Java", label: "Java" }, // 🌟 Java pindah ke sini
      { src: mysql, alt: "MySQL", label: "MySQL" },
      { src: mongodb, alt: "MongoDB", label: "MongoDB" },
      {
        iconUrl: "https://img.icons8.com/color/96/microsoft-sql-server.png",
        alt: "SQL Server",
        label: "SQL Server",
      },
      {
        iconUrl: "https://img.icons8.com/color/96/c-sharp-logo.png",
        alt: "C#",
        label: "C# (.NET)",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    icon: "💻",
    skills: [
      { src: nextjs, alt: "Next.js", label: "Next.js" },
      {
        iconUrl: "https://img.icons8.com/color/96/react-native.png",
        alt: "React Native",
        label: "React Native",
      },
      { src: flutter, alt: "Flutter", label: "Flutter" },
      { src: tailwind, alt: "Tailwind", label: "Tailwind" },
      { src: bootstrap, alt: "Bootstrap", label: "Bootstrap" },
      { src: html, alt: "HTML", label: "HTML" },
      { src: css, alt: "CSS", label: "CSS" },
      { src: js, alt: "JavaScript", label: "JavaScript" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Analytics",
    icon: "🛠️",
    skills: [
      { src: figma, alt: "Figma", label: "Figma" },
      { src: powerbi, alt: "Power BI", label: "Power BI" },
      {
        iconUrl: "https://img.icons8.com/color/96/git.png",
        alt: "Git",
        label: "Git",
      },
    ],
  },
];

function SkillCard({ item }) {
  return (
    <div
      className="skill-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 12px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        aspectRatio: "1/1",
        width: "100%",
        cursor: "default",
        transition:
          "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-mid)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        const img = e.currentTarget.querySelector(".skill-icon");
        if (img) img.style.transform = "scale(1.1) rotate(2deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        const img = e.currentTarget.querySelector(".skill-icon");
        if (img) img.style.transform = "scale(1) rotate(0deg)";
      }}
    >
      <div
        className="skill-icon"
        style={{
          width: "42px",
          height: "42px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
          transition: "transform 0.3s ease",
        }}
      >
        {item.iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.iconUrl}
            alt={item.alt}
            width={42}
            height={42}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="42px"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>

      <span
        style={{
          fontSize: "11.5px",
          fontWeight: 700,
          color: "var(--text-secondary)",
          textAlign: "center",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {item.label}
      </span>
    </div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems = [
    { id: "all", label: "All Stack" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "tools", label: "Tools & Analytics" },
  ];

  return (
    <div className="section-alt" style={{ width: "100%" }}>
      <section className="section-alt-inner" id="service">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <div className="label">What I work with</div>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            My <span className="accent-text">Skills</span>
          </h2>

          {/* Container Tombol Filter Kategori */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "99px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    border: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid var(--border)",
                    background: isActive
                      ? "var(--accent)"
                      : "var(--bg-surface)",
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    boxShadow: isActive
                      ? "var(--shadow-blue)"
                      : "var(--shadow-sm)",
                    transform: isActive ? "translateY(-1px)" : "translateY(0)",
                    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--accent-mid)";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Stack System */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "100%",
          }}
        >
          {categories.map((cat) => {
            // Logika Penyaringan: Sembunyikan kategori jika tidak sesuai dengan tab aktif
            if (activeTab !== "all" && activeTab !== cat.id) return null;

            return (
              <div key={cat.label} style={{ width: "100%" }}>
                {/* Judul Kategori & Garis Pembatas */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {cat.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {cat.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "var(--border)",
                    }}
                  />
                </div>

                {/* Pure Responsive CSS Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
                    gap: "14px",
                    width: "100%",
                  }}
                >
                  {cat.skills.map((item) => (
                    <SkillCard key={item.label} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
