"use client";
import Link from "next/link";
import { HERO } from "@/lib/constants";

function NairobiSkyline() {
  return (
    <svg viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      style={{ width:"100%", height:"100%", display:"block", position:"absolute", inset:0 }}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#030a08"/>
          <stop offset="60%"  stopColor="#071510"/>
          <stop offset="100%" stopColor="#0e2a20"/>
        </linearGradient>
        <radialGradient id="cityGlow" cx="65%" cy="85%" r="45%">
          <stop offset="0%"   stopColor="#2d8a7a" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="bldA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1c4038"/>
          <stop offset="100%" stopColor="#0e2420"/>
        </linearGradient>
        <linearGradient id="bldB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#224840"/>
          <stop offset="100%" stopColor="#102820"/>
        </linearGradient>
        <filter id="wg" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes wb1{0%,100%{opacity:.15}50%{opacity:.7}}
        @keyframes wb2{0%,100%{opacity:.25}50%{opacity:.9}}
        @keyframes wb3{0%,100%{opacity:.1}50%{opacity:.6}}
        @keyframes wb4{0%,100%{opacity:.3}50%{opacity:.95}}
        @keyframes carR{from{transform:translateX(-120px)}to{transform:translateX(1560px)}}
        @keyframes carL{from{transform:translateX(1560px)}to{transform:translateX(-120px)}}
        @keyframes heliB{0%,40%,60%,100%{opacity:0}48%,52%{opacity:1}}
        @keyframes glowP{0%,100%{opacity:.5}50%{opacity:.85}}
        .wa{animation:wb1 3.2s ease-in-out infinite}
        .wb{animation:wb2 4.8s ease-in-out infinite}
        .wc{animation:wb3 2.7s ease-in-out infinite}
        .wd{animation:wb4 5.6s ease-in-out infinite}
        .wa2{animation:wb1 3.2s ease-in-out infinite .65s}
        .wb2{animation:wb2 4.8s ease-in-out infinite 1.3s}
        .wc2{animation:wb3 2.7s ease-in-out infinite 1.9s}
        .wd2{animation:wb4 5.6s ease-in-out infinite 2.6s}
        .wa3{animation:wb1 3.2s ease-in-out infinite 1.1s}
        .wb3{animation:wb2 4.8s ease-in-out infinite .4s}
        .wc3{animation:wb3 2.7s ease-in-out infinite .9s}
        .wd3{animation:wb4 5.6s ease-in-out infinite 3.2s}
        .cr{animation:carR 10s linear infinite}
        .cr2{animation:carR 15s linear infinite 5s}
        .cl{animation:carL 12s linear infinite 2s}
        .cl2{animation:carL 18s linear infinite 8s}
        .hb{animation:heliB 2.6s ease-in-out infinite}
        .gp{animation:glowP 5s ease-in-out infinite}
      `}</style>

      <rect width="1440" height="700" fill="url(#sky)"/>
      <rect width="1440" height="700" fill="url(#cityGlow)"/>

      {/* Stars — subtle */}
      {[[80,45,0.3],[220,30,0.4],[380,55,0.28],[540,25,0.45],[700,40,0.32],
        [860,18,0.38],[1020,48,0.3],[1180,35,0.42],[1340,28,0.34],[450,75,0.36],
        [750,65,0.28],[1050,85,0.32],[330,110,0.38],[950,30,0.3],[200,60,0.36]
      ].map(([x,y,o],i)=>(
        <circle key={i} cx={x} cy={y} r="0.8" fill="white" opacity={o}/>
      ))}

      {/* Ngong Hills */}
      <path d="M0 390 Q180 320 380 340 Q580 360 760 305 Q940 258 1120 318 Q1300 360 1440 330 L1440 700 L0 700Z"
        fill="#081410" opacity="0.7"/>

      {/* Background city layer */}
      <g opacity="0.22" fill="#0d2820">
        {[0,70,140,210,280,360,440,520,610,700,800,900,1000,1100,1200,1310].map((x,i)=>(
          <rect key={i} x={x} y={[425,395,368,405,348,373,358,382,362,398,372,352,382,368,392,362][i]}
            width={[44,30,54,34,64,40,50,38,58,42,48,54,34,44,40,54][i]}
            height={280}/>
        ))}
      </g>

      {/* Mid buildings */}
      <g fill="#0f2822">
        <rect x="0"    y="482" width="78"  height="218"/>
        <rect x="84"   y="452" width="58"  height="248"/>
        <rect x="148"  y="422" width="68"  height="278"/>
        <rect x="222"  y="462" width="48"  height="238"/>
        <rect x="276"  y="392" width="88"  height="308"/>
        <rect x="1062" y="452" width="54"  height="248"/>
        <rect x="1122" y="422" width="68"  height="278"/>
        <rect x="1198" y="462" width="48"  height="238"/>
        <rect x="1254" y="402" width="78"  height="298"/>
        <rect x="1340" y="442" width="58"  height="258"/>
        <rect x="1404" y="472" width="38"  height="228"/>
      </g>

      {/* Left CBD buildings */}
      <rect x="398"  y="492" width="54" height="208" fill="#0e2620"/>
      <rect x="456"  y="472" width="42" height="228" fill="#0f2a24"/>
      <rect x="502"  y="452" width="50" height="248" fill="#0e2822"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[410,424,438].map((x,i)=>[0,1,2,3,4].map(r=>(
          <rect key={`s${i}${r}`} x={x} y={502+r*26} width="7" height="10" rx="1"
            className={["wa","wb","wc","wd","wa2"][r]}/>
        )))}
        {[464,478].map((x,i)=>[0,1,2,3,4,5].map(r=>(
          <rect key={`t${i}${r}`} x={x} y={482+r*26} width="7" height="10" rx="1"
            className={["wb","wc","wa2","wd2","wc2","wb2"][r]}/>
        )))}
      </g>

      {/* Anniversary-style towers */}
      <rect x="558" y="342" width="38" height="358" rx="3" fill="url(#bldA)"/>
      <ellipse cx="577" cy="342" rx="19" ry="7" fill="#1e4240"/>
      <ellipse cx="577" cy="336" rx="12" ry="4" fill="#224a44"/>
      <rect x="600" y="360" width="34" height="340" rx="3" fill="#183c34"/>
      <ellipse cx="617" cy="360" rx="17" ry="6" fill="#1c3e38"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[0,1,2,3,4,5,6,7,8].map(r=>[0,1].map(c=>(
          <rect key={`at${r}${c}`} x={564+c*14} y={356+r*28} width="7" height="10" rx="1"
            className={["wa","wb","wc","wd","wa2","wb2","wc2","wd2","wa3"][r]}/>
        )))}
      </g>

      {/* KICC — mushroom tower */}
      <radialGradient id="kg" cx="50%" cy="60%" r="50%">
        <stop offset="0%"   stopColor="#2d8a7a" stopOpacity="0.12"/>
        <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
      </radialGradient>
      <ellipse cx="748" cy="422" rx="98" ry="128" fill="url(#kg)" className="gp"/>
      <rect x="703" y="567" width="94"  height="133" fill="#163630"/>
      <rect x="698" y="554" width="104" height="16"  fill="#1a3c36"/>
      <rect x="713" y="277" width="70"  height="290" rx="3" fill="url(#bldB)"/>
      <ellipse cx="748" cy="275" rx="83" ry="18" fill="#1e4840"/>
      <ellipse cx="748" cy="270" rx="77" ry="13" fill="#224c46"/>
      <ellipse cx="748" cy="266" rx="59" ry="9"  fill="#285450"/>
      <ellipse cx="748" cy="263" rx="37" ry="5"  fill="#2d5c56"/>
      <line x1="748" y1="263" x2="748" y2="218" stroke="#3aafa0" strokeWidth="2.5" opacity="0.85"/>
      <circle cx="748" cy="217" r="3" fill="#5ecfbf" opacity="0.9"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[0,1,2,3,4,5,6,7,8].map(r=>[0,1,2,3].map(c=>(
          <rect key={`kw${r}${c}`} x={718+c*14} y={290+r*27} width="9" height="14" rx="1"
            className={["wb","wa","wc","wd","wb2","wa2","wc2","wb3","wa3"][r]}/>
        )))}
      </g>

      {/* Times Tower */}
      <rect x="878"  y="570" width="90"  height="130" fill="#1c4038"/>
      <rect x="884"  y="360" width="78"  height="210" fill="url(#bldB)"/>
      <rect x="890"  y="300" width="66"  height="62"  fill="#204840"/>
      <rect x="898"  y="250" width="50"  height="52"  fill="#244e48"/>
      <rect x="908"  y="207" width="32"  height="45"  fill="#285450"/>
      <rect x="884"  y="354" width="78"  height="8"   fill="#2d8a7a" opacity="0.35"/>
      <rect x="890"  y="294" width="66"  height="8"   fill="#2d8a7a" opacity="0.28"/>
      <line x1="924" y1="207" x2="924" y2="162" stroke="#3aafa0" strokeWidth="2"   opacity="0.75"/>
      <line x1="924" y1="162" x2="924" y2="134" stroke="#3aafa0" strokeWidth="1"   opacity="0.48"/>
      <circle cx="924" cy="133" r="2.8" fill="#e8622a" className="hb" filter="url(#sg)"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[0,1,2,3,4,5,6,7].map(r=>[0,1,2,3,4].map(c=>(
          <rect key={`tw${r}${c}`} x={889+c*14} y={368+r*22} width="10" height="14" rx="1"
            className={["wb","wa2","wc","wd","wb2","wa","wc2","wd3"][r]}/>
        )))}
      </g>

      {/* UAP tower */}
      <polygon points="998,700 1016,432 1046,432 1066,700" fill="#0e2620"/>
      <polygon points="1016,432 1031,322 1046,432"          fill="#122e28"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[0,1,2,3,4,5,6,7,8,9].map(r=>(
          <rect key={`uw${r}`} x={1018} y={442+r*22} width="26" height="14" rx="1"
            className={["wa","wc","wb2","wd","wa2","wc2","wb","wd2","wa3","wc3"][r]}/>
        ))}
      </g>

      {/* Modern glass tower */}
      <rect x="1076" y="422" width="62" height="278" fill="#0d2420"/>
      <rect x="1081" y="406" width="52" height="20"  fill="#102820"/>
      <g fill="#2d8a7a" filter="url(#wg)">
        {[0,1,2,3,4,5,6].map(r=>[0,1,2,3].map(c=>(
          <rect key={`gw${r}${c}`} x={1082+c*14} y={428+r*26} width="10" height="15" rx="1"
            className={["wb","wd","wa2","wc2","wb3","wa","wc3"][r]}/>
        )))}
      </g>

      {/* Ground + road */}
      <rect x="0" y="622" width="1440" height="78" fill="#060e0a"/>
      <rect x="0" y="622" width="1440" height="3"  fill="#0e2820"/>
      <rect x="0" y="658" width="1440" height="2"  fill="#0b2018" opacity="0.8"/>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(i=>(
        <rect key={`rd${i}`} x={i*80+20} y="659" width="44" height="1.5" fill="#2d8a7a" opacity="0.08"/>
      ))}

      {/* Acacia trees */}
      {[[278,614,29,24],[402,617,27,22],[702,620,31,25],[1122,616,27,22],[1232,618,25,20]].map(([x,y,r1,r2],i)=>(
        <g key={`tr${i}`}>
          <rect x={x+1} y={y} width="5" height="34" fill="#0a1e14"/>
          <ellipse cx={x+3.5} cy={y-2}  rx={r1} ry="9"   fill="#0e2c1e"/>
          <ellipse cx={x+3.5} cy={y-8}  rx={r2} ry="6.5" fill="#102e20"/>
          <ellipse cx={x+3.5} cy={y-14} rx={r2-6} ry="4" fill="#123222"/>
        </g>
      ))}

      {/* Cars */}
      <g className="cr">
        <ellipse cx="0"  cy="637" rx="6" ry="3.5" fill="#d4c090" opacity="0.8" filter="url(#wg)"/>
        <ellipse cx="22" cy="637" rx="6" ry="3.5" fill="#d4c090" opacity="0.8" filter="url(#wg)"/>
      </g>
      <g className="cl">
        <ellipse cx="1440" cy="668" rx="5" ry="3" fill="#e8622a" opacity="0.75" filter="url(#wg)"/>
        <ellipse cx="1418" cy="668" rx="5" ry="3" fill="#e8622a" opacity="0.75" filter="url(#wg)"/>
      </g>

      {/* Ambient city glow */}
      <ellipse cx="720" cy="662" rx="580" ry="38" fill="#2d8a7a" opacity="0.035"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{ height:"100vh", position:"relative", overflow:"hidden" }}>

      {/* Skyline background */}
      <div style={{ position:"absolute", inset:0, zIndex:1 }}>
        <NairobiSkyline/>
      </div>

      {/* Gradient overlay — stronger, cleaner, no green tint */}
      <div style={{
        position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
        background:"linear-gradient(105deg, rgba(5,12,9,0.97) 0%, rgba(5,12,9,0.92) 28%, rgba(5,12,9,0.72) 48%, rgba(5,12,9,0.25) 68%, rgba(5,12,9,0.04) 85%, transparent 100%)",
      }}/>

      {/* Bottom fade — blends into white sections below */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:200, zIndex:3, pointerEvents:"none",
        background:"linear-gradient(to bottom, transparent 0%, rgba(5,12,9,0.4) 50%, #ffffff 100%)",
      }}/>

      {/* Content */}
      <div style={{
        position:"relative", zIndex:10,
        display:"flex", flexDirection:"column", justifyContent:"center",
        height:"100%",
        paddingTop:64,
        padding:"64px 64px 0 72px",
        width:"55%",
      }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600,
          letterSpacing:"0.22em", textTransform:"uppercase",
          color:"#e8622a", marginBottom:20,
        }}>
          {HERO.eyebrow}
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:"clamp(52px,5.8vw,88px)",
          fontWeight:700, lineHeight:1.06,
          color:"#fff", marginBottom:24,
        }}>
          {HERO.headline.slice(0,-1).map((l,i)=>(
            <span key={i} style={{ display:"block" }}>{l}</span>
          ))}
          <span style={{ display:"block", color:"#2d8a7a" }}>
            {HERO.headline[HERO.headline.length-1]}
          </span>
        </h1>

        {/* Description */}
        <p style={{
          fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:300,
          color:"rgba(255,255,255,0.65)", lineHeight:1.8,
          maxWidth:520, marginBottom:36,
        }}>
          {HERO.description}
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
          <Link href={HERO.cta1.href} style={{
            fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700,
            letterSpacing:"0.14em", textTransform:"uppercase",
            background:"#e8622a", color:"#fff",
            padding:"14px 30px", borderRadius:2, textDecoration:"none",
            display:"inline-block",
          }}
          onMouseEnter={e=>(e.currentTarget.style.background="#f07540")}
          onMouseLeave={e=>(e.currentTarget.style.background="#e8622a")}
          >{HERO.cta1.label}</Link>

          <Link href={HERO.cta2.href} style={{
            fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:500,
            letterSpacing:"0.14em", textTransform:"uppercase",
            color:"rgba(255,255,255,0.85)",
            border:"1px solid rgba(255,255,255,0.28)",
            padding:"14px 30px", borderRadius:2, textDecoration:"none",
            display:"inline-block",
          }}
          onMouseEnter={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,0.7)")}
          onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,0.28)")}
          >{HERO.cta2.label}</Link>
        </div>

      </div>
    </section>
  );
}
