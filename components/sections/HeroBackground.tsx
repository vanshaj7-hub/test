"use client";

import { useReducedMotion } from "framer-motion";

const bokehOrbs = [
  { top: "8%", left: "12%", size: 120, color: "rgba(99, 102, 241, 0.25)" },
  { top: "18%", left: "68%", size: 180, color: "rgba(139, 92, 246, 0.2)" },
  { top: "55%", left: "5%", size: 90, color: "rgba(56, 189, 248, 0.15)" },
  { top: "72%", left: "45%", size: 140, color: "rgba(124, 58, 237, 0.18)" },
  { top: "35%", left: "82%", size: 200, color: "rgba(99, 102, 241, 0.22)" },
  { top: "85%", left: "78%", size: 100, color: "rgba(167, 139, 250, 0.12)" },
];

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#050510_0%,#0a0618_45%,#12082a_75%,#1a0b2e_100%)]" />

      <div className="absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

      {bokehOrbs.map((orb, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            animation: shouldReduceMotion
              ? undefined
              : `hero-bokeh ${8 + index * 2}s ease-in-out infinite alternate`,
            animationDelay: `${index * 0.7}s`,
          }}
        />
      ))}

      <svg
        className="absolute bottom-0 left-0 right-0 h-48 w-full opacity-30 md:h-56"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mesh-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </linearGradient>
        </defs>
        {[...Array(24)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 62}
            y1="200"
            x2={i * 62 + 80}
            y2="0"
            stroke="url(#mesh-fade)"
            strokeWidth="0.75"
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <path
            key={`h-${i}`}
            d={`M0 ${160 - i * 14} Q720 ${120 - i * 10} 1440 ${160 - i * 14}`}
            fill="none"
            stroke="rgba(129, 140, 248, 0.15)"
            strokeWidth="0.75"
          />
        ))}
      </svg>
    </div>
  );
}
