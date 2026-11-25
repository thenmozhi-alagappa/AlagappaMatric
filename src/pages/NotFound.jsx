import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: "center", padding: "80px 0" }}>
        <span className="eyebrow">404</span>
        <h1 className="display">Page not found.</h1>
        <p className="lead">The page you're looking for may have moved.</p>
        <Link className="btn btn--green" to="/">Back to Home</Link>
      </div>
    </section>
  );
}
