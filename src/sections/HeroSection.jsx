
import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  FaGithub,
  FaEnvelope,
  FaArrowRight,
  FaCircle,
} from "react-icons/fa";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Animate the hero text and elements upward into view.
      timeline
        .fromTo(
          "[data-hero-animate='eyebrow']",
          {
            autoAlpha: 0,
            y: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          }
        )
        .fromTo(
          "[data-hero-animate='title']",
          {
            autoAlpha: 0,
            y: 65,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-animate='note']",
          {
            autoAlpha: 0,
            y: 25,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.55"
        )
        .fromTo(
          "[data-hero-animate='indicator']",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-animate='bottom']",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
          },
          "-=0.2"
        );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="banner-section portfolio-hero fix position-relative"
    >
      {/* Background image and overlay */}
      <div
        className="portfolio-hero-background"
        aria-hidden="true"
      />
      <div
        className="portfolio-hero-overlay"
        aria-hidden="true"
      />

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <div className="content-head mb-5 d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-4">
                {/* Main heading */}
                <div>
                  <div
                    className="hero-sub mb-3 fs-32px heading-font text-white"
                    data-hero-animate="eyebrow"
                  >
                    Software, Design &amp;
                    <span className="d-flex flex-wrap fs-32px heading-font text-white align-items-center gap-2">
                      Digital Experiences
                    </span>
                  </div>

                  <h1 className="h-title pt-2 white fw_700">
                    <span data-hero-animate="title">
                      BUILDING
                    </span>

                    <span
                      className="d-flex align-items-center flex-wrap"
                      data-hero-animate="title"
                    >
                      DIGITAL FUTURES
                      <span className="portfolio-period">.</span>
                    </span>
                  </h1>
                </div>

                {/* Rotating image and role */}
                <div
                  className="portfolio-hero-note"
                  data-hero-animate="note"
                >
                  <div className="text-center">
                    <div className="portfolio-orbit">
                      <img
                        src="/assets/img/hero-circle.png"
                        alt=""
                        className="portfolio-orbit-image"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="fs-20px lh-base text-white opacity-75 fw-medium heading-font">
                      Developer
                      <br />
                      &amp; Creative
                    </p>
                  </div>
                </div>
              </div>

              {/* Section indicator */}
              <div
                className="serial-section-wrap d-flex align-items-center gap-3 mb-4 pb-xl-2"
                data-hero-animate="indicator"
              >
                <div className="text-white opacity-75 fw-medium fs--18px">
                  001
                </div>

                <div className="line w-100" />

                <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
                  <FaCircle
                    size={7}
                    aria-hidden="true"
                  />
                  WHAT I DO
                </div>
              </div>

              {/* Social links and introduction */}
              <div className="hero-social-area">
                <div data-hero-animate="bottom">
                  <div className="fs--18px mb-3 fw-medium text-white">
                    Find me online
                  </div>

                  <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                    <a
                      href="https://github.com/Surafelteshale"
                      className="icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub aria-hidden="true" />
                    </a>

                    <a
                      href="mailto:surafelteshale18@gmail.com"
                      className="icon"
                      aria-label="Email"
                    >
                      <FaEnvelope aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-5 gap-lg-4 gap-3">
                  <a
                    href="#projects"
                    className="common_btn text-nowrap"
                    data-hero-animate="bottom"
                  >
                    Explore My Work

                    <span className="icon_wrapper">
                      <FaArrowRight aria-hidden="true" />
                    </span>
                  </a>

                  <p
                    className="pra-box opacity-75 fw-normal white fs-six"
                    data-hero-animate="bottom"
                  >
                    I build useful software, modern websites, and thoughtful
                    visual experiences that help businesses turn ideas into
                    reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
