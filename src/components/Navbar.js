"use client";
import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#service", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "64px",
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontFamily: "var(--font)",
          fontSize: "18px",
          fontWeight: 800,
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}
      >
        yani<span style={{ color: "var(--accent)" }}>.dev</span>
      </a>

      {/* Desktop links */}
      <ul
        className="desktop-nav"
        style={{ listStyle: "none", gap: "2px", alignItems: "center" }}
      >
        {links.slice(0, -1).map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="btn-primary desktop-nav"
        style={{ fontSize: "13px", padding: "9px 20px" }}
      >
        Contact
      </a>

      {/* Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-btn"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-primary)",
        }}
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            inset: 0,
            top: "64px",
            background: "var(--bg-surface)",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--text-primary)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
