import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Splash from "./Splash.jsx";
import PosterPopup from "./PosterPopup.jsx";

/* Handles scroll position on navigation (top of page, or to #hash)
   and the fade-up "reveal" animation for elements with class .reveal */
function usePageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

export default function Layout() {
  usePageEffects();
  const { pathname } = useLocation();
  return (
    <>
      <Splash />
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      {pathname !== "/thank-you" && <PosterPopup />}
    </>
  );
}
