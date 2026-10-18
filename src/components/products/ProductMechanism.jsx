import React from 'react';

/**
 * Pure SVG + CSS Keyframes Mechanism Motion Renderers for Aarpu Systems
 * - No text inside animation
 * - 60fps smooth looping (5-6 seconds)
 * - White background, aluminium profiles, glass tints, Aarpu red accents
 * - Product-specific operation for all 4 products
 */

// 1. AP SLIDE 18 LUXORIA (Horizontal Sliding Motion)
function LuxoriaMechanismGif() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-6">
      <style>{`
        @keyframes luxoriaSlideLoop {
          0% { transform: translateX(0px); }
          45% { transform: translateX(160px); }
          55% { transform: translateX(160px); }
          100% { transform: translateX(0px); }
        }
        @keyframes rollerSpin {
          0% { transform: rotate(0deg); }
          45% { transform: rotate(540deg); }
          55% { transform: rotate(540deg); }
          100% { transform: rotate(0deg); }
        }
        .anim-luxoria-sash {
          animation: luxoriaSlideLoop 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .anim-luxoria-roller {
          transform-origin: center;
          animation: rollerSpin 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 600 340" className="w-full h-auto max-h-[360px] stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Track Base Rail & Stainless Steel Guides */}
        <rect x="40" y="270" width="520" height="24" fill="#F5F5F5" strokeWidth="1.5" />
        <line x1="40" y1="255" x2="560" y2="255" strokeWidth="2.5" stroke="#FF393B" />
        <line x1="40" y1="270" x2="560" y2="270" strokeWidth="1.5" stroke="#171717" />

        {/* Left Fixed Glass Sash */}
        <g>
          <rect x="60" y="40" width="180" height="215" fill="#E8F4F8" stroke="#171717" strokeWidth="1.5" opacity="0.85" />
          <rect x="50" y="30" width="200" height="15" fill="#FFFFFF" strokeWidth="1.5" />
          <rect x="50" y="240" width="200" height="15" fill="#FFFFFF" strokeWidth="1.5" />
          <line x1="140" y1="40" x2="140" y2="255" strokeWidth="2" stroke="#171717" />
          <line x1="150" y1="40" x2="150" y2="255" strokeWidth="2" stroke="#171717" />
        </g>

        {/* Right Active Sliding Sash (Animates) */}
        <g className="anim-luxoria-sash">
          {/* Glass Pane */}
          <rect x="250" y="40" width="180" height="215" fill="#E8F4F8" stroke="#171717" strokeWidth="1.5" opacity="0.9" />
          <line x1="330" y1="40" x2="330" y2="255" strokeWidth="2" stroke="#171717" />
          <line x1="340" y1="40" x2="340" y2="255" strokeWidth="2" stroke="#171717" />

          {/* Top & Bottom Sash Profiles */}
          <rect x="240" y="30" width="200" height="15" fill="#FFFFFF" strokeWidth="1.5" />
          <rect x="240" y="240" width="200" height="15" fill="#FFFFFF" strokeWidth="1.5" />

          {/* 18mm Ultra-Slim Interlock Hook */}
          <rect x="240" y="30" width="18" height="225" fill="#171717" stroke="none" />
          <rect x="238" y="25" width="22" height="235" fill="none" stroke="#FF393B" strokeWidth="1.5" />

          {/* Precision Rollers */}
          <circle cx="280" cy="262" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="400" cy="262" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <circle cx="280" cy="262" r="3" fill="#FF393B" stroke="none" />
          <circle cx="400" cy="262" r="3" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

// 2. AP SLIDE 19 GLISSAR (Heavy-Duty 380kg Quad-Roller Sliding Motion)
function GlissarMechanismGif() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-6">
      <style>{`
        @keyframes glissarSlideLoop {
          0% { transform: translateX(0px); }
          45% { transform: translateX(150px); }
          55% { transform: translateX(150px); }
          100% { transform: translateX(0px); }
        }
        .anim-glissar-sash {
          animation: glissarSlideLoop 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 600 340" className="w-full h-auto max-h-[360px] stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Massive Base Track Profile */}
        <rect x="30" y="260" width="540" height="35" fill="#EEEEEE" strokeWidth="2" />
        <line x1="30" y1="242" x2="570" y2="242" strokeWidth="3" stroke="#FF393B" />

        {/* Heavy Fixed Glass Panel */}
        <g>
          <rect x="50" y="30" width="200" height="210" fill="#E8F4F8" stroke="#171717" strokeWidth="2" opacity="0.8" />
          <rect x="40" y="20" width="220" height="18" fill="#FFFFFF" strokeWidth="2" />
          <rect x="40" y="225" width="220" height="18" fill="#FFFFFF" strokeWidth="2" />
          <line x1="140" y1="30" x2="140" y2="225" strokeWidth="3" stroke="#171717" />
          <line x1="155" y1="30" x2="155" y2="225" strokeWidth="3" stroke="#171717" />
        </g>

        {/* Heavy 380kg Active Sash (Animates) */}
        <g className="anim-glissar-sash">
          {/* Double Glazed Heavy Glass */}
          <rect x="270" y="30" width="220" height="210" fill="#E8F4F8" stroke="#171717" strokeWidth="2" opacity="0.9" />
          <line x1="370" y1="30" x2="370" y2="225" strokeWidth="3.5" stroke="#171717" />
          <line x1="388" y1="30" x2="388" y2="225" strokeWidth="3.5" stroke="#171717" />

          {/* Heavy Base & Top Sash Profiles */}
          <rect x="250" y="20" width="250" height="18" fill="#FFFFFF" strokeWidth="2" />
          <rect x="250" y="225" width="250" height="18" fill="#FFFFFF" strokeWidth="2" />

          {/* Reinforced 198mm Interlock Spine */}
          <rect x="250" y="20" width="26" height="223" fill="#171717" stroke="none" />
          <rect x="247" y="15" width="32" height="233" fill="none" stroke="#FF393B" strokeWidth="1.5" />

          {/* Tandem Quad Stainless Steel Rollers */}
          <g>
            <rect x="280" y="243" width="70" height="18" fill="#171717" stroke="none" />
            <circle cx="295" cy="252" r="7" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <circle cx="335" cy="252" r="7" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <circle cx="295" cy="252" r="2.5" fill="#FF393B" stroke="none" />
            <circle cx="335" cy="252" r="2.5" fill="#FF393B" stroke="none" />
          </g>
          <g>
            <rect x="410" y="243" width="70" height="18" fill="#171717" stroke="none" />
            <circle cx="425" cy="252" r="7" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <circle cx="465" cy="252" r="7" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <circle cx="425" cy="252" r="2.5" fill="#FF393B" stroke="none" />
            <circle cx="465" cy="252" r="2.5" fill="#FF393B" stroke="none" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// 3. STANDARD LINE SWING 38 (Casement Window Hinged Outward/Inward Swing)
function Swing38MechanismGif() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-6">
      <style>{`
        @keyframes swingWindowLoop {
          0% { transform: perspective(800px) rotateY(0deg); }
          45% { transform: perspective(800px) rotateY(-50deg); }
          55% { transform: perspective(800px) rotateY(-50deg); }
          100% { transform: perspective(800px) rotateY(0deg); }
        }
        .anim-swing-sash {
          transform-origin: 100px 150px;
          animation: swingWindowLoop 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 600 340" className="w-full h-auto max-h-[360px] stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Window Masonry Subframe */}
        <rect x="80" y="30" width="440" height="280" fill="#F5F5F5" strokeWidth="2" />
        <rect x="100" y="45" width="400" height="250" fill="#FFFFFF" strokeWidth="1.5" />

        {/* Concealed Scissor Friction Stay Hinge Indicator */}
        <line x1="100" y1="45" x2="100" y2="295" strokeWidth="3" stroke="#FF393B" />

        {/* Swinging Casement Sash Frame (Animates 3D Perspective Rotation) */}
        <g className="anim-swing-sash">
          {/* Glass Pane */}
          <rect x="100" y="45" width="400" height="250" fill="#E8F4F8" stroke="#171717" strokeWidth="2" opacity="0.85" />
          <line x1="100" y1="45" x2="500" y2="45" strokeWidth="2.5" stroke="#171717" />
          <line x1="100" y1="295" x2="500" y2="295" strokeWidth="2.5" stroke="#171717" />
          <line x1="500" y1="45" x2="500" y2="295" strokeWidth="2.5" stroke="#171717" />

          {/* Triple Glazing Reflection Lines */}
          <line x1="280" y1="65" x2="280" y2="275" strokeWidth="2" stroke="#171717" />
          <line x1="295" y1="65" x2="295" y2="275" strokeWidth="2" stroke="#171717" />

          {/* Architectural Handle Drive */}
          <rect x="475" y="150" width="12" height="40" rx="4" fill="#171717" stroke="none" />
          <rect x="480" y="160" width="22" height="8" rx="2" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

// 4. STANDARD LINE CURTAIN WALL 34 (34mm Facade Top-Hung Openable Vent Motion)
function CurtainWall34MechanismGif() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-6">
      <style>{`
        @keyframes topHungVentLoop {
          0% { transform: perspective(800px) rotateX(0deg); }
          45% { transform: perspective(800px) rotateX(-30deg); }
          55% { transform: perspective(800px) rotateX(-30deg); }
          100% { transform: perspective(800px) rotateX(0deg); }
        }
        .anim-curtain-vent {
          transform-origin: 300px 50px;
          animation: topHungVentLoop 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 600 340" className="w-full h-auto max-h-[360px] stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Slender 34mm Grid Facade Framework */}
        <rect x="40" y="20" width="520" height="300" fill="#F8F8F8" strokeWidth="2" />

        {/* 34mm Vertical Mullions */}
        <rect x="180" y="20" width="34" height="300" fill="#FFFFFF" strokeWidth="1.5" />
        <rect x="380" y="20" width="34" height="300" fill="#FFFFFF" strokeWidth="1.5" />
        <line x1="197" y1="20" x2="197" y2="320" strokeWidth="1" stroke="#FF393B" />
        <line x1="397" y1="20" x2="397" y2="320" strokeWidth="1" stroke="#FF393B" />

        {/* Fixed Glass Panels (Left & Right) */}
        <rect x="55" y="35" width="115" height="270" fill="#E8F4F8" stroke="#171717" strokeWidth="1" opacity="0.7" />
        <rect x="425" y="35" width="115" height="270" fill="#E8F4F8" stroke="#171717" strokeWidth="1" opacity="0.7" />

        {/* Integrated Top-Hung Operable Vent (Center Grid Section) */}
        <g className="anim-curtain-vent">
          <rect x="220" y="50" width="154" height="240" fill="#E8F4F8" stroke="#171717" strokeWidth="2" opacity="0.9" />
          <rect x="214" y="40" width="166" height="15" fill="#FFFFFF" strokeWidth="2" />
          <line x1="214" y1="40" x2="380" y2="40" strokeWidth="3" stroke="#FF393B" />

          {/* Double Glazing Lines */}
          <line x1="290" y1="60" x2="290" y2="280" strokeWidth="2" stroke="#171717" />
          <line x1="300" y1="60" x2="300" y2="280" strokeWidth="2" stroke="#171717" />
        </g>
      </svg>
    </div>
  );
}

export default function ProductMechanism({ productId, name }) {
  // Select product-specific mechanism animation
  const renderMechanismAnimation = () => {
    switch (productId) {
      case 'ap-slide-18-luxoria':
        return <LuxoriaMechanismGif />;
      case 'ap-slide-19-glissar':
        return <GlissarMechanismGif />;
      case 'standard-line-swing-38':
        return <Swing38MechanismGif />;
      case 'standard-line-curtain-wall-34':
        return <CurtainWall34MechanismGif />;
      default:
        return <LuxoriaMechanismGif />;
    }
  };

  return (
    <section className="space-y-6 pt-4 border-t border-[#E2E2E2]">
      
      {/* SECTION HEADING */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF393B]" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
            PRODUCT MECHANISM
          </h2>
        </div>
        <p className="text-sm font-semibold text-[#171717]">
          See how the system operates.
        </p>
      </div>

      {/* MECHANISM GIF / ANIMATION CONTAINER */}
      <div className="bg-white border border-[#E2E2E2] rounded-xl p-4 sm:p-8 shadow-2xs relative overflow-hidden flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px]">
        
        {/* Architectural Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Pure Motion Animation Component (No Text inside) */}
        <div className="relative z-10 w-full max-w-2xl mx-auto flex items-center justify-center">
          {renderMechanismAnimation()}
        </div>

      </div>

    </section>
  );
}
