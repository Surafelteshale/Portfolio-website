
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavigationDrawer({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`portfolio-overlay ${isOpen ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`portfolio-drawer ${isOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="portfolio-drawer-top">
          <a href="#home" className="portfolio-logo" onClick={onClose}>
            SURA<span>.</span>
          </a>

          <button
            type="button"
            className="portfolio-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>

        <p className="portfolio-menu-label">NAVIGATION</p>

        <nav className="portfolio-nav">
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
              style={{ "--item-index": index }}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="portfolio-nav-number">
                0{index + 1}
              </span>

              <span>{item.label}</span>
              <span className="portfolio-nav-arrow">↗</span>
            </a>
          ))}
        </nav>

        <div className="portfolio-drawer-footer">
          <span>LET'S BUILD SOMETHING.</span>
          <a href="mailto:surafelteshale18@gmail.com">
            Get in touch ↗
          </a>
        </div>
      </aside>
    </>
  );
}
