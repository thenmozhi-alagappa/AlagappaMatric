import { useState } from "react";
import { Link } from "react-router-dom";
import { img } from "../data/site.js";
import { achievements, achievementCats, achievementsYear, gallery } from "../data/content.js";
import { T, Eyebrow, SectionHead, PageHero, Mosaic } from "../components/ui.jsx";

function Block({ id, eyebrow, title, lead, text, main, inset, reverse, cream }) {
  return (
    <section className={`section${cream ? " bg-cream" : ""}`} id={id}>
      <div className={`wrap split${reverse ? " split--reverse" : ""}`}>
        <div className="split__media reveal">
          <img src={img(main)} alt="" loading="lazy" />
          {inset && <img className="inset" src={img(inset)} alt="" loading="lazy" />}
        </div>
        <div className="reveal reveal-delay-2">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="h2">{title}</h2>
          <p className="lead">{lead}</p>
          <p><T>{text}</T></p>
        </div>
      </div>
    </section>
  );
}

export default function CampusLife() {
  const [achFilter, setAchFilter] = useState("all");
  return (
    <>
      <PageHero image="/images/life/hockey-team-1800.jpg" title="Beyond the Curriculum" crumbs={[["Campus Life"]]}
        text="Clubs, sports, arts and service, where students discover who they are." />

      <Block id="clubs" eyebrow="Clubs & Associations" title="Learning to lead and to serve."
        lead="Our clubs build leadership, teamwork and empathy."
        text="The Interact Club, in partnership with Rotary, organises Annadhanam and medical camps. Students also take part in quiz clubs, eco clubs and partnerships like the Smile Foundation."
        main="/images/life/seniors-reading-800.jpg" inset="/images/school/chess-1-800.jpg" />

      <Block id="sports" cream reverse eyebrow="Sports" title="Champions on every field."
        lead="From the Alagappa Sports Olympiad to zonal meets and karate championships."
        text="Students train in athletics, team games, yoga and martial arts, and compete at zonal, district and regional levels."
        main="/images/life/hockey-team-800.jpg" inset="/images/school/silambam-1-800.jpg" />

      <Block id="arts" eyebrow="Arts & Painting" title="Room for every kind of creativity."
        lead="Inspired by our founder's love of the arts and dance."
        text="A dedicated Arts and Crafts teacher guides students in painting, drawing and craft, while Annual Day and cultural festivals give every child a stage. "
        main="/images/events/umayal-birthday-dance-3-800.jpg" inset="/images/life/primary-activity-2-800.jpg" />

      <section className="section bg-green" id="achievements">
        <div className="wrap">
          <SectionHead eyebrow={`Activities & Achievements · ${achievementsYear}`} title="Proud moments."
            lead="Our students' achievements in the classroom, on the field and on the stage, as recorded in the school diary." />
          <div className="filters filters--dark">
            {achievementCats.map(([key, label]) => (
              <button key={key} className={achFilter === key ? "is-active" : undefined} onClick={() => setAchFilter(key)}>{label}</button>
            ))}
          </div>
          <div className="ach-grid" key={achFilter}>
            {achievements.filter((a) => achFilter === "all" || a.cat === achFilter).map((a, i) => (
              <article key={a.name + a.big} className="ach-card" style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
                <div className="ach-card__photo"><img src={a.img} alt={a.name} loading="lazy" /></div>
                <div className="ach-card__body">
                  <div className="ach-card__big">{a.big}</div>
                  <h3>{a.name}</h3>
                  <span className="ach-card__cls">{a.cls}</span>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="news-head">
            <div><Eyebrow>Gallery</Eyebrow><h2 className="h2" style={{ margin: 0 }}>Life on campus.</h2></div>
            <Link className="link-arrow" to="/gallery">Full Gallery</Link>
          </div>
          <Mosaic items={gallery.filter((g) => g.cat !== "campus").slice(0, 7)} />
        </div>
      </section>
    </>
  );
}
