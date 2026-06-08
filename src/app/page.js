import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Journey from "@/components/Journey";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <About />
      <Journey /> 
      <Education />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const StarIcon = () => (
//   <svg
//     className="w-5 h-5 text-violet-400 animate-pulse"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// const ExternalLinkIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//     />
//   </svg>
// );

// const MailIcon = () => (
//   <svg
//     className="w-5 h-5 mr-2"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//     />
//   </svg>
// );

// const MenuIcon = () => (
//   <svg
//     className="w-6 h-6 text-white"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M4 6h16M4 12h16M4 18h16"
//     />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     className="w-6 h-6 text-white"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M6 18L18 6M6 6l12 12"
//     />
//   </svg>
// );

// // Custom Technology Crisp SVG Icons
// const TechIcon = ({ name }) => {
//   const icons = {
//     "next.js": (
//       <svg
//         className="w-8 h-8 text-white"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.75-14.75a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM8.5 9.75A.75.75 0 007 9.75v4.5a.75.75 0 001.5 0V11.5h1.5v2.75a.75.75 0 001.5 0v-4.5a.75.75 0 00-1.5 0V10H8.5v-.25z" />
//       </svg>
//     ),
//     laravel: (
//       <svg
//         className="w-8 h-8 text-red-500"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M5.4 3.2L12 .3l6.6 2.9v17.6L12 23.7l-6.6-2.9V3.2zM12 2.3L6.8 4.6v15.8L12 22.7l5.2-2.3V4.6L12 2.3z" />
//       </svg>
//     ),
//     react: (
//       <svg
//         className="w-8 h-8 text-cyan-400 animate-[spin_10s_linear_infinite]"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
//         <ellipse
//           rx="10"
//           ry="4.5"
//           transform="rotate(60 12 12)"
//           cx="12"
//           cy="12"
//         />
//         <ellipse
//           rx="10"
//           ry="4.5"
//           transform="rotate(120 12 12)"
//           cx="12"
//           cy="12"
//         />
//         <circle cx="12" cy="12" r="2" fill="currentColor" />
//       </svg>
//     ),
//     "c#": (
//       <svg
//         className="w-8 h-8 text-purple-500"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5h-1v-1h1v1zm0-2h-1v-3h1v3zm3.5 2h-1v-5h1v5z" />
//       </svg>
//     ),
//     database: (
//       <svg
//         className="w-8 h-8 text-blue-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <ellipse cx="12" cy="5" rx="9" ry="3" />
//         <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
//       </svg>
//     ),
//     mobile: (
//       <svg
//         className="w-8 h-8 text-emerald-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <rect x="5" y="2" width="14" height="20" rx="2" />
//         <path d="M12 18h.01" strokeLinecap="round" />
//       </svg>
//     ),
//     code: (
//       <svg
//         className="w-8 h-8 text-amber-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
//       </svg>
//     ),
//     design: (
//       <svg
//         className="w-8 h-8 text-pink-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5 3 15 4.5 15.5C6 16 7 15 8.5 16.5C10 18 9 20 10.5 21C11 21.5 11.5 22 12 22Z" />
//       </svg>
//     ),
//   };
//   return icons[name.toLowerCase()] || icons["code"];
// };

// // ==========================================
// // MAIN COMPONENT EXPORT
// // ==========================================
// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("all");

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Grouped Skill Data (Updated with C#, SQL Server, React Native)
//   const skillCategories = {
//     frontend: {
//       title: "Frontend & UI/UX",
//       skills: [
//         { name: "Next.js", icon: "next.js" },
//         { name: "React Native", icon: "react" },
//         { name: "Tailwind CSS", icon: "design" },
//         { name: "Figma", icon: "design" },
//         { name: "Bootstrap", icon: "design" },
//         { name: "HTML5 & CSS3", icon: "code" },
//         { name: "JavaScript", icon: "code" },
//       ],
//     },
//     backend: {
//       title: "Backend & System Development",
//       skills: [
//         { name: "Laravel (PHP)", icon: "laravel" },
//         { name: "C# (.NET)", icon: "c#" },
//         { name: "Java", icon: "code" },
//         { name: "PHP Core", icon: "code" },
//       ],
//     },
//     database: {
//       title: "Databases & Tools",
//       skills: [
//         { name: "SQL Server", icon: "database" },
//         { name: "MySQL", icon: "database" },
//         { name: "MongoDB", icon: "database" },
//         { name: "Power BI", icon: "design" },
//         { name: "Flutter", icon: "mobile" },
//       ],
//     },
//   };

//   // Projects Dataset
//   const projects = [
//     {
//       title: "Sistem Database Warga",
//       desc: "Citizen Database System designed to efficiently manage population, administration, and structured social profiles inside a centralized village repository.",
//       tags: ["Laravel", "MySQL", "Tailwind CSS"],
//       link: "https://github.com/Online-Academy-MSIB/db-warga-yunta",
//       image: "/assets/dashboard-dbyunta.png",
//     },
//     {
//       title: "Fitmeal Web App",
//       desc: "An e-commerce platform curated for customized nutrition, offering structured meals tailored to specific fitness tracking and caloric objectives.",
//       tags: ["Next.js", "Tailwind CSS", "Laravel API"],
//       link: "https://github.com/trjgdyan/web-fitmeal",
//       image: "/assets/dashboard-fitmeal.png",
//     },
//     {
//       title: "SINOKI Website",
//       desc: "A digital workspace and communications system managing data pipeline activities and organizational operations across the Polinema Campus network.",
//       tags: ["PHP Laravel", "MySQL", "Bootstrap"],
//       link: "https://github.com/trjgdyan/SINOKI-POLINEMA",
//       image: "/assets/signup-sinoki.png",
//     },
//     {
//       title: "Ez-Verify OCR Mobile",
//       desc: "Mobile application implementing Optical Character Recognition (OCR) systems to automate document confirmation pipelines directly from devices.",
//       tags: ["Flutter", "Dart", "Firebase"],
//       link: "https://github.com/trjgdyan/Mobile_project-akhir",
//       image: "/assets/projectmobile.jpeg",
//     },
//     {
//       title: "EDAS Decision Support",
//       desc: "An analytics website deploying the EDAS algorithm methodology to dynamically calculate product popularity and guide optimization models.",
//       tags: ["PHP", "JavaScript", "SQL Server"],
//       link: "https://github.com/trjgdyan/ProjectSPK_EDAS",
//       image: "/assets/edas.png",
//     },
//     {
//       title: "Micro-Services E-Commerce",
//       desc: "Modern digital marketplace engineering flexible category filtering, high-concurrency payment integrations, and responsive client layouts.",
//       tags: ["Next.js", "Tailwind", "MongoDB"],
//       link: "https://github.com/trjgdyan/e-commerce",
//       image: "/assets/ecommerce.png",
//     },
//   ];

//   return (
//     <div className="bg-zinc-950 text-zinc-100 min-height-screen font-sans scroll-smooth relative overflow-hidden selection:bg-violet-500/30 selection:text-violet-300">
//       {/* BACKGROUND DECORATIONS (Glowing Blobs for Premium Aesthetic) */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
//       <div className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

//       {/* ==========================================
//           NAVBAR: High Tech Glassmorphism
//           ========================================== */}
//       <nav className="fixed w-full backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900 z-50 top-0 left-0 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
//           <a
//             href="#"
//             className="flex items-center space-x-2 text-xl font-bold tracking-tight"
//           >
//             <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent text-2xl">
//               Y
//             </span>
//             <span className="text-zinc-100 font-semibold text-lg">
//               yani.dev
//             </span>
//           </a>

//           <div
//             className="nav__menu__btn md:hidden cursor-pointer"
//             onClick={toggleMenu}
//           >
//             {isOpen ? <CloseIcon /> : <MenuIcon />}
//           </div>

//           <ul
//             className={`md:flex items-center space-x-1 absolute md:static left-0 w-full md:w-auto bg-zinc-950 md:bg-transparent border-b border-zinc-900 md:border-none transition-all duration-300 ${
//               isOpen
//                 ? "top-[64px] opacity-100 py-6 px-8 flex flex-col space-y-4 space-x-0"
//                 : "top-[-400px] opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
//             }`}
//           >
//             {["Home", "About", "Education", "Skill", "Project"].map((item) => (
//               <li key={item} className="w-full md:w-auto">
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="text-zinc-400 hover:text-white transition-colors duration-200 block py-2 px-3 rounded-md hover:bg-zinc-900/50 md:hover:bg-transparent font-medium text-[15px]"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//             <li className="w-full md:w-auto pt-2 md:pt-0 md:pl-4">
//               <a
//                 href="#contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block text-center bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
//               >
//                 Contact Me
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* ==========================================
//           HEADER: Stunning Hero Showcase
//           ========================================== */}
//       <header
//         id="home"
//         className="pt-32 pb-24 md:pt-48 md:pb-36 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
//       >
//         <div className="md:col-span-7 flex flex-col space-y-6">
//           <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full self-start">
//             <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
//             <span className="text-violet-300 text-xs font-semibold tracking-wider uppercase">
//               Open to Opportunities
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
//             Tri Jagad <br />
//             <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
//               Ariyani
//             </span>
//           </h1>

//           <div className="flex items-start md:items-center space-x-3 text-zinc-400 max-w-lg">
//             <StarIcon />
//             <p className="text-lg leading-relaxed">
//               Informatics Engineer specializing in modern Web, Mobile, and
//               Desktop software development.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <a
//               href="#contact"
//               className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:scale-[1.02]"
//             >
//               Hire Me Now
//             </a>
//             <a
//               href="#project"
//               className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-center font-semibold px-8 py-4 rounded-full transition-all duration-300"
//             >
//               Explore My Projects
//             </a>
//           </div>
//         </div>

//         {/* Hero Portrait Glassmorphism Box */}
//         <div className="md:col-span-5 flex justify-center relative">
//           <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-emerald-500/10 blur-[60px] rounded-full" />
//           <div className="relative group p-4 border border-zinc-800/80 rounded-3xl bg-zinc-900/40 backdrop-blur-md max-w-xs md:max-w-md overflow-hidden transition-all duration-500 hover:border-zinc-700">
//             <div className="aspect-square relative rounded-2xl overflow-hidden bg-zinc-800">
//               {/* Replace public/assets/fotoku.png as needed inside Image tag */}
//               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
//               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-950/40 to-zinc-900 text-zinc-500 text-sm">
//                 <span className="absolute text-xl font-mono text-zinc-600 tracking-wider">
//                   TRI_JAGAD_A.PNG
//                 </span>
//               </div>
//             </div>
//             <div className="mt-4 flex justify-between items-center px-2">
//               <div>
//                 <h3 className="font-semibold text-zinc-100">
//                   Tri Jagad Ariyani
//                 </h3>
//                 <p className="text-zinc-500 text-xs">
//                   State Polytechnic of Malang
//                 </p>
//               </div>
//               <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-md border border-zinc-700/50 font-mono">
//                 GPA 3.74
//               </span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ==========================================
//           ABOUT: Professional Bio Showcase
//           ========================================== */}
//       <section
//         id="about"
//         className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900/60"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
//           <div className="md:col-span-5 relative flex justify-center order-2 md:order-1">
//             <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
//             <div className="relative border border-zinc-800 rounded-2xl p-3 bg-zinc-900/40 backdrop-blur-sm max-w-sm w-full">
//               <div className="aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800 flex items-center justify-center">
//                 <span className="font-mono text-zinc-600 text-sm">
//                   COBA1.JPEG
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-7 flex flex-col space-y-6 order-1 md:order-2">
//             <h2 className="text-4xl font-bold tracking-tight text-zinc-100 relative">
//               About Me
//               <span className="absolute bottom-[-10px] left-0 w-16 h-[3px] bg-violet-500 rounded-full" />
//             </h2>
//             <p className="text-zinc-300 text-lg leading-relaxed pt-2">
//               I am an Informatics Engineering graduate from the{" "}
//               <strong>State Polytechnic of Malang</strong>, specialized in
//               modern software architectures. I bring professional experience in
//               designing and building performant web, mobile, and desktop
//               systems.
//             </p>
//             <p className="text-zinc-400 leading-relaxed">
//               Highly skilled in API integrations, database governance, and
//               continuous version control using Git. Fully certified in
//               professional software competency by <strong>BNSP</strong>, I am
//               highly versatile, thrive in both autonomous and cross-functional
//               teams, and continuously explore emergent programming paradigms.
//             </p>

//             <div className="grid grid-cols-2 gap-4 py-4">
//               <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4">
//                 <h4 className="text-violet-400 font-bold text-2xl">3.74</h4>
//                 <p className="text-zinc-400 text-sm">Informatics Eng. GPA</p>
//               </div>
//               <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4">
//                 <h4 className="text-emerald-400 font-bold text-2xl">BNSP</h4>
//                 <p className="text-zinc-400 text-sm">Certified Developer</p>
//               </div>
//             </div>

//             <div className="pt-2">
//               <a
//                 href="https://drive.google.com/file/d/1XWlEU1MIt_s2ln0OW_ZNMLFSLNLNS1bo/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-zinc-100 font-semibold px-6 py-3.5 rounded-full transition-all duration-300"
//               >
//                 <span>Download Professional CV</span>
//                 <ExternalLinkIcon />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           EDUCATION: Interactive Timeline Tracker
//           ========================================== */}
//       <section
//         id="education"
//         className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900/60 bg-zinc-950/40"
//       >
//         <div className="flex flex-col items-center text-center space-y-4 mb-16">
//           <h2 className="text-4xl font-bold tracking-tight text-zinc-100">
//             Education Journey
//           </h2>
//           <p className="text-zinc-400 max-w-md">
//             My academic milestones and technical training background.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto relative pl-8 border-l border-zinc-800/80 space-y-12">
//           {/* Milestone 1 */}
//           <div className="relative group">
//             <span className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-4 border-violet-500 group-hover:bg-violet-500 transition-all duration-300" />
//             <div className="bg-zinc-900/30 group-hover:bg-zinc-900/50 border border-zinc-850 group-hover:border-zinc-800 p-6 md:p-8 rounded-2xl transition-all duration-300">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//                 <h3 className="text-xl font-bold text-zinc-100 group-hover:text-violet-400 transition-colors duration-200">
//                   Malang State Polytechnic (Polinema)
//                 </h3>
//                 <span className="text-sm bg-violet-500/10 text-violet-300 border border-violet-500/25 px-3 py-1 rounded-full font-mono font-medium self-start md:self-auto">
//                   2021 — 2025
//                 </span>
//               </div>
//               <p className="text-zinc-400 font-medium text-sm mt-1">
//                 D4 Informatics Engineering
//               </p>

//               <ul className="mt-4 space-y-2.5 text-zinc-400 text-sm">
//                 <li className="flex items-center space-x-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
//                   <span>
//                     Cumulative GPA:{" "}
//                     <strong className="text-zinc-200">3.74 / 4.00</strong>
//                   </span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
//                   <span>
//                     Core Focus: Software Architecture, Advanced Systems
//                     Integration, and Database Systems.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           SKILL: Category Filters & Glow Cards
//           ========================================== */}
//       <section
//         id="skill"
//         className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900/60"
//       >
//         <div className="flex flex-col items-center text-center space-y-4 mb-16">
//           <h2 className="text-4xl font-bold tracking-tight text-zinc-100">
//             Professional Tech Stack
//           </h2>
//           <p className="text-zinc-400 max-w-md">
//             My tech ecosystem, updated with robust frameworks and database
//             layers.
//           </p>

//           {/* Interactive Filters */}
//           <div className="flex flex-wrap justify-center gap-2 pt-4">
//             {["all", "frontend", "backend", "database"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
//                   activeTab === tab
//                     ? "bg-violet-600 border-violet-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
//                     : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200"
//                 }`}
//               >
//                 {tab === "all" ? "All Stack" : tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Display Filtered Skillsets */}
//         <div className="space-y-12">
//           {Object.entries(skillCategories).map(([key, category]) => {
//             if (activeTab !== "all" && activeTab !== key) return null;
//             return (
//               <div key={key} className="space-y-6">
//                 <h3 className="text-sm font-bold tracking-wider uppercase text-zinc-400 pl-2 border-l-2 border-violet-500">
//                   {category.title}
//                 </h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                   {category.skills.map((skill) => (
//                     <div
//                       key={skill.name}
//                       className="group relative bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-900 hover:border-zinc-800/80 p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
//                       <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl mb-4 group-hover:border-zinc-700 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
//                         <TechIcon name={skill.icon} />
//                       </div>
//                       <p className="text-zinc-300 font-semibold text-sm group-hover:text-white transition-colors duration-200">
//                         {skill.name}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ==========================================
//           PORTFOLIO: Clean Tech Grid
//           ========================================== */}
//       <section
//         id="project"
//         className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-900/60 bg-zinc-950/40"
//       >
//         <div className="flex flex-col items-center text-center space-y-4 mb-16">
//           <h2 className="text-4xl font-bold tracking-tight text-zinc-100">
//             Featured Projects
//           </h2>
//           <p className="text-zinc-400 max-w-lg">
//             A selected engineering showcase of full stack systems and document
//             integrations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group border border-zinc-900 hover:border-zinc-850 bg-zinc-900/20 hover:bg-zinc-900/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
//             >
//               <div className="aspect-video bg-zinc-800 w-full relative overflow-hidden flex items-center justify-center border-b border-zinc-900">
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-10" />
//                 <span className="font-mono text-zinc-600 text-xs tracking-widest">
//                   {project.title.toUpperCase()} PREVIEW
//                 </span>
//               </div>

//               <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
//                 <div className="space-y-4">
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-[11px] bg-zinc-900 text-zinc-400 font-medium px-2.5 py-1 rounded-md border border-zinc-800"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <h3 className="text-xl font-bold text-zinc-100 group-hover:text-violet-400 transition-colors duration-200">
//                     {project.title}
//                   </h3>
//                   <p className="text-zinc-400 text-sm leading-relaxed">
//                     {project.desc}
//                   </p>
//                 </div>

//                 <div className="pt-6 border-t border-zinc-900 mt-6 flex items-center">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors duration-200"
//                   >
//                     <span>Inspect Repository</span>
//                     <ExternalLinkIcon />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ==========================================
//           CONTACT: Modern Glass Bubble Panel
//           ========================================== */}
//       <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
//         <div className="relative group rounded-3xl p-8 md:p-16 border border-zinc-850 bg-gradient-to-b from-zinc-900/60 to-zinc-950/20 backdrop-blur-md overflow-hidden flex flex-col items-center text-center space-y-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 opacity-30 pointer-events-none" />

//           <div className="space-y-3 relative z-10">
//             <h2 className="text-4xl font-extrabold tracking-tight text-zinc-100">
//               Let’s Build Together
//             </h2>
//             <p className="text-zinc-400 max-w-md mx-auto">
//               I am open to strategic software developer roles and system
//               consulting. Drop a message to trigger an integration!
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 relative z-10">
//             <a
//               href="mailto:trjgdyan@gmail.com"
//               className="inline-flex items-center bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-[1.03]"
//             >
//               <MailIcon />
//               <span>trjgdyan@gmail.com</span>
//             </a>

//             <a
//               href="https://wa.me/+6289654184882"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 text-emerald-400"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.519.99c-5.44 0-9.866 4.372-9.87 9.802 0 1.81.481 3.578 1.393 5.161l-.944 3.45 3.549-.93z" />
//               </svg>
//               <span>WhatsApp Direct</span>
//             </a>
//           </div>

//           {/* Social Channels bubble list */}
//           <div className="flex items-center space-x-3 pt-4 relative z-10">
//             {[
//               {
//                 name: "linkedin",
//                 url: "https://www.linkedin.com/in/trijagadariyani/",
//               },
//               { name: "github", url: "https://github.com/trjgdyan" },
//               {
//                 name: "instagram",
//                 url: "https://www.instagram.com/trjgdyann_?igsh=bmxtMXo4dDQ3a2Y3",
//               },
//             ].map((social) => (
//               <a
//                 key={social.name}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 capitalize text-xs font-mono"
//               >
//                 {social.name.substring(0, 2)}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           FOOTER: Premium Low-Key Brand Sign
//           ========================================== */}
//       <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-500 font-mono">
//         <p>© Tri Jagad Ariyani | 2026. Built with Next.js and Tailwind.</p>
//       </footer>
//     </div>
//   );
// }
