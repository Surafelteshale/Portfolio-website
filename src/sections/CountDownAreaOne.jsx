
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Count from "../common/Count";
import AnimatedText from "../components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const headline =
  "I Build Useful Software, Thoughtful Designs, and Meaningful Digital Experiences.";

export default function CountDownAreaOne() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Section number and label
      gsap.from(".about-section-label", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section-label",
          start: "top 90%",
          once: true,
        },
      });

      // Introduction fades upward
      gsap.from(".about-intro", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 90%",
          once: true,
        },
      });

      // Statistic labels, numbers and descriptions
      gsap.from(".about-stat-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
          once: true,
        },
      });

      // Closing statement
      gsap.from(".about-footer", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-footer",
          start: "top 95%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="crafting-section-unique black-version fix section-padding"
    >
      <div className="container">
        {/* Section number and label */}
        <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3 about-section-label">
          <div className="text-white opacity-75 fw-medium fs--18px">
            02
          </div>

          <div className="line w-100" />

          <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
            <i className="fa-solid fa-circle" />
            WHAT I DO
          </div>
        </div>

        {/* Reusable character-by-character headline */}
        <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title02 mb-48 mx-auto">
          <AnimatedText
            as="h2"
            text={headline}
            className="white-clr text-center fs-64px fw-bold about-heading"
          />
        </div>

        {/* Introduction */}
        <div className="portfolio-intro text-center mx-auto mb-5 about-intro">
          <p className="fs-six fw-normal text-white opacity-75">
            I combine software development, visual design, and creative
            problem-solving to build digital experiences that look good,
            work well, and solve real problems.
          </p>
        </div>

        {/* Four evenly spaced statistics */}
        <div className="crafting-counter-wrap about-stats">
          <div className="row g-0">
            {/* Statistic 1 */}
            <div className="col-lg-3 col-6 px-lg-3 px-2">
              <div className="crafting-items h-100 pt-lg-5 pt-4 pb-4">
                <div className="box pt-md-5 pt-4 text-center about-stat-content">
                  <p className="fs-six fw-normal text-white opacity-75 mb-1">
                    Core Disciplines
                  </p>

                  <div className="d-flex cont-area justify-content-center">
                    <span className="count">
                      <Count number={3} text="+" />
                    </span>
                  </div>

                  <p className="portfolio-stat-detail">
                    Development, design &amp; creative media
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="col-lg-3 col-6 px-lg-3 px-2">
              <div className="crafting-items h-100 pt-lg-5 pt-4 pb-4">
                <div className="box pt-md-5 pt-4 text-center about-stat-content">
                  <p className="fs-six fw-normal text-white opacity-75 mb-1">
                    Ways of Thinking
                  </p>

                  <div className="d-flex cont-area justify-content-center">
                    <span className="count">
                      <Count number={2} />
                    </span>
                  </div>

                  <p className="portfolio-stat-detail">
                    Creative vision + technical logic
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="col-lg-3 col-6 px-lg-3 px-2">
              <div className="crafting-items h-100 pt-lg-5 pt-4 pb-4">
                <div className="box pt-md-5 pt-4 text-center about-stat-content">
                  <p className="fs-six fw-normal text-white opacity-75 mb-1">
                    Primary Goal
                  </p>

                  <div className="d-flex cont-area justify-content-center">
                    <span className="count">
                      <Count number={1} />
                    </span>
                  </div>

                  <p className="portfolio-stat-detail">
                    Build solutions that create real value
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 4 */}
            <div className="col-lg-3 col-6 px-lg-3 px-2">
              <div className="crafting-items h-100 pt-lg-5 pt-4 pb-4">
                <div className="box pt-md-5 pt-4 text-center about-stat-content">
                  <p className="fs-six fw-normal text-white opacity-75 mb-1">
                    Mindset
                  </p>

                  <div className="d-flex cont-area justify-content-center">
                    <span className="count">
                      <Count number={100} text="%" />
                    </span>
                  </div>

                  <p className="portfolio-stat-detail">
                    Learn, build, improve, repeat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="portfolio-section-footer text-center mt-5 about-footer">
          <p className="text-white opacity-75 fs-six">
            Not just making things look good — making them work better.
          </p>
        </div>
      </div>
    </section>
  );
}
