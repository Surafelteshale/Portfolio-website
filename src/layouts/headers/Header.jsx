
import { useEffect, useState } from "react";
import useStickyHeader from "../../hooks/useStickyHeader";
import NavigationDrawer from "../navigation/NavigationDrawer";

export default function Header() {
  const sticky = useStickyHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        id="header-sticky"
        className={`header-section header--1 header-style1 ${
          sticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <a href="#home" className="header-logo">
                <span className="portfolio-logo">
                  SURA<span>.</span>
                </span>
              </a>

              <div className="header-right d-flex justify-content-end align-items-center">
                <a
                  href="mailto:surafelteshale18@gmail.com"
                  className="portfolio-email d-sm-flex d-none align-items-center gap-2 fs-seven fw-normal text-white opacity-75"
                >
                  surafelteshale18@gmail.com
                </a>

                <button
                  type="button"
                  className="header__hamburger d-flex align-items-center gap-2 fs-seven fw-semibold text-white heading-font my-auto"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open navigation menu"
                  aria-expanded={menuOpen}
                >
                  <span className="portfolio-menu-icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                  MENU
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <NavigationDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
