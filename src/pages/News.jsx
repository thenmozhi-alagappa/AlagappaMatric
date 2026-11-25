import { news } from "../data/content.js";
import { PageHero, NewsCard } from "../components/ui.jsx";

export default function News() {
  // The big "featured" layout needs 5 stories; with fewer, show them in one even row.
  const big = news.length >= 5;
  const featured = big ? news.slice(0, 5) : news;
  const rest = big ? news.slice(5) : [];
  return (
    <>
      <PageHero image="/images/life/seniors-reading-1800.jpg" title="In the Spotlight" crumbs={[["News"]]}
        text="Stories, celebrations and achievements from our school community." />
      <section className="section">
        <div className="wrap">
          {/* To add a story, add an item at the top of the `news` list in src/data/content.js */}
          <div className={big ? "news news--featured" : "news"}>
            {featured.map((n, i) => <NewsCard key={n.id} item={n} delay={i} showText />)}
          </div>
          {rest.length > 0 && (
            <div className="news news--3" style={{ marginTop: 56 }}>
              {rest.map((n, i) => <NewsCard key={n.id} item={n} delay={i} showText />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
