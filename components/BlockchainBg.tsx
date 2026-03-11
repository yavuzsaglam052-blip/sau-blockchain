"use client";
import { useMemo } from "react";

/* ─── helpers ─── */
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

/* ─── Hexagon SVG shape ─── */
function HexPath({ size }: { size: number }) {
  const a = size;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${a + a * Math.cos(angle)},${a + a * Math.sin(angle)}`;
  }).join(" ");
  return <polygon points={pts} />;
}

export default function BlockchainBg() {
  /* ─── pre-compute all randoms with seeds so they're SSR-stable ─── */
  const hexagons = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size:  18 + seededRand(i * 7)   * 28,      // 18–46 px
      top:    seededRand(i * 13)  * 100,
      left:   seededRand(i * 17)  * 100,
      opacity: 0.04 + seededRand(i * 3) * 0.08,
      dur:   10 + seededRand(i * 11)  * 14,
      delay: seededRand(i * 19)  * 8,
      rotate: seededRand(i * 23)  * 360,
    })), []);

  const nodes = useMemo(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      cx: 8 + seededRand(i * 31) * 84,    // % of svg width
      cy: 8 + seededRand(i * 37) * 84,
      r:   2 + seededRand(i * 41) * 3,
      dur: 4  + seededRand(i * 43) * 6,
      delay: seededRand(i * 47) * 5,
    })), []);

  /* connect every node to its two nearest (simple fixed pairs) */
  const edges = useMemo(() => {
    const pairs: { id: string; x1: number; y1: number; x2: number; y2: number; dur: number; delay: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const j = (i + 1) % nodes.length;
      const k = (i + 3) % nodes.length;
      [j, k].forEach((t, ti) => {
        pairs.push({
          id: `${i}-${t}`,
          x1: nodes[i].cx, y1: nodes[i].cy,
          x2: nodes[t].cx, y2: nodes[t].cy,
          dur: 3 + seededRand(i * 53 + ti) * 4,
          delay: seededRand(i * 59 + ti) * 3,
        });
      });
    }
    return pairs;
  }, [nodes]);

  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      top:   seededRand(i * 61) * 100,
      left:  seededRand(i * 67) * 100,
      size:  1.5 + seededRand(i * 71) * 2.5,
      dur:   6   + seededRand(i * 73) * 10,
      delay: seededRand(i * 79) * 8,
      color: i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#a78bfa" : "#60a5fa",
    })), []);

  const orbs = useMemo(() => [
    { id: 0, top: "15%",  left: "10%",  w: 320, color: "rgba(99,102,241,0.07)",  dur: 18 },
    { id: 1, top: "55%",  left: "72%",  w: 400, color: "rgba(167,139,250,0.06)", dur: 22 },
    { id: 2, top: "75%",  left: "20%",  w: 280, color: "rgba(96,165,250,0.05)",  dur: 16 },
    { id: 3, top: "30%",  left: "55%",  w: 260, color: "rgba(192,132,252,0.05)", dur: 20 },
  ], []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* ── Animated floating orbs ── */}
      {orbs.map(o => (
        <div
          key={o.id}
          style={{
            position: "absolute",
            top: o.top,
            left: o.left,
            width:  o.w + "px",
            height: o.w + "px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            animation: `orbFloat ${o.dur}s ease-in-out infinite`,
            animationDelay: `${o.id * 3}s`,
          }}
        />
      ))}

      {/* ── Floating wireframe hexagons ── */}
      {hexagons.map(h => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            top:  h.top  + "%",
            left: h.left + "%",
            opacity: h.opacity,
            animation: `hexFloat ${h.dur}s ease-in-out infinite`,
            animationDelay: `${h.delay}s`,
            transform: `rotate(${h.rotate}deg)`,
          }}
        >
          <svg
            width={h.size * 2 + 2}
            height={h.size * 2 + 2}
            viewBox={`0 0 ${h.size * 2 + 2} ${h.size * 2 + 2}`}
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="1.2"
          >
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#818cf8" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <HexPath size={h.size} />
          </svg>
        </div>
      ))}

      {/* ── Node-graph (blockchain network) ── */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%"  stopColor="#a78bfa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {edges.map(e => (
          <line
            key={e.id}
            x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="url(#edgeGrad)"
            strokeWidth="0.15"
            style={{
              animation: `edgePulse ${e.dur}s ease-in-out infinite`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
        {nodes.map(n => (
          <circle
            key={n.id}
            cx={n.cx} cy={n.cy} r={n.r * 0.3}
            fill="#a78bfa"
            style={{
              opacity: 0.35,
              animation: `nodePulse ${n.dur}s ease-in-out infinite`,
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* ── Floating data particles ── */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top:  p.top  + "%",
            left: p.left + "%",
            width:  p.size + "px",
            height: p.size + "px",
            borderRadius: "2px",
            background: p.color,
            opacity: 0,
            animation: `particleDrift ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* ── Scanning horizontal line ── */}
      <div style={{
        position: "absolute",
        left: 0,
        width: "100%",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(139,92,246,0.15), rgba(99,102,241,0.2), rgba(139,92,246,0.15), transparent)",
        animation: "scanLine 12s linear infinite",
      }} />

      {/* ── All keyframes ── */}
      <style>{`
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.08); }
          66%      { transform: translate(-15px,25px) scale(0.95); }
        }
        @keyframes hexFloat {
          0%,100% { transform: translateY(0px) rotate(var(--r,0deg)); }
          50%      { transform: translateY(-18px) rotate(calc(var(--r,0deg) + 15deg)); }
        }
        @keyframes nodePulse {
          0%,100% { opacity: 0.25; r: 0.3%; }
          50%      { opacity: 0.6;  r: 0.5%; }
        }
        @keyframes edgePulse {
          0%,100% { opacity: 0.08; }
          50%      { opacity: 0.35; }
        }
        @keyframes particleDrift {
          0%   { opacity: 0;    transform: translateY(0) rotate(0deg); }
          15%  { opacity: 0.6; }
          85%  { opacity: 0.4; }
          100% { opacity: 0;    transform: translateY(-80px) rotate(180deg); }
        }
        @keyframes scanLine {
          0%   { top: -2px;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.6; }
          100% { top: 100vh;  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
