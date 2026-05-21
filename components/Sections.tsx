"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES, ENGAGEMENTS, CTA, FOOTER_LINKS } from "@/lib/constants";

/* ── SERVICES ── */
export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="eyebrow" style={{ marginBottom:14 }}>What We Do</div>
      <h2 className="h-section" style={{ fontSize:"clamp(31px,3.8vw,51px)", color:"#fff", marginBottom:14 }}>
        Market Entry Operations
      </h2>
      <p className="section-sub" style={{ color:"#a8c4ba" }}>
        You don&apos;t waste months on basics. Foundations are laid in days, with integrated compliance, AI, and network access across every target jurisdiction.
      </p>
      <div className="services-grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        {SERVICES.map(s=>(
          <div key={s.num} style={{
            padding:"28px 28px 32px",
            background: s.highlight ? "rgba(45,138,122,0.07)" : "rgba(10,22,18,0.55)",
            backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)",
            border: s.highlight ? "1px solid rgba(45,138,122,0.28)" : "1px solid rgba(255,255,255,0.07)",
            borderRadius:8,
            boxShadow: s.highlight ? "0 0 28px rgba(45,138,122,0.08)" : "0 6px 24px rgba(0,0,0,0.3)",
          }}>
            <div style={{ fontFamily:"Inter,sans-serif", fontSize:13, letterSpacing:"0.12em", color:"#3a5848", marginBottom:14, fontWeight:600 }}>{s.num}</div>
            <div style={{ width:36, height:36, background:"rgba(45,138,122,0.08)", border:"1px solid rgba(45,138,122,0.18)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {s.num==="01"&&<><circle cx="9" cy="9" r="7" stroke="var(--teal-500)" strokeWidth="1.2"/><path d="M9 5v4l2.5 2.5" stroke="var(--teal-500)" strokeWidth="1.2" strokeLinecap="round"/></>}
                {s.num==="02"&&<><rect x="2" y="2" width="6" height="6" rx="1" stroke="var(--teal-500)" strokeWidth="1.2"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="var(--teal-500)" strokeWidth="1.2"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="var(--teal-500)" strokeWidth="1.2"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="var(--teal-500)" strokeWidth="1.2"/></>}
                {s.num==="03"&&<path d="M9 2L16 6v6l-7 4-7-4V6l7-4z" stroke="var(--teal-500)" strokeWidth="1.2" strokeLinejoin="round"/>}
                {s.num==="04"&&<><path d="M2 9h14M9 2v14" stroke="var(--teal-500)" strokeWidth="1.2" strokeLinecap="round"/><circle cx="9" cy="9" r="3" stroke="var(--teal-500)" strokeWidth="1.2"/></>}
              </svg>
            </div>
            <h3 style={{ fontFamily:"Barlow,sans-serif", fontSize:21, fontWeight:800, color:"#fff", marginBottom:8 }}>{s.title}</h3>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:300, color:"#a8c0b8", lineHeight:1.7, marginBottom:14 }}>{s.description}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {s.tags.map(t=>(<span key={t} style={{ fontFamily:"Inter,sans-serif", fontSize:13, color:"#507060", border:"1px solid rgba(255,255,255,0.08)", borderRadius:2, padding:"2px 9px", letterSpacing:"0.04em" }}>{t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── ENGAGEMENTS — clickable with glow + smooth scale ── */
export function Engagements() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="pricing-anchor" className="eng-section" style={{ padding:"96px 64px", background:"rgba(6,12,10,0.7)", backdropFilter:"blur(8px)", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        @keyframes smoothSelect{0%{transform:scale(1)}50%{transform:scale(1.025)}100%{transform:scale(1)}}
        .eng-selected{animation:smoothSelect 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both}
      `}</style>
      <div className="eyebrow" style={{ marginBottom:14 }}>Pricing</div>
      <h2 className="h-section" style={{ fontSize:"clamp(31px,3.8vw,51px)", color:"#fff", marginBottom:14 }}>
        Engagement Models
      </h2>
      <p className="section-sub" style={{ color:"#a8c4ba" }}>
        Click a plan to explore it. We work with Web3 protocols, DeFi platforms, and RWA projects past the early stage and actively planning global expansion.
      </p>
      <div className="eng-grid-3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
        {ENGAGEMENTS.map((e,i)=>{
          const isSel = selected===i;
          return (
            <div key={e.title} id={isSel?"":""}
              onClick={()=>setSelected(i)}
              style={{
                padding:"28px 24px 32px",
                background: isSel
                  ? "rgba(20,45,38,0.75)"
                  : "rgba(10,22,18,0.6)",
                backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
                border: isSel
                  ? "1px solid rgba(45,138,122,0.55)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius:8,
                position:"relative",
                cursor:"pointer",
                transition:"border-color 0.25s, box-shadow 0.25s, background 0.25s, transform 0.2s",
                boxShadow: isSel
                  ? "0 0 0 1px rgba(45,138,122,0.35), 0 0 40px rgba(45,138,122,0.25), 0 0 80px rgba(45,138,122,0.08), 0 12px 48px rgba(0,0,0,0.6)"
                  : "0 6px 24px rgba(0,0,0,0.35)",
                transform: isSel ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={e2=>{
                if(!isSel){
                  const el=e2.currentTarget as HTMLElement;
                  el.style.borderColor="rgba(255,255,255,0.14)";
                  el.style.boxShadow="0 8px 32px rgba(0,0,0,0.45)";
                }
              }}
              onMouseLeave={e2=>{
                if(!isSel){
                  const el=e2.currentTarget as HTMLElement;
                  el.style.borderColor="rgba(255,255,255,0.07)";
                  el.style.boxShadow="0 6px 24px rgba(0,0,0,0.35)";
                }
              }}
            >
              {/* Top glow bar on selected */}
              {isSel&&(
                <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:"2px", background:"linear-gradient(to right, transparent, #3aafa0, transparent)", borderRadius:"0 0 2px 2px", boxShadow:"0 0 16px rgba(58,175,160,0.9), 0 0 32px rgba(58,175,160,0.4)" }}/>
              )}

              {"featuredLabel" in e&&(
                <div style={{ position:"absolute", top:-11, left:18, background:"var(--teal-500)", color:"#fff", fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"3px 12px", borderRadius:2 }}>
                  {(e as {featuredLabel:string}).featuredLabel}
                </div>
              )}

              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:39, fontWeight:800, color:"#fff", letterSpacing:"-0.03em", marginBottom:2 }}>{e.price}</div>
              <div style={{ fontFamily:"Inter,sans-serif", fontSize:14, color: isSel ? "var(--teal-400)" : "#3a5848", marginBottom:20, fontWeight:500 }}>{e.priceLabel}</div>
              <div style={{ fontFamily:"Barlow,sans-serif", fontSize:18, fontWeight:800, color:"#fff", marginBottom:4 }}>{e.title}</div>
              <div style={{ fontFamily:"Inter,sans-serif", fontSize:15, fontWeight:300, color:"#8ab0a4", marginBottom:22 }}>{e.subtitle}</div>
              <ul style={{ listStyle:"none" }}>
                {e.features.map(f=>(
                  <li key={f} style={{ fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:300, color: isSel ? "#d0e8e0" : "#a0b8b0", padding:"7px 0", borderTop:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:4, height:4, borderRadius:"50%", background: isSel ? "#3aafa0" : "var(--teal-500)", flexShrink:0, boxShadow: isSel?"0 0 6px rgba(58,175,160,0.9)":"none" }}/>
                    {f}
                  </li>
                ))}
              </ul>
              {isSel&&(
                <div style={{ marginTop:22 }}>
                  <a href="#contact" style={{ display:"block", textAlign:"center", fontFamily:"Inter,sans-serif", fontSize:15, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", background:"var(--orange-600)", color:"#fff", padding:"12px 20px", borderRadius:3, textDecoration:"none" }}>
                    Get Started with This Plan
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── CTA + CONTACT FORM ── */
export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:"", company:"", email:"", service:"Entry Programme", message:"" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(()=>{ setLoading(false); setSubmitted(true); }, 1400);
  };

  const inputStyle: React.CSSProperties = {
    width:"100%", padding:"11px 15px",
    fontFamily:"Inter,sans-serif", fontSize:17, fontWeight:300, color:"#fff",
    background:"rgba(10,22,18,0.7)",
    border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:4, outline:"none",
    transition:"border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="cta" className="cta-section-pad" style={{ padding:"96px 64px 80px", background:"rgba(6,12,10,0.8)", borderTop:"1px solid rgba(255,255,255,0.05)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", bottom:-150, left:"50%", transform:"translateX(-50%)", width:800, height:400, background:"radial-gradient(ellipse, rgba(45,138,122,0.08) 0%, transparent 65%)", pointerEvents:"none" }}/>

      <div style={{ textAlign:"center", marginBottom:72 }}>
        <div className="eyebrow" style={{ justifyContent:"center", marginBottom:14 }}>{CTA.eyebrow}</div>
        <h2 className="h-section" style={{ fontSize:"clamp(31px,3.8vw,55px)", color:"#fff", marginBottom:14 }}>
          {CTA.title[0]}<br/>{CTA.title[1]}
        </h2>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:19, color:"#a0bab2", lineHeight:1.72, maxWidth:520, margin:"0 auto" }}>
          {CTA.body}
        </p>
      </div>

      <div id="contact" className="cta-form-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:52, maxWidth:960, margin:"0 auto" }}>
        {/* Left */}
        <div>
          <h3 style={{ fontFamily:"Barlow,sans-serif", fontSize:25, fontWeight:800, color:"#fff", marginBottom:14, textTransform:"uppercase", lineHeight:1.1 }}>
            Ready to Enter<br/>New Markets?
          </h3>
          <p style={{ fontFamily:"Inter,sans-serif", fontSize:17, fontWeight:300, color:"#8ab0a4", lineHeight:1.72, marginBottom:36 }}>
            Our team reviews every inquiry personally and responds within 24 hours. A direct conversation about your expansion goals, no templates.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
            {[
              { icon:"◎", label:"Jurisdictions covered", val:"12+ globally" },
              { icon:"◈", label:"Avg. response time",    val:"Under 24 hours" },
              { icon:"◇", label:"Entry success rate",    val:"85% tracked" },
            ].map(item=>(
              <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                <div style={{ width:34, height:34, borderRadius:4, background:"rgba(45,138,122,0.08)", border:"1px solid rgba(45,138,122,0.18)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color:"var(--teal-400)", fontSize:16 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily:"Inter,sans-serif", fontSize:13, color:"#3a5848", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontFamily:"Barlow,sans-serif", fontSize:18, fontWeight:700, color:"#fff" }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ background:"rgba(10,22,18,0.6)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:10, padding:"34px 34px 38px", boxShadow:"0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
          {submitted ? (
            <div style={{ textAlign:"center", padding:"36px 0" }}>
              <div style={{ fontSize:39, marginBottom:14, color:"var(--teal-400)" }}>✓</div>
              <h4 style={{ fontFamily:"Barlow,sans-serif", fontSize:23, fontWeight:800, color:"#fff", marginBottom:10, textTransform:"uppercase" }}>Message Sent</h4>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:17, color:"#8ab0a4", lineHeight:1.7 }}>
                Thank you. A member of our team will be in touch within 24 hours to discuss your expansion goals.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                {[{key:"name",label:"Name",ph:"Your full name"},{key:"company",label:"Company",ph:"Your company"}].map(f=>(
                  <div key={f.key}>
                    <label style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a8070", display:"block", marginBottom:5 }}>{f.label}</label>
                    <input required placeholder={f.ph}
                      value={form[f.key as "name"|"company"]}
                      onChange={e=>setForm(p=>({...p,[f.key]:e.target.value}))}
                      style={inputStyle}
                      onFocus={e=>{(e.target as HTMLElement).style.borderColor="rgba(45,138,122,0.45)";(e.target as HTMLElement).style.boxShadow="0 0 0 3px rgba(45,138,122,0.07)"}}
                      onBlur={e=>{(e.target as HTMLElement).style.borderColor="rgba(255,255,255,0.1)";(e.target as HTMLElement).style.boxShadow="none"}}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a8070", display:"block", marginBottom:5 }}>Email</label>
                <input type="email" required placeholder="you@company.com" value={form.email}
                  onChange={e=>setForm(p=>({...p,email:e.target.value}))}
                  style={inputStyle}
                  onFocus={e=>{(e.target as HTMLElement).style.borderColor="rgba(45,138,122,0.45)";(e.target as HTMLElement).style.boxShadow="0 0 0 3px rgba(45,138,122,0.07)"}}
                  onBlur={e=>{(e.target as HTMLElement).style.borderColor="rgba(255,255,255,0.1)";(e.target as HTMLElement).style.boxShadow="none"}}
                />
              </div>
              <div>
                <label style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a8070", display:"block", marginBottom:5 }}>I&apos;m interested in</label>
                <select value={form.service} onChange={e=>setForm(p=>({...p,service:e.target.value}))}
                  style={{ ...inputStyle, appearance:"none" as const }}>
                  <option>Diagnostic Session — USD 5k</option>
                  <option>Entry Programme — USD 25k</option>
                  <option>Intelligence Retainer — Custom</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a8070", display:"block", marginBottom:5 }}>Your goals</label>
                <textarea required rows={4}
                  placeholder="Which markets are you targeting? What's your timeline? What's blocking you?"
                  value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))}
                  style={{ ...inputStyle, resize:"vertical" as const }}
                  onFocus={e=>{(e.target as HTMLElement).style.borderColor="rgba(45,138,122,0.45)";(e.target as HTMLElement).style.boxShadow="0 0 0 3px rgba(45,138,122,0.07)"}}
                  onBlur={e=>{(e.target as HTMLElement).style.borderColor="rgba(255,255,255,0.1)";(e.target as HTMLElement).style.boxShadow="none"}}
                />
              </div>
              <button type="submit" disabled={loading} style={{
                marginTop:4,
                fontFamily:"Inter,sans-serif", fontSize:15, fontWeight:700,
                letterSpacing:"0.1em", textTransform:"uppercase",
                background: loading ? "rgba(232,98,42,0.5)" : "var(--orange-600)",
                color:"#fff", padding:"14px 28px", borderRadius:3,
                border:"none", cursor: loading ? "wait" : "pointer",
                transition:"background 0.2s, transform 0.15s",
                boxShadow: loading ? "none" : "0 4px 18px rgba(232,98,42,0.28)",
              }}
                onMouseEnter={e=>{if(!loading)(e.target as HTMLElement).style.transform="translateY(-1px)"}}
                onMouseLeave={e=>{(e.target as HTMLElement).style.transform=""}}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:14, color:"#3a5848", textAlign:"center", marginTop:2 }}>
                We respond personally within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer style={{ padding:"24px 48px", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
      <div className="footer-inner" style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <span style={{ fontFamily:"Inter,sans-serif", fontSize:14, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2a4038" }}>
        Architectural Intelligence for Global Strategy
      </span>
      <div className="footer-links" style={{ display:"flex", gap:22 }}>
        {FOOTER_LINKS.map(l=>(
          <Link key={l} href="#" style={{ fontFamily:"Inter,sans-serif", fontSize:14, letterSpacing:"0.07em", textTransform:"uppercase", color:"#2a4038", textDecoration:"none", transition:"color 0.2s" }}>
            {l}
          </Link>
        ))}
      </div>
      </div>
    </footer>
  );
}
