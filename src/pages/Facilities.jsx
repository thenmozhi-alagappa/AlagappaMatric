import { Link } from "react-router-dom";
import { facilities } from "../data/content.js";
import { T, Eyebrow, SectionHead, PageHero, Icon } from "../components/ui.jsx";

export default function Facilities() {
  const withPhoto = facilities.filter((f) => f.img);
  const withoutPhoto = facilities.filter((f) => !f.img);
  return (
    <>
      <PageHero image="/images/school/building-front-1800.jpg" title="Facilities" crumbs={[["About Us", "/about"], ["Facilities"]]}
        text="A 15-acre campus designed for discovery, practice and well-being." />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="School Infrastructure" title="Spaces that support every learner." />
          <div className="cards cards--4 fac-cards">
            {withPhoto.map((f, i) => (
              <div key={f.title} className={`card card--photo reveal reveal-delay-${i % 4}`}>
                <div className="card__photo"><img src={f.img} alt={f.title} loading="lazy" /></div>
                <div className="card__body">
                  <h3>{f.title}</h3>
                  <p><T>{f.text}</T></p>
                </div>
              </div>
            ))}
          </div>
          <div className="fac-mini">
            {withoutPhoto.map((f, i) => (
              <div key={f.title} className={`fac-mini__item reveal reveal-delay-${i % 5}`}>
                <Icon name={f.icon} className="fac-mini__icon" />
                <h3>{f.title}</h3>
                <p><T>{f.text}</T></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap split split--reverse">
          <div className="split__media reveal"><img src="/images/campus/hostel-1800.jpg" alt="Alagappa Hostel building, Karaikudi" loading="lazy" /></div>
          <div className="reveal reveal-delay-2">
            <Eyebrow>Hostel Life</Eyebrow>
            <h2 className="h2">A home away from home.</h2>
            <p className="lead">Our hostels offer a safe, disciplined and caring environment, with nutritious food, supervised study hours and time for recreation.</p>
            <Link className="link-arrow" to="/contact#enquire">Enquire about Hostel</Link>
          </div>
        </div>
      </section>
    </>
  );
}
