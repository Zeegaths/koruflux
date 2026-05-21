"use client";
import { TECH_CARDS } from "@/lib/constants";

/* ════════════════════════════════════════════════════════
   Card 1 — WEB3: Africa Geographic Network Map
   Hub-and-spoke network with Nairobi as the center node,
   arcs to London, Dubai, Singapore, São Paulo.
   Blueprint grid + animated data pulses along routes.
   ════════════════════════════════════════════════════════ */
function Web3Visual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="w3bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04100d"/>
          <stop offset="100%" stopColor="#071a14"/>
        </linearGradient>
        <radialGradient id="w3hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2d8a7a" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
        </radialGradient>
        <filter id="w3glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="w3sm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes w3pulse{0%,100%{r:5;opacity:0.5}50%{r:8;opacity:1}}
        @keyframes w3ring{0%{r:8;opacity:0.7}100%{r:22;opacity:0}}
        @keyframes w3dash{0%{stroke-dashoffset:60}100%{stroke-dashoffset:0}}
        @keyframes w3dot{0%{opacity:0;offset-distance:0%}30%{opacity:1}70%{opacity:1}100%{opacity:0;offset-distance:100%}}
        @keyframes w3blink{0%,100%{opacity:0.3}50%{opacity:1}}
        .w3hub{animation:w3pulse 2.5s ease-in-out infinite}
        .w3ring1{animation:w3ring 2.5s ease-out infinite}
        .w3ring2{animation:w3ring 2.5s ease-out infinite 0.8s}
        .w3arc{stroke-dasharray:8 5;animation:w3dash 3s linear infinite}
        .w3arc2{stroke-dasharray:8 5;animation:w3dash 4s linear infinite 1s}
        .w3arc3{stroke-dasharray:8 5;animation:w3dash 3.5s linear infinite 0.5s}
        .w3arc4{stroke-dasharray:8 5;animation:w3dash 4.5s linear infinite 1.5s}
        .w3node{animation:w3pulse 3s ease-in-out infinite}
        .w3node2{animation:w3pulse 3.5s ease-in-out infinite 0.4s}
        .w3node3{animation:w3pulse 2.8s ease-in-out infinite 0.8s}
        .w3node4{animation:w3pulse 3.2s ease-in-out infinite 1.2s}
        .w3bl{animation:w3blink 2s ease-in-out infinite}
      `}</style>

      {/* Background */}
      <rect width="320" height="200" fill="url(#w3bg)"/>

      {/* Blueprint grid */}
      <g stroke="rgba(45,138,122,0.08)" strokeWidth="0.5" fill="none">
        {[0,1,2,3,4,5,6,7,8,9,10].map(i=>(
          <line key={`h${i}`} x1="0" y1={i*20} x2="320" y2={i*20}/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i=>(
          <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="200"/>
        ))}
      </g>

      {/* Continent silhouette (Africa, simplified) */}
      <path
        d="M148 28 L155 24 L165 26 L172 30 L175 38 L174 50 L178 62 L176 75
           L180 88 L178 102 L174 115 L168 128 L162 140 L158 152 L155 162
           L152 152 L148 140 L142 128 L136 115 L132 102 L130 88 L132 75
           L130 62 L132 50 L131 38 L134 30 L140 26 Z"
        fill="rgba(45,138,122,0.06)" stroke="rgba(45,138,122,0.18)" strokeWidth="0.8"
      />

      {/* Connection arcs (curved paths from hub to nodes) */}
      {/* Nairobi → London */}
      <path d="M160 100 Q120 30 42 28" fill="none" stroke="#2d8a7a" strokeWidth="1.2" opacity="0.5" className="w3arc"/>
      {/* Nairobi → Dubai */}
      <path d="M160 100 Q220 60 274 44" fill="none" stroke="#e8622a" strokeWidth="1.2" opacity="0.5" className="w3arc2"/>
      {/* Nairobi → Singapore */}
      <path d="M160 100 Q240 110 288 152" fill="none" stroke="#2d8a7a" strokeWidth="1.2" opacity="0.5" className="w3arc3"/>
      {/* Nairobi → São Paulo */}
      <path d="M160 100 Q80 130 32 168" fill="none" stroke="#e8622a" strokeWidth="1.2" opacity="0.5" className="w3arc4"/>

      {/* Hub glow */}
      <circle cx="160" cy="100" r="28" fill="url(#w3hub)"/>
      {/* Rings */}
      <circle cx="160" cy="100" r="8" fill="none" stroke="#2d8a7a" strokeWidth="1.5" opacity="0" className="w3ring1"/>
      <circle cx="160" cy="100" r="8" fill="none" stroke="#2d8a7a" strokeWidth="1" opacity="0" className="w3ring2"/>

      {/* Hub node — Nairobi */}
      <circle cx="160" cy="100" r="5" fill="#2d8a7a" className="w3hub" filter="url(#w3glow)"/>
      <circle cx="160" cy="100" r="3" fill="#5ecfbf"/>
      <text x="160" y="118" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#3aafa0" letterSpacing="0.05em">NAIROBI</text>

      {/* Remote node — London */}
      <circle cx="42" cy="28" r="4" fill="#2d8a7a" className="w3node" filter="url(#w3sm)"/>
      <circle cx="42" cy="28" r="2" fill="#5ecfbf"/>
      <text x="42" y="42" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#3aafa0">LONDON</text>

      {/* Remote node — Dubai */}
      <circle cx="274" cy="44" r="4" fill="#e8622a" className="w3node2" filter="url(#w3sm)"/>
      <circle cx="274" cy="44" r="2" fill="#f0a050"/>
      <text x="274" y="58" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#e8622a">DUBAI</text>

      {/* Remote node — Singapore */}
      <circle cx="288" cy="152" r="4" fill="#2d8a7a" className="w3node3" filter="url(#w3sm)"/>
      <circle cx="288" cy="152" r="2" fill="#5ecfbf"/>
      <text x="288" y="166" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#3aafa0">SINGAPORE</text>

      {/* Remote node — São Paulo */}
      <circle cx="32" cy="168" r="4" fill="#e8622a" className="w3node4" filter="url(#w3sm)"/>
      <circle cx="32" cy="168" r="2" fill="#f0a050"/>
      <text x="32" y="182" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#e8622a">SÃO PAULO</text>

      {/* Corner HUD labels */}
      <rect x="8" y="8" width="60" height="14" rx="2" fill="rgba(4,16,13,0.8)" stroke="rgba(45,138,122,0.3)" strokeWidth="0.6"/>
      <text x="14" y="18" fontFamily="monospace" fontSize="7" fill="#2d8a7a" className="w3bl">● LIVE  5 NODES</text>

      <rect x="244" y="8" width="68" height="14" rx="2" fill="rgba(4,16,13,0.8)" stroke="rgba(232,98,42,0.3)" strokeWidth="0.6"/>
      <text x="250" y="18" fontFamily="monospace" fontSize="7" fill="#e8622a">12+ MARKETS</text>

      {/* Bottom fade */}
      <defs>
        <linearGradient id="w3fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#071a14" stopOpacity="0"/>
          <stop offset="100%" stopColor="#071a14" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#w3fade)"/>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   Card 2 — AI: Intelligence Pipeline Architecture
   Inputs → Central Engine → Outputs
   Blueprint-style node diagram with animated data flow
   ════════════════════════════════════════════════════════ */
function AIVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="aibg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080510"/>
          <stop offset="100%" stopColor="#0c0818"/>
        </linearGradient>
        <radialGradient id="aicore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c5cbf" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0"/>
        </radialGradient>
        <filter id="aiglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
        <filter id="aism" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes aiflow{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes aipulse{0%,100%{opacity:0.4;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
        @keyframes ainode{0%,100%{r:4;opacity:0.5}50%{r:6;opacity:1}}
        @keyframes aispin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes aiblink{0%,100%{opacity:0.2}60%{opacity:1}}
        @keyframes aidot{0%{opacity:0}20%{opacity:1}80%{opacity:1}100%{opacity:0}}
        .aiflow1{stroke-dasharray:6 4;animation:aiflow 2s linear infinite}
        .aiflow2{stroke-dasharray:6 4;animation:aiflow 2.5s linear infinite 0.5s}
        .aiflow3{stroke-dasharray:6 4;animation:aiflow 2.2s linear infinite 1s}
        .aiout1{stroke-dasharray:6 4;animation:aiflow 2.8s linear infinite 0.3s}
        .aiout2{stroke-dasharray:6 4;animation:aiflow 2.4s linear infinite 0.8s}
        .aiout3{stroke-dasharray:6 4;animation:aiflow 3s linear infinite 1.4s}
        .aieng{animation:aipulse 2.5s ease-in-out infinite;transform-origin:160px 100px}
        .airng{animation:aispin 8s linear infinite;transform-origin:160px 100px}
        .aibl{animation:aiblink 1.8s ease-in-out infinite}
        .aibl2{animation:aiblink 2.4s ease-in-out infinite 0.6s}
        .aibl3{animation:aiblink 2s ease-in-out infinite 1.2s}
      `}</style>

      <rect width="320" height="200" fill="url(#aibg)"/>

      {/* Blueprint grid */}
      <g stroke="rgba(92,61,158,0.07)" strokeWidth="0.5" fill="none">
        {[0,1,2,3,4,5,6,7,8,9,10].map(i=>(
          <line key={`h${i}`} x1="0" y1={i*20} x2="320" y2={i*20}/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i=>(
          <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="200"/>
        ))}
      </g>

      {/* Central engine glow */}
      <circle cx="160" cy="100" r="36" fill="url(#aicore)"/>
      <circle cx="160" cy="100" r="36" fill="url(#aiglow)" opacity="0.3"/>

      {/* Spinning ring */}
      <ellipse cx="160" cy="100" rx="30" ry="12" fill="none" stroke="rgba(124,92,191,0.25)" strokeWidth="1" className="airng"/>

      {/* Central engine box */}
      <rect x="128" y="82" width="64" height="36" rx="4" fill="rgba(8,5,16,0.9)" stroke="#7c5cbf" strokeWidth="1.5"/>
      <text x="160" y="97" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9c7ce0" letterSpacing="0.08em">INTELLIGENCE</text>
      <text x="160" y="109" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9c7ce0" letterSpacing="0.08em">ENGINE</text>
      <circle cx="144" cy="115" r="2" fill="#7c5cbf" className="aibl"/>
      <circle cx="152" cy="115" r="2" fill="#5c3d9e" className="aibl2"/>
      <circle cx="160" cy="115" r="2" fill="#7c5cbf" className="aibl3"/>

      {/* INPUT NODES (left side) */}
      {/* Market Data */}
      <rect x="12" y="30" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(124,92,191,0.5)" strokeWidth="1"/>
      <text x="48" y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#7c5cbf" letterSpacing="0.05em">MARKET DATA</text>
      <text x="48" y="51" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#4a3a72">12 streams</text>
      <line x1="84" y1="43" x2="128" y2="87" stroke="#7c5cbf" strokeWidth="1" opacity="0.5" className="aiflow1"/>

      {/* Regulatory */}
      <rect x="12" y="87" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(124,92,191,0.5)" strokeWidth="1"/>
      <text x="48" y="99" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#7c5cbf" letterSpacing="0.05em">REGULATORY</text>
      <text x="48" y="108" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#4a3a72">live feeds</text>
      <line x1="84" y1="100" x2="128" y2="100" stroke="#7c5cbf" strokeWidth="1" opacity="0.5" className="aiflow2"/>

      {/* Network */}
      <rect x="12" y="144" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(124,92,191,0.5)" strokeWidth="1"/>
      <text x="48" y="156" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#7c5cbf" letterSpacing="0.05em">NETWORK</text>
      <text x="48" y="165" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#4a3a72">400+ signals</text>
      <line x1="84" y1="157" x2="128" y2="113" stroke="#7c5cbf" strokeWidth="1" opacity="0.5" className="aiflow3"/>

      {/* OUTPUT NODES (right side) */}
      {/* Entry Strategy */}
      <rect x="236" y="30" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(232,98,42,0.5)" strokeWidth="1"/>
      <text x="272" y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#e8622a" letterSpacing="0.04em">ENTRY STRATEGY</text>
      <text x="272" y="51" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#7a3a1a">output →</text>
      <line x1="192" y1="87" x2="236" y2="43" stroke="#e8622a" strokeWidth="1" opacity="0.5" className="aiout1"/>

      {/* Compliance Map */}
      <rect x="236" y="87" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(232,98,42,0.5)" strokeWidth="1"/>
      <text x="272" y="98" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#e8622a" letterSpacing="0.04em">COMPLIANCE MAP</text>
      <text x="272" y="107" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#7a3a1a">output →</text>
      <line x1="192" y1="100" x2="236" y2="100" stroke="#e8622a" strokeWidth="1" opacity="0.5" className="aiout2"/>

      {/* Intelligence Retainer */}
      <rect x="236" y="144" width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(232,98,42,0.5)" strokeWidth="1"/>
      <text x="272" y="155" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#e8622a" letterSpacing="0.03em">INTEL RETAINER</text>
      <text x="272" y="164" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#7a3a1a">output →</text>
      <line x1="192" y1="113" x2="236" y2="157" stroke="#e8622a" strokeWidth="1" opacity="0.5" className="aiout3"/>

      {/* Bottom fade */}
      <defs>
        <linearGradient id="aifade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#080510" stopOpacity="0"/>
          <stop offset="100%" stopColor="#080510" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#aifade)"/>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   Card 3 — ANALYTICS: Live Data Dashboard
   Animated bar chart + trend line, KPI pills,
   clean grid, live indicator — professional & sharp
   ════════════════════════════════════════════════════════ */
function AnalyticsVisual() {
  const bars = [
    { x: 28,  h: 52,  color: "#2d8a7a" },
    { x: 60,  h: 80,  color: "#e8622a" },
    { x: 92,  h: 44,  color: "#2d8a7a" },
    { x: 124, h: 108, color: "#e8622a" },
    { x: 156, h: 64,  color: "#2d8a7a" },
    { x: 188, h: 92,  color: "#e8622a" },
    { x: 220, h: 72,  color: "#2d8a7a" },
    { x: 252, h: 116, color: "#e8622a" },
    { x: 284, h: 88,  color: "#2d8a7a" },
  ];
  const base = 168;

  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="anbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050d0a"/>
          <stop offset="100%" stopColor="#091812"/>
        </linearGradient>
        <filter id="anglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="anline" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {bars.map((b,i)=>(
          <linearGradient key={i} id={`bg${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={b.color} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={b.color} stopOpacity="0.2"/>
          </linearGradient>
        ))}
      </defs>
      <style>{`
        @keyframes anbargrow{0%{transform:scaleY(0.3)}100%{transform:scaleY(1)}}
        @keyframes anlinedash{0%{stroke-dashoffset:320}100%{stroke-dashoffset:0}}
        @keyframes anpulse{0%,100%{r:4;opacity:0.5}50%{r:6;opacity:1}}
        @keyframes anlive{0%,100%{opacity:0.2}50%{opacity:1}}
        @keyframes anpill{0%,100%{opacity:0.7}50%{opacity:1}}
        ${bars.map((_,i)=>`.anb${i}{animation:anbargrow ${2+i*0.2}s ease-out both ${i*0.1}s;transform-origin:center bottom}`).join('\n')}
        .antrend{stroke-dasharray:320;animation:anlinedash 3s ease-out both 0.5s}
        .anlive{animation:anlive 1.2s ease-in-out infinite}
        .anpill{animation:anpill 3s ease-in-out infinite}
      `}</style>

      <rect width="320" height="200" fill="url(#anbg)"/>

      {/* Blueprint grid */}
      <g stroke="rgba(45,138,122,0.07)" strokeWidth="0.5" fill="none">
        {[0,1,2,3,4,5,6,7,8,9,10].map(i=>(
          <line key={`h${i}`} x1="0" y1={i*20} x2="320" y2={i*20}/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i=>(
          <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="200"/>
        ))}
      </g>

      {/* Chart horizontal axis */}
      <line x1="16" y1={base} x2="304" y2={base} stroke="rgba(45,138,122,0.3)" strokeWidth="0.8"/>

      {/* Gridlines above axis */}
      {[0.25, 0.5, 0.75].map((f,i)=>(
        <g key={i}>
          <line x1="16" y1={base - 120*f} x2="304" y2={base - 120*f} stroke="rgba(45,138,122,0.1)" strokeWidth="0.5" strokeDasharray="4 4"/>
          <text x="10" y={base - 120*f + 3} textAnchor="end" fontFamily="monospace" fontSize="6" fill="rgba(45,138,122,0.4)">{Math.round(f*100)}%</text>
        </g>
      ))}

      {/* Animated bars */}
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x} y={base - b.h} width="20" height={b.h}
          fill={`url(#bg${i})`}
          rx="2"
          className={`anb${i}`}
        />
      ))}

      {/* Trend line overlay */}
      <polyline
        points={bars.map(b => `${b.x + 10},${base - b.h * 0.88}`).join(' ')}
        fill="none" stroke="#3aafa0" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="antrend"
        filter="url(#anline)"
      />
      {/* Peak dot */}
      <circle cx={252+10} cy={base - 116*0.88} r="4" fill="#3aafa0" filter="url(#anglow)"/>

      {/* KPI pills row */}
      <rect x="8" y="8" width="88" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(45,138,122,0.4)" strokeWidth="0.8" className="anpill"/>
      <text x="14" y="20" fontFamily="monospace" fontSize="7" fill="#3aafa0">Market Growth</text>
      <text x="88" y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#3aafa0" fontWeight="bold">+34.2%</text>

      <rect x="102" y="8" width="68" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(232,98,42,0.3)" strokeWidth="0.8" className="anpill"/>
      <text x="108" y="20" fontFamily="monospace" fontSize="7" fill="#e8622a">Risk Index</text>
      <text x="162" y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#e8622a" fontWeight="bold">LOW</text>

      <rect x="176" y="8" width="72" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(45,138,122,0.4)" strokeWidth="0.8" className="anpill"/>
      <text x="182" y="20" fontFamily="monospace" fontSize="7" fill="#3aafa0">Entry Signal</text>
      <text x="240" y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#3aafa0" fontWeight="bold">BUY</text>

      {/* Live indicator */}
      <circle cx="264" cy="17" r="3.5" fill="#2d8a7a" className="anlive"/>
      <text x="272" y="21" fontFamily="monospace" fontSize="7" fill="#2d8a7a">LIVE</text>

      {/* Bottom fade */}
      <defs>
        <linearGradient id="anfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#050d0a" stopOpacity="0"/>
          <stop offset="100%" stopColor="#050d0a" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#anfade)"/>
    </svg>
  );
}

const VISUALS = { web3: Web3Visual, ai: AIVisual, analytics: AnalyticsVisual };

export default function TechCapabilities() {
  return (
    <section id="tech" className="section-pad">
      <div className="eyebrow" style={{ marginBottom:14 }}>Capabilities</div>
      <h2 className="h-section" style={{ fontSize:"clamp(31px,3.8vw,51px)", color:"#fff", marginBottom:14 }}>
        Intersectional Tech<br/>Capabilities
      </h2>
      <p className="section-sub" style={{ color:"#a8c4ba" }}>
        We operate at the nexus of emerging technology and frontier markets, providing technical clarity for executive decision-making.
      </p>
      <div className="tech-grid-3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
        {TECH_CARDS.map(card => {
          const Visual = VISUALS[card.visual as keyof typeof VISUALS];
          return (
            <div key={card.title}
              style={{
                background:"rgba(10,22,18,0.6)",
                backdropFilter:"blur(18px)",
                WebkitBackdropFilter:"blur(18px)",
                border:"1px solid rgba(255,255,255,0.07)",
                borderRadius:8,
                overflow:"hidden",
                boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
                transition:"transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                cursor:"default",
              }}
              onMouseEnter={e=>{
                const el=e.currentTarget as HTMLElement;
                el.style.transform="translateY(-5px)";
                el.style.borderColor="rgba(255,255,255,0.14)";
                el.style.boxShadow="0 0 24px rgba(45,138,122,0.15), 0 16px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={e=>{
                const el=e.currentTarget as HTMLElement;
                el.style.transform="";
                el.style.borderColor="rgba(255,255,255,0.07)";
                el.style.boxShadow="0 8px 32px rgba(0,0,0,0.4)";
              }}
            >
              <div style={{ height:200, overflow:"hidden" }}><Visual/></div>
              <div style={{ padding:"20px 22px 26px" }}>
                <div style={{ fontFamily:"Inter,sans-serif", fontSize:14, letterSpacing:"0.14em", textTransform:"uppercase", color:"#4a8070", marginBottom:7, fontWeight:700 }}>{card.tag}</div>
                <h3 style={{ fontFamily:"Barlow,sans-serif", fontSize:23, fontWeight:800, color:"#fff", marginBottom:10 }}>{card.title}</h3>
                <p style={{ fontFamily:"Inter,sans-serif", fontSize:18, fontWeight:300, color:"#a8c0b8", lineHeight:1.65, marginBottom:16 }}>{card.description}</p>
                <ul style={{ listStyle:"none" }}>
                  {card.items.map(item=>(
                    <li key={item} style={{ fontFamily:"Inter,sans-serif", fontSize:17, color:"#6a8878", padding:"4px 0", display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:3, height:3, borderRadius:"50%", background:"var(--teal-500)", flexShrink:0 }}/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}