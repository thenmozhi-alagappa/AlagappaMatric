import { SITE, img } from "../data/site.js";
import { founders } from "../data/content.js";
import { T, PageHero, CtaBanner } from "../components/ui.jsx";

export default function Heritage() {
  return (
    <>
      <PageHero image="/images/school/building-garden-1800.jpg" title="Our Rich Heritage" crumbs={[["About Us", "/about"], ["Our Rich Heritage"]]}
        text="A philanthropist who turned a scrub jungle into a galaxy of institutions, and the family that carries his vision forward." />

      <section className="section">
        <div className="wrap">
          {founders.map((f) => (
            <article className="profile reveal" id={f.id} key={f.id}>
              <img src={img(f.img)} alt={f.name} loading="lazy" />
              <div>
                <span className="profile__role">{f.role}</span>
                <h2>{f.name}</h2>
                {f.quals && <p className="profile__quals">{f.quals}</p>}
                {f.paras.map((p, i) => <p key={i}><T>{p}</T></p>)}
                {f.quote && <blockquote className="profile__quote">{f.quote}</blockquote>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner image="/images/school/building-garden-1800.jpg" position="center 30%" eyebrow="Vallal Vazhthu" title="Honouring the spirit of our founder."
        text="Listen to the Vallal Vazhthu, sung in tribute to Dr. RM. Alagappa Chettiar.">
        <img className="cta-portrait" src="/images/founders/alagappa-chettiar-800.jpg" alt="Dr. R.M. Alagappa Chettiar" loading="lazy" />
        <audio controls preload="none" style={{ maxWidth: "100%", margin: "0 auto" }}>
          <source src={SITE.vallalVazhthu} type="audio/mpeg" />
        </audio>
      </CtaBanner>
    </>
  );
}
