import { useState } from "react";
import { gallery } from "../data/content.js";
import { PageHero, Mosaic } from "../components/ui.jsx";

const ALL_FILTERS = [["all", "All"], ["students", "Student Life"], ["events", "Events"], ["sports", "Sports"], ["academics", "Academics"], ["campus", "Campus"]];
// A filter only shows when it has photos (e.g. "Events" returns once event photos are added).
const FILTERS = ALL_FILTERS.filter(([key]) => key === "all" || gallery.some((g) => g.cat === key));

// Tiles use light "-thumb.jpg" copies (made by tools/make-gallery-thumbs.py); the viewer opens the full-size photo.
const thumbOf = (src) => (src.endsWith("-800.jpg") ? src.replace("-800.jpg", "-thumb.jpg") : src.replace(/\.jpg$/, "-thumb.jpg"));
const GALLERY = gallery.map((g) => ({ ...g, thumb: thumbOf(g.src) }));

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? GALLERY : GALLERY.filter((g) => g.cat === filter);
  return (
    <>
      <PageHero image="/images/life/students-group-2-1800.jpg" title="Gallery" crumbs={[["Campus Life", "/campus-life"], ["Gallery"]]}
        text="Celebrations, competitions and everyday moments at Alagappa." />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            {FILTERS.map(([key, label]) => (
              <button key={key} className={filter === key ? "is-active" : undefined} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
          {/* To add photos, edit the `gallery` list in src/data/content.js */}
          <Mosaic key={filter} items={items} />
        </div>
      </section>
    </>
  );
}
