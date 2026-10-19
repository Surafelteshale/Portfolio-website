
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

export default function ProjectsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const mm = gsap.matchMedia();

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
          <p className="projects-eyebrow">IDEAS INTO REALITY</p>

          <h2>
            Selected Projects
            <span> .</span>
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
                  <div className="project-card-topline">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="project-card-main">
                    <p className="project-kicker">
                      PROJECT {project.number}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-card-bottom">
                    <span className="project-status text-white">
                      {/* <span className="project-status-dot" /> */}
                      TAKE A CLOSER LOOK
                    </span>

                    <span className="project-arrow" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>

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
