import { Link, useLocation } from "react-router-dom";
import { SITE } from "../data/site.js";

const tel = (p) => `tel:${p.replace(/\D/g, "")}`;

// Shown after the enquiry form is sent (see Contact.jsx).
export default function ThankYou() {
  const { state } = useLocation();
  const parent = state?.parent?.trim();
  const student = state?.student?.trim();

  return (
    <section className="thanks">
      <div className="thanks__card">
        <img className="thanks__logo" src={SITE.logo} alt={`${SITE.fullName} logo`} />
        <div className="thanks__tick" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <span className="eyebrow">Enquiry Received</span>
        <h1 className="thanks__title">Thank you{parent ? `, ${parent}` : ""}!</h1>
        <p className="lead">
          We have received your admission enquiry{student ? <> for <strong>{student}</strong></> : ""}.
          Our school office will get in touch with you shortly.
        </p>
        <p className="thanks__contact">
          For anything urgent, call us on{" "}
          {SITE.phones.map((p, i) => <span key={p}>{i > 0 && " or "}<a href={tel(p)}>{p}</a></span>)}
          <br />{SITE.officeHours}
        </p>
        <div className="thanks__actions">
          <Link className="btn btn--green" to="/">Back to Home</Link>
          <Link className="btn btn--outline" to="/admissions">Admission Details</Link>
        </div>
        <p className="thanks__motto">{SITE.motto.join(" · ")}</p>
      </div>
    </section>
  );
}
