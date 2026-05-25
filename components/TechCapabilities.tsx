"use client";
import AfricaMap from "@/components/AfricaMap";
import { TECH_CARDS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════
   Card 1 — WEB3: Africa Network Map
   Nairobi as hub, pulsing connections to global nodes
   ═══════════════════════════════════════════════════════ */
function Web3Visual() {
  return <AfricaMap />;
}

/* ═══════════════════════════════════════════════════════
   Card 2 — AI: Intelligence Pipeline
   Inputs → Engine → Outputs with animated data flow
   ═══════════════════════════════════════════════════════ */
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
        <filter id="aiglow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes aiflow{0%{stroke-dashoffset:80}100%{stroke-dashoffset:0}}
        @keyframes aipulse{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
        @keyframes aiblink{0%,100%{opacity:0.2}60%{opacity:1}}
        .aifl1{stroke-dasharray:6 4;animation:aiflow 2s linear infinite}
        .aifl2{stroke-dasharray:6 4;animation:aiflow 2.5s linear infinite 0.5s}
        .aifl3{stroke-dasharray:6 4;animation:aiflow 2.2s linear infinite 1s}
        .aiout1{stroke-dasharray:6 4;animation:aiflow 2.8s linear infinite 0.3s}
        .aiout2{stroke-dasharray:6 4;animation:aiflow 2.4s linear infinite 0.8s}
        .aiout3{stroke-dasharray:6 4;animation:aiflow 3s linear infinite 1.4s}
        .aieng{animation:aipulse 2.5s ease-in-out infinite;transform-origin:160px 100px}
        .aibl1{animation:aiblink 1.8s ease-in-out infinite}
        .aibl2{animation:aiblink 2.4s ease-in-out infinite 0.6s}
        .aibl3{animation:aiblink 2s ease-in-out infinite 1.2s}
      `}</style>

      <rect width="320" height="200" fill="url(#aibg)"/>
      <g stroke="rgba(92,61,158,0.07)" strokeWidth="0.5" fill="none">
        {Array.from({length:11},(_,i)=><line key={`h${i}`} x1="0" y1={i*20} x2="320" y2={i*20}/>)}
        {Array.from({length:17},(_,i)=><line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="200"/>)}
      </g>

      {/* Engine glow */}
      <circle cx="160" cy="100" r="36" fill="url(#aicore)"/>

      {/* Engine box */}
      <rect x="126" y="80" width="68" height="40" rx="4" fill="rgba(8,5,16,0.95)" stroke="#7c5cbf" strokeWidth="1.5" className="aieng"/>
      <text x="160" y="96" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9c7ce0" letterSpacing="0.08em">INTELLIGENCE</text>
      <text x="160" y="108" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9c7ce0" letterSpacing="0.08em">ENGINE</text>
      <circle cx="147" cy="114" r="2" fill="#7c5cbf" className="aibl1"/>
      <circle cx="155" cy="114" r="2" fill="#5c3d9e" className="aibl2"/>
      <circle cx="163" cy="114" r="2" fill="#7c5cbf" className="aibl3"/>

      {/* INPUT boxes */}
      {[
        {x:12, y:28, label:"MARKET DATA", sub:"12 streams", line:[84,43,126,88]},
        {x:12, y:87, label:"REGULATORY",  sub:"live feeds",  line:[84,100,126,100]},
        {x:12, y:146,label:"NETWORK",     sub:"400+ signals",line:[84,157,126,113]},
      ].map((b,i)=>(
        <g key={i}>
          <rect x={b.x} y={b.y} width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(124,92,191,0.5)" strokeWidth="1"/>
          <text x={b.x+36} y={b.y+12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#7c5cbf">{b.label}</text>
          <text x={b.x+36} y={b.y+21} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#4a3a72">{b.sub}</text>
          <line x1={b.line[0]} y1={b.line[1]} x2={b.line[2]} y2={b.line[3]} stroke="#7c5cbf" strokeWidth="1" opacity="0.5" className={`aifl${i+1}`}/>
        </g>
      ))}

      {/* OUTPUT boxes */}
      {[
        {x:236, y:28,  label:"ENTRY STRATEGY",  sub:"output →", line:[194,88,236,43]},
        {x:236, y:87,  label:"COMPLIANCE MAP",  sub:"output →", line:[194,100,236,100]},
        {x:236, y:146, label:"INTEL RETAINER",  sub:"output →", line:[194,113,236,157]},
      ].map((b,i)=>(
        <g key={i}>
          <rect x={b.x} y={b.y} width="72" height="26" rx="3" fill="rgba(8,5,16,0.85)" stroke="rgba(232,98,42,0.5)" strokeWidth="1"/>
          <text x={b.x+36} y={b.y+12} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#e8622a">{b.label}</text>
          <text x={b.x+36} y={b.y+21} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#7a3a1a">{b.sub}</text>
          <line x1={b.line[0]} y1={b.line[1]} x2={b.line[2]} y2={b.line[3]} stroke="#e8622a" strokeWidth="1" opacity="0.5" className={`aiout${i+1}`}/>
        </g>
      ))}

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

/* ═══════════════════════════════════════════════════════
   Card 3 — ANALYTICS: Live Dashboard
   Animated bars, trend line, KPI pills, live indicator
   ═══════════════════════════════════════════════════════ */
function AnalyticsVisual() {
  const bars = [
    {x:28, h:52, c:"#2d8a7a"},{x:60, h:80, c:"#e8622a"},
    {x:92, h:44, c:"#2d8a7a"},{x:124,h:108,c:"#e8622a"},
    {x:156,h:64, c:"#2d8a7a"},{x:188,h:92, c:"#e8622a"},
    {x:220,h:72, c:"#2d8a7a"},{x:252,h:116,c:"#e8622a"},
    {x:284,h:88, c:"#2d8a7a"},
  ];
  const base = 168;

  return (
    <svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="anbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050d0a"/>
          <stop offset="100%" stopColor="#091812"/>
        </linearGradient>
        <filter id="anline" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {bars.map((b,i)=>(
          <linearGradient key={i} id={`bg${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={b.c} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={b.c} stopOpacity="0.15"/>
          </linearGradient>
        ))}
      </defs>
      <style>{`
        @keyframes bargrow{0%{transform:scaleY(0)}100%{transform:scaleY(1)}}
        @keyframes linedraw{0%{stroke-dashoffset:400}100%{stroke-dashoffset:0}}
        @keyframes live{0%,100%{opacity:0.2}50%{opacity:1}}
        @keyframes pill{0%,100%{opacity:0.7}50%{opacity:1}}
        ${bars.map((_,i)=>`.bar${i}{animation:bargrow ${1.5+i*0.15}s ease-out both ${i*0.08}s;transform-origin:center bottom}`).join('\n')}
        .trend{stroke-dasharray:400;animation:linedraw 2.5s ease-out both 0.5s}
        .live{animation:live 1.2s ease-in-out infinite}
        .pill{animation:pill 3s ease-in-out infinite}
      `}</style>

      <rect width="320" height="200" fill="url(#anbg)"/>
      <g stroke="rgba(45,138,122,0.07)" strokeWidth="0.5" fill="none">
        {Array.from({length:11},(_,i)=><line key={`h${i}`} x1="0" y1={i*20} x2="320" y2={i*20}/>)}
        {Array.from({length:17},(_,i)=><line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="200"/>)}
      </g>

      {/* Axis */}
      <line x1="16" y1={base} x2="304" y2={base} stroke="rgba(45,138,122,0.3)" strokeWidth="0.8"/>
      {[0.25,0.5,0.75].map((f,i)=>(
        <line key={i} x1="16" y1={base-120*f} x2="304" y2={base-120*f} stroke="rgba(45,138,122,0.1)" strokeWidth="0.5" strokeDasharray="4 4"/>
      ))}

      {/* Bars */}
      {bars.map((b,i)=>(
        <rect key={i} x={b.x} y={base-b.h} width="20" height={b.h} fill={`url(#bg${i})`} rx="2" className={`bar${i}`}/>
      ))}

      {/* Trend line */}
      <polyline
        points={bars.map(b=>`${b.x+10},${base-b.h*0.88}`).join(' ')}
        fill="none" stroke="#3aafa0" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="trend" filter="url(#anline)"
      />
      <circle cx={252+10} cy={base-116*0.88} r="4" fill="#3aafa0"/>

      {/* KPI pills */}
      <rect x="8"   y="8" width="90" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(45,138,122,0.4)" strokeWidth="0.8" className="pill"/>
      <text x="14"  y="20" fontFamily="monospace" fontSize="7" fill="#3aafa0">Growth</text>
      <text x="90"  y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#3aafa0" fontWeight="bold">+34.2%</text>

      <rect x="104" y="8" width="68" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(232,98,42,0.3)" strokeWidth="0.8" className="pill"/>
      <text x="110" y="20" fontFamily="monospace" fontSize="7" fill="#e8622a">Risk</text>
      <text x="164" y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#e8622a" fontWeight="bold">LOW</text>

      <rect x="178" y="8" width="72" height="18" rx="3" fill="rgba(5,13,10,0.9)" stroke="rgba(45,138,122,0.4)" strokeWidth="0.8" className="pill"/>
      <text x="184" y="20" fontFamily="monospace" fontSize="7" fill="#3aafa0">Signal</text>
      <text x="242" y="20" textAnchor="end" fontFamily="monospace" fontSize="7" fill="#3aafa0" fontWeight="bold">BUY</text>

      <circle cx="262" cy="17" r="3.5" fill="#2d8a7a" className="live"/>
      <text x="270" y="21" fontFamily="monospace" fontSize="7" fill="#2d8a7a">LIVE</text>

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
    <section id="tech" style={{ background:"#f7f5f2", borderBottom:"1px solid #e0ddd6" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"88px 64px" }}>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:14 }}>Capabilities</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3.2vw,42px)", fontWeight:700, color:"#1a2420", marginBottom:14, maxWidth:500 }}>
          Intersectional Tech Capabilities
        </h2>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"#4a5a54", lineHeight:1.78, maxWidth:560, marginBottom:52 }}>
          We operate at the nexus of emerging technology and frontier markets, providing technical clarity for executive decision-making.
        </p>
        <div className="tech-grid-3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {TECH_CARDS.map(card => {
            const Visual = VISUALS[card.visual as keyof typeof VISUALS];
            return (
              <div key={card.title}
                style={{
                  background:"#fff",
                  border:"1px solid #e0ddd6",
                  borderTop:`3px solid #2d8a7a`,
                  borderRadius:3,
                  overflow:"hidden",
                  boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e=>{
                  const el=e.currentTarget as HTMLElement;
                  el.style.transform="translateY(-3px)";
                  el.style.boxShadow="0 12px 32px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={e=>{
                  const el=e.currentTarget as HTMLElement;
                  el.style.transform="";
                  el.style.boxShadow="0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{ height:180, overflow:"hidden", background:"#071410" }}><Visual/></div>
                <div style={{ padding:"22px 24px 28px" }}>
                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:8, fontWeight:600 }}>{card.tag}</p>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1a2420", marginBottom:8 }}>{card.title}</h3>
                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:14, color:"#4a5a54", lineHeight:1.7, marginBottom:14 }}>{card.description}</p>
                  <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                    {card.items.map(item=>(
                      <li key={item} style={{ fontFamily:"Inter,sans-serif", fontSize:13, color:"#888", padding:"4px 0", display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ width:3, height:3, borderRadius:"50%", background:"#2d8a7a", flexShrink:0 }}/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
