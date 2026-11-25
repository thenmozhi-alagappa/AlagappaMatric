import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { announcements } from "../data/content.js";

/* Poster pop-up shown when the website opens (once per browser session),
   right after the animated logo intro.
   - Wide screens: all posters side by side in one pop-up.
   - Phones: a slideshow with arrows, dots, swipe and auto-advance.
   Closes on ✕ / Esc / clicking the backdrop. */

const AUTO_MS = 5000;
const KEY = "alagappa-posters-seen";
const WIDE = "(min-width: 760px)";

function alreadySeen() {
  try { return !!sessionStorage.getItem(KEY); } catch { return false; }
}

export default function PosterPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [wide, setWide] = useState(() => typeof window !== "undefined" && window.matchMedia(WIDE).matches);
  const touchX = useRef(null);
  const closeBtn = useRef(null);
  const n = announcements.length;

  // open after the logo intro finishes (or right away if there was no intro)
  useEffect(() => {
    if (!n || alreadySeen()) return;
    let t;
    const show = () => { t = setTimeout(() => setOpen(true), 250); };
    if (window.__alagappaSplashDone || !document.querySelector(".splash")) {
      t = setTimeout(() => (document.querySelector(".splash") ? null : setOpen(true)), 600);
    }
    window.addEventListener("alagappa:splash-done", show);
    return () => { clearTimeout(t); window.removeEventListener("alagappa:splash-done", show); };
  }, [n]);

  useEffect(() => {
    if (!open) return;
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 300);
  }, []);
  const go = useCallback((d) => setI((x) => (x + d + n) % n), [n]);

  // side-by-side on wide screens, slideshow on phones
  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // keyboard
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  // auto-advance
  useEffect(() => {
    if (!open || paused || n < 2 || wide) return;
    const t = setTimeout(() => go(1), AUTO_MS);
    return () => clearTimeout(t);
  }, [open, paused, i, n, go, wide]);

  if (!open || !n) return null;

  return (
    <div className={`poster-pop${closing ? " is-closing" : ""}${wide && n > 1 ? " is-wide" : ""}`} style={{ "--n": n }} role="dialog" aria-modal="true" aria-label="School announcements"
      onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="poster-pop__card"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}>
        <button ref={closeBtn} className="poster-pop__close" onClick={close} aria-label="Close">✕</button>

        <div className="poster-pop__track" style={wide ? undefined : { transform: `translateX(-${i * 100}%)` }}>
          {announcements.map((a, k) => (
            <figure className="poster-pop__slide" key={a.src} aria-hidden={!wide && k !== i}>
              <img src={a.src} alt={a.alt} />
            </figure>
          ))}
        </div>

        {n > 1 && !wide && (
          <>
            <button className="poster-pop__nav poster-pop__nav--prev" onClick={() => go(-1)} aria-label="Previous poster">‹</button>
            <button className="poster-pop__nav poster-pop__nav--next" onClick={() => go(1)} aria-label="Next poster">›</button>
          </>
        )}

        <div className="poster-pop__bar">
          {n > 1 && !wide && (
            <div className="poster-pop__dots">
              {announcements.map((a, k) => (
                <button key={a.src} className={k === i ? "is-active" : undefined} onClick={() => setI(k)} aria-label={`Show poster ${k + 1}`}>
                  {k === i && !paused && <span style={{ animationDuration: `${AUTO_MS}ms` }} />}
                </button>
              ))}
            </div>
          )}
          {(wide ? announcements[0] : announcements[i]).link && (
            <Link className="poster-pop__more" to={(wide ? announcements[0] : announcements[i]).link} onClick={close}>More achievements →</Link>
          )}
        </div>
      </div>
    </div>
  );
}
