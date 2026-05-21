"use client";
import { TECH_CARDS } from "@/lib/constants";

/* ════════════════════════════════════════════════════════
   Card 1 — WEB3: "Globe City" cartoon illustration
   Cartoon buildings inside a globe, orbiting hex tokens
   ════════════════════════════════════════════════════════ */
function Web3Visual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="w3bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0c2030"/>
          <stop offset="100%" stopColor="#050d14"/>
        </radialGradient>
        <radialGradient id="globeFill" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0f2e28"/>
          <stop offset="100%" stopColor="#071a14"/>
        </radialGradient>
        <filter id="w3soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="globeClip">
          <circle cx="155" cy="95" r="64"/>
        </clipPath>
      </defs>
      <style>{`
        @keyframes w3hex{0%,100%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes w3win{0%,100%{opacity:.2}50%{opacity:.9}}
        @keyframes w3beam{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes w3pulse{0%,100%{r:4;opacity:.5}50%{r:6.5;opacity:1}}
        @keyframes w3float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        .w3orbit{animation:w3hex 14s linear infinite;transform-origin:155px 95px}
        .w3orbit2{animation:w3hex 20s linear infinite reverse;transform-origin:155px 95px}
        .w3wa{animation:w3win 2.8s ease-in-out infinite}
        .w3wb{animation:w3win 3.5s ease-in-out infinite .6s}
        .w3wc{animation:w3win 2.2s ease-in-out infinite 1.2s}
        .w3wd{animation:w3win 4s ease-in-out infinite 1.8s}
        .w3beam{animation:w3beam 2s linear infinite;stroke-dasharray:8 5}
        .w3beam2{animation:w3beam 3s linear infinite .8s;stroke-dasharray:6 6}
        .w3node{animation:w3pulse 2.5s ease-in-out infinite}
        .w3node2{animation:w3pulse 3s ease-in-out infinite .5s}
        .w3node3{animation:w3pulse 2s ease-in-out infinite 1s}
        .w3fl{animation:w3float 3.5s ease-in-out infinite}
        .w3fl2{animation:w3float 4s ease-in-out infinite 1s}
        .w3fl3{animation:w3float 3s ease-in-out infinite 2s}
      `}</style>

      <rect width="320" height="200" fill="url(#w3bg)"/>

      {/* Stars */}
      {[[20,15],[55,8],[90,22],[200,10],[260,18],[300,5],[310,30],[15,40],[35,55]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="0.8" fill="white" opacity={[.3,.5,.35,.45,.3,.4,.35,.3,.45][i]}/>
      ))}

      {/* Globe background */}
      <circle cx="155" cy="95" r="64" fill="url(#globeFill)" stroke="#2d8a7a" strokeWidth="1.5"/>

      {/* Globe grid lines (inside) */}
      <g clipPath="url(#globeClip)" stroke="rgba(45,138,122,0.2)" fill="none" strokeWidth="0.7">
        <ellipse cx="155" cy="95" rx="64" ry="22"/>
        <ellipse cx="155" cy="95" rx="64" ry="42"/>
        <ellipse cx="155" cy="95" rx="22" ry="64"/>
        <ellipse cx="155" cy="95" rx="45" ry="64"/>
        <line x1="155" y1="31" x2="155" y2="159"/>
      </g>

      {/* CARTOON BUILDINGS inside globe */}
      <g clipPath="url(#globeClip)">
        {/* Ground */}
        <rect x="91" y="148" width="128" height="12" fill="#0a2a20" rx="2"/>

        {/* Building 1 — left, medium */}
        <rect x="98"  y="108" width="24" height="40" fill="#163830" stroke="#2d8a7a" strokeWidth="1" rx="1"/>
        <rect x="98"  y="104" width="24" height="6"  fill="#1e4a3c" stroke="#2d8a7a" strokeWidth="0.8" rx="1"/>
        {/* windows B1 */}
        <rect x="102" y="113" width="5" height="6" rx="1" fill="#2d8a7a" className="w3wa" filter="url(#w3soft)"/>
        <rect x="110" y="113" width="5" height="6" rx="1" fill="#2d8a7a" className="w3wb" filter="url(#w3soft)"/>
        <rect x="102" y="123" width="5" height="6" rx="1" fill="#2d8a7a" className="w3wc" filter="url(#w3soft)"/>
        <rect x="110" y="123" width="5" height="6" rx="1" fill="#e8622a" className="w3wd" filter="url(#w3soft)"/>

        {/* Building 2 — center, tallest */}
        <rect x="130" y="82"  width="30" height="66" fill="#1a4035" stroke="#2d8a7a" strokeWidth="1" rx="1"/>
        <rect x="130" y="77"  width="30" height="8"  fill="#224e40" stroke="#2d8a7a" strokeWidth="0.8" rx="1"/>
        <rect x="142" y="70"  width="6"  height="10" fill="#163028" stroke="#2d8a7a" strokeWidth="0.8" rx="1"/>
        {/* KICC-style mushroom top on tallest building */}
        <ellipse cx="145" cy="70" rx="14" ry="5" fill="#2d8a7a" opacity="0.9"/>
        <ellipse cx="145" cy="68" rx="10" ry="3.5" fill="#3aafa0"/>
        {/* windows B2 */}
        {[0,1,2,3].map(r=>[0,1].map(c=>(
          <rect key={`b2${r}${c}`} x={135+c*11} y={90+r*14} width="7" height="9" rx="1" fill="#2d8a7a"
            className={["w3wa","w3wb","w3wc","w3wd"][r]} filter="url(#w3soft)"/>
        )))}
        <rect x="135" y="90" width="7" height="9" rx="1" fill="#e8622a" className="w3wd" filter="url(#w3soft)"/>

        {/* Building 3 — right, short */}
        <rect x="168" y="118" width="22" height="30" fill="#122e24" stroke="#2d8a7a" strokeWidth="1" rx="1"/>
        <rect x="168" y="114" width="22" height="6"  fill="#1a3a2e" stroke="#2d8a7a" strokeWidth="0.8" rx="1"/>
        <rect x="172" y="122" width="5" height="6" rx="1" fill="#2d8a7a" className="w3wb" filter="url(#w3soft)"/>
        <rect x="180" y="122" width="5" height="6" rx="1" fill="#2d8a7a" className="w3wc" filter="url(#w3soft)"/>
        <rect x="172" y="132" width="5" height="6" rx="1" fill="#e8622a" className="w3wa" filter="url(#w3soft)"/>

        {/* Small tree/acacia */}
        <rect x="122" y="140" width="3" height="10" fill="#0a1e14"/>
        <ellipse cx="123.5" cy="138" rx="8" ry="4" fill="#0e2a1c"/>
        <ellipse cx="123.5" cy="136" rx="5" ry="2.5" fill="#102e20"/>
      </g>

      {/* Orbiting blockchain hexagons */}
      <g className="w3orbit">
        {/* Hex 1 — top */}
        <g className="w3fl" style={{transformOrigin:"155px 18px"}}>
          <polygon points="155,10 165,16 165,28 155,34 145,28 145,16" fill="#0a1a30" stroke="#e8622a" strokeWidth="1.5"/>
          <text x="155" y="26" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#e8622a" fontWeight="bold">₿</text>
        </g>
      </g>
      <g className="w3orbit2">
        {/* Hex 2 — right */}
        <g className="w3fl2" style={{transformOrigin:"228px 95px"}}>
          <polygon points="228,82 240,89 240,103 228,110 216,103 216,89" fill="#0a1a30" stroke="#3aafa0" strokeWidth="1.5"/>
          <text x="228" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#3aafa0">◈</text>
        </g>
        {/* Hex 3 — left */}
        <g className="w3fl3" style={{transformOrigin:"82px 95px"}}>
          <polygon points="82,82 94,89 94,103 82,110 70,103 70,89" fill="#0a1a30" stroke="#e8622a" strokeWidth="1.5"/>
          <text x="82" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#e8622a">⬡</text>
        </g>
      </g>
      {/* Hex 4 — bottom */}
      <g className="w3fl" style={{transform:"translateY(0)"}}>
        <polygon points="155,158 167,165 167,179 155,186 143,179 143,165" fill="#0a1a30" stroke="#3aafa0" strokeWidth="1.5" opacity="0.8"/>
        <text x="155" y="176" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#3aafa0">◇</text>
      </g>

      {/* Connection beams from hexagons to globe */}
      <line x1="155" y1="34" x2="155" y2="31" stroke="#e8622a" strokeWidth="1" opacity="0.5" className="w3beam"/>
      <line x1="216" y1="96" x2="219" y2="96" stroke="#3aafa0" strokeWidth="1" opacity="0.5" className="w3beam2"/>
      <line x1="94"  y1="96" x2="91"  y2="96" stroke="#e8622a" strokeWidth="1" opacity="0.5" className="w3beam"/>

      {/* Pulsing nodes at globe edge */}
      <circle cx="155" cy="31"  r="4" fill="#e8622a" className="w3node"  filter="url(#w3soft)"/>
      <circle cx="219" cy="95"  r="4" fill="#3aafa0" className="w3node2" filter="url(#w3soft)"/>
      <circle cx="91"  cy="95"  r="4" fill="#e8622a" className="w3node3" filter="url(#w3soft)"/>

      {/* W3D badge */}
      <rect x="12" y="168" width="48" height="20" rx="3" fill="rgba(5,13,20,0.85)" stroke="#e8622a" strokeWidth="0.8"/>
      <text x="36" y="181" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#e8622a" fontWeight="bold">W3D</text>

      {/* Bottom fade */}
      <defs><linearGradient id="w3fade" x1="0" y1="0" x2="0" y2="1"><stop offset="60%" stopColor="#050d14" stopOpacity="0"/><stop offset="100%" stopColor="#050d14" stopOpacity="0.7"/></linearGradient></defs>
      <rect width="320" height="200" fill="url(#w3fade)"/>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   Card 2 — AI: "Digital Face" cartoon illustration
   Very different: organic face/mind with coloured synapses
   ════════════════════════════════════════════════════════ */
function AIVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="aibg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#160e28"/>
          <stop offset="100%" stopColor="#080510"/>
        </radialGradient>
        <radialGradient id="aiface" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1e1438"/>
          <stop offset="100%" stopColor="#100c20"/>
        </radialGradient>
        <radialGradient id="aicenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5ecfbf" stopOpacity="1"/>
          <stop offset="60%" stopColor="#2d8a7a" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
        </radialGradient>
        <filter id="aisoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="aiglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <clipPath id="faceClip">
          <ellipse cx="160" cy="90" rx="80" ry="72"/>
        </clipPath>
      </defs>
      <style>{`
        @keyframes aisyn{0%,100%{opacity:.15;strokeWidth:1}50%{opacity:1;strokeWidth:2}}
        @keyframes ainode{0%,100%{r:3;opacity:.4}50%{r:5.5;opacity:1}}
        @keyframes aiblink{0%,100%{opacity:.3}50%{opacity:1}}
        @keyframes aicore{0%,100%{r:8}50%{r:11}}
        @keyframes aidata{0%{opacity:0;transform:translate(0,0)}40%{opacity:1}100%{opacity:0;transform:translate(-10px,-20px)}}
        @keyframes aidata2{0%{opacity:0;transform:translate(0,0)}40%{opacity:1}100%{opacity:0;transform:translate(12px,-18px)}}
        @keyframes aispin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .ais1{animation:aisyn 2s ease-in-out infinite}
        .ais2{animation:aisyn 3s ease-in-out infinite .4s}
        .ais3{animation:aisyn 2.5s ease-in-out infinite .8s}
        .ais4{animation:aisyn 3.5s ease-in-out infinite 1.2s}
        .ais5{animation:aisyn 2.2s ease-in-out infinite 1.6s}
        .ais6{animation:aisyn 3.2s ease-in-out infinite 2s}
        .ain{animation:ainode 2.5s ease-in-out infinite}
        .ain2{animation:ainode 3.2s ease-in-out infinite .5s}
        .ain3{animation:ainode 2s ease-in-out infinite 1s}
        .ain4{animation:ainode 3.5s ease-in-out infinite 1.5s}
        .aiblink{animation:aiblink 1.5s ease-in-out infinite}
        .aicore{animation:aicore 2s ease-in-out infinite}
        .aid{animation:aidata 3s ease-in-out infinite}
        .aid2{animation:aidata2 3.5s ease-in-out infinite 1.2s}
        .aispin{animation:aispin 8s linear infinite;transform-origin:160px 90px}
        .aispin2{animation:aispin 12s linear infinite reverse;transform-origin:160px 90px}
      `}</style>

      <rect width="320" height="200" fill="url(#aibg)"/>

      {/* Head/face shape */}
      <ellipse cx="160" cy="90" rx="80" ry="72" fill="url(#aiface)" stroke="#5c3d9e" strokeWidth="1.5"/>

      {/* Ear shapes */}
      <ellipse cx="80"  cy="90" rx="8" ry="14" fill="#1a1030" stroke="#5c3d9e" strokeWidth="1"/>
      <ellipse cx="240" cy="90" rx="8" ry="14" fill="#1a1030" stroke="#5c3d9e" strokeWidth="1"/>
      {/* Ear circuit detail */}
      <path d="M76 84 L70 84 L70 96 L76 96" stroke="#7c5cbf" strokeWidth="0.8" fill="none" opacity="0.6"/>
      <path d="M244 84 L250 84 L250 96 L244 96" stroke="#7c5cbf" strokeWidth="0.8" fill="none" opacity="0.6"/>

      {/* Spinning orbital rings inside face */}
      <g clipPath="url(#faceClip)">
        <ellipse cx="160" cy="90" rx="60" ry="25" fill="none" stroke="rgba(92,61,158,0.25)" strokeWidth="1" className="aispin"/>
        <ellipse cx="160" cy="90" rx="45" ry="18" fill="none" stroke="rgba(92,61,158,0.2)" strokeWidth="0.8" className="aispin2"/>

        {/* Neural synapses — each a different colour for variety */}
        <line x1="108" y1="55" x2="160" y2="90" stroke="#e8622a" strokeWidth="1.2" className="ais1" strokeLinecap="round"/>
        <line x1="132" y1="42" x2="160" y2="90" stroke="#3aafa0" strokeWidth="1.2" className="ais2" strokeLinecap="round"/>
        <line x1="188" y1="42" x2="160" y2="90" stroke="#f0a050" strokeWidth="1.2" className="ais3" strokeLinecap="round"/>
        <line x1="212" y1="55" x2="160" y2="90" stroke="#7c5cbf" strokeWidth="1.2" className="ais4" strokeLinecap="round"/>
        <line x1="220" y1="90" x2="160" y2="90" stroke="#3aafa0" strokeWidth="1.2" className="ais5" strokeLinecap="round"/>
        <line x1="100" y1="90" x2="160" y2="90" stroke="#e8622a" strokeWidth="1.2" className="ais6" strokeLinecap="round"/>
        <line x1="120" y1="130" x2="160" y2="90" stroke="#7c5cbf" strokeWidth="1.2" className="ais1" strokeLinecap="round"/>
        <line x1="200" y1="130" x2="160" y2="90" stroke="#f0a050" strokeWidth="1.2" className="ais2" strokeLinecap="round"/>
        <line x1="160" y1="155" x2="160" y2="90" stroke="#3aafa0" strokeWidth="1.2" className="ais3" strokeLinecap="round"/>

        {/* Outer nodes — coloured dots */}
        <circle cx="108" cy="55"  r="5" fill="#e8622a" className="ain"  filter="url(#aisoft)"/>
        <circle cx="132" cy="42"  r="5" fill="#3aafa0" className="ain2" filter="url(#aisoft)"/>
        <circle cx="188" cy="42"  r="5" fill="#f0a050" className="ain3" filter="url(#aisoft)"/>
        <circle cx="212" cy="55"  r="5" fill="#7c5cbf" className="ain4" filter="url(#aisoft)"/>
        <circle cx="220" cy="90"  r="5" fill="#3aafa0" className="ain"  filter="url(#aisoft)"/>
        <circle cx="100" cy="90"  r="5" fill="#e8622a" className="ain2" filter="url(#aisoft)"/>
        <circle cx="120" cy="130" r="5" fill="#7c5cbf" className="ain3" filter="url(#aisoft)"/>
        <circle cx="200" cy="130" r="5" fill="#f0a050" className="ain4" filter="url(#aisoft)"/>
        <circle cx="160" cy="155" r="5" fill="#3aafa0" className="ain"  filter="url(#aisoft)"/>

        {/* EYES — cartoon geometric eyes */}
        {/* Left eye */}
        <ellipse cx="135" cy="78" rx="12" ry="9" fill="#0c0818" stroke="#7c5cbf" strokeWidth="1.2"/>
        <circle   cx="135" cy="78" r="6"  fill="#1e1438" stroke="#5c3d9e" strokeWidth="0.8"/>
        <circle   cx="135" cy="78" r="3.5" fill="#2d8a7a"/>
        <circle   cx="135" cy="78" r="1.5" fill="#0c0818"/>
        <circle   cx="137" cy="76" r="1"   fill="white" opacity="0.9"/>
        {/* Right eye */}
        <ellipse cx="185" cy="78" rx="12" ry="9" fill="#0c0818" stroke="#7c5cbf" strokeWidth="1.2"/>
        <circle   cx="185" cy="78" r="6"  fill="#1e1438" stroke="#5c3d9e" strokeWidth="0.8"/>
        <circle   cx="185" cy="78" r="3.5" fill="#e8622a"/>
        <circle   cx="185" cy="78" r="1.5" fill="#0c0818"/>
        <circle   cx="187" cy="76" r="1"   fill="white" opacity="0.9"/>
        {/* Eye blink overlays */}
        <rect x="123" y="73" width="24" height="2" rx="1" fill="url(#aiface)" className="aiblink"/>
        <rect x="173" y="73" width="24" height="2" rx="1" fill="url(#aiface)" className="aiblink"/>

        {/* Mouth — subtle smile line */}
        <path d="M143 112 Q160 120 177 112" stroke="#5c3d9e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Central core glowing orb */}
        <circle cx="160" cy="90" r="10" fill="url(#aicenter)" filter="url(#aiglow)" className="aicore"/>
        <circle cx="160" cy="90" r="6"  fill="#3aafa0" opacity="0.9"/>
        <circle cx="160" cy="90" r="3"  fill="#5ecfbf"/>
        <circle cx="162" cy="88" r="1"  fill="white" opacity="0.8"/>
      </g>

      {/* Floating data bits outside */}
      <text x="18"  y="30"  fontFamily="monospace" fontSize="7" fill="#7c5cbf" opacity="0.5" className="aid">01</text>
      <text x="288" y="28"  fontFamily="monospace" fontSize="7" fill="#3aafa0" opacity="0.5" className="aid2">10</text>
      <text x="24"  y="160" fontFamily="monospace" fontSize="7" fill="#e8622a" opacity="0.5" className="aid">11</text>
      <text x="280" y="165" fontFamily="monospace" fontSize="7" fill="#f0a050" opacity="0.5" className="aid2">00</text>

      {/* Bottom fade */}
      <defs><linearGradient id="aifade" x1="0" y1="0" x2="0" y2="1"><stop offset="60%" stopColor="#080510" stopOpacity="0"/><stop offset="100%" stopColor="#080510" stopOpacity="0.75"/></linearGradient></defs>
      <rect width="320" height="200" fill="url(#aifade)"/>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   Card 3 — ANALYTICS: "Colourful Data Skyline"
   Multi-colour animated bar-chart city, line chart overlay,
   moon, stars, tiny cars — much more vibrant than the others
   ════════════════════════════════════════════════════════ */
function AnalyticsVisual() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="anbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050d0a"/>
          <stop offset="100%" stopColor="#091812"/>
        </linearGradient>
        <radialGradient id="anmoon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4c878"/>
          <stop offset="100%" stopColor="#a89840"/>
        </radialGradient>
        <filter id="ansoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="anglow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes anb1{0%,100%{height:65px;y:113px}50%{height:80px;y:98px}}
        @keyframes anb2{0%,100%{height:108px;y:70px}50%{height:125px;y:53px}}
        @keyframes anb3{0%,100%{height:52px;y:126px}50%{height:68px;y:110px}}
        @keyframes anb4{0%,100%{height:138px;y:40px}50%{height:152px;y:26px}}
        @keyframes anb5{0%,100%{height:82px;y:96px}50%{height:96px;y:82px}}
        @keyframes anb6{0%,100%{height:62px;y:116px}50%{height:78px;y:100px}}
        @keyframes anb7{0%,100%{height:118px;y:60px}50%{height:132px;y:46px}}
        @keyframes anb8{0%,100%{height:46px;y:132px}50%{height:60px;y:118px}}
        @keyframes anwin{0%,100%{opacity:.2}50%{opacity:.9}}
        @keyframes anline{0%{stroke-dashoffset:280}100%{stroke-dashoffset:0}}
        @keyframes anstar{0%,100%{opacity:.25}50%{opacity:.9}}
        @keyframes ancar{from{transform:translateX(-70px)}to{transform:translateX(390px)}}
        @keyframes ancar2{from{transform:translateX(390px)}to{transform:translateX(-70px)}}
        @keyframes anmoon{0%,100%{opacity:.85}50%{opacity:1}}
        .anb1{animation:anb1 4.2s ease-in-out infinite}
        .anb2{animation:anb2 5.5s ease-in-out infinite .4s}
        .anb3{animation:anb3 3.8s ease-in-out infinite .9s}
        .anb4{animation:anb4 6.2s ease-in-out infinite .2s}
        .anb5{animation:anb5 4.8s ease-in-out infinite 1.3s}
        .anb6{animation:anb6 3.5s ease-in-out infinite .7s}
        .anb7{animation:anb7 5.8s ease-in-out infinite .1s}
        .anb8{animation:anb8 4.4s ease-in-out infinite 1.8s}
        .anwa{animation:anwin 2.5s ease-in-out infinite}
        .anwb{animation:anwin 3.5s ease-in-out infinite .5s}
        .anwc{animation:anwin 2s ease-in-out infinite 1s}
        .anwd{animation:anwin 4s ease-in-out infinite 1.5s}
        .anline{animation:anline 4s linear infinite;stroke-dasharray:10 5}
        .anline2{animation:anline 6s linear infinite 1.5s;stroke-dasharray:7 8}
        .anst1{animation:anstar 2.8s ease-in-out infinite}
        .anst2{animation:anstar 3.5s ease-in-out infinite .6s}
        .anst3{animation:anstar 2.2s ease-in-out infinite 1.2s}
        .ancr{animation:ancar 10s linear infinite}
        .ancl{animation:ancar2 14s linear infinite 4s}
        .anmoon{animation:anmoon 4s ease-in-out infinite}
      `}</style>

      <rect width="320" height="200" fill="url(#anbg)"/>

      {/* Stars */}
      {[[25,12],[65,8],[115,20],[175,10],[235,16],[290,8],[305,28],[45,35],[155,28],[265,22]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="0.9" fill="white"
          className={i%3===0?"anst1":i%3===1?"anst2":"anst3"}
          opacity={[.5,.4,.6,.45,.35,.5,.4,.3,.5,.45][i]}/>
      ))}

      {/* Crescent moon */}
      <g className="anmoon">
        <circle cx="280" cy="32" r="16" fill="url(#anmoon)" opacity="0.85"/>
        <circle cx="288" cy="26" r="13" fill="#050d0a"/>
      </g>

      {/* Animated colourful bar buildings — each a different colour */}
      {/* Bar 1 — teal */}
      <rect x="12"  className="anb1" width="26" height="65" y="113" fill="#1a4035" stroke="#2d8a7a" strokeWidth="1" rx="1"/>
      <rect x="14"  y="115" width="5" height="7" rx="1" fill="#2d8a7a" className="anwa" filter="url(#ansoft)"/>
      <rect x="22"  y="115" width="5" height="7" rx="1" fill="#2d8a7a" className="anwb" filter="url(#ansoft)"/>
      <rect x="14"  y="126" width="5" height="7" rx="1" fill="#2d8a7a" className="anwc" filter="url(#ansoft)"/>

      {/* Bar 2 — orange (tall) */}
      <rect x="44"  className="anb2" width="30" height="108" y="70" fill="#3d1a0a" stroke="#e8622a" strokeWidth="1" rx="1"/>
      {[0,1,2,3].map(r=>[0,1].map(c=>(
        <rect key={`or${r}${c}`} x={48+c*12} y={76+r*18} width="7" height="10" rx="1" fill="#e8622a"
          className={["anwa","anwb","anwc","anwd"][r]} filter="url(#ansoft)"/>
      )))}

      {/* Bar 3 — light teal (short) */}
      <rect x="80"  className="anb3" width="24" height="52" y="126" fill="#0e2820" stroke="#3aafa0" strokeWidth="1" rx="1"/>
      <rect x="83"  y="130" width="5" height="7" rx="1" fill="#3aafa0" className="anwb" filter="url(#ansoft)"/>
      <rect x="91"  y="130" width="5" height="7" rx="1" fill="#3aafa0" className="anwc" filter="url(#ansoft)"/>

      {/* Bar 4 — white/neutral (tallest — KICC inspired) */}
      <rect x="110" className="anb4" width="32" height="138" y="40" fill="#182a24" stroke="#c8e0d8" strokeWidth="1" rx="1"/>
      {/* Mushroom top on tallest bar */}
      <rect x="114" y="36" width="24" height="8" fill="#1e3630" stroke="#c8e0d8" strokeWidth="0.8" rx="1"/>
      <ellipse cx="126" cy="35" rx="20" ry="6" fill="#c8e0d8" opacity="0.7"/>
      <ellipse cx="126" cy="33" rx="14" ry="4" fill="#e0f0ec" opacity="0.8"/>
      {[0,1,2,3,4].map(r=>[0,1].map(c=>(
        <rect key={`wh${r}${c}`} x={116+c*12} y={48+r*18} width="7" height="10" rx="1" fill="#c8e0d8"
          className={["anwa","anwb","anwc","anwa","anwb"][r]} filter="url(#ansoft)"/>
      )))}

      {/* Bar 5 — orange */}
      <rect x="148" className="anb5" width="26" height="82" y="96" fill="#3d1a0a" stroke="#f0a050" strokeWidth="1" rx="1"/>
      <rect x="151" y="100" width="6" height="8" rx="1" fill="#f0a050" className="anwc" filter="url(#ansoft)"/>
      <rect x="160" y="100" width="6" height="8" rx="1" fill="#f0a050" className="anwd" filter="url(#ansoft)"/>
      <rect x="151" y="112" width="6" height="8" rx="1" fill="#f0a050" className="anwa" filter="url(#ansoft)"/>

      {/* Bar 6 — teal (short) */}
      <rect x="180" className="anb6" width="22" height="62" y="116" fill="#132a22" stroke="#2d8a7a" strokeWidth="1" rx="1"/>
      <rect x="183" y="120" width="5" height="7" rx="1" fill="#2d8a7a" className="anwb" filter="url(#ansoft)"/>
      <rect x="191" y="120" width="5" height="7" rx="1" fill="#e8622a" className="anwc" filter="url(#ansoft)"/>

      {/* Bar 7 — purple/light (tall) */}
      <rect x="208" className="anb7" width="28" height="118" y="60" fill="#1e1240" stroke="#9c7ce0" strokeWidth="1" rx="1"/>
      {[0,1,2,3].map(r=>[0,1].map(c=>(
        <rect key={`pu${r}${c}`} x={211+c*12} y={66+r*18} width="7" height="10" rx="1" fill="#9c7ce0"
          className={["anwb","anwa","anwd","anwc"][r]} filter="url(#ansoft)"/>
      )))}

      {/* Bar 8 — orange (short) */}
      <rect x="242" className="anb8" width="20" height="46" y="132" fill="#2e1208" stroke="#e8622a" strokeWidth="1" rx="1"/>
      <rect x="245" y="136" width="5" height="7" rx="1" fill="#e8622a" className="anwa" filter="url(#ansoft)"/>

      {/* Bar 9 — teal */}
      <rect x="268" className="anb5" width="26" height="82" y="96" fill="#122418" stroke="#3aafa0" strokeWidth="1" rx="1"/>
      <rect x="271" y="100" width="6" height="8" rx="1" fill="#3aafa0" className="anwc" filter="url(#ansoft)"/>
      <rect x="280" y="100" width="6" height="8" rx="1" fill="#3aafa0" className="anwa" filter="url(#ansoft)"/>

      {/* Bar 10 right edge */}
      <rect x="300" className="anb3" width="22" height="52" y="126" fill="#2e1208" stroke="#f0a050" strokeWidth="1" rx="1"/>

      {/* Animated chart line overlay — like a shooting star across the skyline */}
      <polyline
        points="10,155 40,130 78,138 110,100 148,112 178,96 208,72 242,84 268,100 310,68"
        fill="none" stroke="#3aafa0" strokeWidth="2.5" className="anline"
        strokeLinecap="round" strokeLinejoin="round" filter="url(#anglow)"/>
      {/* Chart peak nodes */}
      {[[110,100],[208,72],[310,68]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill="#3aafa0" className={["anwa","anwb","anwc"][i]} filter="url(#ansoft)"/>
      ))}

      {/* Ground */}
      <rect x="0" y="176" width="320" height="24" fill="#060e0a"/>
      <rect x="0" y="176" width="320" height="2" fill="#0e2018"/>
      {/* Road lane */}
      <rect x="0" y="183" width="320" height="1.5" fill="#0e2018" opacity="0.8"/>
      {[0,1,2,3,4,5].map(i=>(<rect key={i} x={i*52+12} y="183.5" width="28" height="1" fill="#2d8a7a" opacity="0.08"/>))}

      {/* Tiny cartoon cars */}
      <g className="ancr">
        <ellipse cx="0" cy="180" rx="5" ry="3" fill="#c8c050" opacity="0.9" filter="url(#ansoft)"/>
        <ellipse cx="16" cy="180" rx="5" ry="3" fill="#c8c050" opacity="0.9" filter="url(#ansoft)"/>
      </g>
      <g className="ancl">
        <ellipse cx="320" cy="189" rx="4.5" ry="2.5" fill="#e8622a" opacity="0.8" filter="url(#ansoft)"/>
        <ellipse cx="305" cy="189" rx="4.5" ry="2.5" fill="#e8622a" opacity="0.8" filter="url(#ansoft)"/>
      </g>

      {/* City ambient glow */}
      <ellipse cx="160" cy="182" rx="155" ry="14" fill="#2d8a7a" opacity="0.04"/>

      {/* Bottom fade */}
      <defs><linearGradient id="anfade" x1="0" y1="0" x2="0" y2="1"><stop offset="70%" stopColor="#050d0a" stopOpacity="0"/><stop offset="100%" stopColor="#050d0a" stopOpacity="0.6"/></linearGradient></defs>
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
