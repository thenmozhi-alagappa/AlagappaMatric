import { Link } from "react-router-dom";
import { SITE, img } from "../data/site.js";
import { timeline, institutions, groupLogos, trustIntro, trustManagement, principal, headmistress, schoolProfile } from "../data/content.js";
import { T, Eyebrow, SectionHead, PageHero, SideNav, PathwayCard } from "../components/ui.jsx";

export const ABOUT_LINKS = [
  ["Our School", "/about"],
  ["Our Rich Heritage", "/heritage"],
  ["Leadership & Faculty", "/leadership"],
  ["Facilities", "/facilities"],
];

export default function About() {
  return (
    <>
      <PageHero image="/images/life/students-group-1-1800.jpg" title="Meet Alagappa" crumbs={[["About Us"]]}
        text="A school in the heart of Karaikudi, built on a philanthropist's dream and a family's lifelong commitment to education." />

      <section className="section">
        <div className="wrap intro-grid">
          <div className="reveal">
            <Eyebrow>Who We Are</Eyebrow>
            <p className="statement">From <em>60 students in 1985</em> to a thriving community of 1,021+ learners.</p>
            <p className="about-tagline">“{schoolProfile.tagline}”</p>
          </div>
          <div className="reveal reveal-delay-2">
            {schoolProfile.paras.map((t, i) => <p key={i} className={i === 0 ? "lead" : undefined}>{t}</p>)}
          </div>
        </div>
      </section>

      <section className="section about-leaders" id="leadership">
        <div className="wrap">
          <div className="trust-mgmt reveal" id="trust-management">
            <div>
              <Eyebrow>Trust Management</Eyebrow>
              <p>{trustIntro}</p>
            </div>
            <ul>
              {trustManagement.map(([n, r]) => <li key={n}><b>{n}</b><span>{r}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="principal">
        <div className="wrap">
          <article className="leader-card leader-card--principal reveal">
            <div className="leader-card__photo">
              {principal.img
                ? <img src={principal.img} alt={principal.name} loading="lazy" />
                : <div className="photo-placeholder" aria-hidden="true"><span>Photo<br />coming soon</span></div>}
            </div>
            <div className="leader-card__body">
              <Eyebrow>Principal's Desk</Eyebrow>
              <h3>{principal.name}</h3>
              <span className="leader-card__role">{principal.role}</span>
              <span className="leader-card__quals">{principal.quals}</span>
              {principal.message.map((t, i) => <p key={i} className={i === 0 ? "leader-card__salute" : undefined}>{t}</p>)}
              <p className="leader-card__sign"><b>{principal.name}</b><br />{principal.role.toUpperCase()}</p>
              {(principal.email || principal.phone) && (
                <p className="leader-card__contact">
                  {principal.email && <a href={`mailto:${principal.email}`}>{principal.email}</a>}
                  {principal.email && principal.phone && " · "}{principal.phone}
                </p>
              )}
            </div>
          </article>

          <article className="leader-card leader-card--headmistress reveal" id="headmistress">
            <div className="leader-card__photo">
              {headmistress.img
                ? <img src={headmistress.img} alt={headmistress.name} loading="lazy" />
                : <div className="photo-placeholder" aria-hidden="true"><span>Photo<br />coming soon</span></div>}
            </div>
            <div className="leader-card__body">
              <Eyebrow>A Message from the Headmistress</Eyebrow>
              <h3>{headmistress.name}</h3>
              <span className="leader-card__role">{headmistress.role}</span>
              <span className="leader-card__quals">{headmistress.quals}</span>
              {headmistress.message.map((t, i) => <p key={i} className={i === 0 ? "leader-card__salute" : undefined}>{t}</p>)}
              <p className="leader-card__sign">With warm regards,<br /><b>{headmistress.signName}</b><br />{headmistress.role}</p>
              {headmistress.email && <p className="leader-card__contact"><a href={`mailto:${headmistress.email}`}>{headmistress.email}</a></p>}
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap content-grid">
          <SideNav title="About Us" links={ABOUT_LINKS} activeTo="/about" />
          <div className="prose">
            <h2>Our History</h2>
            <ol className="timeline">
              {timeline.map(([year, text]) => <li key={year}><b>{year}</b><p><T>{text}</T></p></li>)}
            </ol>

            <h2>Mission</h2>
            <p>{schoolProfile.mission}</p>
            <h2>Vision</h2>
            <p>{schoolProfile.vision}</p>

            <h2>School Timings</h2>
            <ul>{schoolProfile.timings.map(([c, t]) => <li key={c}><strong>{c}:</strong> {t}</li>)}</ul>

            <blockquote>“Human soul without education is like marble in quarry.”</blockquote>

            <Link className="link-arrow" to="/about#principal">Read the Principal's Message</Link>
          </div>
        </div>
      </section>

      <section className="section bg-green">
        <div className="wrap">
          <SectionHead eyebrow="The Alagappa Family" title="Part of a legacy of institutions."
            lead="Founded by Vallal Dr. RM. Alagappa Chettiar, the Alagappa group has grown into a complete educational journey, from Montessori to university." />
          <ul className="institutions">{institutions.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className="section--tight bg-cream">
        <div className="wrap">
          <SectionHead eyebrow={SITE.group} title={SITE.groupTagline + "."} center />
          <div className="logo-wall">
            {groupLogos.map((l) => (
              <div className="logo-wall__item" key={l.src} title={l.name}><img src={l.src} alt={l.name} loading="lazy" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap pathways">
          <PathwayCard title="Heritage" img="/images/founders/alagappa-chettiar-800.jpg" to="/heritage" text="The founders behind Alagappa." />
          <PathwayCard title="Leadership" img="/images/founders/ram-vairavan-800.jpg" to="/leadership" text="Principal, faculty and Trust office." delay={1} />
          <PathwayCard title="Facilities" img="/images/campus/matric-campus-new-800.jpg" to="/facilities" text="Labs, library, hostels and more." delay={2} />
        </div>
      </section>
    </>
  );
}
