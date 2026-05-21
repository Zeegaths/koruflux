"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

/* ── Mobile bottom tab bar items ── */
const TABS = [
  {
    label: "Home",
    href: "#hero",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 10.5L11 3l8 7.5V19a1 1 0 01-1 1H6a1 1 0 01-1-1v-8.5z"
          stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8 20v-7h6v7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Services",
    href: "#services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: "Pricing",
    href: "#pricing-anchor",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 7v1.5M11 13.5V15M8.5 9.5a2.5 2.5 0 015 0c0 1.5-1.5 2-2.5 2.5s-2.5 1-2.5 2.5a2.5 2.5 0 005 0"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 8l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── TOP NAV ─────────────────────────────────────────── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:500,
        height:62, display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 64px",
        background:"rgba(7,14,11,0.94)",
        backdropFilter:"blur(24px)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{ fontFamily:"Barlow,sans-serif", fontSize:19, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.04em", color:"#fff", textDecoration:"none" }}>
          Koru<span style={{ color:"var(--teal-500)" }}>Flux</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop" style={{ display:"flex", gap:34, listStyle:"none" }}>
          {NAV_LINKS.map(l=>(
            <li key={l.label}>
              <Link href={l.href}
                style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8c79", textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#ddeade")}
                onMouseLeave={e=>(e.currentTarget.style.color="#6b8c79")}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div style={{ display:"flex", alignItems:"center", gap:18 }}>
          <Link href="#" className="nav-portal-desktop"
            style={{ fontFamily:"Inter,sans-serif", fontSize:13, fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8c79", textDecoration:"none" }}>
            Client Portal
          </Link>
          <Link href="#contact" className="btn-nav">Consult Now</Link>

          {/* Hamburger (mobile only) */}
          <button className="nav-ham" onClick={()=>setMenuOpen(o=>!o)}
            style={{ display:"none", flexDirection:"column", gap:5, background:"none", border:"none", cursor:"pointer", padding:4 }}
            aria-label="Menu">
            <span style={{ display:"block", width:22, height:2, background: menuOpen?"var(--teal-400)":"#ddeade", borderRadius:2, transition:"all .25s", transform: menuOpen?"rotate(45deg) translateY(7px)":"none" }}/>
            <span style={{ display:"block", width:22, height:2, background: menuOpen?"transparent":"#ddeade", borderRadius:2, transition:"all .25s" }}/>
            <span style={{ display:"block", width:22, height:2, background: menuOpen?"var(--teal-400)":"#ddeade", borderRadius:2, transition:"all .25s", transform: menuOpen?"rotate(-45deg) translateY(-7px)":"none" }}/>
          </button>
        </div>
      </nav>

      {/* ── MOBILE SLIDE-DOWN DRAWER ─────────────────────────── */}
      <div style={{
        position:"fixed", top:62, left:0, right:0, zIndex:490,
        background:"rgba(7,14,11,0.98)", backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(255,255,255,0.08)",
        padding: menuOpen ? "20px 24px 24px" : "0 24px",
        maxHeight: menuOpen ? 400 : 0,
        overflow:"hidden",
        transition:"max-height 0.32s ease, padding 0.32s ease",
        display:"flex", flexDirection:"column", gap:0,
      }}>
        {NAV_LINKS.map(l=>(
          <Link key={l.label} href={l.href} onClick={()=>setMenuOpen(false)}
            style={{ fontFamily:"Inter,sans-serif", fontSize:17, fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase", color:"#ddeade", textDecoration:"none", padding:"13px 0", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"block" }}>
            {l.label}
          </Link>
        ))}
        <Link href="#" onClick={()=>setMenuOpen(false)}
          style={{ fontFamily:"Inter,sans-serif", fontSize:17, fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase", color:"#6b8c79", textDecoration:"none", padding:"13px 0", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"block" }}>
          Client Portal
        </Link>
        <div style={{ marginTop:18 }}>
          <Link href="#contact" onClick={()=>setMenuOpen(false)} className="btn-nav"
            style={{ display:"block", textAlign:"center", fontSize:15 }}>
            Consult Now
          </Link>
        </div>
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ───────────────────────────── */}
      <div className="mobile-bottom-nav" style={{
        display:"none",          /* shown via CSS on mobile */
        position:"fixed",
        bottom:0, left:0, right:0,
        zIndex:600,
        height:66,
        background:"rgba(7,14,11,0.96)",
        backdropFilter:"blur(24px)",
        WebkitBackdropFilter:"blur(24px)",
        borderTop:"1px solid rgba(255,255,255,0.08)",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"0 8px",
      }}>
        {TABS.map(tab=>{
          const isActive = activeTab === tab.label;
          return (
            <a key={tab.label} href={tab.href}
              onClick={()=>setActiveTab(tab.label)}
              style={{
                display:"flex", flexDirection:"column", alignItems:"center",
                gap:4, padding:"8px 16px",
                textDecoration:"none",
                color: isActive ? "var(--teal-400)" : "rgba(255,255,255,0.35)",
                transition:"color 0.2s",
                borderRadius:8,
                flex:1,
              }}>
              {tab.icon}
              <span style={{
                fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600,
                letterSpacing:"0.06em", textTransform:"uppercase",
                lineHeight:1,
              }}>
                {tab.label}
              </span>
              {/* Active indicator dot */}
              {isActive && (
                <div style={{ width:4, height:4, borderRadius:"50%", background:"var(--teal-400)", boxShadow:"0 0 8px rgba(58,175,160,0.8)", marginTop:1 }}/>
              )}
            </a>
          );
        })}
      </div>
    </>
  );
}
