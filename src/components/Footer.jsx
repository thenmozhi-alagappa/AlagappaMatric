import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, NAV } from "../data/site.js";
import { SmartLink, SOCIAL_ICONS } from "./ui.jsx";
import { Brand } from "./Header.jsx";

const tel = (p) => `tel:${p.replace(/\D/g, "")}`;

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-address">
              <Brand />
              <p className="footer-motto">{SITE.motto.join(" · ")}</p>
              <p>{SITE.address.join(" ")}</p>
              <p>{SITE.phones.map((p, i) => <span key={p}>{i > 0 && " · "}<a href={tel(p)}>{p}</a></span>)}</p>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <div className="social">
                {Object.entries(SITE.social).map(([k, v]) => <a key={k} href={v} aria-label={k}>{SOCIAL_ICONS[k]}</a>)}
              </div>
            </div>
            {NAV.slice(0, 3).map((g) => (
              <div key={g.title}>
                <h4>{g.title}</h4>
                <ul>{g.items.map(([label, to]) => <li key={label}><SmartLink to={to}>{label}</SmartLink></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="footer-quote">
            <p>{SITE.quote} — {SITE.quoteBy}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn--gold" to="/contact#enquire">Enquire</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {SITE.fullName}, Karaikudi. Governed by {SITE.trust}.</span>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><a href={SITE.groupSite} target="_blank" rel="noopener noreferrer">Alagappa Group</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <button className={`back-top${showTop ? " is-shown" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </>
  );
}
