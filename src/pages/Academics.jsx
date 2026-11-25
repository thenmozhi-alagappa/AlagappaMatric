import { SITE, img } from "../data/site.js";
import { subjectGroups, concessions, toppers, toppersYear, resultHighlights } from "../data/content.js";
import { T, srcSetFor, Eyebrow, SectionHead, PageHero, CtaBanner } from "../components/ui.jsx";

const STAGES = [
  ["Pre-Primary", "Montessori and nursery foundations through the Alagappa family of schools."],
  ["Primary · I–V", "Language, numeracy and curiosity through activity-based learning."],
  ["Secondary · VI–X", "Depth in every subject, with labs and preparation for the SSLC examination."],
  ["Higher Sec. · XI–XII", "Specialised streams and focused coaching for board and entrance exams."],
];

export default function Academics() {
  return (
    <>
      <PageHero image="/images/school/bio-lab-teacher-1800.jpg" title="Academics" crumbs={[["Academics"]]}
        text="Balanced growth of knowledge and wisdom, guided by qualified, caring teachers." />

      <section className="section" id="approach">
        <div className="wrap intro-grid">
          <div className="reveal">
            <Eyebrow>Academic Approach</Eyebrow>
            <p className="statement">“Human soul without education is like <em>marble in quarry</em>.”</p>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="lead">We believe education should bring out the best in every child: intellectually, morally and creatively.</p>
            <p><T>Following the Samacheer Kalvi syllabus prescribed by the Government of Tamil Nadu, our teachers combine strong fundamentals with labs, projects, quizzes and personal mentoring, so students gain both knowledge and the wisdom to use it. </T></p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <SectionHead eyebrow="Stages of Learning" title="From first steps to board exams." />
          <div className="steps">
            {STAGES.map(([t, p], i) => <div key={t} className={`step reveal reveal-delay-${i}`}><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="subjects">
        <div className="wrap">
          <SectionHead eyebrow="Subject Combinations" title="Seven Higher Secondary groups."
            lead="Choose the combination that fits your goals, across Science, Computer Science, Commerce and Humanities." />
          <div className="cards cards--4">
            {subjectGroups.map((g, i) => (
              <div key={g.title} className={`card reveal reveal-delay-${i % 4}`}>
                <h3>{g.title}</h3>
                <ul>{g.subjects.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="concessions">
            <div>
              <Eyebrow>Merit Concession</Eyebrow>
              <p>For Class XI admission, based on Class X marks.</p>
            </div>
            {concessions.map(([range, offer]) => (
              <div className="concession" key={range}><b>{range}</b><span>{offer}</span></div>
            ))}
          </div>
          <a className="btn btn--green" href={SITE.registrationForm} target="_blank" rel="noopener noreferrer">Download +1 Registration Form</a>
        </div>
      </section>

      <section className="section bg-green" id="results">
        <div className="wrap">
          <SectionHead eyebrow={`Exam Results · ${toppersYear}`} title="Our toppers." />
          {[["Class XII", "Higher Secondary · out of 600"], ["Class X", "Secondary · out of 500"]].map(([cls, sub]) => (
            <div className="topper-group" key={cls}>
              <div className="topper-group__head reveal">
                <h3>{cls}</h3>
                <span>{sub}</span>
              </div>
              <div className="toppers toppers--dark toppers--three">
                {toppers.filter((t) => t.cls.startsWith(cls + " ")).map((t, i) => (
                  <div key={t.name} className={`topper reveal reveal-delay-${i % 3}`}>
                    <img src={img(t.img)} srcSet={srcSetFor(t.img)} sizes="200px" alt={t.name} loading="lazy" />
                    <h3>{t.name}</h3>
                    <div className="score">{t.score}</div>
                    <small>{t.cls.replace(cls + " · ", "")}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={`Results at a Glance · ${toppersYear}`} title="Consistent excellence across the board." />
          <div className="results-grid">
            {resultHighlights.map((r) => (
              <div className="result-card reveal" key={r.title}>
                <a className="result-card__poster" href={r.poster} target="_blank" rel="noopener noreferrer">
                  <img src={r.poster.replace("-1800.jpg", "-800.jpg")} alt={`${r.title} results ${toppersYear} poster`} loading="lazy" />
                </a>
                <div>
                  <h3 className="h3">{r.title}</h3>
                  <table className="data">
                    <tbody>{r.rows.map(([k, v]) => <tr key={k}><td>{k}</td><td><b>{v}</b></td></tr>)}</tbody>
                  </table>
                  {r.above90 && (
                    <>
                      <h4 className="result-card__sub">Students scoring above 90</h4>
                      <div className="chips">{r.above90.map(([s, n]) => <span className="chip" key={s}>{s} <b>{n}</b></span>)}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner image="/images/life/students-group-2-1800.jpg" title="Ready to join our next batch of achievers?"
        actions={[["Admissions", "/admissions"], ["Enquire", "/contact#enquire"]]} />
    </>
  );
}
