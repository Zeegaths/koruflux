"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const TABS = [
  { label:"Home", href:"#hero", icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 10.5L11 3l8 7.5V19a1 1 0 01-1 1H6a1 1 0 01-1-1v-8.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M8 20v-7h6v7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
  { label:"Services", href:"#services", icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg> },
  { label:"Pricing", href:"#pricing-anchor", icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/><path d="M11 7v1.5M11 13.5V15M8.5 9.5a2.5 2.5 0 015 0c0 1.5-1.5 2-2.5 2.5s-2.5 1-2.5 2.5a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg> },
  { label:"Contact", href:"#contact", icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M2 8l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <>
      {/* TOP NAV — white, clean */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:500,
        height:64, display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 64px",
        background:"#fff",
        borderBottom: scrolled ? "1px solid #e0ddd6" : "1px solid #e0ddd6",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition:"box-shadow 0.3s",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:18, fontWeight:700,
          color:"#1a2420", textDecoration:"none",
          letterSpacing:"0.02em",
        }}>
          KORUFLUX
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop" style={{ display:"flex", gap:36, listStyle:"none" }}>
          {NAV_LINKS.map(l=>(
            <li key={l.label}>
              <Link href={l.href} style={{
                fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:500,
                letterSpacing:"0.12em", textTransform:"uppercase",
                color:"#888", textDecoration:"none", transition:"color .2s",
              }}
              onMouseEnter={e=>(e.currentTarget.style.color="#1a2420")}
              onMouseLeave={e=>(e.currentTarget.style.color="#888")}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div style={{ display:"flex", alignItems:"center", gap:20 }}>
          <Link href="#" className="nav-portal-desktop" style={{
            fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:500,
            letterSpacing:"0.12em", textTransform:"uppercase",
            color:"#888", textDecoration:"none",
          }}>Client Portal</Link>

          <Link href="#contact" style={{
            fontFamily:"Inter,sans-serif", fontSize:12, fontWeight:700,
            letterSpacing:"0.12em", textTransform:"uppercase",
            background:"#1a2420", color:"#fff",
            padding:"10px 22px", borderRadius:2, textDecoration:"none",
            transition:"background 0.2s",
          }}
          onMouseEnter={e=>(e.currentTarget.style.background="#2d8a7a")}
          onMouseLeave={e=>(e.currentTarget.style.background="#1a2420")}
          >Consult Now</Link>

          {/* Hamburger mobile */}
          <button className="nav-ham" onClick={()=>setMenuOpen(o=>!o)}
            style={{ display:"none", flexDirection:"column", gap:5, background:"none", border:"none", cursor:"pointer", padding:4 }}
            aria-label="Menu">
            <span style={{ display:"block", width:22, height:2, background:"#1a2420", borderRadius:2, transition:"all .25s", transform: menuOpen?"rotate(45deg) translateY(7px)":"none" }}/>
            <span style={{ display:"block", width:22, height:2, background: menuOpen?"transparent":"#1a2420", borderRadius:2, transition:"all .25s" }}/>
            <span style={{ display:"block", width:22, height:2, background:"#1a2420", borderRadius:2, transition:"all .25s", transform: menuOpen?"rotate(-45deg) translateY(-7px)":"none" }}/>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div style={{
        position:"fixed", top:64, left:0, right:0, zIndex:490,
        background:"#fff",
        borderBottom:"1px solid #e0ddd6",
        padding: menuOpen ? "20px 24px 24px" : "0 24px",
        maxHeight: menuOpen ? 400 : 0,
        overflow:"hidden",
        transition:"max-height 0.32s ease, padding 0.32s ease",
        display:"flex", flexDirection:"column",
      }}>
        {NAV_LINKS.map(l=>(
          <Link key={l.label} href={l.href} onClick={()=>setMenuOpen(false)} style={{
            fontFamily:"Inter,sans-serif", fontSize:16, fontWeight:500,
            letterSpacing:"0.08em", textTransform:"uppercase",
            color:"#1a2420", textDecoration:"none",
            padding:"13px 0", borderBottom:"1px solid #e0ddd6", display:"block",
          }}>{l.label}</Link>
        ))}
        <div style={{ marginTop:18 }}>
          <Link href="#contact" onClick={()=>setMenuOpen(false)} style={{
            display:"block", textAlign:"center",
            fontFamily:"Inter,sans-serif", fontSize:14, fontWeight:700,
            letterSpacing:"0.12em", textTransform:"uppercase",
            background:"#1a2420", color:"#fff",
            padding:"14px", borderRadius:2, textDecoration:"none",
          }}>Consult Now</Link>
        </div>
      </div>

      {/* MOBILE BOTTOM TAB BAR */}
      <div className="mobile-bottom-nav" style={{
        display:"none",
        position:"fixed", bottom:0, left:0, right:0, zIndex:600,
        height:66, background:"#fff",
        borderTop:"1px solid #e0ddd6",
        alignItems:"center", justifyContent:"space-around", padding:"0 8px",
      }}>
        {TABS.map(tab=>{
          const isActive = activeTab === tab.label;
          return (
            <a key={tab.label} href={tab.href} onClick={()=>setActiveTab(tab.label)} style={{
              display:"flex", flexDirection:"column", alignItems:"center",
              gap:4, padding:"8px 16px", textDecoration:"none",
              color: isActive ? "#2d8a7a" : "#aaa",
              transition:"color 0.2s", flex:1,
            }}>
              {tab.icon}
              <span style={{ fontFamily:"Inter,sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase", lineHeight:1 }}>{tab.label}</span>
              {isActive && <div style={{ width:4, height:4, borderRadius:"50%", background:"#2d8a7a", marginTop:1 }}/>}
            </a>
          );
        })}
      </div>
    </>
  );
}
