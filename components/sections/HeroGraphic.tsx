"use client";

import { motion, useReducedMotion } from "framer-motion";

function DatabaseIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <ellipse cx="0" cy="-8" rx="12" ry="4" fill="none" stroke="rgba(129, 140, 248, 0.8)" strokeWidth="1.2" />
      <path d="M-12 -8 v16 c0 2.2 5.4 4 12 4 s12-1.8 12-4 v-16" fill="none" stroke="rgba(129, 140, 248, 0.8)" strokeWidth="1.2" />
      <ellipse cx="0" cy="8" rx="12" ry="4" fill="none" stroke="rgba(129, 140, 248, 0.5)" strokeWidth="1" />
    </g>
  );
}

function CodeIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.9">
      <text x="0" y="5" textAnchor="middle" fill="rgba(165, 180, 252, 0.95)" fontSize="18" fontFamily="monospace" fontWeight="600">
        {"{ }"}
      </text>
    </g>
  );
}

function PaletteIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.85">
      <path
        d="M-14 4 a14 14 0 1 1 8-12 a4 4 0 0 0 4 4 a4 4 0 0 1 4 4 a4 4 0 0 0 4 4"
        fill="none"
        stroke="rgba(196, 181, 253, 0.85)"
        strokeWidth="1.2"
      />
      <circle cx="-6" cy="-4" r="2" fill="rgba(56, 189, 248, 0.8)" />
      <circle cx="2" cy="-8" r="2" fill="rgba(167, 139, 250, 0.8)" />
      <circle cx="8" cy="-2" r="2" fill="rgba(244, 114, 182, 0.7)" />
    </g>
  );
}

function WindowIcon({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity="0.7">
      <rect x="0" y="0" width={w} height={h} rx="3" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(129, 140, 248, 0.5)" strokeWidth="1" />
      <line x1="0" y1="8" x2={w} y2="8" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="0.75" />
      <circle cx="6" cy="4" r="1.5" fill="rgba(248, 113, 113, 0.7)" />
      <circle cx="12" cy="4" r="1.5" fill="rgba(250, 204, 21, 0.7)" />
      <rect x="4" y="14" width={w - 8} height="3" rx="1" fill="rgba(99, 102, 241, 0.3)" />
      <rect x="4" y="20" width={(w - 8) * 0.6} height="3" rx="1" fill="rgba(99, 102, 241, 0.2)" />
    </g>
  );
}

const wireframeEdges = [
  [200, 80, 280, 160],
  [280, 160, 200, 240],
  [200, 240, 120, 160],
  [120, 160, 200, 80],
  [200, 80, 200, 240],
  [120, 160, 280, 160],
  [200, 80, 160, 120],
  [200, 80, 240, 120],
  [200, 240, 160, 200],
  [200, 240, 240, 200],
  [120, 160, 160, 120],
  [280, 160, 240, 120],
  [120, 160, 160, 200],
  [280, 160, 240, 200],
  [160, 120, 240, 120],
  [160, 120, 160, 200],
  [240, 120, 240, 200],
  [160, 200, 240, 200],
];

const nodes = [
  [200, 80],
  [280, 160],
  [200, 240],
  [120, 160],
  [160, 120],
  [240, 120],
  [160, 200],
  [240, 200],
  [200, 160],
];

export function HeroGraphic() {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <svg
      viewBox="0 0 400 320"
      className="h-auto w-full max-w-md lg:max-w-lg xl:max-w-xl"
      aria-hidden="true"
    >
      <defs>
        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="graphic-ambient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
          <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="160" r="140" fill="url(#graphic-ambient)" />

      {wireframeEdges.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(129, 140, 248, 0.55)"
          strokeWidth="1"
        />
      ))}

      <line x1="60" y1="100" x2="120" y2="160" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.75" strokeDasharray="4 4" />
      <line x1="340" y1="90" x2="280" y2="160" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.75" strokeDasharray="4 4" />
      <line x1="320" y1="250" x2="240" y2="200" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.75" strokeDasharray="4 4" />

      <WindowIcon x={40} y={60} w={48} h={36} />
      <WindowIcon x={300} y={220} w={52} h={38} />

      <rect x="55" y="180" width="56" height="32" rx="4" fill="rgba(15, 23, 42, 0.5)" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="0.75" />
      <text x="62" y="194" fill="rgba(165, 180, 252, 0.6)" fontSize="7" fontFamily="monospace">
        {"<div>"}
      </text>
      <text x="62" y="204" fill="rgba(165, 180, 252, 0.45)" fontSize="7" fontFamily="monospace">
        {"  css"}
      </text>

      <DatabaseIcon x={330} y={70} />
      <CodeIcon x={70} y={130} />
      <PaletteIcon x={310} y={170} />

      {nodes.map(([cx, cy], i) => (
        <g key={i} filter="url(#node-glow)">
          <circle cx={cx} cy={cy} r="6" fill="rgba(255, 255, 255, 0.95)" />
          <circle cx={cx} cy={cy} r="3" fill="rgba(191, 219, 254, 0.9)" />
        </g>
      ))}
    </svg>
  );

  if (shouldReduceMotion) {
    return <div className="relative flex justify-center lg:justify-end">{content}</div>;
  }

  return (
    <motion.div
      className="relative flex justify-center lg:justify-end"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
