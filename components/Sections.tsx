"use client";
import Link from "next/link";
import { useState } from "react";
import { SERVICES, ENGAGEMENTS, CTA, FOOTER_LINKS } from "@/lib/constants";

/* ── SERVICES ── */
export function Services() {
  return (
    <section id="services" style={{ background: "#f7f5f2", borderBottom: "1px solid #e0ddd6" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "88px 64px" }}>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:14 }}>What We Do</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3.2vw,42px)", fontWeight:700, color:"#1a2420", marginBottom:14, maxWidth:500 }}>
          Market Entry Operations
        </h2>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"#4a5a54", lineHeight:1.78, maxWidth:500, marginBottom:52 }}>
          You don&apos;t waste months on basics. Foundations are laid in days, with integrated compliance, AI, and network access across every target jurisdiction.
        </p>
        <div className="services-grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          {SERVICES.map(s => (
            <div key={s.num} style={{
              padding: "36px",
              background: "#fff",
              border: "1px solid #e0ddd6",
              borderTop: `3px solid ${s.highlight ? "#2d8a7a" : "#e8622a"}`,
              borderRadius: 3,
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "none"; el.style.transform = ""; }}
            >
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.16em", color:"#aaa", marginBottom:18, textTransform:"uppercase" }}>{s.num}</p>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1a2420", marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:15, color:"#4a5a54", lineHeight:1.72, marginBottom:20 }}>{s.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontFamily:"Inter,sans-serif", fontSize:11, color:"#2d8a7a", border:"1px solid rgba(45,138,122,0.22)", borderRadius:2, padding:"3px 10px", background:"rgba(45,138,122,0.04)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ENGAGEMENTS ── */
export function Engagements() {
  const [selected, setSelected] = useState(1);
  return (
    <section id="pricing-anchor" style={{ background: "#fff", borderBottom: "1px solid #e0ddd6" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "88px 64px" }}>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:14 }}>Pricing</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,3.2vw,42px)", fontWeight:700, color:"#1a2420", marginBottom:14, maxWidth:500 }}>
          Engagement Models
        </h2>
        <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"#4a5a54", lineHeight:1.78, maxWidth:500, marginBottom:52 }}>
          We work with Web3 protocols, DeFi platforms, and RWA projects past the early stage and actively planning global expansion.
        </p>
        <div className="eng-grid-3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {ENGAGEMENTS.map((e, i) => {
            const isSel = selected === i;
            return (
              <div key={e.title}
                onClick={() => setSelected(i)}
                style={{
                  padding: "36px 30px",
                  background: isSel ? "#071410" : "#fff",
                  border: `1px solid ${isSel ? "#071410" : "#e0ddd6"}`,
                  borderTop: `3px solid ${isSel ? "#2d8a7a" : "#e0ddd6"}`,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: isSel ? "0 16px 48px rgba(7,20,16,0.18)" : "none",
                  transform: isSel ? "translateY(-4px)" : "none",
                  position: "relative",
                }}
                onMouseEnter={e2 => { if (!isSel) { const el = e2.currentTarget as HTMLElement; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.07)"; el.style.transform = "translateY(-2px)"; }}}
                onMouseLeave={e2 => { if (!isSel) { const el = e2.currentTarget as HTMLElement; el.style.boxShadow = "none"; el.style.transform = ""; }}}
              >
                {"featuredLabel" in e && (
                  <div style={{ position:"absolute", top:-12, left:20, background:"#2d8a7a", color:"#fff", fontFamily:"Inter,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"4px 12px", borderRadius:2 }}>
                    {(e as {featuredLabel:string}).featuredLabel}
                  </div>
                )}
                <p style={{ fontFamily:"'Playfair Display',serif", fontSize:38, fontWeight:700, color: isSel ? "#fff" : "#1a2420", marginBottom:4, lineHeight:1 }}>{e.price}</p>
                <p style={{ fontFamily:"Inter,sans-serif", fontSize:12, color: isSel ? "#3aafa0" : "#aaa", marginBottom:22, letterSpacing:"0.06em" }}>{e.priceLabel}</p>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color: isSel ? "#fff" : "#1a2420", marginBottom:6 }}>{e.title}</h3>
                <p style={{ fontFamily:"Inter,sans-serif", fontSize:14, color: isSel ? "rgba(255,255,255,0.5)" : "#4a5a54", marginBottom:26, lineHeight:1.65 }}>{e.subtitle}</p>
                <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                  {e.features.map(f => (
                    <li key={f} style={{ fontFamily:"Inter,sans-serif", fontSize:14, color: isSel ? "rgba(255,255,255,0.78)" : "#4a5a54", padding:"9px 0", borderTop:`1px solid ${isSel ? "rgba(255,255,255,0.07)" : "#e0ddd6"}`, display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:4, height:4, borderRadius:"50%", background: isSel ? "#3aafa0" : "#2d8a7a", flexShrink:0 }}/>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop:26 }}>
                  <a href="#contact" style={{
                    display:"block", textAlign:"center",
                    fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700,
                    letterSpacing:"0.12em", textTransform:"uppercase",
                    background: isSel ? "#e8622a" : "transparent",
                    color: isSel ? "#fff" : "#1a2420",
                    border: isSel ? "none" : "1px solid #e0ddd6",
                    padding:"14px", borderRadius:2, textDecoration:"none",
                    transition:"all 0.2s",
                  }}>
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── CTA + CONTACT ── */
export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:"", company:"", email:"", service:"Entry Programme", message:"" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const inputStyle: React.CSSProperties = {
    width:"100%", padding:"12px 16px",
    fontFamily:"Inter,sans-serif", fontSize:15, color:"#1a2420",
    background:"#fff", border:"1px solid #e0ddd6",
    borderRadius:3, outline:"none",
    transition:"border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600,
    letterSpacing:"0.14em", textTransform:"uppercase",
    color:"#4a5a54", display:"block", marginBottom:7,
  };

  return (
    <>
      {/* Dark CTA strip */}
      <section id="cta" style={{ background:"#071410", padding:"80px 64px" }}>
        <div style={{ maxWidth:1160, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", gap:32, flexWrap:"wrap" }}>
          <div>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8622a", marginBottom:14 }}>Get Started</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,2.8vw,36px)", fontWeight:700, color:"#fff", marginBottom:12 }}>
              Ready to enter a new market?
            </h2>
            <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"rgba(255,255,255,0.75)", lineHeight:1.75, maxWidth:440 }}>
              Book a diagnostic session and get a clear entry roadmap in 48 hours.
            </p>
          </div>
          <a href="#contact" style={{ fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", background:"#e8622a", color:"#fff", padding:"16px 36px", borderRadius:2, textDecoration:"none", whiteSpace:"nowrap", flexShrink:0 }}>
            Book a Session
          </a>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" style={{ background:"#f7f5f2", borderTop:"1px solid #e0ddd6" }}>
        <div style={{ maxWidth:960, margin:"0 auto", padding:"88px 64px" }}>
          <div className="cta-form-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:64 }}>
            {/* Left info */}
            <div>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2d8a7a", marginBottom:14 }}>Get in Touch</p>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,2.8vw,36px)", fontWeight:700, color:"#1a2420", marginBottom:16 }}>
                Ready to Enter<br/>New Markets?
              </h2>
              <p style={{ fontFamily:"Inter,sans-serif", fontSize:16, color:"#4a5a54", lineHeight:1.78, marginBottom:40 }}>
                Our team reviews every inquiry personally and responds within 24 hours.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
                {[
                  { label:"Jurisdictions covered", val:"12+ globally" },
                  { label:"Avg. response time",    val:"Under 24 hours" },
                  { label:"Entry success rate",    val:"85% tracked" },
                ].map(item => (
                  <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:16 }}>
                    <div style={{ width:3, flexShrink:0, alignSelf:"stretch", background:"#2d8a7a", borderRadius:2, marginTop:4 }}/>
                    <div>
                      <p style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"#aaa", marginBottom:3 }}>{item.label}</p>
                      <p style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:600, color:"#1a2420" }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background:"#fff", border:"1px solid #e0ddd6", borderRadius:4, padding:"40px", boxShadow:"0 4px 24px rgba(0,0,0,0.05)" }}>
              {submitted ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ width:48, height:48, borderRadius:"50%", background:"rgba(45,138,122,0.08)", border:"1px solid #2d8a7a", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:22, color:"#2d8a7a" }}>✓</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#1a2420", marginBottom:10 }}>Message Sent</h3>
                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:15, color:"#4a5a54", lineHeight:1.7 }}>
                    Thank you. A member of our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    {[{key:"name",label:"Name",ph:"Your full name"},{key:"company",label:"Company",ph:"Your company"}].map(f => (
                      <div key={f.key}>
                        <label style={labelStyle}>{f.label}</label>
                        <input required placeholder={f.ph}
                          value={form[f.key as "name"|"company"]}
                          onChange={e => setForm(p => ({...p,[f.key]:e.target.value}))}
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor="#2d8a7a"; e.target.style.boxShadow="0 0 0 3px rgba(45,138,122,0.08)"; }}
                          onBlur={e => { e.target.style.borderColor="#e0ddd6"; e.target.style.boxShadow="none"; }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" required placeholder="you@company.com" value={form.email}
                      onChange={e => setForm(p => ({...p,email:e.target.value}))}
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor="#2d8a7a"; e.target.style.boxShadow="0 0 0 3px rgba(45,138,122,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor="#e0ddd6"; e.target.style.boxShadow="none"; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>I&apos;m interested in</label>
                    <select value={form.service} onChange={e => setForm(p => ({...p,service:e.target.value}))}
                      style={{ ...inputStyle, appearance:"none" as const, cursor:"pointer" }}>
                      <option>Diagnostic Session</option>
                      <option>Entry Programme</option>
                      <option>Intelligence Retainer</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Your goals</label>
                    <textarea required rows={4}
                      placeholder="Which markets are you targeting? What's your timeline?"
                      value={form.message} onChange={e => setForm(p => ({...p,message:e.target.value}))}
                      style={{ ...inputStyle, resize:"vertical" as const }}
                      onFocus={e => { e.target.style.borderColor="#2d8a7a"; e.target.style.boxShadow="0 0 0 3px rgba(45,138,122,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor="#e0ddd6"; e.target.style.boxShadow="none"; }}
                    />
                  </div>
                  <button type="submit" disabled={loading} style={{
                    fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700,
                    letterSpacing:"0.14em", textTransform:"uppercase",
                    background: loading ? "#ccc" : "#e8622a", color:"#fff",
                    padding:"15px", borderRadius:2, border:"none",
                    cursor: loading ? "wait" : "pointer",
                    marginTop:4,
                  }}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  <p style={{ fontFamily:"Inter,sans-serif", fontSize:12, color:"#aaa", textAlign:"center" }}>
                    We respond personally within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer style={{ background:"#fff", borderTop:"1px solid #e0ddd6", padding:"28px 64px" }}>
      <div className="footer-inner" style={{ maxWidth:1160, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontFamily:"Inter,sans-serif", fontSize:14, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#1a2420" }}>KORUFLUX</span>
        <span style={{ fontFamily:"Inter,sans-serif", fontSize:12, color:"#888" }}>© 2026 KoruFlux. All rights reserved.</span>
        <div className="footer-links" style={{ display:"flex", gap:24 }}>
          {["Privacy", "Terms"].map(l => (
            <Link key={l} href="#" style={{ fontFamily:"Inter,sans-serif", fontSize:12, letterSpacing:"0.08em", textTransform:"uppercase", color:"#666", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1a2420")}
              onMouseLeave={e => (e.currentTarget.style.color = "#666")}
            >{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
