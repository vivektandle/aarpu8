import React from 'react';

export default function TechnicalDrawing({ type, name }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
        TECHNICAL DRAWING
      </h2>

      <div className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden">
        
        {/* Subtle Architectural Grid Lines in SVG Background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Clean CAD Vector Drafting Cross-Section for each system type */}
        <div className="relative z-10 w-full max-w-xl mx-auto flex items-center justify-center py-4">
          
          {/* DRAWING 1: AP SLIDE 18 LUXORIA (Slim Interlock Sliding Cross-Section) */}
          {(type === 'luxoria' || !type) && (
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] stroke-[#111111] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Outer Frame Frame Outline */}
              <rect x="40" y="30" width="420" height="260" strokeWidth="2" strokeDasharray="none" />
              {/* Top Rail Recess */}
              <rect x="50" y="40" width="400" height="24" strokeWidth="1" fill="#FFFFFF" />
              <line x1="50" y1="52" x2="450" y2="52" strokeWidth="0.75" />
              
              {/* Bottom Track & Drainage */}
              <rect x="50" y="250" width="400" height="30" strokeWidth="1.5" fill="#FFFFFF" />
              <rect x="80" y="260" width="160" height="10" strokeWidth="1" />
              <rect x="260" y="260" width="160" height="10" strokeWidth="1" />
              <circle cx="160" cy="265" r="3" fill="#111111" />
              <circle cx="340" cy="265" r="3" fill="#111111" />

              {/* Left Fixed Glass Sash Profile */}
              <rect x="70" y="70" width="160" height="170" strokeWidth="1.5" fill="#FFFFFF" />
              <rect x="85" y="85" width="130" height="140" strokeWidth="1" fill="#F0F0F0" />
              {/* Double Glazing Glass Lines */}
              <line x1="90" y1="90" x2="90" y2="220" strokeWidth="2" />
              <line x1="98" y1="90" x2="98" y2="220" strokeWidth="2" />

              {/* Right Sliding Glass Sash Profile */}
              <rect x="250" y="70" width="160" height="170" strokeWidth="1.5" fill="#FFFFFF" />
              <rect x="265" y="85" width="130" height="140" strokeWidth="1" fill="#F0F0F0" />
              <line x1="270" y1="90" x2="270" y2="220" strokeWidth="2" />
              <line x1="278" y1="90" x2="278" y2="220" strokeWidth="2" />

              {/* 18mm Slim Interlock Center Spine */}
              <rect x="222" y="65" width="18" height="180" strokeWidth="2" fill="#FFFFFF" />
              <line x1="231" y1="65" x2="231" y2="245" strokeWidth="1" strokeDasharray="3 3" />
              {/* PA66 Thermal Break Chambers */}
              <rect x="225" y="110" width="12" height="20" strokeWidth="1" fill="#111111" />
              <rect x="225" y="170" width="12" height="20" strokeWidth="1" fill="#111111" />
            </svg>
          )}

          {/* DRAWING 2: AP SLIDE 19 GLISSAR (Heavy-Duty Sliding System Cross-Section) */}
          {type === 'glissar' && (
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] stroke-[#111111] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="30" y="20" width="440" height="280" strokeWidth="2" />
              <rect x="45" y="32" width="410" height="30" strokeWidth="1.5" fill="#FFFFFF" />
              
              {/* Heavy Duty Base Track */}
              <rect x="45" y="240" width="410" height="48" strokeWidth="2" fill="#FFFFFF" />
              {/* Quad Stainless Rollers */}
              <circle cx="150" cy="264" r="8" strokeWidth="1.5" />
              <circle cx="170" cy="264" r="8" strokeWidth="1.5" />
              <circle cx="330" cy="264" r="8" strokeWidth="1.5" />
              <circle cx="350" cy="264" r="8" strokeWidth="1.5" />

              {/* Heavy Sash Profile Left */}
              <rect x="65" y="68" width="180" height="165" strokeWidth="2" fill="#FFFFFF" />
              <rect x="80" y="82" width="150" height="137" strokeWidth="1" fill="#F0F0F0" />
              <line x1="88" y1="88" x2="88" y2="212" strokeWidth="2.5" />
              <line x1="98" y1="88" x2="98" y2="212" strokeWidth="2.5" />

              {/* Heavy Sash Profile Right */}
              <rect x="255" y="68" width="180" height="165" strokeWidth="2" fill="#FFFFFF" />
              <rect x="270" y="82" width="150" height="137" strokeWidth="1" fill="#F0F0F0" />
              <line x1="278" y1="88" x2="278" y2="212" strokeWidth="2.5" />
              <line x1="288" y1="88" x2="288" y2="212" strokeWidth="2.5" />

              {/* Reinforced 198mm Typhoon Interlock Spine */}
              <rect x="238" y="62" width="22" height="178" strokeWidth="2" fill="#FFFFFF" />
              <rect x="242" y="100" width="14" height="35" strokeWidth="1.5" fill="#111111" />
              <rect x="242" y="150" width="14" height="35" strokeWidth="1.5" fill="#111111" />
            </svg>
          )}

          {/* DRAWING 3: STANDARD LINE SWING 38 (Casement Window Hinged CAD Cross-Section) */}
          {type === 'swing38' && (
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] stroke-[#111111] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Outer Masonry Subframe */}
              <rect x="60" y="30" width="380" height="260" strokeWidth="2" />
              <rect x="75" y="45" width="350" height="230" strokeWidth="1" strokeDasharray="4 4" />

              {/* Casement Sash Frame */}
              <rect x="100" y="60" width="300" height="200" strokeWidth="2" fill="#FFFFFF" />
              
              {/* Glass Pocket 30mm Triple Glazing */}
              <rect x="120" y="80" width="260" height="160" strokeWidth="1" fill="#F0F0F0" />
              <line x1="130" y1="85" x2="130" y2="235" strokeWidth="2" />
              <line x1="138" y1="85" x2="138" y2="235" strokeWidth="2" />
              <line x1="146" y1="85" x2="146" y2="235" strokeWidth="2" />

              {/* Concealed Friction Hinges (Left) */}
              <rect x="80" y="75" width="18" height="40" strokeWidth="1.5" fill="#111111" />
              <rect x="80" y="205" width="18" height="40" strokeWidth="1.5" fill="#111111" />

              {/* 3-Point Perimeter Locking Pins (Right) */}
              <circle cx="410" cy="80" r="4" fill="#111111" />
              <circle cx="410" cy="160" r="4" fill="#111111" />
              <circle cx="410" cy="240" r="4" fill="#111111" />

              {/* Center Mullion / Sash Seal Gasket */}
              <rect x="92" y="60" width="8" height="200" strokeWidth="1" fill="#CCCCCC" />
              <rect x="400" y="60" width="8" height="200" strokeWidth="1" fill="#CCCCCC" />
            </svg>
          )}

          {/* DRAWING 4: STANDARD LINE CURTAIN WALL 34 (34mm Mullion Facade CAD Cross-Section) */}
          {type === 'curtainwall34' && (
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] stroke-[#111111] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Slender 34mm Vertical Mullion Spine */}
              <rect x="233" y="20" width="34" height="280" strokeWidth="2" fill="#FFFFFF" />
              <line x1="250" y1="20" x2="250" y2="300" strokeWidth="0.75" strokeDasharray="3 3" />

              {/* Mullion Internal Structural Depth Chambers (65-250mm) */}
              <rect x="238" y="50" width="24" height="60" strokeWidth="1" fill="#F0F0F0" />
              <rect x="238" y="130" width="24" height="60" strokeWidth="1" fill="#F0F0F0" />
              <rect x="238" y="210" width="24" height="60" strokeWidth="1" fill="#F0F0F0" />

              {/* Thermal Isolator Strip */}
              <rect x="238" y="115" width="24" height="10" strokeWidth="1" fill="#111111" />
              <rect x="238" y="195" width="24" height="10" strokeWidth="1" fill="#111111" />

              {/* Left Glass Facade Unit */}
              <rect x="40" y="60" width="180" height="200" strokeWidth="1.5" fill="#FFFFFF" />
              <line x1="50" y1="70" x2="50" y2="250" strokeWidth="2.5" />
              <line x1="60" y1="70" x2="60" y2="250" strokeWidth="2.5" />

              {/* Right Glass Facade Unit */}
              <rect x="280" y="60" width="180" height="200" strokeWidth="1.5" fill="#FFFFFF" />
              <line x1="440" y1="70" x2="440" y2="250" strokeWidth="2.5" />
              <line x1="450" y1="70" x2="450" y2="250" strokeWidth="2.5" />

              {/* Exterior Pressure Plate Cap */}
              <rect x="225" y="20" width="50" height="12" strokeWidth="1.5" fill="#111111" />
              <rect x="225" y="288" width="50" height="12" strokeWidth="1.5" fill="#111111" />
            </svg>
          )}

        </div>

        <div className="text-[11px] font-mono text-[#666666] tracking-wider uppercase text-center mt-2">
          Technical Cross-Section Specification Profile &bull; {name}
        </div>
      </div>
    </div>
  );
}
