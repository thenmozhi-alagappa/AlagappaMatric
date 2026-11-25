import { Link } from "react-router-dom";
import { SITE, img } from "../data/site.js";
import { faculty, principal, headmistress } from "../data/content.js";
import { T, Eyebrow, SectionHead, PageHero } from "../components/ui.jsx";

export default function Leadership() {
  return (
    <>
      <PageHero image="/images/campus/trust-office-1800.jpg" title="Leadership & Faculty" crumbs={[["About Us", "/about"], ["Leadership & Faculty"]]}
        text="Experienced educators and administrators who guide every student's journey." />

      <section className="section">
        <div className="wrap">
          <article className="profile reveal" id="chairman">
            <img src={img("/images/founders/ram-vairavan-800.jpg")} alt="Dr. Ramanathan Vairavan" loading="lazy" />
            <div>
              <span className="profile__role">Chairman & Correspondent · {SITE.group}</span>
              <h2>Dr. Ramanathan Vairavan</h2>
              <p>The grandson of Dr. R.M. Alagappa Chettiar, leading the Alagappa Group of Educational Institutions.</p>
              <Link className="link-arrow" to="/heritage#ram-vairavan">Read full profile</Link>
            </div>
          </article>

          <article className="profile reveal" id="principal">
            {principal.img
              ? <img src={principal.img} alt={principal.name} loading="lazy" style={{ objectPosition: "center 25%" }} />
              : <div className="profile__placeholder" aria-hidden="true"><span>Photo<br />coming soon</span></div>}
            <div>
              <span className="profile__role">{principal.role}</span>
              <h2>{principal.name}</h2>
              <p><strong>{principal.quals}</strong></p>
              <Link className="link-arrow" to="/about#principal">Read the full message</Link>
            </div>
          </article>

          <article className="profile reveal" id="headmistress">
            {headmistress.img
              ? <img src={headmistress.img} alt={headmistress.name} loading="lazy" style={{ objectPosition: "center 25%" }} />
              : <div className="profile__placeholder" aria-hidden="true"><span>Photo<br />coming soon</span></div>}
            <div>
              <span className="profile__role">{headmistress.role}</span>
              <h2>{headmistress.name}</h2>
              <p><strong>{headmistress.quals}</strong></p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-cream" id="faculty">
        <div className="wrap">
          <SectionHead eyebrow="Our Faculty" title="About 100 dedicated educators."
            lead="Qualified, caring teachers who combine subject expertise with personal attention for every student." />
          <div className="cards">
            {faculty.map(([title, text], i) => (
              <div key={title} className={`card reveal reveal-delay-${i % 3}`}>
                <h3>{title}</h3>
                <p><T>{text}</T></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="trust">
        <div className="wrap split">
          <div className="split__media split__media--full reveal"><img src={img("/images/campus/trust-office-1800.jpg")} alt="Dr. Alagappa Chettiar Educational Trust office" loading="lazy" /></div>
          <div className="reveal reveal-delay-2">
            <Eyebrow>Trust Office</Eyebrow>
            <h2 className="h2">The Dr. Alagappa Chettiar Educational Trust</h2>
            <p className="lead">The school is governed by The Dr. Alagappa Chettiar Educational Trust, which oversees the Alagappa schools in Karaikudi.</p>
            <Link className="link-arrow" to="/contact">Contact the Office</Link>
          </div>
        </div>
      </section>
    </>
  );
}
