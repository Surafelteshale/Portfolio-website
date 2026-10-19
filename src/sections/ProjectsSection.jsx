
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Business Management System",
    description:
      "A centralized platform for managing operations, tracking performance, and turning everyday business activities into clear, actionable insights.",
    year: "2026",
    category: "Software Engineering",
    type: "WEB APPLICATION",
  },
  {
    number: "02",
    title: "Restaurant POS & Inventory",
    description:
      "An integrated restaurant solution for orders, sales, stock management, and reporting, designed to make daily operations simpler and more efficient.",
    year: "2026",
    category: "Business Systems",
    type: "SAAS / ERP",
  },
  {
    number: "03",
    title: "Digital Experiences",
    description:
      "Modern, responsive websites with considered layouts, purposeful interactions, and a clear focus on usability, performance, and brand presentation.",
    year: "2026",
    category: "Web Development",
    type: "WEB DESIGN",
  },
  {
    number: "04",
    title: "Brand Identity System",
    description:
      "A cohesive visual language built around typography, color, art direction, and a distinctive identity that gives a brand a consistent presence.",
    year: "2026",
    category: "Visual Design",
    type: "BRAND IDENTITY",
  },
  {
    number: "05",
    title: "Automotive Campaign",
    description:
      "A premium creative direction combining cinematic imagery, refined graphic layouts, and compelling visual storytelling for automotive brands.",
    year: "2026",
    category: "Creative Direction",
    type: "DIGITAL CAMPAIGN",
  },
];

// Split text into individually animated characters.
// Spaces remain spaces, so the original text layout is preserved.
function splitIntoLetters(text) {
  return Array.from(text).map((character, index) => (
    <span
      className={
        character === " "
          ? "projects-heading-space"
          : "projects-heading-letter"
      }
      key={`${character}-${index}`}
      aria-hidden="true"
    >
      {character === " " ? "\u00A0" : character}
    </span>
  ));
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;

    if (!container || !heading) return;

    const mm = gsap.matchMedia();

    // Letter-by-letter heading animation.
    const headingLetters = heading.querySelectorAll(
      ".projects-heading-letter"
    );

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(headingLetters, {
        yPercent: 110,
        autoAlpha: 0,
      });

      gsap.to(headingLetters, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.035,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          once: true,
        },
      });
    });

    // Keep the existing stacked-card scroll animation on desktop.
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray(
        container.querySelectorAll(".project-scroll-card")
      );

      cards.forEach((card) => {
        gsap.to(card, {
          scale: 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            start: "top 100px",
            end: "bottom 60%",
            endTrigger: container,
            invalidateOnRefresh: true,
            markers: false,
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      className="projects-showcase section-padding"
    >
      <div className="container">
        {/* Section heading */}
        <div className="serial-section-wrap d-flex align-items-center gap-3 mb-5">
          <div className="text-white opacity-75 fw-medium fs--18px">
            03
          </div>

          <div className="line w-100" />

          <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
            <i className="fa-solid fa-circle" />
            Selected Projects · 2020–2026
          </div>
        </div>

        {/* Main heading */}
        <div className="projects-heading">
          <h2 ref={headingRef} aria-label="Selected Projects.">
            <span className="projects-heading-text">
              {splitIntoLetters("Selected Projects")}
            </span>
            <span className="projects-title-period">.</span>
          </h2>

          <p className="projects-intro">
            Software, digital experiences, and visual design
            built with purpose.
          </p>
        </div>

        {/* Scroll-animated project cards */}
        <div
          ref={containerRef}
          className="project-floating-wrap"
        >
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-scroll-card"
            >
              {/* Left side labels */}
              <div className="project-side-label project-side-label-left">
                <span>SELECTED</span>
                <span>PROJECTS</span>
              </div>

              <div className="project-card-inner">
                {/* Project image */}
                <div className="project-image-wrap">
                  <img
                    src="/assets/img/PM2025.jpg"
                    alt={`${project.title} project preview`}
                    className="project-image"
                    loading="lazy"
                  />

                  <div className="project-image-overlay" />

                  <span className="project-type">
                    {project.type}
                  </span>

                  <span className="project-image-number">
                    / {project.number}
                  </span>
                </div>

                {/* Project details */}
                <div className="project-card-content">
                  <div className="project-card-main">
                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-metadata">
                      <div className="project-meta-row">
                        <span className="project-meta-label">
                          Year:
                        </span>
                        <span className="project-meta-value">
                          {project.year}
                        </span>
                      </div>

                      <div className="project-meta-row">
                        <span className="project-meta-label">
                          Category:
                        </span>
                        <span className="project-meta-value">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Button and project number */}
                  <div className="project-card-bottom">
                    <a
                      href="#contact"
                      className="project-view-button"
                      aria-label={`View ${project.title} project`}
                    >
                      <span>VIEW PROJECT</span>

                      <span
                        className="project-view-arrow"
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>

                    <span className="project-large-number">
                      {project.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side labels */}
              <div className="project-side-label project-side-label-right">
                <span>CREATIVE</span>
                <span>DEVELOPMENT</span>
              </div>
            </article>
          ))}
        </div>

        {/* Section footer */}
        <div className="projects-footer">
          <span>DESIGNED WITH INTENTION.</span>
          <span>BUILT TO MAKE A DIFFERENCE.</span>
        </div>
      </div>
    </section>
  );
}
