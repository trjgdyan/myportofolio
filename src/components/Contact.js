import React from "react";
import {
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
  RiMailFill,
} from "@remixicon/react";

const socials = [
  {
    icon: RiGithubFill,
    label: "GitHub",
    value: "@trjgdyan",
    href: "https://github.com/trjgdyan",
    color: "#0f1117",
  },
  {
    icon: RiLinkedinFill,
    label: "LinkedIn",
    value: "trijagadariyani",
    href: "https://www.linkedin.com/in/trijagadariyani/",
    color: "#0a66c2",
  },
  {
    icon: RiInstagramFill,
    label: "Instagram",
    value: "@trjgdyann_",
    href: "https://www.instagram.com/trjgdyann_",
    color: "#e1306c",
  },
  {
    icon: RiWhatsappFill,
    label: "WhatsApp",
    value: "+62 896 5418 4882",
    href: "https://wa.me/+6289654184882",
    color: "#25d366",
  },
  {
    icon: RiMailFill,
    label: "Email",
    value: "trjgdyan@gmail.com",
    href: "mailto:trjgdyan@gmail.com",
    color: "#3b5bdb",
  },
];

export default function Contact() {
  return (
    <div className="section-alt">
      <section className="section-alt-inner" id="contact">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <div className="label">Get in touch</div>
            <h2 className="section-title">
              Let's Work
              <br />
              <span className="accent-text">Together</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "15px",
                lineHeight: 1.8,
                marginTop: "14px",
                maxWidth: "340px",
              }}
            >
              I'm always open to new opportunities, collaborations, and
              interesting projects. Drop a message — I'd love to hear from you!
            </p>
            <a
              href="mailto:trjgdyan@gmail.com"
              className="btn-primary"
              style={{ marginTop: "32px", display: "inline-flex" }}
            >
              Send Email
            </a>
          </div>

          {/* Right — socials */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {socials.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="card social-card">
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      background: `${color}14`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "10.5px",
                        color: "var(--text-muted)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginTop: "1px",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                  <div
                    style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
