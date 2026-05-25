import { SGP } from "@/lib/constants";

export function StrategicGrowthPartner() {
  return (
    <section id="sgp" style={{ background:"#fff", borderBottom:"1px solid #e0ddd6" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"88px 64px" }}>
        <div className="sgp-grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>

          {/* Image */}
          <div style={{ height:380, borderRadius:4, overflow:"hidden", position:"relative", border:"1px solid #e0ddd6" }}>
            <svg width="100%" height="100%" viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <rect width="480" height="380" fill="#1c1006"/>
              <radialGradient id="sgpglow" cx="50%" cy="25%" r="60%">
                <stop offset="0%" stopColor="#d97c2a" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#1c1006" stopOpacity="0"/>
              </radialGradient>
              <rect width="480" height="380" fill="url(#sgpglow)"/>
              <rect x="-10" y="108" width="185" height="14" rx="2" fill="#2e1c08"/>
              <rect x="175"  y="98"  width="162" height="14" rx="2" fill="#361e08"/>
              <rect x="345"  y="103" width="158" height="14" rx="2" fill="#2e1c08"/>
              {[5,32,56,78,104,128,156].map((x,i)=>(
                <rect key={i} x={x} y="122" width={[24,21,19,23,21,25,19][i]} height="138"
                  fill={["#8B2500","#C4500A","#7B3500","#D4680C","#9B4010","#B85A14","#7B3200"][i]}/>
              ))}
              {[175,203,227,253,284,308,336].map((x,i)=>(
                <rect key={i} x={x} y="112" width={[25,21,23,28,21,25,19][i]} height="148"
                  fill={["#5A1A00","#C87020","#8B4500","#D4841E","#6B3010","#B86010","#9B4808"][i]}/>
              ))}
              {[345,371,395,423,449,473].map((x,i)=>(
                <rect key={i} x={x} y="117" width={[23,21,25,23,21,20][i]} height="143"
                  fill={["#9B3500","#D46A10","#7B2800","#C45A0C","#8B4000","#B85010"][i]}/>
              ))}
              <ellipse cx="45"  cy="274" rx="40" ry="23" fill="#6B3A0A"/>
              <rect x="5"   y="251" width="80"  height="23" rx="4" fill="#6B3A0A"/>
              <ellipse cx="45"  cy="251" rx="40" ry="13" fill="#7B4A18"/>
              <ellipse cx="278" cy="278" rx="55" ry="30" fill="#633810"/>
              <rect x="223" y="248" width="110" height="30" rx="4" fill="#633810"/>
              <ellipse cx="278" cy="248" rx="55" ry="16" fill="#7B4A18"/>
              <rect x="0" y="295" width="480" height="85" fill="#130c04"/>
              <linearGradient id="sgpfade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c1006" stopOpacity="0"/>
                <stop offset="100%" stopColor="#0a0804" stopOpacity="0.95"/>
              </linearGradient>
              <rect width="480" height="380" fill="url(#sgpfade)"/>
            </svg>
            <div style={{ position:"absolute", top:16, left:16, background:"rgba(7,20,16,0.9)", border:"1px solid rgba(45,138,122,0.4)", borderRadius:2, padding:"5px 14px", fontFamily:"Inter,sans-serif", fontSize:11, letterSpacing:"0.16em", textTransform:"uppercase", color:"#2d8a7a", fontWeight:600 }}>
              {SGP.badge}
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:14 }}>{SGP.eyebrow}</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3.2vw,44px)", fontWeight:700, color:"#1a2420", marginBottom:14, lineHeight:1.12 }}>
              {SGP.title[0]}<br/>{SGP.title[1]}
            </h2>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:16 }}>
              {SGP.subtitle}
            </p>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"#4a5a54", lineHeight:1.78, marginBottom:0 }}>
              {SGP.body}
            </p>
            <div style={{ display:"flex", gap:48, marginTop:40 }}>
              {SGP.stats.map(s=>(
                <div key={s.label}>
                  <p style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:700, color:"#1a2420", lineHeight:1, marginBottom:6 }}>{s.value}</p>
                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"#aaa" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
