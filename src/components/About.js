import React from "react";

export default function About() {
  return (
    <div className="section-alt">
      <section className="section-alt-inner" id="about">
        <div
          className="about-content-wrapper"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          {/* Header Section with Integrated GPA Badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div style={{ flex: 1, minWidth: "250px" }}>
              <div className="label" style={{ marginBottom: "12px" }}>
                Who I am
              </div>
              <h2
                className="section-title"
                style={{ margin: 0, fontSize: "2.5rem" }}
              >
                About <span className="accent-text">Me</span>
              </h2>
            </div>

            {/* Modern Horizontal GPA Badge */}
            <div
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
                padding: "12px 24px",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                3.74
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  borderLeft: "1px solid var(--border)",
                  paddingLeft: "12px",
                }}
              >
                Cumulative
                <br />
                GPA
              </div>
            </div>
          </div>

          {/* Descriptive Content with Left Accent Border */}
          <div
            style={{
              borderLeft: "2px solid var(--accent-light)",
              paddingLeft: "28px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
                fontSize: "16px",
              }}
            >
              Informatics Engineering graduate from State Polytechnic of Malang,
              specializing in software development with hands-on professional
              experience building web, mobile, and desktop applications.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                margin: 0,
                fontSize: "16px",
              }}
            >
              Skilled in API integration, version control with Git, and database
              management. Holds a BNSP professional competency certification.
              Highly motivated, adaptable, and comfortable working independently
              or in collaborative teams.
            </p>
          </div>

          {/* Tags / Core Skills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "40px",
            }}
          >
            {[
              "Web Development",
              "Mobile Apps",
              "Desktop Apps",
              "API Integration",
              "Git",
              "BNSP Certified",
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-light)",
                  color: "var(--accent)",
                  border: "1px solid #c5d3f8",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://drive.google.com/file/d/1XWlEU1MIt_s2ln0OW_ZNMLFSLNLNS1bo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import fotoabout from "../../public/assets/coba1.jpeg";

// export default function About() {
//   return (
//     <div className="section-alt">
//       <section className="section-alt-inner" id="about">
//         <div
//           className="about-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "72px",
//             alignItems: "center",
//           }}
//         >
//           {/* Photo */}
//           <div style={{ position: "relative" }}>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 left: "20px",
//                 right: "-20px",
//                 bottom: "-20px",
//                 borderRadius: "var(--radius-lg)",
//                 background: "var(--accent-light)",
//                 border: "1px solid #c5d3f8",
//               }}
//             />
//             <div
//               style={{
//                 position: "relative",
//                 borderRadius: "var(--radius-lg)",
//                 overflow: "hidden",
//                 aspectRatio: "4/5",
//                 boxShadow: "var(--shadow-lg)",
//               }}
//             >
//               <Image
//                 src={fotoabout}
//                 alt="Tri Jagad Ariyani"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   height: "35%",
//                   background:
//                     "linear-gradient(to top, rgba(15,17,23,0.4), transparent)",
//                 }}
//               />
//             </div>

//             {/* GPA badge */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "28px",
//                 right: "-28px",
//                 background: "var(--bg-surface)",
//                 borderRadius: "var(--radius-md)",
//                 padding: "16px 20px",
//                 boxShadow: "var(--shadow-lg)",
//                 border: "1px solid var(--border)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: "1.8rem",
//                   fontWeight: 800,
//                   color: "var(--accent)",
//                   letterSpacing: "-0.03em",
//                   lineHeight: 1,
//                 }}
//               >
//                 3.74
//               </div>
//               <div
//                 style={{
//                   fontSize: "11px",
//                   color: "var(--text-muted)",
//                   fontWeight: 600,
//                   marginTop: "3px",
//                   letterSpacing: "0.06em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 GPA
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div>
//             <div className="label">Who I am</div>
//             <h2 className="section-title">
//               About <span className="accent-text">Me</span>
//             </h2>

//             <p
//               style={{
//                 color: "var(--text-secondary)",
//                 lineHeight: 1.8,
//                 marginBottom: "20px",
//                 fontSize: "15px",
//               }}
//             >
//               Informatics Engineering graduate from State Polytechnic of Malang,
//               specializing in software development with hands-on professional
//               experience building web, mobile, and desktop applications.
//             </p>
//             <p
//               style={{
//                 color: "var(--text-secondary)",
//                 lineHeight: 1.8,
//                 marginBottom: "36px",
//                 fontSize: "15px",
//               }}
//             >
//               Skilled in API integration, version control with Git, and database
//               management. Holds a BNSP professional competency certification.
//               Highly motivated, adaptable, and comfortable working independently
//               or in collaborative teams.
//             </p>

//             {/* Tags */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "8px",
//                 marginBottom: "36px",
//               }}
//             >
//               {[
//                 "Web Development",
//                 "Mobile Apps",
//                 "Desktop Apps",
//                 "API Integration",
//                 "Git",
//                 "BNSP Certified",
//               ].map((t) => (
//                 <span
//                   key={t}
//                   style={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     padding: "5px 12px",
//                     borderRadius: "var(--radius-sm)",
//                     background: "var(--accent-light)",
//                     color: "var(--accent)",
//                     border: "1px solid #c5d3f8",
//                   }}
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//               <a
//                 href="https://drive.google.com/file/d/1XWlEU1MIt_s2ln0OW_ZNMLFSLNLNS1bo/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-primary"
//               >
//                 Download CV
//               </a>
//               <a href="#contact" className="btn-ghost">
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
