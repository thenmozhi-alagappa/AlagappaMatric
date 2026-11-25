import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE, NAV, UTILITY, img } from "../data/site.js";
import { SmartLink } from "./ui.jsx";

export function Brand() {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <Link className="brand" to="/" aria-label={`${SITE.name} home`}>
      <span className="brand__mark">
        {logoOk ? <img src={SITE.logo} alt="" onError={() => setLogoOk(false)} /> : "A"}
      </span>
      <span className="brand__text">
        <span className="brand__name">{SITE.name}</span>
        <span className="brand__sub">{SITE.sub}</span>
      </span>
    </Link>
  );
}

const tel = (p) => `tel:${p.replace(/\D/g, "")}`;

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openBtn = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (g) => g.to === pathname || g.items.some(([, to]) => to.split("#")[0] === pathname);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="utility">
        <div className="wrap">
          <div className="utility__contact">
            <a href={tel(SITE.phones[0])}>☎ {SITE.phones[0]}</a>
            <a href={`mailto:${SITE.email}`}>✉ {SITE.email}</a>
          </div>
          <ul className="utility__links">
            {UTILITY.map(([label, to]) => <li key={label}><SmartLink to={to}>{label}</SmartLink></li>)}
          </ul>
        </div>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap">
          <Brand />
          <nav className="main-nav" aria-label="Main">
            <ul>
              {NAV.map((g) => (
                <li key={g.title}>
                  <Link to={g.to} className={isActive(g) ? "is-active" : undefined}>{g.title}</Link>
                  <ul className="dropdown">
                    {g.items.map(([label, to]) => <li key={label}><SmartLink to={to}>{label}</SmartLink></li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-cta">
            <Link className="btn btn--outline btn--sm" to="/contact#enquire">Enquire</Link>
            <button ref={openBtn} className="menu-toggle" aria-controls="flyout" aria-expanded={open} onClick={() => setOpen(true)}>
              <span className="menu-toggle__label">Menu</span>
              <span className="menu-toggle__bars"><span /><span /><span /></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`flyout${open ? " is-open" : ""}`} id="flyout" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="flyout__media" style={{ backgroundImage: `url('${img("/images/founders/alagappa-chettiar-sketch-1800.jpg")}')` }}>
          <p className="flyout__quote">{SITE.quote}<cite>— {SITE.quoteBy}</cite></p>
        </div>
        <div className="flyout__panel">
          <div className="flyout__top">
            <button ref={closeBtn} className="flyout__close" aria-label="Close menu" onClick={() => { setOpen(false); openBtn.current?.focus(); }}>✕</button>
          </div>
          <div className="flyout__groups">
            {NAV.map((g) => (
              <div className="flyout__group" key={g.title}>
                <h3><Link to={g.to} onClick={() => setOpen(false)}>{g.title}</Link></h3>
                <ul>
                  {g.items.map(([label, to]) => <li key={label}><SmartLink to={to} onClick={() => setOpen(false)}>{label}</SmartLink></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="flyout__foot">
            <Link className="btn btn--outline" to="/contact#enquire" onClick={() => setOpen(false)}>Enquire</Link>
            <Link className="btn btn--outline" to="/contact" onClick={() => setOpen(false)}>Visit Campus</Link>
          </div>
        </div>
      </div>
    </>
  );
}
