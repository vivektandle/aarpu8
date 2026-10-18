import React from 'react';

/**
 * High-precision CAD Technical Drawings & Mechanism Animations
 * Pure SVG + CSS Keyframe Animations for instant load, crisp retina rendering and 0 bandwidth lag.
 */

// ----------------------------------------------------------------------
// 1. AP SLIDE 18 LUXORIA
// ----------------------------------------------------------------------

export function DrawLuxoriaTrack() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="20" width="360" height="220" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      {/* Track Base Profile */}
      <path d="M40 210 H360 V225 H40 Z" fill="#F5F5F5" strokeWidth="1.5" />
      <path d="M60 210 V185 H100 V210 M140 210 V185 H180 V210 M220 210 V185 H260 V210 M300 210 V185 H340 V210" strokeWidth="1.2" />
      {/* Stainless Steel Rails */}
      <circle cx="80" cy="180" r="4" fill="#FF393B" stroke="none" />
      <circle cx="240" cy="180" r="4" fill="#FF393B" stroke="none" />
      {/* Roller Frame Housing */}
      <rect x="65" y="110" width="30" height="65" rx="2" fill="#FFFFFF" strokeWidth="1.5" />
      <rect x="225" y="110" width="30" height="65" rx="2" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Roller Wheels */}
      <circle cx="80" cy="165" r="12" strokeWidth="1.5" fill="#FFFFFF" />
      <circle cx="240" cy="165" r="12" strokeWidth="1.5" fill="#FFFFFF" />
      <circle cx="80" cy="165" r="3" fill="#171717" />
      <circle cx="240" cy="165" r="3" fill="#171717" />
      {/* Glass Sash Bottom Rail */}
      <rect x="50" y="40" width="60" height="70" fill="#FFFFFF" strokeWidth="1.5" />
      <rect x="210" y="40" width="60" height="70" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Glass Panes */}
      <line x1="75" y1="20" x2="75" y2="100" strokeWidth="2.5" />
      <line x1="85" y1="20" x2="85" y2="100" strokeWidth="2.5" />
      <line x1="235" y1="20" x2="235" y2="100" strokeWidth="2.5" />
      <line x1="245" y1="20" x2="245" y2="100" strokeWidth="2.5" />
    </svg>
  );
}

export function GifLuxoriaTrack() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes slideTrackWheel {
          0% { transform: translateX(0px); }
          50% { transform: translateX(110px); }
          100% { transform: translateX(0px); }
        }
        @keyframes rotateWheel {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-sash-slide {
          animation: slideTrackWheel 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-wheel-spin {
          transform-origin: 80px 165px;
          animation: rotateWheel 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Track Base Rail */}
        <rect x="30" y="200" width="340" height="20" fill="#F0F0F0" strokeWidth="1.5" />
        <line x1="30" y1="185" x2="370" y2="185" strokeWidth="2" stroke="#FF393B" />

        {/* Sliding Carriage Assembly */}
        <g className="animate-sash-slide">
          {/* Glass Pane */}
          <rect x="65" y="30" width="30" height="100" fill="#E8F4F8" stroke="#171717" strokeWidth="1.5" opacity="0.8" />
          <line x1="75" y1="35" x2="75" y2="125" strokeWidth="2" stroke="#171717" />

          {/* Bottom Sash Profile */}
          <rect x="50" y="125" width="60" height="35" fill="#FFFFFF" strokeWidth="1.5" />
          
          {/* Roller Wheel */}
          <circle cx="80" cy="172" r="13" fill="#FFFFFF" strokeWidth="2" stroke="#171717" />
          <line x1="80" y1="159" x2="80" y2="185" strokeWidth="1" stroke="#FF393B" />
          <line x1="67" y1="172" x2="93" y2="172" strokeWidth="1" stroke="#FF393B" />
          <circle cx="80" cy="172" r="4" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export function DrawLuxoriaInterlock() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 18mm Slim Profile Outer Contour */}
      <rect x="150" y="30" width="100" height="200" fill="#F8F8F8" strokeWidth="1.5" />
      {/* PA66 Thermal Break Strips */}
      <rect x="180" y="70" width="40" height="15" fill="#171717" stroke="none" />
      <rect x="180" y="175" width="40" height="15" fill="#171717" stroke="none" />
      {/* Left Sash Hook Profile */}
      <path d="M120 50 H165 V210 H120 M165 110 H180 V150 H165" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Right Sash Hook Profile */}
      <path d="M280 50 H235 V210 H280 M235 110 H220 V150 H235" fill="#FFFFFF" strokeWidth="1.5" />
      {/* EPDM Fin Seals */}
      <circle cx="172" cy="130" r="3" fill="#FF393B" stroke="none" />
      <circle cx="228" cy="130" r="3" fill="#FF393B" stroke="none" />
      {/* 18mm Dimension Line Indicator */}
      <line x1="191" y1="20" x2="209" y2="20" stroke="#FF393B" strokeWidth="1.5" />
      <line x1="191" y1="15" x2="191" y2="25" stroke="#FF393B" strokeWidth="1.5" />
      <line x1="209" y1="15" x2="209" y2="25" stroke="#FF393B" strokeWidth="1.5" />
    </svg>
  );
}

export function GifLuxoriaInterlock() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes hookEngageLeft {
          0% { transform: translateX(-40px); }
          50% { transform: translateX(0px); }
          100% { transform: translateX(-40px); }
        }
        @keyframes hookEngageRight {
          0% { transform: translateX(40px); }
          50% { transform: translateX(0px); }
          100% { transform: translateX(40px); }
        }
        .animate-hook-left {
          animation: hookEngageLeft 3.5s ease-in-out infinite;
        }
        .animate-hook-right {
          animation: hookEngageRight 3.5s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Center Interlock Axis */}
        <line x1="200" y1="20" x2="200" y2="240" stroke="#E2E2E2" strokeWidth="1" strokeDasharray="4 4" />

        {/* Left Hook Profile */}
        <g className="animate-hook-left">
          <path d="M100 40 H180 V100 H195 V160 H180 V220 H100 Z" fill="#FFFFFF" strokeWidth="1.8" />
          <rect x="120" y="80" width="35" height="12" fill="#171717" stroke="none" />
          <rect x="120" y="168" width="35" height="12" fill="#171717" stroke="none" />
          <path d="M180 110 H192 V150 H180" fill="#FF393B" stroke="none" opacity="0.8" />
        </g>

        {/* Right Hook Profile */}
        <g className="animate-hook-right">
          <path d="M300 40 H220 V100 H205 V160 H220 V220 H300 Z" fill="#FFFFFF" strokeWidth="1.8" />
          <rect x="245" y="80" width="35" height="12" fill="#171717" stroke="none" />
          <rect x="245" y="168" width="35" height="12" fill="#171717" stroke="none" />
          <path d="M220 110 H208 V150 H220" fill="#FF393B" stroke="none" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export function DrawLuxoriaLock() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="100" y="30" width="200" height="200" fill="#F8F8F8" strokeWidth="1.5" />
      {/* Lock Housing Internal Gear */}
      <rect x="140" y="60" width="120" height="140" fill="#FFFFFF" strokeWidth="1.5" />
      <circle cx="200" cy="130" r="28" strokeWidth="1.5" />
      <path d="M200 110 V150 M180 130 H220" strokeWidth="1.5" />
      {/* Locking Pins / Cams */}
      <rect x="250" y="80" width="20" height="25" rx="3" fill="#FF393B" stroke="none" />
      <rect x="250" y="155" width="20" height="25" rx="3" fill="#FF393B" stroke="none" />
      {/* Keeper Plate */}
      <rect x="280" y="40" width="15" height="180" fill="#171717" stroke="none" />
    </svg>
  );
}

export function GifLuxoriaLock() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes lockPinDrive {
          0% { transform: translateY(0px); }
          40% { transform: translateY(24px); }
          100% { transform: translateY(0px); }
        }
        @keyframes handleTurn {
          0% { transform: rotate(0deg); }
          40% { transform: rotate(90deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-pin-drive {
          animation: lockPinDrive 3.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        .animate-gear-turn {
          transform-origin: 180px 130px;
          animation: handleTurn 3.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Frame Strike Plate */}
        <rect x="280" y="30" width="30" height="200" fill="#F0F0F0" strokeWidth="1.5" />
        <rect x="285" y="75" width="10" height="40" fill="#171717" stroke="none" />
        <rect x="285" y="155" width="10" height="40" fill="#171717" stroke="none" />

        {/* Lock Mechanism Body */}
        <rect x="110" y="40" width="140" height="180" fill="#FFFFFF" strokeWidth="1.5" />

        {/* Gear Rotator */}
        <g className="animate-gear-turn">
          <circle cx="180" cy="130" r="24" strokeWidth="2" fill="#FFFFFF" />
          <line x1="180" y1="110" x2="180" y2="150" strokeWidth="2" stroke="#FF393B" />
          <line x1="160" y1="130" x2="200" y2="130" strokeWidth="2" stroke="#FF393B" />
        </g>

        {/* Locking Pins / Cams Driving into Keeper */}
        <g className="animate-pin-drive">
          <path d="M235 60 H275 V85 H235 Z" fill="#FF393B" stroke="none" />
          <path d="M235 140 H275 V165 H235 Z" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}


// ----------------------------------------------------------------------
// 2. AP SLIDE 19 GLISSAR
// ----------------------------------------------------------------------

export function DrawGlissarTrack() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="190" width="340" height="50" fill="#F0F0F0" strokeWidth="1.5" />
      {/* Heavy Steel Quad Rails */}
      <circle cx="100" cy="190" r="6" fill="#171717" />
      <circle cx="130" cy="190" r="6" fill="#171717" />
      <circle cx="270" cy="190" r="6" fill="#171717" />
      <circle cx="300" cy="190" r="6" fill="#171717" />

      {/* Heavy 380kg Sash Base */}
      <rect x="70" y="80" width="80" height="110" fill="#FFFFFF" strokeWidth="2" />
      <rect x="240" y="80" width="80" height="110" fill="#FFFFFF" strokeWidth="2" />

      {/* Quad Rollers */}
      <circle cx="100" cy="165" r="14" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="130" cy="165" r="14" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="270" cy="165" r="14" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="300" cy="165" r="14" strokeWidth="2" fill="#FFFFFF" />

      <circle cx="100" cy="165" r="4" fill="#FF393B" stroke="none" />
      <circle cx="130" cy="165" r="4" fill="#FF393B" stroke="none" />
      <circle cx="270" cy="165" r="4" fill="#FF393B" stroke="none" />
      <circle cx="300" cy="165" r="4" fill="#FF393B" stroke="none" />

      {/* Double Glazing Glass 28mm */}
      <line x1="100" y1="20" x2="100" y2="80" strokeWidth="3" />
      <line x1="120" y1="20" x2="120" y2="80" strokeWidth="3" />
      <line x1="270" y1="20" x2="270" y2="80" strokeWidth="3" />
      <line x1="290" y1="20" x2="290" y2="80" strokeWidth="3" />
    </svg>
  );
}

export function GifGlissarTrack() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes heavyGlissarSlide {
          0% { transform: translateX(0px); }
          50% { transform: translateX(120px); }
          100% { transform: translateX(0px); }
        }
        .animate-glissar-sash {
          animation: heavyGlissarSlide 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="210" width="360" height="25" fill="#EAEAEA" strokeWidth="1.5" />
        <line x1="20" y1="195" x2="380" y2="195" strokeWidth="3" stroke="#FF393B" />

        <g className="animate-glissar-sash">
          {/* Massive Sash Profile */}
          <rect x="40" y="30" width="90" height="120" fill="#FFFFFF" strokeWidth="2" />
          <rect x="55" y="45" width="60" height="90" fill="#F0F0F0" strokeWidth="1" />
          <line x1="70" y1="20" x2="70" y2="150" strokeWidth="3.5" stroke="#171717" />
          <line x1="85" y1="20" x2="85" y2="150" strokeWidth="3.5" stroke="#171717" />

          {/* Tandem Heavy Rollers */}
          <rect x="45" y="150" width="80" height="35" fill="#171717" stroke="none" />
          <circle cx="65" cy="180" r="12" fill="#FFFFFF" strokeWidth="2" stroke="#171717" />
          <circle cx="105" cy="180" r="12" fill="#FFFFFF" strokeWidth="2" stroke="#171717" />
          <circle cx="65" cy="180" r="4" fill="#FF393B" stroke="none" />
          <circle cx="105" cy="180" r="4" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export function DrawGlissarInterlock() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 198mm Reinforced Interlock Spine */}
      <rect x="110" y="30" width="180" height="200" fill="#F5F5F5" strokeWidth="2" />
      {/* Triple PA66 Thermal Insulation Chambers */}
      <rect x="140" y="60" width="120" height="25" fill="#171717" stroke="none" />
      <rect x="140" y="118" width="120" height="25" fill="#171717" stroke="none" />
      <rect x="140" y="175" width="120" height="25" fill="#171717" stroke="none" />

      {/* Structural Reinforced Ribs */}
      <line x1="120" y1="30" x2="120" y2="230" stroke="#FF393B" strokeWidth="2" />
      <line x1="280" y1="30" x2="280" y2="230" stroke="#FF393B" strokeWidth="2" />
    </svg>
  );
}

export function GifGlissarInterlock() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes typhoonFlex {
          0% { transform: scaleX(1); }
          50% { transform: scaleX(0.92); }
          100% { transform: scaleX(1); }
        }
        .animate-typhoon-spine {
          transform-origin: 200px 130px;
          animation: typhoonFlex 2.8s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g className="animate-typhoon-spine">
          <rect x="100" y="40" width="200" height="180" fill="#FFFFFF" strokeWidth="2" />
          <rect x="130" y="70" width="140" height="30" fill="#171717" stroke="none" />
          <rect x="130" y="160" width="140" height="30" fill="#171717" stroke="none" />
          
          <line x1="120" y1="40" x2="120" y2="220" strokeWidth="3" stroke="#FF393B" />
          <line x1="280" y1="40" x2="280" y2="220" strokeWidth="3" stroke="#FF393B" />

          {/* Wind pressure vector indicators */}
          <path d="M40 130 H80 M70 120 L80 130 L70 140" stroke="#FF393B" strokeWidth="2" />
          <path d="M360 130 H320 M330 120 L320 130 L330 140" stroke="#FF393B" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export function DrawGlissarDrainage() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="60" y="40" width="280" height="180" fill="#F8F8F8" strokeWidth="1.5" />
      {/* Cascading Drainage Chambers */}
      <rect x="90" y="70" width="80" height="110" fill="#FFFFFF" strokeWidth="1.5" />
      <rect x="190" y="100" width="80" height="80" fill="#FFFFFF" strokeWidth="1.5" />
      <circle cx="130" cy="160" r="6" fill="#FF393B" stroke="none" />
      <circle cx="230" cy="160" r="6" fill="#FF393B" stroke="none" />
      {/* One-Way Non-Return Valve Flap */}
      <line x1="280" y1="140" x2="295" y2="170" stroke="#171717" strokeWidth="2" />
    </svg>
  );
}

export function GifGlissarDrainage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes waterFlow {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        .animate-water-drop-1 { animation: waterFlow 2s linear infinite; }
        .animate-water-drop-2 { animation: waterFlow 2s linear 0.7s infinite; }
        .animate-water-drop-3 { animation: waterFlow 2s linear 1.4s infinite; }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="50" y="40" width="300" height="180" fill="#FFFFFF" strokeWidth="1.5" />
        <path d="M80 80 H160 V160 H240 V200 H320" strokeWidth="2" stroke="#171717" fill="none" />
        
        {/* Animated Water Droplets */}
        <g className="animate-water-drop-1">
          <circle cx="120" cy="90" r="5" fill="#FF393B" stroke="none" />
        </g>
        <g className="animate-water-drop-2">
          <circle cx="200" cy="130" r="5" fill="#FF393B" stroke="none" />
        </g>
        <g className="animate-water-drop-3">
          <circle cx="280" cy="170" r="5" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}


// ----------------------------------------------------------------------
// 3. STANDARD LINE SWING 38
// ----------------------------------------------------------------------

export function DrawSwing38Hinge() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="80" y="40" width="100" height="180" fill="#F8F8F8" strokeWidth="1.5" />
      <rect x="220" y="40" width="100" height="180" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Hidden Friction Stay Scissor Arm */}
      <path d="M130 70 L250 110 M130 110 L250 70" strokeWidth="2" stroke="#171717" />
      <circle cx="190" cy="90" r="5" fill="#FF393B" stroke="none" />
      <circle cx="130" cy="70" r="4" fill="#171717" />
      <circle cx="250" cy="110" r="4" fill="#171717" />
    </svg>
  );
}

export function GifSwing38Hinge() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes casementSwing {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-45deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-swing-sash {
          transform-origin: 80px 130px;
          animation: casementSwing 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Frame */}
        <rect x="60" y="30" width="280" height="200" fill="#F0F0F0" strokeWidth="1.5" />

        {/* Swinging Sash */}
        <g className="animate-swing-sash">
          <rect x="80" y="40" width="240" height="180" fill="#FFFFFF" strokeWidth="2" />
          <rect x="95" y="55" width="210" height="150" fill="#E8F4F8" stroke="#171717" strokeWidth="1" />
          <line x1="80" y1="40" x2="80" y2="220" strokeWidth="3" stroke="#FF393B" />
        </g>
      </svg>
    </div>
  );
}

export function DrawSwing38Gearbox() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="130" y="30" width="140" height="200" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Central Handle Shaft */}
      <circle cx="200" cy="130" r="30" strokeWidth="1.5" fill="#F5F5F5" />
      <rect x="190" y="60" width="20" height="140" fill="#171717" stroke="none" />
      {/* Dual Drive Drive Rods */}
      <path d="M200 130 L260 130 L290 90" stroke="#FF393B" strokeWidth="2" />
    </svg>
  );
}

export function GifSwing38Gearbox() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes dualStageHandle {
          0% { transform: rotate(0deg); }
          33% { transform: rotate(90deg); }
          66% { transform: rotate(180deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-dual-handle {
          transform-origin: 200px 130px;
          animation: dualStageHandle 4.5s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="120" y="40" width="160" height="180" fill="#FFFFFF" strokeWidth="1.5" />
        
        <g className="animate-dual-handle">
          <circle cx="200" cy="130" r="25" fill="#FFFFFF" strokeWidth="2" stroke="#171717" />
          <rect x="192" y="130" width="16" height="75" rx="8" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export function DrawSwing38Seal() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="80" y="50" width="110" height="160" fill="#F5F5F5" strokeWidth="1.5" />
      <rect x="210" y="50" width="110" height="160" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Triple EPDM Bulb Gaskets */}
      <circle cx="195" cy="80" r="10" fill="#171717" stroke="none" />
      <circle cx="195" cy="130" r="10" fill="#171717" stroke="none" />
      <circle cx="195" cy="180" r="10" fill="#171717" stroke="none" />
      <circle cx="195" cy="80" r="4" fill="#FF393B" stroke="none" />
      <circle cx="195" cy="130" r="4" fill="#FF393B" stroke="none" />
      <circle cx="195" cy="180" r="4" fill="#FF393B" stroke="none" />
    </svg>
  );
}

export function GifSwing38Seal() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes gasketCompress {
          0% { transform: scaleX(1); }
          50% { transform: scaleX(0.55); }
          100% { transform: scaleX(1); }
        }
        .animate-gasket-press {
          transform-origin: 200px 130px;
          animation: gasketCompress 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="60" y="40" width="120" height="180" fill="#F0F0F0" strokeWidth="1.5" />
        <rect x="220" y="40" width="120" height="180" fill="#FFFFFF" strokeWidth="1.5" />

        <g className="animate-gasket-press">
          <ellipse cx="200" cy="90" rx="16" ry="12" fill="#FF393B" stroke="none" />
          <ellipse cx="200" cy="170" rx="16" ry="12" fill="#FF393B" stroke="none" />
        </g>
      </svg>
    </div>
  );
}


// ----------------------------------------------------------------------
// 4. STANDARD LINE CURTAIN WALL 34
// ----------------------------------------------------------------------

export function DrawCurtainWall34Mullion() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Slender 34mm Profile */}
      <rect x="183" y="20" width="34" height="220" fill="#FFFFFF" strokeWidth="2" />
      <rect x="188" y="50" width="24" height="40" fill="#F0F0F0" strokeWidth="1" />
      <rect x="188" y="110" width="24" height="40" fill="#F0F0F0" strokeWidth="1" />
      <rect x="188" y="170" width="24" height="40" fill="#F0F0F0" strokeWidth="1" />
      {/* Thermal Isolator Strip */}
      <rect x="188" y="95" width="24" height="10" fill="#171717" stroke="none" />
      {/* Glass Panels Flanking */}
      <rect x="30" y="60" width="145" height="140" fill="#E8F4F8" stroke="#171717" strokeWidth="1.5" />
      <rect x="225" y="60" width="145" height="140" fill="#E8F4F8" stroke="#171717" strokeWidth="1.5" />
    </svg>
  );
}

export function GifCurtainWall34Mullion() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes thermalExpand {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.05); }
          100% { transform: scaleY(1); }
        }
        .animate-mullion-expand {
          transform-origin: 200px 130px;
          animation: thermalExpand 4s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g className="animate-mullion-expand">
          <rect x="183" y="20" width="34" height="220" fill="#FFFFFF" strokeWidth="2" />
          <rect x="188" y="90" width="24" height="15" fill="#FF393B" stroke="none" />
          <rect x="188" y="155" width="24" height="15" fill="#FF393B" stroke="none" />
        </g>
        <rect x="40" y="50" width="135" height="160" fill="#F0F0F0" strokeWidth="1.5" />
        <rect x="225" y="50" width="135" height="160" fill="#F0F0F0" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function DrawCurtainWall34Cap() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="140" y="30" width="120" height="200" fill="#FFFFFF" strokeWidth="1.5" />
      {/* Pressure Plate */}
      <rect x="160" y="110" width="80" height="15" fill="#171717" stroke="none" />
      {/* Aluminum Exterior Cover Cap Snap */}
      <path d="M150 90 H250 V110 H150 Z" fill="#FF393B" stroke="none" />
    </svg>
  );
}

export function GifCurtainWall34Cap() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes capSnap {
          0% { transform: translateY(-25px); opacity: 0.3; }
          40% { transform: translateY(0px); opacity: 1; }
          100% { transform: translateY(-25px); opacity: 0.3; }
        }
        .animate-cap-snap {
          animation: capSnap 3.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="120" y="60" width="160" height="160" fill="#FFFFFF" strokeWidth="1.5" />
        <rect x="150" y="140" width="100" height="20" fill="#171717" stroke="none" />
        
        <g className="animate-cap-snap">
          <rect x="140" y="100" width="120" height="30" fill="#FF393B" rx="3" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export function DrawCurtainWall34Vent() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="80" y="30" width="240" height="200" fill="#F8F8F8" strokeWidth="1.5" />
      {/* Top Hung Concealed Vent Profile */}
      <rect x="100" y="50" width="200" height="160" fill="#FFFFFF" strokeWidth="1.5" />
      <line x1="100" y1="50" x2="300" y2="50" strokeWidth="3" stroke="#FF393B" />
    </svg>
  );
}

export function GifCurtainWall34Vent() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden p-4">
      <style>{`
        @keyframes topHungOpen {
          0% { transform: perspective(400px) rotateX(0deg); }
          50% { transform: perspective(400px) rotateX(-25deg); }
          100% { transform: perspective(400px) rotateX(0deg); }
        }
        .animate-top-hung {
          transform-origin: 200px 50px;
          animation: topHungOpen 4s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="0 0 400 260" className="w-full h-auto stroke-[#171717] fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="70" y="30" width="260" height="200" fill="#F0F0F0" strokeWidth="1.5" />

        <g className="animate-top-hung">
          <rect x="90" y="50" width="220" height="160" fill="#FFFFFF" strokeWidth="2" />
          <rect x="105" y="65" width="190" height="130" fill="#E8F4F8" stroke="#171717" strokeWidth="1" />
          <line x1="90" y1="50" x2="310" y2="50" strokeWidth="3.5" stroke="#FF393B" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Visual Renderer Map Helper
 */
export function renderTechnicalDrawing(typeKey) {
  switch (typeKey) {
    case 'luxoria-track': return <DrawLuxoriaTrack />;
    case 'luxoria-interlock': return <DrawLuxoriaInterlock />;
    case 'luxoria-lock': return <DrawLuxoriaLock />;

    case 'glissar-track': return <DrawGlissarTrack />;
    case 'glissar-interlock': return <DrawGlissarInterlock />;
    case 'glissar-drainage': return <DrawGlissarDrainage />;

    case 'swing-hinge': return <DrawSwing38Hinge />;
    case 'swing-gearbox': return <DrawSwing38Gearbox />;
    case 'swing-seal': return <DrawSwing38Seal />;

    case 'curtain-mullion': return <DrawCurtainWall34Mullion />;
    case 'curtain-cap': return <DrawCurtainWall34Cap />;
    case 'curtain-vent': return <DrawCurtainWall34Vent />;

    default: return <DrawLuxoriaTrack />;
  }
}

export function renderMechanismGif(typeKey) {
  switch (typeKey) {
    case 'luxoria-track': return <GifLuxoriaTrack />;
    case 'luxoria-interlock': return <GifLuxoriaInterlock />;
    case 'luxoria-lock': return <GifLuxoriaLock />;

    case 'glissar-track': return <GifGlissarTrack />;
    case 'glissar-interlock': return <GifGlissarInterlock />;
    case 'glissar-drainage': return <GifGlissarDrainage />;

    case 'swing-hinge': return <GifSwing38Hinge />;
    case 'swing-gearbox': return <GifSwing38Gearbox />;
    case 'swing-seal': return <GifSwing38Seal />;

    case 'curtain-mullion': return <GifCurtainWall34Mullion />;
    case 'curtain-cap': return <GifCurtainWall34Cap />;
    case 'curtain-vent': return <GifCurtainWall34Vent />;

    default: return <GifLuxoriaTrack />;
  }
}
