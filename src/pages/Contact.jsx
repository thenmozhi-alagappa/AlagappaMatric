import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SITE } from "../data/site.js";
import { headmistress } from "../data/content.js";
import { T, Eyebrow, PageHero } from "../components/ui.jsx";

const tel = (p) => `tel:${p.replace(/\D/g, "")}`;
const GRADES = ["LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const navigate = useNavigate();

  // Sends the enquiry to a Google Form (see SITE.enquiryForm). No backend required.
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    const { url, fields } = SITE.enquiryForm || {};

    if (!url) {
      // Not connected yet: open the parent's email app with the enquiry filled in.
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Admission enquiry – " + data.student)}&body=${encodeURIComponent(body)}`;
      return;
    }

    const params = new URLSearchParams();
    Object.entries(fields).forEach(([name, entry]) => { if (entry && data[name]) params.append(entry, data[name]); });
    setStatus("sending");
    try {
      // Google Forms doesn't send CORS headers, so the request is "no-cors": it is delivered,
      // but the response can't be read. A network failure still throws and shows the error message.
      await fetch(url.replace(/\/viewform.*$/, "/formResponse"), { method: "POST", mode: "no-cors", body: params });
      form.reset();
      navigate("/thank-you", { state: { parent: data.parent, student: data.student } });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero image="/images/campus/matric-campus-new-1800.jpg" position="center 10%" title="Visit & Contact" crumbs={[["Contact Us"]]}
        text="We'd love to hear from you, and to welcome you to our campus." />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="h2">Alagappa Matriculation Hr. Sec. School</h2>
            <div className="contact-item"><h4>Address</h4><p>{SITE.address[0]}<br />{SITE.address[1]}</p></div>
            <div className="contact-item"><h4>Phone</h4><p>{SITE.phones.map((p, i) => <span key={p}>{i > 0 && " · "}<a href={tel(p)}>{p}</a></span>)}</p></div>
            <div className="contact-item"><h4>Enquiries</h4><p>{SITE.email
              ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              : <span style={{ color: "var(--muted)" }}>School email</span>}</p></div>
            <div className="contact-item"><h4>Principal</h4><p>{SITE.principalEmail
              ? <a href={`mailto:${SITE.principalEmail}`}>{SITE.principalEmail}</a>
              : <span style={{ color: "var(--muted)" }}>Principal's email</span>}</p></div>
            {headmistress.email && <div className="contact-item"><h4>Headmistress – Primary</h4><p><a href={`mailto:${headmistress.email}`}>{headmistress.email}</a></p></div>}
            <div className="contact-item"><h4>Office Hours</h4><p>{SITE.officeHours}</p></div>
          </div>

          <div id="enquire">
            <Eyebrow>Enquiry Form</Eyebrow>
            <h2 className="h3" style={{ color: "var(--green)" }}>Tell us about your child.</h2>
            <form className="form" onSubmit={onSubmit}>
              <div><label htmlFor="pname">Parent name</label><input id="pname" name="parent" required /></div>
              <div><label htmlFor="sname">Student name</label><input id="sname" name="student" required /></div>
              <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required /></div>
              <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" /></div>
              <div className="full">
                <label htmlFor="grade">Class seeking admission</label>
                {/* Values must match the Google Form's dropdown choices exactly. */}
                <select id="grade" name="grade">
                  {GRADES.map((g) => <option key={g} value={g}>{g === "LKG" || g === "UKG" ? g : `Class ${g}`}</option>)}
                </select>
              </div>
              <div className="full"><label htmlFor="msg">Message</label><textarea id="msg" name="message" /></div>
              <div className="full"><button className="btn btn--green" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Enquiry"}</button></div>
              <p className={`form-msg${status === "error" ? " is-shown" : ""}`} role="status">
                Sorry, the enquiry couldn't be sent. Please call us on <a href={tel(SITE.phones[0])}>{SITE.phones[0]}</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section--tight bg-cream">
        <div className="wrap">
          <Eyebrow>Find Us</Eyebrow>
          <iframe className="map" title="Map to Alagappa Matriculation School, Karaikudi" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
        </div>
      </section>
    </>
  );
}
