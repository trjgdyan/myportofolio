import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
        padding: "28px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          yani<span style={{ color: "var(--accent)" }}>.dev</span>
        </span>
        <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
          © 2024 Tri Jagad Ariyani — All rights reserved.
        </p>
        <a
          href="#home"
          style={{
            fontSize: "12.5px",
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            letterSpacing: "-0.01em",
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
