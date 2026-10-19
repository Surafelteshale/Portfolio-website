
export default function HeroSection() {
  return (
    <section
      id="home"
      className="banner-section portfolio-hero fix position-relative"
    >
      {/* Background image and overlay */}
      <div className="portfolio-hero-background" aria-hidden="true" />
      <div className="portfolio-hero-overlay" aria-hidden="true" />

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <div className="content-head mb-5 d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-4">
                <div>
                  <span
                    className="hero-sub mb-3 fs-32px heading-font text-white wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Software, Design &amp;
                    <span className="d-flex flex-wrap fs-32px heading-font text-white align-items-center gap-2">
                      Digital Experiences
                    </span>
                  </span>

                  <h1
                    className="h-title pt-2 white fw_700 visible-slowly-bottom"
                    data-wow-delay="0.4s"
                  >
                    <span>BUILDING</span>
                    <span className="d-flex align-items-center flex-wrap">
                      DIGITAL FUTURES<span className="portfolio-period">.</span>
                    </span>
                  </h1>
                </div>

                <div className="portfolio-hero-note">
                  <div className="text-center">
                    <div className="portfolio-orbit">
                      <span>S</span>
                    </div>
                    <p className="fs-20px lh-base text-white opacity-75 fw-medium heading-font">
                      Developer
                      <br />
                      &amp; Creative
                    </p>
                  </div>
                </div>
              </div>

              <div className="serial-section-wrap d-flex align-items-center gap-3 mb-4 pb-xl-2">
                <div className="text-white opacity-75 fw-medium fs--18px">
                  001
                </div>
                <div className="line w-100" />
                <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
                  <i className="fa-solid fa-circle" />
                  WHAT I DO
                </div>
              </div>

              <div className="hero-social-area">
                <div>
                  <div className="fs--18px mb-3 fw-medium text-white">
                    Find me online
                  </div>

                  <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                    <a
                      href="https://github.com/Surafelteshale"
                      className="icon"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <i className="fa-brands fa-github" />
                    </a>

                    <a
                      href="mailto:surafelteshale18@gmail.com"
                      className="icon"
                      aria-label="Email"
                    >
                      <i className="fa-solid fa-envelope" />
                    </a>
                  </div>
                </div>

                <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-5 gap-lg-4 gap-3">
                  <a href="#projects" className="common_btn text-nowrap">
                    Explore My Work
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right" />
                    </span>
                  </a>

                  <p
                    className="pra-box opacity-75 fw-normal white fs-six wow fadeInUp"
                    data-wow-delay="0.6s"
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
