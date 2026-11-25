/* Hand-drawn style SVG illustrations used in the homepage About collage.
   Colours follow the site palette (green, gold, rust, cream). */

/* A small open book "flying" with page-wings — the school's mascot element */
export function FlyingBook({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 130" aria-hidden="true">
      {/* motion lines */}
      <g stroke="#aa572e" strokeWidth="3" strokeLinecap="round" opacity=".45">
        <path d="M8 70h22" /><path d="M2 84h20" /><path d="M14 98h16" />
      </g>
      {/* shadow */}
      <ellipse cx="92" cy="122" rx="34" ry="5" fill="#003519" opacity=".12" />
      <g transform="rotate(-12 92 64)">
        {/* back cover */}
        <path d="M40 58 Q66 46 92 60 Q118 46 144 58 L144 98 Q118 86 92 100 Q66 86 40 98 Z" fill="#005829" />
        {/* left pages fanned up like a wing */}
        <path d="M92 56 Q70 30 40 30 Q50 52 46 86 Q70 78 92 92 Z" fill="#fff8e7" stroke="#d9cfb4" strokeWidth="1.5" />
        <path d="M92 60 Q72 40 48 40" fill="none" stroke="#d9cfb4" strokeWidth="1.5" />
        <path d="M92 70 Q74 54 52 54" fill="none" stroke="#e7dcc0" strokeWidth="1.5" />
        {/* right pages */}
        <path d="M92 56 Q114 30 144 30 Q134 52 138 86 Q114 78 92 92 Z" fill="#fffdf6" stroke="#d9cfb4" strokeWidth="1.5" />
        <path d="M92 60 Q112 40 136 40" fill="none" stroke="#d9cfb4" strokeWidth="1.5" />
        <path d="M92 70 Q110 54 132 54" fill="none" stroke="#e7dcc0" strokeWidth="1.5" />
        {/* spine */}
        <path d="M92 56 L92 96" stroke="#c9b98f" strokeWidth="2" />
        {/* ribbon bookmark */}
        <path d="M100 92 L100 112 L106 106 L112 112 L112 90" fill="#fdb813" />
      </g>
      {/* sparkle */}
      <g fill="#fdb813">
        <path d="M150 14 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
        <circle cx="132" cy="8" r="2.5" />
      </g>
    </svg>
  );
}

/* Illustrated location card: Karaikudi with a Chettinad gopuram, roads and the Bay of Bengal */
export function KaraikudiMap({ className }) {
  return (
    <svg className={className} viewBox="0 0 300 300" role="img" aria-label="Illustrated map showing Karaikudi, Tamil Nadu">
      <rect width="300" height="300" fill="#f3e9cf" />
      {/* sea on the east */}
      <path d="M232 0 Q214 60 236 110 Q258 160 230 220 Q214 262 240 300 L300 300 L300 0 Z" fill="#7cc4d6" />
      <path d="M244 0 Q228 60 248 110 Q268 160 242 220 Q228 262 252 300" fill="none" stroke="#bfe3ec" strokeWidth="5" />
      <text x="262" y="160" fill="#2f7f94" fontSize="11" fontFamily="Baloo 2, sans-serif" fontWeight="700" transform="rotate(80 262 160)">Bay of Bengal</text>
      {/* soft land patches */}
      <path d="M0 0 H120 Q90 40 40 46 Q10 50 0 80Z" fill="#eadfbf" />
      <path d="M0 230 Q60 210 110 240 Q140 262 130 300 H0Z" fill="#e6dab6" />
      {/* roads */}
      <g fill="none" strokeLinecap="round">
        <path d="M-10 250 Q70 200 118 168 Q160 140 206 70 Q220 46 236 0" stroke="#fff" strokeWidth="9" />
        <path d="M-10 250 Q70 200 118 168 Q160 140 206 70 Q220 46 236 0" stroke="#d7c79d" strokeWidth="2" strokeDasharray="6 7" />
        <path d="M118 168 Q150 210 230 236" stroke="#fff" strokeWidth="7" />
        <path d="M60 0 Q90 80 118 168" stroke="#fff" strokeWidth="7" />
      </g>
      {/* little trees */}
      <g fill="#5d9b5f">
        <circle cx="40" cy="120" r="9" /><circle cx="54" cy="128" r="7" /><circle cx="184" cy="214" r="8" />
        <circle cx="198" cy="206" r="6" /><circle cx="26" cy="190" r="7" />
      </g>
      {/* Gopuram (temple tower) landmark */}
      <g transform="translate(82 46)">
        <path d="M0 116 H64 L60 100 H4 Z" fill="#c76c3e" />
        <path d="M6 100 L10 82 H54 L58 100 Z" fill="#d98a52" />
        <path d="M12 82 L15 64 H49 L52 82 Z" fill="#e3a46a" />
        <path d="M17 64 L19 48 H45 L47 64 Z" fill="#d98a52" />
        <path d="M21 48 L23 34 H41 L43 48 Z" fill="#e3a46a" />
        <path d="M22 34 Q32 18 42 34 Z" fill="#c76c3e" />
        <circle cx="32" cy="16" r="3" fill="#fdb813" />
        <path d="M27 116 V104 Q32 98 37 104 V116 Z" fill="#7a3a1d" />
        <g stroke="#8f4a26" strokeWidth="1.2" opacity=".6">
          <path d="M12 91 H52" /><path d="M17 73 H47" /><path d="M21 56 H43" /><path d="M24 41 H40" />
        </g>
      </g>
      {/* pin */}
      <g transform="translate(196 88)">
        <path d="M0 -26 C14 -26 22 -16 22 -6 C22 10 0 30 0 30 C0 30 -22 10 -22 -6 C-22 -16 -14 -26 0 -26Z" fill="#005829" />
        <circle cx="0" cy="-6" r="10" fill="#fff" />
        <text x="0" y="-1.5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#005829" fontFamily="Baloo 2, sans-serif">A</text>
      </g>
      {/* small ribbon labels */}
      <g fontFamily="Baloo 2, sans-serif" fontWeight="700" fontSize="12" fill="#fff">
        <g transform="translate(14 22) rotate(-12 40 232)">
          <path d="M8 222 H76 L70 232 L76 242 H8 L14 232Z" fill="#5d9b5f" />
          <text x="42" y="236" textAnchor="middle">Madurai</text>
        </g>
        <g transform="rotate(14 70 22)">
          <path d="M42 12 H100 L94 22 L100 32 H42 L48 22Z" fill="#5d9b5f" />
          <text x="71" y="26" textAnchor="middle">Trichy</text>
        </g>
      </g>
      {/* main ribbon */}
      <g transform="rotate(-6 140 196)">
        <path d="M54 178 H226 L214 196 L226 214 H54 L66 196Z" fill="#fdb813" />
        <path d="M54 214 L66 222 V214Z" fill="#c98f00" />
        <text x="140" y="204" textAnchor="middle" fontSize="24" fontWeight="800" fill="#003519" fontFamily="Baloo 2, sans-serif">Karaikudi</text>
      </g>
    </svg>
  );
}

/* Faint palm and neem tree silhouettes (decoration behind the tall photo) */
export function PalmSilhouette({ className }) {
  const palm = (x, h, s = 1) => (
    <g transform={`translate(${x} 0) scale(${s})`} key={x}>
      <path d={`M0 ${200} Q4 ${200 - h / 2} -2 ${200 - h}`} stroke="currentColor" strokeWidth="5" fill="none" />
      <g transform={`translate(-2 ${200 - h})`} fill="currentColor">
        <path d="M0 0 Q-30 -8 -46 10 Q-24 0 0 4Z" />
        <path d="M0 0 Q30 -8 46 10 Q24 0 0 4Z" />
        <path d="M0 0 Q-18 -26 -40 -24 Q-18 -14 0 2Z" />
        <path d="M0 0 Q18 -26 40 -24 Q18 -14 0 2Z" />
        <path d="M0 0 Q-4 -30 6 -40 Q4 -20 2 2Z" />
      </g>
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 220 200" aria-hidden="true">
      <g color="currentColor">
        <ellipse cx="160" cy="150" rx="40" ry="34" fill="currentColor" />
        <rect x="156" y="170" width="8" height="30" fill="currentColor" />
        {palm(48, 150)}
        {palm(104, 180)}
        {palm(200, 120, 0.85)}
      </g>
    </svg>
  );
}

/* Round "school" emblem: stacked books, graduation cap and pencil on a green circle */
export function SchoolEmblem({ className }) {
  return (
    <svg className={className} viewBox="0 0 320 320" role="img" aria-label="Illustration of books, a graduation cap and a pencil">
      <circle cx="176" cy="182" r="128" fill="#7fb069" />
      <circle cx="176" cy="182" r="128" fill="none" stroke="#5d9b5f" strokeWidth="6" opacity=".5" />
      {/* ground shadow */}
      <ellipse cx="172" cy="282" rx="96" ry="10" fill="#3f7d45" opacity=".45" />

      {/* pencil leaning on the stack */}
      <g transform="rotate(24 262 196)">
        <rect x="250" y="96" width="24" height="170" rx="3" fill="#fdb813" />
        <rect x="250" y="96" width="8" height="170" fill="#ffd561" />
        <rect x="250" y="84" width="24" height="16" rx="3" fill="#e58aa0" />
        <rect x="250" y="98" width="24" height="8" fill="#c9c9c9" />
        <path d="M250 266 L262 296 L274 266Z" fill="#f3d7a8" />
        <path d="M258 286 L262 296 L266 286Z" fill="#3a3a3a" />
      </g>

      {/* books */}
      <g>
        <rect x="74" y="236" width="200" height="40" rx="6" fill="#aa572e" />
        <rect x="74" y="244" width="200" height="6" fill="#c76c3e" />
        <rect x="262" y="240" width="8" height="32" rx="2" fill="#fff4dc" />
        <path d="M100 252 h70" stroke="#fdb813" strokeWidth="4" strokeLinecap="round" />

        <rect x="90" y="198" width="176" height="38" rx="6" fill="#1a693e" />
        <rect x="90" y="206" width="176" height="5" fill="#2f8a57" />
        <rect x="96" y="202" width="8" height="30" rx="2" fill="#fff4dc" />
        <path d="M130 222 h80" stroke="#ffd561" strokeWidth="4" strokeLinecap="round" />

        <rect x="80" y="162" width="184" height="36" rx="6" fill="#2f7f94" />
        <rect x="80" y="170" width="184" height="5" fill="#4a9db1" />
        <rect x="252" y="166" width="8" height="28" rx="2" fill="#fff4dc" />
        <path d="M104 186 h64" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </g>

      {/* graduation cap (tilted, popping out of the circle like the owl did) */}
      <g transform="rotate(-10 170 110)">
        <path d="M112 118 Q112 146 170 150 Q228 146 228 118 L228 104 L112 104 Z" fill="#003519" />
        <path d="M60 96 L170 54 L280 96 L170 138 Z" fill="#005829" />
        <path d="M60 96 L170 138 L280 96 L280 102 L170 144 L60 102 Z" fill="#003519" />
        <circle cx="170" cy="96" r="7" fill="#fdb813" />
        <path d="M170 96 Q214 104 236 120 L236 160" stroke="#fdb813" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M228 158 h16 l-4 26 h-8z" fill="#fdb813" />
        <path d="M230 184 l2 8 M236 184 v9 M242 184 l-2 8" stroke="#e0a000" strokeWidth="2" />
      </g>

      {/* sparkles */}
      <g fill="#fff">
        <path d="M70 160 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" opacity=".9" />
        <circle cx="290" cy="150" r="4" opacity=".8" />
        <circle cx="96" cy="128" r="3" opacity=".8" />
      </g>
    </svg>
  );
}

/* Small line icons for the Purpose / Promise cards (white on green badge) */
export function BookIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 10c-3-2.2-7-2.6-11-1.6v15c4-1 8-.6 11 1.6 3-2.2 7-2.6 11-1.6v-15c-4-1-8-.6-11 1.6z" />
      <path d="M16 10v15" />
      <path d="M8 13.2c1.8-.3 3.6-.1 5.2.6M8 17c1.8-.3 3.6-.1 5.2.6M19 13.8c1.6-.7 3.4-.9 5.2-.6M19 17.6c1.6-.7 3.4-.9 5.2-.6" strokeWidth="1.3" />
      <path d="M22 3.5l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z" fill="currentColor" strokeWidth="1" />
    </svg>
  );
}
export function TrophyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 5h12v6a6 6 0 0 1-12 0V5z" />
      <path d="M10 7H6.5a3.5 3.5 0 0 0 3.8 5.8M22 7h3.5a3.5 3.5 0 0 1-3.8 5.8" />
      <path d="M16 17v4M12 27h8M13 21h6l1 6h-8z" />
      <path d="M16 7.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-1-1.8 1 .35-2-1.45-1.4 2-.3z" fill="currentColor" strokeWidth=".8" />
    </svg>
  );
}

/* Orbit emblem: "Joyful Learning" at the centre with four school values on dashed rings */
const ORBIT_NODES = [
  { key: "learn", label: "Learn", pos: "top",
    icon: <path d="M12 7c-2-1.5-5-1.8-8-1v11c3-.8 6-.5 8 1 2-1.5 5-1.8 8-1V6c-3-.8-6-.5-8 1zM12 7v11" /> },
  { key: "achieve", label: "Achieve", pos: "right",
    icon: <><path d="M8 4h8v4.5a4 4 0 0 1-8 0V4z" /><path d="M8 5.5H5.5a2.5 2.5 0 0 0 2.8 4M16 5.5h2.5a2.5 2.5 0 0 1-2.8 4M12 12.5v3M9 19.5h6M10 15.5h4l.6 4h-5.2z" /></> },
  { key: "play", label: "Play", pos: "bottom",
    icon: <><circle cx="12" cy="12" r="8" /><path d="M12 4v4l3.5 2.5M12 8l-3.5 2.5M8.5 10.5L7 15M15.5 10.5L17 15M7 15h3l2 3 2-3h3" /></> },
  { key: "grow", label: "Grow", pos: "left",
    icon: <><path d="M12 20v-8" /><path d="M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5z" /><path d="M12 14c0-3-2.4-5-5.5-5 0 3 2.4 5 5.5 5z" /><path d="M8 20h8" /></> },
];

export function OrbitEmblem({ className = "" }) {
  return (
    <div className={`orbit ${className}`} role="img" aria-label="Joyful learning: learn, achieve, play and grow">
      <span className="orbit__ring orbit__ring--1" />
      <span className="orbit__ring orbit__ring--2" />
      <span className="orbit__ring orbit__ring--3" />
      <div className="orbit__core">
        <svg className="orbit__spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 3l1.6 4.6L16 9.2l-4.4 1.6L10 15.5l-1.6-4.7L4 9.2l4.4-1.6z" />
          <path d="M18 13l.8 2.2 2.2.8-2.2.8L18 19l-.8-2.2L15 16l2.2-.8z" />
        </svg>
        <span className="orbit__text">Joyful<br />learning</span>
      </div>
      {ORBIT_NODES.map((n) => (
        <div key={n.key} className={`orbit__node orbit__node--${n.pos} orbit__node--${n.key}`}>
          <span className="orbit__tile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{n.icon}</svg>
          </span>
          <span className="orbit__label">{n.label}</span>
        </div>
      ))}
    </div>
  );
}
