import { useEffect, useRef, useState } from "react";
import { SITE } from "../data/site.js";

/* Animated logo intro (plays once per browser session).
   The crest forms like a rainbow: its layers (public/images/logo/parts) each draw in
   as a sweeping arc, one after another, outside to inside:
   red lettered band -> blue cog ring -> centre emblem -> motto ribbon unrolls.
   Then the crest locks (pop, golden glow, shine) and flies into the header logo.
   Timings: CSS (.splash*) + the constants below. */

const LAYERS = ["band", "cog", "emblem", "ribbon"];
const LOCK_MS = 2650;   // all layers drawn
const FLY_MS = 3750;    // start flying to the header
const FLY_DUR = 1000;

function shouldShow() {
  try {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (sessionStorage.getItem("alagappa-splash-seen")) return false;
  } catch { /* storage blocked: still show it */ }
  return true;
}

export default function Splash() {
  const [stage, setStage] = useState(() => (shouldShow() ? "build" : "done"));
  const logoRef = useRef(null);
  const timers = useRef([]);

  const flyToHeader = () => {
    const logo = logoRef.current;
    const mark = document.querySelector(".site-header .brand__mark");
    if (logo && mark) {
      const a = logo.getBoundingClientRect();
      const b = mark.getBoundingClientRect();
      const s = b.width / a.width;
      const dx = b.left + b.width / 2 - (a.left + a.width / 2);
      const dy = b.top + b.height / 2 - (a.top + a.height / 2);
      logo.style.transition = `transform ${FLY_DUR}ms cubic-bezier(.65,0,.35,1)`;
      logo.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
    }
    setStage("fly");
    timers.current.push(setTimeout(() => setStage("done"), FLY_DUR + 80));
  };

  useEffect(() => {
    if (stage === "done") return;
    try { sessionStorage.setItem("alagappa-splash-seen", "1"); } catch { /* ignore */ }
    document.body.style.overflow = "hidden";
    timers.current.push(setTimeout(() => setStage("locked"), LOCK_MS));
    timers.current.push(setTimeout(flyToHeader, FLY_MS));
    return () => { timers.current.forEach(clearTimeout); timers.current = []; document.body.style.overflow = ""; };
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  // tell the rest of the site the intro is over (the poster pop-up waits for this)
  useEffect(() => {
    if (stage !== "done") return;
    document.body.style.overflow = "";
    window.__alagappaSplashDone = true;
    window.dispatchEvent(new Event("alagappa:splash-done"));
  }, [stage]);

  if (stage === "done") return null;

  const skip = () => { timers.current.forEach(clearTimeout); timers.current = []; flyToHeader(); };

  return (
    <div className={`splash is-${stage}`} role="dialog" aria-label={`${SITE.fullName} intro`}>
      <div className="splash__logo" ref={logoRef}>
        <span className="splash__glow" aria-hidden="true" />
        <div className="splash__inner" role="img" aria-label={SITE.fullName}>
          {LAYERS.map((l) => (
            <img key={l} className={`splash__layer splash__layer--${l}`} src={`/images/logo/parts/${l}.png`} alt="" />
          ))}
          <span className="splash__shine" aria-hidden="true" style={{ WebkitMaskImage: `url(${SITE.logo})`, maskImage: `url(${SITE.logo})` }} />
        </div>
      </div>
      <button className="splash__skip" onClick={skip}>Skip</button>
    </div>
  );
}
