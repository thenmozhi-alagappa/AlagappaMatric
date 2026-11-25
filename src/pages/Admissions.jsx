import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";
import { admissionSteps, admissionSections, faqs, concessions } from "../data/content.js";
import { T, SectionHead, PageHero, SideNav, CtaBanner } from "../components/ui.jsx";

export default function Admissions() {
  const links = [...admissionSections.map((s) => [s.title, `/admissions#${s.id}`]), ["FAQs", "/admissions#faq"]];
  return (
    <>
      <PageHero image="/images/life/students-group-3-1800.jpg" title="Begin Your Journey" crumbs={[["Admissions"]]}
        text="We welcome families who share our belief in knowledge, discipline and values." />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="How to Apply" title="Four simple steps." />
          <div className="steps">
            {admissionSteps.map(([t, p], i) => <div key={t} className={`step reveal reveal-delay-${i}`}><h3>{t}</h3><p>{p}</p></div>)}
          </div>
          <div className="concessions" style={{ marginTop: 48 }}>
            <div>
              <span className="eyebrow">Merit Concession · Class XI</span>
              <p>Students joining Class XI receive a fee concession based on their Class X marks.</p>
            </div>
            {concessions.map(([range, offer]) => (
              <div className="concession" key={range}><b>{range}</b><span>{offer}</span></div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link className="btn btn--green" to="/contact#enquire">Enquire Now</Link>
            <a className="btn btn--outline" href={SITE.registrationForm} target="_blank" rel="noopener noreferrer">+1 Registration Form (PDF)</a>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap content-grid">
          <SideNav title="Admissions" links={links} />
          <div className="prose">
            {admissionSections.map((s) => (
              <div key={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                {s.text && <p><T>{s.text}</T></p>}
                {s.list && <ul>{s.list.map((li) => <li key={li}><T>{li}</T></li>)}</ul>}
              </div>
            ))}

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="accordion">
              {faqs.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><div className="acc-body"><T>{a}</T></div></details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner image="/images/life/primary-trio-1800.jpg" eyebrow="Questions?" title="Our admissions team is here to help."
        text={`Call ${SITE.phones[0]} or write to us, and we'll guide you through every step.`}
        actions={[["Enquire", "/contact#enquire"], ["Visit", "/contact"]]} />
    </>
  );
}
