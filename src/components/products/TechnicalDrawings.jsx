import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Lightbox from '../common/Lightbox';

/**
 * Technical CAD Drawings Section & Lightbox Inspector
 * Pure SVG CAD Blueprints and Real Profile Technical Drawings for Aarpu Systems
 */

// -------------------------------------------------------------------------
// CAD VECTOR DRAWINGS DATA FOR EACH SYSTEM
// -------------------------------------------------------------------------

function DrawLuxoriaCAD1() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer Track Profile */}
      <rect x="40" y="30" width="420" height="260" strokeWidth="2" />
      <rect x="50" y="40" width="400" height="24" strokeWidth="1" fill="#FFFFFF" />
      <rect x="50" y="250" width="400" height="30" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="80" y="260" width="160" height="10" strokeWidth="1" />
      <rect x="260" y="260" width="160" height="10" strokeWidth="1" />
      <circle cx="160" cy="265" r="3" fill="#171717" />
      <circle cx="340" cy="265" r="3" fill="#171717" />

      {/* Sash Profiles */}
      <rect x="70" y="70" width="160" height="170" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="85" y="85" width="130" height="140" strokeWidth="1" fill="#F7F7F7" />
      <line x1="90" y1="90" x2="90" y2="220" strokeWidth="2" />
      <line x1="98" y1="90" x2="98" y2="220" strokeWidth="2" />

      <rect x="250" y="70" width="160" height="170" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="265" y="85" width="130" height="140" strokeWidth="1" fill="#F7F7F7" />
      <line x1="270" y1="90" x2="270" y2="220" strokeWidth="2" />
      <line x1="278" y1="90" x2="278" y2="220" strokeWidth="2" />

      {/* 18mm Slim Interlock */}
      <rect x="222" y="65" width="18" height="180" strokeWidth="2" fill="#FFFFFF" />
      <rect x="225" y="110" width="12" height="20" strokeWidth="1" fill="#171717" />
      <rect x="225" y="170" width="12" height="20" strokeWidth="1" fill="#171717" />
    </svg>
  );
}

function DrawLuxoriaCAD2() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 18mm Interlock Spine Detail */}
      <rect x="190" y="30" width="120" height="260" fill="#F7F7F7" strokeWidth="2" />
      <rect x="230" y="70" width="40" height="20" fill="#171717" stroke="none" />
      <rect x="230" y="230" width="40" height="20" fill="#171717" stroke="none" />
      
      {/* Hook Profiles */}
      <path d="M140 50 H200 V270 H140 M190 120 H210 V200 H190" fill="#FFFFFF" strokeWidth="1.5" />
      <path d="M360 50 H300 V270 H360 M310 120 H290 V200 H310" fill="#FFFFFF" strokeWidth="1.5" />
      <circle cx="200" cy="160" r="4" fill="#FF393B" stroke="none" />
      <circle cx="300" cy="160" r="4" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawLuxoriaCAD3() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Perimeter Multi-point Lock Box */}
      <rect x="150" y="40" width="200" height="240" fill="#FFFFFF" strokeWidth="2" />
      <rect x="180" y="70" width="140" height="180" fill="#F7F7F7" strokeWidth="1.5" />
      <circle cx="250" cy="160" r="30" strokeWidth="2" />
      <line x1="250" y1="130" x2="250" y2="190" strokeWidth="2" />
      <line x1="220" y1="160" x2="280" y2="160" strokeWidth="2" />
      <rect x="320" y="100" width="25" height="30" rx="4" fill="#FF393B" stroke="none" />
      <rect x="320" y="190" width="25" height="30" rx="4" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawGlissarCAD1() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="20" width="440" height="280" strokeWidth="2" />
      <rect x="45" y="32" width="410" height="30" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="45" y="240" width="410" height="48" strokeWidth="2" fill="#FFFFFF" />
      
      {/* Quad Rollers */}
      <circle cx="150" cy="264" r="9" strokeWidth="1.5" />
      <circle cx="172" cy="264" r="9" strokeWidth="1.5" />
      <circle cx="328" cy="264" r="9" strokeWidth="1.5" />
      <circle cx="350" cy="264" r="9" strokeWidth="1.5" />

      {/* Sashes */}
      <rect x="65" y="68" width="180" height="165" strokeWidth="2" fill="#FFFFFF" />
      <rect x="255" y="68" width="180" height="165" strokeWidth="2" fill="#FFFFFF" />
      <rect x="238" y="62" width="22" height="178" strokeWidth="2" fill="#FFFFFF" />
    </svg>
  );
}

function DrawGlissarCAD2() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 198mm Reinforced Typhoon Interlock */}
      <rect x="130" y="30" width="240" height="260" fill="#F7F7F7" strokeWidth="2" />
      <rect x="170" y="70" width="160" height="30" fill="#171717" stroke="none" />
      <rect x="170" y="145" width="160" height="30" fill="#171717" stroke="none" />
      <rect x="170" y="220" width="160" height="30" fill="#171717" stroke="none" />
      <line x1="150" y1="30" x2="150" y2="290" stroke="#FF393B" strokeWidth="2.5" />
      <line x1="350" y1="30" x2="350" y2="290" stroke="#FF393B" strokeWidth="2.5" />
    </svg>
  );
}

function DrawGlissarCAD3() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cascading Drainage Chambers */}
      <rect x="80" y="40" width="340" height="240" fill="#FFFFFF" strokeWidth="2" />
      <rect x="120" y="80" width="110" height="160" fill="#F7F7F7" strokeWidth="1.5" />
      <rect x="250" y="120" width="110" height="120" fill="#F7F7F7" strokeWidth="1.5" />
      <circle cx="175" cy="200" r="8" fill="#FF393B" stroke="none" />
      <circle cx="305" cy="200" r="8" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawSwing38CAD1() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="60" y="30" width="380" height="260" strokeWidth="2" />
      <rect x="100" y="60" width="300" height="200" strokeWidth="2" fill="#FFFFFF" />
      <rect x="120" y="80" width="260" height="160" strokeWidth="1" fill="#F7F7F7" />
      <line x1="130" y1="85" x2="130" y2="235" strokeWidth="2" />
      <line x1="138" y1="85" x2="138" y2="235" strokeWidth="2" />
      <rect x="80" y="75" width="18" height="40" strokeWidth="1.5" fill="#171717" />
      <rect x="80" y="205" width="18" height="40" strokeWidth="1.5" fill="#171717" />
      <circle cx="410" cy="80" r="4" fill="#FF393B" />
      <circle cx="410" cy="160" r="4" fill="#FF393B" />
      <circle cx="410" cy="240" r="4" fill="#FF393B" />
    </svg>
  );
}

function DrawSwing38CAD2() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Friction Stay Scissor Arm Details */}
      <rect x="100" y="40" width="140" height="240" fill="#F7F7F7" strokeWidth="1.5" />
      <rect x="260" y="40" width="140" height="240" fill="#FFFFFF" strokeWidth="1.5" />
      <path d="M160 80 L330 140 M160 140 L330 80" strokeWidth="3" stroke="#171717" />
      <circle cx="245" cy="110" r="6" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawSwing38CAD3() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Triple EPDM Bulb Gaskets Detail */}
      <rect x="100" y="50" width="130" height="220" fill="#F7F7F7" strokeWidth="1.5" />
      <rect x="270" y="50" width="130" height="220" fill="#FFFFFF" strokeWidth="1.5" />
      <circle cx="250" cy="90" r="14" fill="#171717" stroke="none" />
      <circle cx="250" cy="160" r="14" fill="#171717" stroke="none" />
      <circle cx="250" cy="230" r="14" fill="#171717" stroke="none" />
      <circle cx="250" cy="90" r="5" fill="#FF393B" stroke="none" />
      <circle cx="250" cy="160" r="5" fill="#FF393B" stroke="none" />
      <circle cx="250" cy="230" r="5" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawCurtainWall34CAD1() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="233" y="20" width="34" height="280" strokeWidth="2" fill="#FFFFFF" />
      <rect x="238" y="50" width="24" height="60" strokeWidth="1" fill="#F7F7F7" />
      <rect x="238" y="130" width="24" height="60" strokeWidth="1" fill="#F7F7F7" />
      <rect x="238" y="210" width="24" height="60" strokeWidth="1" fill="#F7F7F7" />
      <rect x="238" y="115" width="24" height="10" strokeWidth="1" fill="#171717" />
      <rect x="40" y="60" width="180" height="200" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="280" y="60" width="180" height="200" strokeWidth="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function DrawCurtainWall34CAD2() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Pressure Plate & Snap Cover Cap */}
      <rect x="180" y="40" width="140" height="240" fill="#FFFFFF" strokeWidth="2" />
      <rect x="200" y="140" width="100" height="20" fill="#171717" stroke="none" />
      <rect x="190" y="100" width="120" height="35" rx="4" fill="#FF393B" stroke="none" />
    </svg>
  );
}

function DrawCurtainWall34CAD3() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Integrated Top-Hung Vent Profile Integration */}
      <rect x="100" y="30" width="300" height="260" fill="#F7F7F7" strokeWidth="1.5" />
      <rect x="120" y="50" width="260" height="220" fill="#FFFFFF" strokeWidth="2" />
      <line x1="120" y1="50" x2="380" y2="50" strokeWidth="4" stroke="#FF393B" />
      <rect x="140" y="70" width="220" height="180" fill="#E8F4F8" stroke="#171717" strokeWidth="1" />
    </svg>
  );
}

export default function TechnicalDrawings({ productId, name }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Map 3 technical drawings for each product
  const getDrawings = () => {
    switch (productId) {
      case 'ap-20-slide-rollup':
      case 'ap-slide-20-rollup':
        return [
          { title: "Technical Drawing 01", subtitle: "Heavy Rollup Bottom Track", Component: DrawGlissarCAD1 },
          { title: "Technical Drawing 02", subtitle: "20mm Slim Interlock Spine", Component: DrawLuxoriaCAD2 },
          { title: "Technical Drawing 03", subtitle: "Cascading Drainage Profile", Component: DrawGlissarCAD3 },
        ];
      case 'ap-19-slide-glissar':
      case 'ap-slide-19-glissar':
        return [
          { 
            title: "Technical Drawing 01", 
            subtitle: "Bottom Track Profile", 
            image: "/images/Technical_Drawings/AP 19 Bottom.jpg" 
          },
          { 
            title: "Technical Drawing 02", 
            subtitle: "Side Frame Profile", 
            image: "/images/Technical_Drawings/AP 19 Side.jpg" 
          },
          { 
            title: "Technical Drawing 03", 
            subtitle: "19mm Interlock Profile", 
            image: "/images/Technical_Drawings/AP 19 Interlock.jpeg" 
          },
        ];
      case 'ap-18-slide-luxoria':
      case 'ap-slide-18-luxoria':
        return [
          { 
            title: "Technical Drawing 01", 
            subtitle: "Bottom Track Profile", 
            image: "/images/Technical_Drawings/AP 18 Bottom.jpg" 
          },
          { 
            title: "Technical Drawing 02", 
            subtitle: "18mm Interlock Profile", 
            image: "/images/Technical_Drawings/AP 18 Interlock.jpg" 
          },
          { 
            title: "Technical Drawing 03", 
            subtitle: "Side Frame Profile", 
            image: "/images/Technical_Drawings/AP 18 Side.jpeg" 
          },
        ];
      case 'ap-17-slide-ecoshield':
      case 'ap-slide-17-ecoshield':
        return [
          { 
            title: "Technical Drawing 01", 
            subtitle: "Bottom Track Profile", 
            image: "/images/Technical_Drawings/AP 17 Bottom.jpg" 
          },
          { 
            title: "Technical Drawing 02", 
            subtitle: "17mm Interlock Profile", 
            image: "/images/Technical_Drawings/AP 17 Interlock.jpg" 
          },
          { 
            title: "Technical Drawing 03", 
            subtitle: "Side Frame Profile", 
            image: "/images/Technical_Drawings/AP 17 Side.jpg" 
          },
        ];
      case 'ap-47-swing-classic-line':
      case 'ap-swing-47-classic':
        return [
          { title: "Technical Drawing 01", subtitle: "47mm Heavy Frame Section", Component: DrawSwing38CAD1 },
          { title: "Technical Drawing 02", subtitle: "Concealed 3D Adjustable Hinge", Component: DrawSwing38CAD2 },
          { title: "Technical Drawing 03", subtitle: "Triple Perimeter Compression Gasket", Component: DrawSwing38CAD3 },
        ];
      case 'ap-38-swing-ecoshield':
      case 'standard-line-swing-38':
        return [
          { title: "Technical Drawing 01", subtitle: "Casement Frame & Sash Section", Component: DrawSwing38CAD1 },
          { title: "Technical Drawing 02", subtitle: "Concealed Scissor Stay Hinge", Component: DrawSwing38CAD2 },
          { title: "Technical Drawing 03", subtitle: "Triple EPDM Compression Seal", Component: DrawSwing38CAD3 },
        ];
      case 'ap-34-curtain-wall':
      case 'standard-line-curtain-wall-34':
        return [
          { title: "Technical Drawing 01", subtitle: "34mm Slender Mullion Profile", Component: DrawCurtainWall34CAD1 },
          { title: "Technical Drawing 02", subtitle: "Pressure Plate & Snap-Fit Cover Cap", Component: DrawCurtainWall34CAD2 },
          { title: "Technical Drawing 03", subtitle: "Integrated Top-Hung Vent Profile", Component: DrawCurtainWall34CAD3 },
        ];
      default:
        return [
          { title: "Technical Drawing 01", subtitle: "System Profile Drawing", Component: DrawLuxoriaCAD1 },
          { title: "Technical Drawing 02", subtitle: "Interlock Profile Detail", Component: DrawLuxoriaCAD2 },
          { title: "Technical Drawing 03", subtitle: "Perimeter Profile Detail", Component: DrawLuxoriaCAD3 },
        ];
    }
  };

  const drawings = getDrawings();
  const lightboxImages = drawings.map((item) => ({
    src: item.image,
    title: `${name} — ${item.title}`,
    subtitle: item.subtitle,
  }));

  return (
    <section className="space-y-6 pt-4 border-t border-[#E2E2E2]">
      
      {/* SECTION HEADING & SUPPORTING TEXT */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF393B]" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
            TECHNICAL DRAWINGS
          </h2>
        </div>
        <p className="text-sm text-[#5F5F5F]">
          Detailed CAD/profile references for the system. Click any drawing to enlarge.
        </p>
      </div>

      {/* 3-COLUMN CAD DRAWINGS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {drawings.map((item, idx) => {
          const DrawingComp = item.Component;

          return (
            <div
              key={idx}
              className="bg-white border border-[#E2E2E2] rounded-xl p-5 hover:border-[#171717] transition-all duration-300 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Vector / Image Drawing Container */}
                <div 
                  className={`bg-white border border-[#EEEEEE] rounded-lg p-3 min-h-[220px] flex items-center justify-center relative overflow-hidden group ${item.image ? 'cursor-pointer hover:border-[#171717]/40' : ''}`}
                  onClick={() => {
                    if (item.image) {
                      setLightboxIndex(idx);
                      setIsLightboxOpen(true);
                    }
                  }}
                >
                  {item.image ? (
                    <div className="w-full h-full flex flex-col items-center justify-center relative">
                      <img
                        src={item.image}
                        alt={`${item.subtitle || item.title} - ${name} Technical Drawing`}
                        className="max-h-[200px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-[#171717]/90 text-white text-[11px] font-mono px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FF393B]" /> Enlarge
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-[280px]">
                      {DrawingComp && <DrawingComp />}
                    </div>
                  )}
                </div>
              </div>

              {/* Subtitle */}
              <div className="pt-3 mt-3 border-t border-[#F0F0F0] text-xs font-mono text-[#5F5F5F] font-semibold">
                <span>{item.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox for Technical Drawing Images */}
      {isLightboxOpen && (
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onIndexChange={setLightboxIndex}
        />
      )}

    </section>
  );
}
