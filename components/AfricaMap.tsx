"use client";
import { useEffect, useRef } from "react";

const NODES = [
  { lon: -0.12,  lat: 51.5,   label: "LONDON",    color: "#1D9E75" },
  { lon: 55.3,   lat: 25.2,   label: "DUBAI",     color: "#e8622a" },
  { lon: 103.8,  lat: 1.35,   label: "SINGAPORE", color: "#1D9E75" },
  { lon: -46.6,  lat: -23.5,  label: "SÃO PAULO", color: "#e8622a" },
  { lon: -74.0,  lat: 40.7,   label: "NEW YORK",  color: "#1D9E75" },
  { lon: 72.8,   lat: 19.0,   label: "MUMBAI",    color: "#e8622a" },
];

export default function AfricaMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";

    const W = 320, H = 200;

    // Load D3 and topojson dynamically
    const loadScript = (src: string) =>
      new Promise<void>((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => res();
        s.onerror = rej;
        document.head.appendChild(s);
      });

    Promise.all([
      loadScript("https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"),
      loadScript("https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"),
    ]).then(() => {
      const d3 = (window as any).d3;
      const topojson = (window as any).topojson;
      if (!d3 || !ref.current) return;

      const svg = d3.select(ref.current).append("svg")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .attr("width", "100%")
        .attr("height", "100%")
        .style("background", "#040d09");

      const defs = svg.append("defs");
      const glow = defs.append("radialGradient").attr("id", "am-hubglow");
      glow.append("stop").attr("offset", "0%").attr("stop-color", "#1D9E75").attr("stop-opacity", "0.6");
      glow.append("stop").attr("offset", "100%").attr("stop-color", "#1D9E75").attr("stop-opacity", "0");

      defs.append("style").text(`
        @keyframes am-ring{0%{r:8;opacity:0.9}100%{r:28;opacity:0}}
        @keyframes am-ring2{0%{r:8;opacity:0.6}100%{r:28;opacity:0}}
        @keyframes am-hub{0%,100%{r:5.5}50%{r:8}}
        @keyframes am-np{0%,100%{r:3;opacity:0.5}50%{r:5;opacity:1}}
        @keyframes am-arc{0%{stroke-dashoffset:300}100%{stroke-dashoffset:0}}
        @keyframes am-blink{0%,100%{opacity:0.3}50%{opacity:1}}
        .am-r1{animation:am-ring 2.6s ease-out infinite}
        .am-r2{animation:am-ring2 2.6s ease-out infinite 0.9s}
        .am-hub{animation:am-hub 2s ease-in-out infinite}
        .am-n0{animation:am-np 2.8s ease-in-out infinite 0s}
        .am-n1{animation:am-np 3.2s ease-in-out infinite 0.4s}
        .am-n2{animation:am-np 2.5s ease-in-out infinite 0.8s}
        .am-n3{animation:am-np 3.5s ease-in-out infinite 1.2s}
        .am-n4{animation:am-np 2.2s ease-in-out infinite 1.6s}
        .am-n5{animation:am-np 3s ease-in-out infinite 2s}
        .am-a0{stroke-dasharray:8 5;animation:am-arc 3.2s linear infinite 0s}
        .am-a1{stroke-dasharray:8 5;animation:am-arc 3.8s linear infinite 0.6s}
        .am-a2{stroke-dasharray:8 5;animation:am-arc 4.2s linear infinite 1.1s}
        .am-a3{stroke-dasharray:8 5;animation:am-arc 3.5s linear infinite 1.7s}
        .am-a4{stroke-dasharray:8 5;animation:am-arc 2.9s linear infinite 0.3s}
        .am-a5{stroke-dasharray:8 5;animation:am-arc 4s linear infinite 0.9s}
        .am-bl{animation:am-blink 1.5s ease-in-out infinite}
      `);

      // Grid
      const grid = svg.append("g").attr("opacity", "0.1");
      for (let y = 20; y < H; y += 20)
        grid.append("line").attr("x1",0).attr("y1",y).attr("x2",W).attr("y2",y).attr("stroke","#1D9E75").attr("stroke-width","0.3");
      for (let x = 20; x < W; x += 20)
        grid.append("line").attr("x1",x).attr("y1",0).attr("x2",x).attr("y2",H).attr("stroke","#1D9E75").attr("stroke-width","0.3");

      const projection = d3.geoMercator()
        .center([20, 5])
        .scale(195)
        .translate([W / 2 - 10, H / 2 + 12]);

      const pathGen = d3.geoPath().projection(projection);
      const nairobi = [36.8, -1.3];
      const nXY = projection(nairobi);

      fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then(r => r.json())
        .then(world => {
          const countries = topojson.feature(world, world.objects.countries);

          // Africa country ids (ISO numeric)
          const africaIds = new Set([
            12,24,72,108,120,132,140,148,174,175,180,188,204,226,231,232,262,266,
            270,288,324,328,332,384,404,426,430,434,450,454,466,478,480,504,508,
            516,562,566,586,624,630,646,678,686,694,706,710,716,728,729,800,818,
            834,854,894
          ]);

          // Draw non-Africa countries very dim
          svg.append("g").selectAll("path")
            .data(countries.features.filter((f:any) => !africaIds.has(+f.id)))
            .join("path")
            .attr("d", pathGen)
            .attr("fill", "#060f0b")
            .attr("stroke", "#0a1f14")
            .attr("stroke-width", "0.4");

          // Draw Africa countries clearly
          svg.append("g").selectAll("path")
            .data(countries.features.filter((f:any) => africaIds.has(+f.id)))
            .join("path")
            .attr("d", pathGen)
            .attr("fill", "#0a2318")
            .attr("stroke", "#1D9E75")
            .attr("stroke-width", "0.7")
            .attr("opacity", "0.95");

          drawNetwork();
        })
        .catch(() => drawNetwork());

      function drawNetwork() {
        // Arcs
        NODES.forEach((n, i) => {
          const xy = projection([n.lon, n.lat]);
          if (!xy || !nXY) return;
          const mx = (nXY[0] + xy[0]) / 2;
          const my = (nXY[1] + xy[1]) / 2 - 45;
          svg.append("path")
            .attr("d", `M${nXY[0]} ${nXY[1]} Q${mx} ${my} ${xy[0]} ${xy[1]}`)
            .attr("fill", "none")
            .attr("stroke", n.color)
            .attr("stroke-width", "1.2")
            .attr("opacity", "0.75")
            .attr("class", `am-a${i}`);
        });

        // Hub glow
        svg.append("circle").attr("cx",nXY[0]).attr("cy",nXY[1]).attr("r",28).attr("fill","url(#am-hubglow)");
        svg.append("circle").attr("cx",nXY[0]).attr("cy",nXY[1]).attr("r",8).attr("fill","none").attr("stroke","#1D9E75").attr("stroke-width","2").attr("class","am-r1");
        svg.append("circle").attr("cx",nXY[0]).attr("cy",nXY[1]).attr("r",8).attr("fill","none").attr("stroke","#1D9E75").attr("stroke-width","1.5").attr("class","am-r2");

        // Nairobi dot
        svg.append("circle").attr("cx",nXY[0]).attr("cy",nXY[1]).attr("r",5.5).attr("fill","#04200f").attr("stroke","#1D9E75").attr("stroke-width","2").attr("class","am-hub");
        svg.append("circle").attr("cx",nXY[0]).attr("cy",nXY[1]).attr("r",2.5).attr("fill","#1D9E75");
        svg.append("text").attr("x",nXY[0]).attr("y",nXY[1]+13).attr("text-anchor","middle").attr("font-family","monospace").attr("font-size","7").attr("fill","#1D9E75").attr("font-weight","bold").attr("letter-spacing","0.08em").text("NAIROBI");

        // Remote nodes
        NODES.forEach((n, i) => {
          const xy = projection([n.lon, n.lat]);
          if (!xy) return;
          svg.append("circle").attr("cx",xy[0]).attr("cy",xy[1]).attr("r",3).attr("fill","#04200f").attr("stroke",n.color).attr("stroke-width","1.5").attr("class",`am-n${i}`);
          svg.append("circle").attr("cx",xy[0]).attr("cy",xy[1]).attr("r",1.5).attr("fill",n.color);
          const labelY = xy[1] < 30 ? xy[1] + 12 : xy[1] - 7;
          svg.append("text").attr("x",xy[0]).attr("y",labelY).attr("text-anchor","middle").attr("font-family","monospace").attr("font-size","6.5").attr("fill",n.color).attr("font-weight","bold").text(n.label);
        });

        // HUD
        svg.append("circle").attr("cx",14).attr("cy",14).attr("r",3).attr("fill","#1D9E75").attr("class","am-bl");
        svg.append("text").attr("x",21).attr("y",18).attr("font-family","monospace").attr("font-size","7").attr("fill","#1D9E75").text("LIVE · 6 NODES");
      }
    });

    return () => { if (ref.current) ref.current.innerHTML = ""; };
  }, []);

  return <div ref={ref} style={{ width:"100%", height:"100%", background:"#040d09" }}/>;
}
