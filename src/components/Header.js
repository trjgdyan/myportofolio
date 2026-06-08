"use client";

import React from "react";
import Image from "next/image";
import profile from "../../public/assets/fotoku.png";

export default function Header() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        maxWidth: "1080px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(116,143,252,0.15) 0%, rgba(59,91,219,0.04) 50%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-inner"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Left Side: Info */}
        <div style={{ flex: 1.1 }}>
          <div
            className="fade-up fade-up-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent-light)",
              border: "1px solid #c5d3f8",
              borderRadius: "99px",
              padding: "6px 16px",
              marginBottom: "24px",
              boxShadow: "0 2px 8px rgba(59,91,219,0.05)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "block",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--accent-dark)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Open to opportunities
            </span>
          </div>

          <h1
            className="fade-up fade-up-2"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "24px",
            }}
          >
            Tri Jagad
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ariyani
            </span>
          </h1>

          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              maxWidth: "440px",
              lineHeight: 1.8,
              marginBottom: "40px",
              fontWeight: 400,
            }}
          >
            Software Developer building high-performance web, mobile, and
            desktop applications with clean code architectures and a sharp eye
            for detail.
          </p>

          <div
            className="fade-up fade-up-4"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <a
              href="mailto:trjgdyan@gmail.com"
              className="btn-primary"
              style={{ padding: "13px 32px", borderRadius: "var(--radius-sm)" }}
            >
              Hire Me Now ⚡
            </a>
            <a
              href="#service"
              className="btn-ghost"
              style={{ padding: "13px 32px", borderRadius: "var(--radius-sm)" }}
            >
              View Tech Stack
            </a>
          </div>

          <div
            className="fade-up fade-up-4"
            style={{
              display: "flex",
              gap: "0",
              marginTop: "56px",
              borderTop: "1px solid var(--border)",
              paddingTop: "32px",
            }}
          >
            {[
              { num: "4+", label: "Years Learning" },
              { num: "1", label: "Years of Experience" },
              { num: "14+", label: "Technologies" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  paddingRight: "20px",
                  borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  marginRight: i < 2 ? "20px" : "0",
                }}
              >
                <div
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    marginTop: "6px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Photo Engine */}
        <div
          className="hero-photo-wrap fade-up fade-up-3"
          style={{
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "360px",
            height: "360px",
          }}
        >
          <div
            className="spin-slow"
            style={{
              position: "absolute",
              inset: "0px",
              borderRadius: "50%",
              border: "2px dashed rgba(59,91,219,0.25)",
            }}
          />
          <div
            className="spin-slow-reverse"
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              border: "1px dashed rgba(59,91,219,0.12)",
            }}
          />

          {/* Badge 1 */}
          <div
            className="floating-widget-1"
            style={{
              position: "absolute",
              top: "20px",
              left: "-10px",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              zIndex: 2,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            💻
          </div>

          {/* Badge 2 */}
          <div
            className="floating-widget-2"
            style={{
              position: "absolute",
              bottom: "30px",
              right: "-10px",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
              borderRadius: "12px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              fontWeight: 800,
              color: "var(--text-secondary)",
              zIndex: 2,
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <span style={{ color: "#22c55e" }}>●</span> FULLSTACK
          </div>

          {/* Container Image */}
          <div
            className="hero-img-circle"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "6px solid var(--bg-surface)",
              boxShadow: "var(--shadow-lg), 0 20px 40px rgba(59,91,219,0.12)",
              position: "relative",
              background:
                "linear-gradient(135deg, var(--accent-light) 0%, #f0f4ff 100%)",
              transition:
                "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04) rotate(-1.5deg)";
              e.currentTarget.style.boxShadow =
                "var(--shadow-lg), 0 24px 50px rgba(59,91,219,0.22)";

              const parent = e.currentTarget.parentElement;
              if (parent) {
                const w1 = parent.querySelector(".floating-widget-1");
                const w2 = parent.querySelector(".floating-widget-2");
                if (w1)
                  w1.style.transform = "scale(1.15) translate(-6px, -6px)";
                if (w2) w2.style.transform = "scale(1.08) translate(6px, 6px)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.boxShadow =
                "var(--shadow-lg), 0 20px 40px rgba(59,91,219,0.12)";

              const parent = e.currentTarget.parentElement;
              if (parent) {
                const w1 = parent.querySelector(".floating-widget-1");
                const w2 = parent.querySelector(".floating-widget-2");
                if (w1) w1.style.transform = "scale(1) translate(0, 0)";
                if (w2) w2.style.transform = "scale(1) translate(0, 0)";
              }
            }}
          >
            <Image
              src={profile}
              alt="Tri Jagad Ariyani"
              fill
              sizes="300px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
