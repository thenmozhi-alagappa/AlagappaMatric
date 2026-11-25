import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { img } from "../data/site.js";

/* Internal routes use <Link>, external URLs / files use <a> */
export function SmartLink({ to, children, ...rest }) {
  const external = /^(https?:|mailto:|tel:)/.test(to) || /\.(pdf|mp3)$/i.test(to);
  // Web links and PDFs (e.g. the +1 Registration Form) open in a new tab
  const newTab = to.startsWith("http") || /\.pdf$/i.test(to);
  if (external) return <a href={to} target={newTab ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>{children}</a>;
  return <Link to={to} {...rest}>{children}</Link>;
}

/* Topper photos come in 3 sizes (NAME-300.jpg, NAME-600.jpg, NAME.jpg) so the browser
   can pick the one closest to the on-screen size. This avoids moiré (rippling) on
   fine patterns like striped shirts that appears when a big photo is shrunk a lot. */
export function srcSetFor(src) {
  // photos that already point at a specific size (e.g. NAME-600.jpg) are used as-is
  if (!src || !src.startsWith("/images/toppers/") || /-(300|600)\.jpg$/.test(src)) return undefined;
  const base = src.replace(/\.jpg$/, "");
  return `${base}-300.jpg 300w, ${base}-600.jpg 600w, ${src} 1200w`;
}

/* Renders text as-is (any leftover "[EDIT]" marker is silently removed) */
export function T({ children }) {
  if (typeof children !== "string") return children;
  return children.replace(/\s*\[EDIT\]\s*/g, " ").trim();
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHead({ eyebrow, title, lead, center }) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className="h2">{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function PageHero({ image, title, text, crumbs = [], position = "center 25%" }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" style={{ backgroundImage: `url('${img(image)}')`, backgroundPosition: position }} />
      <div className="wrap">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          {crumbs.map(([label, to]) => <li key={label}>{to ? <Link to={to}>{label}</Link> : label}</li>)}
        </ul>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function CtaBanner({ image, eyebrow, title, text, actions = [], children, position }) {
  return (
    <section className="cta-banner" style={{ backgroundImage: `url('${img(image)}')`, backgroundPosition: position || "center" }}>
      <div className="wrap">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        {children}
        {actions.length > 0 && (
          <div className="actions">
            {actions.map(([label, to], i) => (
              <SmartLink key={label} to={to} className={`btn ${i === 0 ? "btn--gold" : "btn--outline"}`}>{label}</SmartLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function SideNav({ title, links, activeTo }) {
  return (
    <aside className="side-nav">
      <h4>{title}</h4>
      <ul>
        {links.map(([label, to]) => (
          <li key={label}><SmartLink to={to} className={to === activeTo ? "is-active" : undefined}>{label}</SmartLink></li>
        ))}
      </ul>
    </aside>
  );
}

export function PathwayCard({ title, img: image, to, text, cta = "Explore", num, delay = 0 }) {
  return (
    <Link className={`pathway reveal reveal-delay-${delay}`} to={to}>
      <img src={img(image)} alt="" loading="lazy" />
      <div className="pathway__body">
        {num && <span className="pathway__num">{num}</span>}
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="link-arrow">{cta}</span>
      </div>
    </Link>
  );
}

export function NewsCard({ item, to, delay = 0, showText }) {
  const inner = (
    <>
      <div className="news-card__img"><img src={img(item.img)} srcSet={srcSetFor(item.img)} sizes="(max-width: 640px) 90vw, 33vw" alt="" loading="lazy" /></div>
      <time>{item.date}</time>
      <h3>{item.title}</h3>
      {showText && item.text && <p><T>{item.text}</T></p>}
      {showText && item.poster && <a className="news-card__poster" href={item.poster} target="_blank" rel="noopener noreferrer">View result poster</a>}
    </>
  );
  const cls = `news-card reveal reveal-delay-${delay % 4}`;
  return to ? <Link className={cls} to={to}>{inner}</Link> : <article className={cls} id={item.id}>{inner}</article>;
}

/* Animated number that counts up when scrolled into view */
export function CountUp({ value, plain }) {
  const ref = useRef(null);
  const [n, setN] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    // Shows the real number by default; only animates from 0 once scrolled into view.
    let raf;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      setN(0);
      const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{plain ? n : n.toLocaleString("en-IN")}</span>;
}

/* Tabs */
export function Tabs({ items, render }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs__list" role="tablist">
        {items.map((it, i) => (
          <button key={it.tab} className="tabs__btn" role="tab" aria-selected={i === active} onClick={() => setActive(i)}>{it.tab}</button>
        ))}
      </div>
      {items.map((it, i) => (
        <div key={it.tab} className={`tabs__panel${i === active ? " is-active" : ""}`} role="tabpanel">{i === active && render(it)}</div>
      ))}
    </>
  );
}

/* Photo mosaic with built-in lightbox */
export function Mosaic({ items, captions = true }) {
  const [open, setOpen] = useState(-1);
  const move = useCallback((d) => setOpen((o) => (o + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (open < 0) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open, move]);

  // While the viewer is open, fetch the next and previous full-size photos so arrows feel instant.
  useEffect(() => {
    if (open < 0) return;
    [1, -1].forEach((d) => {
      const it = items[(open + d + items.length) % items.length];
      new Image().src = img(it.src).replace("-800.jpg", "-1800.jpg");
    });
  }, [open, items]);

  return (
    <>
      <div className="mosaic">
        {items.map((it, i) => (
          <a key={it.src + i} className={it.size || undefined} href={img(it.src).replace("-800.jpg", "-1800.jpg")} onClick={(e) => { e.preventDefault(); setOpen(i); }}>
            <img src={img(it.thumb || it.src)} alt={it.caption} loading={i < 12 ? "eager" : "lazy"} fetchpriority={i < 4 ? "high" : undefined} decoding="async" style={{ objectPosition: it.pos || "center 25%" }} />
            {captions && <span className="caption">{it.caption}</span>}
          </a>
        ))}
      </div>
      {open >= 0 && (
        <div className="lightbox is-open" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={(e) => e.target === e.currentTarget && setOpen(-1)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(-1)}>✕</button>
          <button className="lightbox__prev" aria-label="Previous" onClick={() => move(-1)}>←</button>
          <img src={img(items[open].src).replace("-800.jpg", "-1800.jpg")} alt={items[open].caption} />
          <button className="lightbox__next" aria-label="Next" onClick={() => move(1)}>→</button>
          <p className="lightbox__cap">{items[open].caption}</p>
        </div>
      )}
    </>
  );
}

/* Simple line icons */
const PATHS = {
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /><path d="M15.5 14.2A5 5 0 0 1 21 19" /></>,
  cap: <><path d="M2 8l10-5 10 5-10 5L2 8z" /><path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></>,
  land: <><path d="M3 21l6-12 4 7 3-4 5 9H3z" /><circle cx="17" cy="5" r="2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  trophy: <><path d="M8 4h8v4.5a4 4 0 0 1-8 0V4z" /><path d="M8 5.5H5.5a2.5 2.5 0 0 0 2.8 4M16 5.5h2.5a2.5 2.5 0 0 1-2.8 4M12 12.5v3M9 20h6M10 15.5h4l.6 4.5h-5.2z" /></>,
  medal: <><path d="M8 3l2.5 6M16 3l-2.5 6" /><circle cx="12" cy="15" r="6" /><path d="M12 12l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  flask: <><path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4A1.5 1.5 0 0 0 20 19l-6-10V3" /><path d="M7 14h10" /></>,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="1" /><path d="M8 20h8M12 16v4" /></>,
  book: <path d="M4 4h5a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4zM20 4h-5a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h6V4z" />,
  home: <><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z" /><path d="M9 21v-6h6v6" /></>,
  robot: <><rect x="6" y="7" width="12" height="10" rx="2" /><circle cx="10" cy="12" r="1" /><circle cx="14" cy="12" r="1" /><path d="M12 3v4M3 12h3M18 12h3" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  heart: <path d="M12 20l-7-7a4 4 0 0 1 6-6l1 1 1-1a4 4 0 0 1 6 6l-7 7z" />,
  bus: <><rect x="3" y="8" width="18" height="10" rx="2" /><path d="M7 18v2M17 18v2M3 12h18" /></>,
  plus: <><path d="M12 7v10M7 12h10" /><circle cx="12" cy="12" r="9" /></>,
};
export function Icon({ name, className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{PATHS[name]}</svg>;
}

export const SOCIAL_ICONS = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" /></svg>,
};
