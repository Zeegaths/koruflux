"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { HERO } from "@/lib/constants";

function useParticles(ref: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!; let raf: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    type P = { x:number;y:number;r:number;vx:number;vy:number;alpha:number;life:number;maxLife:number;teal:boolean };
    const make = (init:boolean):P => ({ x:Math.random()*canvas.width, y:init?Math.random()*canvas.height:canvas.height+5, r:Math.random()*1.2+0.2, vx:(Math.random()-.5)*.2, vy:-(Math.random()*.28+.06), alpha:Math.random()*.4+.08, life:0, maxLife:Math.random()*300+180, teal:Math.random()<.25 });
    resize(); let ps = Array.from({length:80},()=>make(true));
    const loop=()=>{ ctx.clearRect(0,0,canvas.width,canvas.height); ps=ps.map(p=>{ p.life++;p.x+=p.vx;p.y+=p.vy; if(p.life>p.maxLife||p.y<-10)return make(false); const prog=p.life/p.maxLife,a=p.alpha*(prog<.1?prog/.1:prog>.8?(1-prog)/.2:1); ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=p.teal?`rgba(45,138,122,${a})`:`rgba(190,210,205,${a*.3})`;ctx.fill();return p;}); raf=requestAnimationFrame(loop); };
    window.addEventListener("resize",resize); loop();
    return()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[ref]);
}

function NairobiSkyline() {
  return (
    <svg viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      style={{width:"100%",height:"100%",display:"block",position:"absolute",inset:0}}>
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#030a08"/>
          <stop offset="50%"  stopColor="#071510"/>
          <stop offset="85%"  stopColor="#0e2a20"/>
          <stop offset="100%" stopColor="#091918"/>
        </linearGradient>
        <radialGradient id="hGlow" cx="65%" cy="80%" r="50%">
          <stop offset="0%"   stopColor="#2d8a7a" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="hGlow2" cx="50%" cy="60%" r="40%">
          <stop offset="0%"   stopColor="#2d8a7a" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="hbA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1c4038"/>
          <stop offset="100%" stopColor="#0e2420"/>
        </linearGradient>
        <linearGradient id="hbC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#224840"/>
          <stop offset="100%" stopColor="#102820"/>
        </linearGradient>
        <linearGradient id="hRoad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0c1e18"/>
          <stop offset="100%" stopColor="#060e0a"/>
        </linearGradient>
        <filter id="hwg" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="hsg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="hvL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#030a08" stopOpacity="0"/>
          <stop offset="100%" stopColor="#030a08" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <style>{`
        @keyframes hwb1{0%,100%{opacity:.18}50%{opacity:.78}}
        @keyframes hwb2{0%,100%{opacity:.28}50%{opacity:.92}}
        @keyframes hwb3{0%,100%{opacity:.12}50%{opacity:.65}}
        @keyframes hwb4{0%,100%{opacity:.35}50%{opacity:.98}}
        @keyframes hcarR{from{transform:translateX(-120px)}to{transform:translateX(1560px)}}
        @keyframes hcarL{from{transform:translateX(1560px)}to{transform:translateX(-120px)}}
        @keyframes hheliB{0%,35%,65%,100%{opacity:0}45%,55%{opacity:1}}
        @keyframes hcrane{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(18deg)}}
        @keyframes hglow{0%,100%{opacity:.55}50%{opacity:.9}}
        .hwa{animation:hwb1 3.2s ease-in-out infinite}
        .hwb{animation:hwb2 4.8s ease-in-out infinite}
        .hwc{animation:hwb3 2.7s ease-in-out infinite}
        .hwd{animation:hwb4 5.6s ease-in-out infinite}
        .hwa2{animation:hwb1 3.2s ease-in-out infinite .65s}
        .hwb2{animation:hwb2 4.8s ease-in-out infinite 1.3s}
        .hwc2{animation:hwb3 2.7s ease-in-out infinite 1.9s}
        .hwd2{animation:hwb4 5.6s ease-in-out infinite 2.6s}
        .hwa3{animation:hwb1 3.2s ease-in-out infinite 1.1s}
        .hwb3{animation:hwb2 4.8s ease-in-out infinite .4s}
        .hwc3{animation:hwb3 2.7s ease-in-out infinite .9s}
        .hwd3{animation:hwb4 5.6s ease-in-out infinite 3.2s}
        .hcr{animation:hcarR 9s linear infinite}
        .hcr2{animation:hcarR 14s linear infinite 5s}
        .hcl{animation:hcarL 11s linear infinite 2s}
        .hcl2{animation:hcarL 16s linear infinite 7.5s}
        .hhb{animation:hheliB 2.6s ease-in-out infinite}
        .hcn{animation:hcrane 10s ease-in-out infinite;transform-origin:100% 100%}
        .hsg{animation:hglow 5s ease-in-out infinite}
      `}</style>

      {/* Sky */}
      <rect width="1440" height="700" fill="url(#hSky)"/>
      <rect width="1440" height="700" fill="url(#hGlow)"/>
      <rect width="1440" height="700" fill="url(#hGlow2)"/>

      {/* Stars */}
      {([
        [80,45,1.0,0.35],[220,30,0.8,0.45],[380,55,1.1,0.30],[540,25,0.9,0.50],
        [700,40,0.8,0.38],[860,18,1.0,0.42],[1020,48,0.8,0.32],[1180,35,1.1,0.48],
        [1340,28,0.9,0.36],[150,90,0.7,0.44],[450,75,0.9,0.28],[750,65,0.8,0.52],
        [1050,85,1.0,0.33],[1280,70,0.7,0.40],[330,110,0.8,0.46],[650,50,0.6,0.30],
        [950,30,0.7,0.38],[1150,95,0.8,0.44],[100,130,0.9,0.36],[1400,50,0.7,0.32],
        [600,100,0.8,0.40],[900,80,1.0,0.35],[1300,40,0.7,0.42],[200,60,0.9,0.38],
      ] as [number,number,number,number][]).map(([x,y,r,o],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={o}/>
      ))}

      {/* Ngong Hills far background */}
      <path d="M0 380 Q120 310 320 330 Q520 350 700 300 Q880 260 1060 310 Q1240 350 1440 320 L1440 700 L0 700 Z"
        fill="#091815" opacity="0.8"/>

      {/* Background city layer */}
      <g opacity="0.28" fill="#0d2820">
        {[0,70,130,200,260,330,400,480,560,640,730,820,920,1020,1120,1220,1320].map((x,i)=>(
          <rect key={i} x={x} y={[420,390,365,400,345,370,355,380,360,395,370,350,380,365,390,360,375][i]}
            width={[45,30,55,35,65,40,50,38,60,42,48,55,35,45,40,55,38][i]}
            height={[280,310,335,300,355,330,345,320,340,305,330,350,320,335,310,340,325][i]}/>
        ))}
      </g>

      {/* === MID BUILDINGS === */}
      <g fill="#0f2822">
        <rect x="0"    y="480" width="80"  height="220"/>
        <rect x="85"   y="450" width="60"  height="250"/>
        <rect x="150"  y="420" width="70"  height="280"/>
        <rect x="225"  y="460" width="50"  height="240"/>
        <rect x="280"  y="390" width="90"  height="310"/>
        <rect x="1060" y="450" width="55"  height="250"/>
        <rect x="1120" y="420" width="70"  height="280"/>
        <rect x="1196" y="460" width="50"  height="240"/>
        <rect x="1252" y="400" width="80"  height="300"/>
        <rect x="1338" y="440" width="60"  height="260"/>
        <rect x="1402" y="470" width="40"  height="230"/>
      </g>

      {/* Small CBD buildings near KICC */}
      <rect x="400"  y="490" width="55" height="210" fill="#0e2620"/>
      <rect x="458"  y="470" width="42" height="230" fill="#0f2a24"/>
      <rect x="504"  y="450" width="50" height="250" fill="#0e2822"/>
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[410,424,438].map((x,i)=>[[0,1,2,3,4].map(r=>(
          <rect key={`s${i}${r}`} x={x} y={500+r*26} width="7" height="10" rx="1"
            className={["hwa","hwb","hwc","hwd","hwa2"][r]}/>
        ))])}
        {[466,480].map((x,i)=>[0,1,2,3,4,5].map(r=>(
          <rect key={`t${i}${r}`} x={x} y={480+r*26} width="7" height="10" rx="1"
            className={["hwb","hwc","hwa2","hwd2","hwc2","hwb2"][r]}/>
        )))}
        {[512,526].map((x,i)=>[0,1,2,3,4,5,6].map(r=>(
          <rect key={`u${i}${r}`} x={x} y={460+r*26} width="7" height="10" rx="1"
            className={["hwc","hwa","hwd","hwb2","hwc2","hwa3","hwb3"][r]}/>
        )))}
      </g>

      {/* Anniversary-style twin towers */}
      <rect x="560" y="340" width="38" height="360" rx="4" fill="url(#hbA)"/>
      <ellipse cx="579" cy="340" rx="19" ry="7" fill="#1e4240"/>
      <ellipse cx="579" cy="333" rx="12" ry="4" fill="#224a44"/>
      <rect x="602" y="358" width="34" height="342" rx="4" fill="#183c34"/>
      <ellipse cx="619" cy="358" rx="17" ry="6" fill="#1c3e38"/>
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7,8].map(r=>[0,1].map(c=>(
          <rect key={`at${r}${c}`} x={566+c*14} y={354+r*28} width="7" height="10" rx="1"
            className={["hwa","hwb","hwc","hwd","hwa2","hwb2","hwc2","hwd2","hwa3"][r]}/>
        )))}
        {[0,1,2,3,4,5,6,7].map(r=>[0,1].map(c=>(
          <rect key={`bt${r}${c}`} x={608+c*14} y={372+r*28} width="7" height="10" rx="1"
            className={["hwb","hwc","hwa3","hwd","hwb3","hwa","hwc3","hwd3"][r]}/>
        )))}
      </g>

      {/* Medium tower left of KICC */}
      <rect x="645" y="395" width="52" height="305" fill="#102a22"/>
      <rect x="650" y="378" width="42" height="20" fill="#132e26"/>
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7].map(r=>[0,1,2].map(c=>(
          <rect key={`ml${r}${c}`} x={651+c*14} y={402+r*28} width="9" height="12" rx="1"
            className={["hwa","hwc","hwb2","hwd","hwa3","hwc2","hwb","hwd2"][r]}/>
        )))}
      </g>

      {/* ═══════════════════════════════════════════════ */}
      {/* KICC — the mushroom tower                      */}
      {/* ═══════════════════════════════════════════════ */}
      <radialGradient id="hkg" cx="50%" cy="60%" r="50%">
        <stop offset="0%"   stopColor="#2d8a7a" stopOpacity="0.14"/>
        <stop offset="100%" stopColor="#2d8a7a" stopOpacity="0"/>
      </radialGradient>
      <ellipse cx="750" cy="420" rx="100" ry="130" fill="url(#hkg)" className="hsg"/>
      {/* Podium */}
      <rect x="705" y="565" width="95"  height="135" fill="#163630"/>
      <rect x="700" y="553" width="105" height="16"  fill="#1a3c36"/>
      <rect x="705" y="595" width="95"  height="3"   fill="#2d8a7a" opacity="0.2"/>
      {/* Shaft */}
      <rect x="715" y="275" width="70" height="290" rx="3" fill="url(#hbC)"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i=>(
        <rect key={`hkb${i}`} x="715" y={282+i*28} width="70" height="2" fill="#2d8a7a" opacity="0.18"/>
      ))}
      {/* Mushroom disc */}
      <ellipse cx="750" cy="273" rx="84" ry="18" fill="#1e4840"/>
      <ellipse cx="750" cy="268" rx="78" ry="13" fill="#224c46"/>
      <ellipse cx="750" cy="264" rx="60" ry="9"  fill="#285450"/>
      <ellipse cx="750" cy="261" rx="38" ry="5"  fill="#2d5c56"/>
      {/* Spire */}
      <line x1="750" y1="261" x2="750" y2="215" stroke="#3aafa0" strokeWidth="2.5" opacity="0.88"/>
      <circle cx="750" cy="214" r="3" fill="#5ecfbf" opacity="0.95"/>
      {/* KICC windows */}
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7,8].map(r=>[0,1,2,3].map(c=>(
          <rect key={`hkw${r}${c}`} x={720+c*14} y={288+r*27} width="9" height="14" rx="1"
            className={["hwb","hwa","hwc","hwd","hwb2","hwa2","hwc2","hwb3","hwa3"][r]}/>
        )))}
      </g>
      <g fill="#e8622a" filter="url(#hwg)" opacity="0.65">
        <rect x="720" y="342" width="9" height="14" rx="1" className="hwd2"/>
        <rect x="734" y="369" width="9" height="14" rx="1" className="hwa3"/>
        <rect x="748" y="315" width="9" height="14" rx="1" className="hwd3"/>
      </g>

      {/* Medium tower — KICC to Times */}
      <rect x="810" y="380" width="56" height="320" fill="#0f2822"/>
      <rect x="815" y="362" width="46" height="22"  fill="#122c24"/>
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7].map(r=>[0,1,2].map(c=>(
          <rect key={`hmr${r}${c}`} x={817+c*15} y={388+r*27} width="9" height="13" rx="1"
            className={["hwc","hwa2","hwb","hwd2","hwc2","hwb2","hwa","hwc3"][r]}/>
        )))}
      </g>

      {/* ═════════════════════════════════ */}
      {/* TIMES TOWER — tallest in E.Africa */}
      {/* ═════════════════════════════════ */}
      <rect x="880"  y="568" width="90"  height="132" fill="#1c4038"/>
      <rect x="886"  y="358" width="78"  height="210" fill="url(#hbC)"/>
      <rect x="892"  y="298" width="66"  height="62"  fill="#204840"/>
      <rect x="900"  y="248" width="50"  height="52"  fill="#244e48"/>
      <rect x="910"  y="205" width="32"  height="45"  fill="#285450"/>
      <rect x="886"  y="352" width="78"  height="8"   fill="#2d8a7a" opacity="0.38"/>
      <rect x="892"  y="292" width="66"  height="8"   fill="#2d8a7a" opacity="0.32"/>
      <rect x="900"  y="242" width="50"  height="6"   fill="#2d8a7a" opacity="0.26"/>
      <line x1="926" y1="205" x2="926" y2="160" stroke="#3aafa0" strokeWidth="2"   opacity="0.78"/>
      <line x1="926" y1="160" x2="926" y2="132" stroke="#3aafa0" strokeWidth="1"   opacity="0.5"/>
      <circle cx="926" cy="131" r="2.8" fill="#e8622a" className="hhb" filter="url(#hsg)"/>
      {/* Times windows */}
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7].map(r=>[0,1,2,3,4].map(c=>(
          <rect key={`htw${r}${c}`} x={891+c*14} y={366+r*22} width="10" height="14" rx="1"
            className={["hwb","hwa2","hwc","hwd","hwb2","hwa","hwc2","hwd3"][r]}/>
        )))}
        {[0,1,2,3].map(r=>[0,1,2,3].map(c=>(
          <rect key={`hts1${r}${c}`} x={897+c*14} y={306+r*13} width="10" height="11" rx="1"
            className={["hwd","hwb3","hwa2","hwc2"][r]}/>
        )))}
        {[0,1,2,3].map(r=>[0,1,2].map(c=>(
          <rect key={`hts2${r}${c}`} x={905+c*13} y={256+r*13} width="10" height="10" rx="1"
            className={["hwc2","hwa3","hwb","hwd2"][r]}/>
        )))}
      </g>
      <g fill="#e8622a" filter="url(#hwg)" opacity="0.62">
        <rect x="891" y="366" width="10" height="14" rx="1" className="hwd2"/>
        <rect x="919" y="388" width="10" height="14" rx="1" className="hwa3"/>
        <rect x="891" y="388" width="10" height="14" rx="1" className="hwb3"/>
      </g>
      {/* Crane */}
      <g className="hcn">
        <line x1="960" y1="205" x2="1040" y2="182" stroke="#3aafa0" strokeWidth="2.5" opacity="0.5"/>
        <line x1="960" y1="205" x2="920"  y2="218" stroke="#3aafa0" strokeWidth="1.8" opacity="0.35"/>
        <line x1="1040" y1="182" x2="1040" y2="226" stroke="#3aafa0" strokeWidth="1.2" opacity="0.35" strokeDasharray="5,3"/>
        <circle cx="1040" cy="226" r="2.5" fill="#3aafa0" opacity="0.5"/>
      </g>

      {/* UAP-style triangular tower */}
      <polygon points="1000,700 1018,430 1048,430 1068,700" fill="#0e2620"/>
      <polygon points="1018,430 1033,320 1048,430"          fill="#122e28"/>
      {[0,1,2,3,4].map(i=>(
        <line key={`hul${i}`} x1={1012+i*10} y1="430" x2={1011+i*11} y2="700"
          stroke="#2d8a7a" strokeWidth="0.5" opacity="0.12"/>
      ))}
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6,7,8,9].map(r=>(
          <rect key={`huw${r}`} x={1020} y={440+r*22} width="26" height="14" rx="1"
            className={["hwa","hwc","hwb2","hwd","hwa2","hwc2","hwb","hwd2","hwa3","hwc3"][r]}/>
        ))}
      </g>

      {/* Modern glass tower */}
      <rect x="1078" y="420" width="62"  height="280" fill="#0d2420"/>
      <rect x="1083" y="404" width="52"  height="20"  fill="#102820"/>
      {[0,1,2,3,4,5,6].map(i=>(
        <line key={`hcl${i}`} x1="1078" y1={420+i*28} x2="1140" y2={420+i*28}
          stroke="#2d8a7a" strokeWidth="0.5" opacity="0.15"/>
      ))}
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6].map(r=>[0,1,2,3].map(c=>(
          <rect key={`hgw${r}${c}`} x={1084+c*14} y={426+r*26} width="10" height="15" rx="1"
            className={["hwb","hwd","hwa2","hwc2","hwb3","hwa","hwc3"][r]}/>
        )))}
      </g>

      {/* Right CBD */}
      <rect x="1148" y="440" width="50" height="260" fill="#0e2420"/>
      <rect x="1204" y="460" width="44" height="240" fill="#0d2218"/>
      <rect x="1254" y="480" width="38" height="220" fill="#0c2016"/>
      <g fill="#2d8a7a" filter="url(#hwg)">
        {[0,1,2,3,4,5,6].map(r=>(
          <>
            <rect key={`hr1${r}`} x={1155} y={450+r*28} width="8" height="12" rx="1" className={["hwc","hwa2","hwb","hwd2","hwc2","hwa","hwb3"][r]}/>
            <rect key={`hr2${r}`} x={1167} y={450+r*28} width="8" height="12" rx="1" className={["hwd","hwb2","hwc3","hwa3","hwb","hwc","hwd3"][r]}/>
          </>
        ))}
        {[0,1,2,3,4,5].map(r=>(
          <>
            <rect key={`hr3${r}`} x={1210} y={470+r*28} width="8" height="12" rx="1" className={["hwa","hwc","hwb2","hwd","hwc2","hwb3"][r]}/>
            <rect key={`hr4${r}`} x={1222} y={470+r*28} width="8" height="12" rx="1" className={["hwb","hwd2","hwa2","hwc3","hwa3","hwd"][r]}/>
          </>
        ))}
      </g>

      {/* Ground */}
      <rect x="0" y="695" width="1440" height="5"  fill="#060e0a"/>
      <rect x="0" y="620" width="1440" height="80" fill="url(#hRoad)"/>
      <rect x="0" y="620" width="1440" height="3"  fill="#0e2820"/>
      <rect x="0" y="698" width="1440" height="3"  fill="#0e2820"/>
      <rect x="0" y="657" width="1440" height="3"  fill="#0b2018" opacity="0.9"/>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(i=>(
        <rect key={`hrd${i}`} x={i*80+20} y="658" width="45" height="1.5"
          fill="#2d8a7a" opacity="0.1"/>
      ))}

      {/* Acacia trees */}
      {([
        [275,612,30,25,18],[400,615,28,23,16],[700,618,32,26,19],
        [1120,614,28,23,0],[1230,616,26,21,15],[1380,618,24,20,0],
      ] as [number,number,number,number,number][]).map(([x,y,r1,r2,r3],i)=>(
        <g key={`htr${i}`}>
          <rect x={x+1} y={y} width="5" height="35" fill="#0a1e14"/>
          <ellipse cx={x+3.5} cy={y-2}  rx={r1} ry="9"  fill="#0e2c1e"/>
          <ellipse cx={x+3.5} cy={y-8}  rx={r2} ry="6.5" fill="#102e20"/>
          {r3>0&&<ellipse cx={x+3.5} cy={y-14} rx={r3} ry="4.5" fill="#123222"/>}
        </g>
      ))}

      {/* Moving cars */}
      <g className="hcr">
        <ellipse cx="0"   cy="636" rx="6" ry="3.5" fill="#d4c090" opacity="0.85" filter="url(#hwg)"/>
        <ellipse cx="22"  cy="636" rx="6" ry="3.5" fill="#d4c090" opacity="0.85" filter="url(#hwg)"/>
      </g>
      <g className="hcr2">
        <ellipse cx="0"   cy="633" rx="5" ry="3"   fill="#e8d0a0" opacity="0.75" filter="url(#hwg)"/>
        <ellipse cx="20"  cy="633" rx="5" ry="3"   fill="#e8d0a0" opacity="0.75" filter="url(#hwg)"/>
      </g>
      <g className="hcl">
        <ellipse cx="1440" cy="668" rx="5" ry="3"   fill="#e8622a" opacity="0.8"  filter="url(#hwg)"/>
        <ellipse cx="1418" cy="668" rx="5" ry="3"   fill="#e8622a" opacity="0.8"  filter="url(#hwg)"/>
      </g>
      <g className="hcl2">
        <ellipse cx="1440" cy="665" rx="4.5" ry="2.5" fill="#c44e1a" opacity="0.7" filter="url(#hwg)"/>
        <ellipse cx="1420" cy="665" rx="4.5" ry="2.5" fill="#c44e1a" opacity="0.7" filter="url(#hwg)"/>
      </g>

      {/* City ambient glow */}
      <ellipse cx="720" cy="660" rx="600" ry="40" fill="#2d8a7a" opacity="0.04"/>
    </svg>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticles(canvasRef);
  return (
    <section id="hero" style={{ minHeight:"100vh", paddingTop:62, position:"relative", overflow:"hidden", background:"var(--bg-page)" }}>
      {/* Full-width skyline as background */}
      <div style={{ position:"absolute", inset:0, zIndex:1, width:"100%", height:"100%" }}>
        <NairobiSkyline/>
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" style={{
        position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
        background:"linear-gradient(to right, rgba(7,14,11,0.98) 0%, rgba(7,14,11,0.92) 30%, rgba(7,14,11,0.65) 52%, rgba(7,14,11,0.2) 72%, rgba(7,14,11,0.05) 88%, transparent 100%)",
      }}/>

      {/* Particle canvas */}
      <canvas ref={canvasRef} id="hero-canvas" style={{ position:"absolute", inset:0, zIndex:3, pointerEvents:"none", width:"60%", height:"100%" }}/>

      {/* Text content */}
      <div className="hero-content-wrap" style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", justifyContent:"center", minHeight:"calc(100vh - 62px)", padding:"60px 64px 100px", maxWidth:640 }}>
        <div className="eyebrow anim-fade-up delay-100" style={{ marginBottom:30 }}>{HERO.eyebrow}</div>
        <h1 className="h-display hero-h1 anim-fade-up delay-250" style={{ fontSize:"clamp(47px,5.5vw,81px)", color:"var(--text-base)", marginBottom:26, lineHeight:0.95 }}>
          {HERO.headline.slice(0,-1).map((l,i)=><span key={i} style={{display:"block"}}>{l}</span>)}
          <span style={{ display:"block", color:"var(--teal-400)" }}>{HERO.headline[HERO.headline.length-1]}</span>
        </h1>
        <p className="hero-desc anim-fade-up delay-400" style={{ fontFamily:"Inter,sans-serif", fontSize:21, fontWeight:400, color:"#d4e8e0", lineHeight:1.72, maxWidth:480, marginBottom:42 }}>
          {HERO.description}
        </p>
        <div className="hero-btns-wrap anim-fade-up delay-550" style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap", marginBottom:52 }}>
          <Link href={HERO.cta1.href} className="btn-primary">{HERO.cta1.label}</Link>
          <Link href={HERO.cta2.href} className="btn-secondary">{HERO.cta2.label}</Link>
        </div>
        <div className="hero-tags-wrap anim-fade-up delay-700" style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {HERO.floatingTags.map(tag=>(
            <div key={tag} style={{ display:"inline-flex", alignItems:"center", gap:10, width:"fit-content" }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"var(--teal-500)", flexShrink:0 }}/>
              <span style={{ fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#8ab8a8" }}>{tag}</span>
            </div>
          ))}
        </div>
        <div className="anim-fade-up delay-700" style={{ display:"flex", alignItems:"center", gap:12, marginTop:52 }}>
          <div style={{ width:40, height:1, background:"var(--text-dim)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:"-100%", width:"100%", height:"100%", background:"var(--teal-500)", animation:"scrollSweep 2s ease-in-out infinite" }}/>
          </div>
          <span style={{ fontFamily:"Inter,sans-serif", fontSize:14, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--text-dim)" }}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
