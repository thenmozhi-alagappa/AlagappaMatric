import { FlyingBook, KaraikudiMap, PalmSilhouette, OrbitEmblem, BookIcon, TrophyIcon } from "../components/Illustrations.jsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { img } from "../data/site.js";
import {
  heroSlides, heroWords, stats, stages, features, values,
  testimonials, pathways, events, gallery, news,
} from "../data/content.js";
import { T, srcSetFor, Eyebrow, SectionHead, CtaBanner, PathwayCard, NewsCard, CountUp, Tabs, Mosaic, Icon } from "../components/ui.jsx";

function useCycle(length, ms) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms]);
  return i;
}

function Hero() {
  const slide = useCycle(heroSlides.length, 6000);
  const word = useCycle(heroWords.length, 2800);
  const [prevWord, setPrevWord] = useState(-1);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    setPrevWord((word - 1 + heroWords.length) % heroWords.length);
    const t = setTimeout(() => setPrevWord(-1), 700);
    return () => clearTimeout(t);
  }, [word]);

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        {heroSlides.map((s, i) => {
          const prev = (slide - 1 + heroSlides.length) % heroSlides.length;
          const cls = i === slide ? " is-active" : i === prev && heroSlides.length > 1 ? " is-prev" : "";
          return (
            <div key={s.src} className={`hero__slide${cls}`}
              style={{ backgroundImage: `url('${img(s.src)}')`, backgroundPosition: s.position || "center 25%" }} />
          );
        })}
      </div>
      <div className="hero__content wrap">
        <p className="hero__kicker">Since 1985 · Karaikudi</p>
        <h1 className="display hero__title">
          At Alagappa, we're all about
          <span className="hero__rotator">
            {heroWords.map((w, i) => (
              <span key={w} className={i === word ? "is-active" : i === prevWord ? "is-leaving" : undefined}>{w}</span>
            ))}
          </span>
        </h1>
        <p className="hero__sub">Carrying forward the legacy of Vallal Dr. RM. Alagappa Chettiar, we nurture young minds with knowledge, wisdom and values that last a lifetime.</p>
        <div className="hero__actions">
          <Link className="btn btn--gold" to="/admissions">Begin Your Journey</Link>
          <Link className="btn btn--outline" to="/about">Meet Alagappa</Link>
        </div>
      </div>
      <a className="hero__scroll" href="#intro">Scroll</a>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d) => setI((x) => (x + d + testimonials.length) % testimonials.length);
  const t = testimonials[i];
  return (
    <section className="section bg-green">
      <div className="wrap slider">
        <div key={i} className="slider__item testimonial is-active">
          <div className="testimonial__photo"><img src={img(t.img)} srcSet={srcSetFor(t.img)} sizes="(max-width: 960px) 360px, 420px" alt={t.name} loading="lazy" /></div>
          <div>
            <Eyebrow>Student Voices</Eyebrow>
            <blockquote><T>{t.quote}</T></blockquote>
            <cite>{t.name} · {t.meta}</cite>
          </div>
        </div>
        <div className="slider__nav">
          <button aria-label="Previous" onClick={() => go(-1)}>←</button>
          <button aria-label="Next" onClick={() => go(1)}>→</button>
        </div>
      </div>
    </section>
  );
}

/* "Only at Alagappa" card carousel: arrows, dots, swipe, auto-advance (pauses on hover/focus) */
function FeatureCarousel({ items }) {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);
  const paused = useRef(false);

  const step = () => {
    const el = track.current;
    const card = el?.querySelector(".arch-card");
    if (!card) return 0;
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
  };
  const measure = () => {
    const el = track.current;
    if (!el) return;
    const w = step();
    const perView = Math.max(1, Math.round(el.clientWidth / w));
    setPages(Math.max(1, items.length - perView + 1));
    setActive(Math.round(el.scrollLeft / w));
  };
  const go = (i) => {
    const el = track.current;
    if (!el) return;
    const n = (i + pages) % pages;
    el.scrollTo({ left: n * step(), behavior: "smooth" });
  };

  useEffect(() => {
    measure();
    const el = track.current;
    const onScroll = () => measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => { el.removeEventListener("scroll", onScroll); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { if (!paused.current) go(active + 1); }, 4500);
    return () => clearInterval(t);
  }, [active, pages]);

  return (
    <div className="arch-carousel reveal"
      onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)} onBlur={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}>
      <button className="arch-carousel__arrow arch-carousel__arrow--prev" aria-label="Previous" onClick={() => go(active - 1)}>‹</button>
      <div className="arch-carousel__track" ref={track}>
        {items.map((f) => (
          <Link key={f.title} className="arch-card" to={f.to}>
            <div className="arch-card__img">
              <img src={img(f.img)} alt="" loading="lazy" style={{ objectPosition: f.pos || "center 25%" }} />
            </div>
            <div className="arch-card__body">
              <h3>{f.title}</h3>
              <span className="arch-card__tag">{f.tag}</span>
              <p>{f.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="arch-carousel__arrow arch-carousel__arrow--next" aria-label="Next" onClick={() => go(active + 1)}>›</button>
      <div className="arch-carousel__dots">
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} className={i === active ? "is-active" : undefined} aria-label={`Go to slide ${i + 1}`} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [openMotto, setOpenMotto] = useState(-1);
  return (
    <>
      <Hero />

      {/* About intro */}
      <section className="section bg-cream about-collage" id="intro">
        <div className="wrap">
          <div className="about-collage__head reveal">
            <Eyebrow>About Alagappa</Eyebrow>
            <h2 className="about-collage__title">We're a school where <em>knowledge meets wisdom</em>, friendships grow deeper, and character flourishes.</h2>
          </div>

          <div className="about-collage__grid">
            <figure className="about-collage__wide reveal">
              <img src={img("/images/life/students-group-1-800.jpg")} alt="Alagappa students together on campus" loading="lazy" />
              <FlyingBook className="about-collage__mascot" />
            </figure>

            <div className="about-collage__map reveal reveal-delay-1">
              <KaraikudiMap />
            </div>

            <div className="about-collage__tall reveal reveal-delay-2">
              <PalmSilhouette className="about-collage__trees" />
              <img src={img("/images/campus/students-campus-800.jpg")} alt="Students in front of the Alagappa Matriculation school building" loading="lazy" />
            </div>

            <div className="about-collage__text reveal">
              <div className="pp-cards">
                <article className="pp-card">
                  <div className="pp-card__top">
                    <span className="pp-card__badge"><BookIcon /></span>
                    <span className="pp-card__pill">Vision & Excellence</span>
                  </div>
                  <h3 className="pp-card__title">Inspiring Excellence, Creating Opportunities</h3>
                  <p> Dedicated to developing intellectual strength, moral character, and innovative thinking in every learner.</p>
                </article>
                <article className="pp-card">
                  <div className="pp-card__top">
                    <span className="pp-card__badge"><TrophyIcon /></span>
                    <span className="pp-card__pill">Elegant & Inspiring</span>
                  </div>
                  <h3 className="pp-card__title">Nurturing Minds, Shaping Futures</h3>
                  <p>To inspire every child to think boldly, grow confidently, and shine brightly through knowledge, values, and creativity.</p>
                </article>
              </div>
              <Link className="pp-btn" to="/about">Meet Alagappa <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="glance">
        <div className="wrap">
          <h2 className="glance__title">Alagappa at a Glance</h2>
          <div className="glance__body">
            <div className="glance__grid">
              {stats.map((s, i) => (
                <div className="glance__item reveal" key={s.label}>
                  <span className={`glance__dot glance__dot--${i % 4}`}><Icon name={s.icon} /></span>
                  <div>
                    <div className="glance__num"><CountUp value={s.value} plain={s.plain} />{s.suffix}</div>
                    <p className="glance__label">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <OrbitEmblem className="glance__art reveal reveal-delay-2" />
          </div>
        </div>
      </section>

      {/* Campus split */}
      <section className="section">
        <div className="wrap split">
          <div className="split__media reveal">
            <img src={img("/images/life/primary-trio-tall-800.jpg")} alt="Primary students on the Alagappa campus" loading="lazy" />
            <img className="inset" src={img("/images/campus/matric-campus-new-800.jpg")} alt="" loading="lazy" />
          </div>
          <div className="reveal reveal-delay-2">
            <Eyebrow>Our Campus</Eyebrow>
            <h2 className="h2">Room to grow, in the heart of Karaikudi.</h2>
            <p className="lead">Spread across 15 acres in Alagappapuram, our campus brings together well-equipped laboratories, a resourceful library, hostels and open spaces for sport and play.</p>
            <p>Physics, Chemistry, Biology and Computer Science labs give students hands-on experience, while separate hostels for boys and girls make Alagappa a home away from home.</p>
            <Link className="link-arrow" to="/facilities">Explore Facilities</Link>
          </div>
        </div>
      </section>

      {/* Learning stages tabs */}
      <section className="section bg-mint">
        <div className="wrap">
          <SectionHead eyebrow="Learning Journey" title="Every stage, thoughtfully designed." />
          <Tabs items={stages} render={(s) => (
            <>
              <img src={img(s.img)} alt="" loading="lazy" />
              <div>
                <div className="big">{s.big}</div>
                <h3 className="h3">{s.title}</h3>
                <p><T>{s.text}</T></p>
                <Link className="link-arrow" to={s.link[0]}>{s.link[1]}</Link>
              </div>
            </>
          )} />
        </div>
      </section>

      {/* Only at Alagappa */}
      <section className="section bg-cream only-at">
        <div className="wrap">
          <div className="only-at__head reveal">
            <Eyebrow>Only at Alagappa</Eyebrow>
            <h2 className="only-at__title">Experiences that shape the whole child, and tomorrow's leaders.</h2>
          </div>
          <FeatureCarousel items={features} />
        </div>
      </section>

      {/* Values */}
      <section className="section bg-cream motto">
        <div className="wrap">
          <div className="motto__head reveal">
            <Eyebrow>Our Motto</Eyebrow>
            <h2 className="motto__title">Prudence. Perseverance. Perfection.</h2>
          </div>
          <div className="motto__grid">
            {values.map(([title, text, photo, pos], i) => (
              <div
                key={title}
                className={`motto-card motto-card--${i % 3} reveal reveal-delay-${i % 3}${openMotto === i ? " is-open" : ""}`}
                onClick={() => setOpenMotto(openMotto === i ? -1 : i)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpenMotto(openMotto === i ? -1 : i))}
                role="button" tabIndex={0} aria-expanded={openMotto === i}
              >
                <img className="motto-card__img" src={img(photo)} alt="" loading="lazy" style={{ objectPosition: pos }} />
                <div className="motto-card__band">
                  <h3>{title}</h3>
                  <div className="motto-card__more">
                    <div>
                      <p>{text}</p>
                      <Link className="motto-card__btn" to="/about" onClick={(e) => e.stopPropagation()}>Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pathways */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Your Path to Alagappa" title="Learn. Experience. Apply." center />
          <div className="pathways">
            {pathways.map((p, i) => <PathwayCard key={p.title} {...p} num={String(i + 1).padStart(2, "0")} delay={i} />)}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section bg-cream">
        <div className="wrap planner">
          <div>
            <Eyebrow>Upcoming at Alagappa</Eyebrow>
            <h2 className="h2">Mark your calendar.</h2>
            <p className="lead">Celebrations, competitions and milestones across the school year.</p>
            <Link className="link-arrow" to="/news">All News & Events</Link>
          </div>
          <ul className="events">
            {events.map((e) => (
              <li className="event" key={e.title}>
                <div className="event__date"><b>{e.day}</b><span>{e.month}</span></div>
                <div><h3>{e.title}</h3><p>{e.info}</p></div>
                <span className="event__tag">{e.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mosaic */}
      <section className="section">
        <div className="wrap">
          <div className="news-head">
            <div><Eyebrow>Life at Alagappa</Eyebrow><h2 className="h2" style={{ margin: 0 }}>Moments worth remembering.</h2></div>
            <Link className="link-arrow" to="/gallery">View Gallery</Link>
          </div>
          <Mosaic items={gallery.slice(0, 7)} />
        </div>
      </section>

      {/* News */}
      <section className="section bg-cream">
        <div className="wrap">
          <div className="news-head">
            <div><Eyebrow>In the Spotlight</Eyebrow><h2 className="h2" style={{ margin: 0 }}>Recent news.</h2></div>
            <Link className="link-arrow" to="/news">More News</Link>
          </div>
          <div className="news">
            {news.slice(0, 4).map((n, i) => <NewsCard key={n.id} item={n} to={`/news#${n.id}`} delay={i} />)}
          </div>
        </div>
      </section>

      <CtaBanner
        image="/images/campus/matric-campus-new-1800.jpg"
        eyebrow="Admissions Open"
        title="Your child's story begins at Alagappa."
        text="Join a community that has been shaping bright futures in Karaikudi since 1985."
        actions={[["Enquire", "/contact#enquire"], ["Visit", "/contact"]]}
      />
    </>
  );
}
