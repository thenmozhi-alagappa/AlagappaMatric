import { useState } from "react";
import { gallery } from "../data/content.js";
import { PageHero, Mosaic } from "../components/ui.jsx";

const FILTERS = [["all", "All"], ["students", "Student Life"], ["events", "Events"], ["sports", "Sports"], ["academics", "Academics"], ["campus", "Campus"]];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? gallery : gallery.filter((g) => g.cat === filter);
  return (
    <>
      <PageHero image="/images/events/umayal-birthday-winners-2-1800.jpg" title="Gallery" crumbs={[["Campus Life", "/campus-life"], ["Gallery"]]}
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
