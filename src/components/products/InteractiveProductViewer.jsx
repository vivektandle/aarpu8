import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  Layers, 
  Maximize2, 
  Lock, 
  ShieldCheck, 
  Info, 
  Sparkles, 
  Sliders, 
  ChevronRight,
  Eye,
  Minimize2
} from 'lucide-react';

export default function InteractiveProductViewer({ product, onOpenQuote }) {
  const [viewMode, setViewMode] = useState('OPERATIONAL'); // OPERATIONAL | EXPLODED | CROSS_SECTION
  const [motionState, setMotionState] = useState('CLOSED'); // CLOSED | SLIDE | INTERLOCK | LOCK | SEAL | SWING_OUT | TILT
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  if (!product) return null;

  const mechanism = product.mechanismType || 'sliding';

  const specs = product.specs || {
    interlockFaceWidth: product.technicalCharacteristics?.["Interlock Face Width"] || product.technicalCharacteristics?.["Frame Visible Width"] || '18mm',
    maxWeightPerSash: product.technicalCharacteristics?.["Maximum Weight per Sash"] || '180 Kg'
  };

  const hotspots = product.hotspots || [
    { id: 1, x: 25, y: 30, title: "PA66 Polyamide Thermal Break", description: "High-grade polyamide 66 thermal barrier isolating inner and outer extrusions to reduce U-values." },
    { id: 2, x: 50, y: 88, title: "Stainless Steel Quad Rollers", description: "Precision stainless steel tandem ball-bearing rollers ensuring whisper-quiet slide under heavy glass." },
    { id: 3, x: 75, y: 50, title: "EPDM Multi-Bulb Weather Gasket", description: "Continuous quad EPDM compression seals preventing wind driving rain and air infiltration." }
  ];

  const explodedComponents = product.explodedComponents || [
    { name: "PA66 Thermal Break Polyamide Strip", depth: "24mm Width Barrier", color: "#FF393B" },
    { name: "6063-T6 Extruded Outer Sub-Frame", depth: "31mm Sash Depth", color: "#64748b" },
    { name: "32mm Double Low-E Tempered Glass Pane", depth: "Argon Filled Unit", color: "#38bdf8" },
    { name: "Interlocking Spine & Weather Seal Strip", depth: "18mm Face Width", color: "#f59e0b" },
    { name: "Stainless Steel Bottom Track & Roller Carriage", depth: "Flush Zero Threshold", color: "#94a3b8" }
  ];

  const crossSectionData = product.crossSectionData || {
    "Interlock Face Width": specs.interlockFaceWidth,
    "Sash Depth": product.technicalCharacteristics?.["Sash Depth"] || "31 mm",
    "Maximum Sash Weight": specs.maxWeightPerSash,
    "Thermal Break Strip": "PA66 24mm",
    "Glazing Thickness": product.technicalCharacteristics?.["Glazing Width Possibilities"] || "22-36 mm",
    "Sealing System": product.technicalCharacteristics?.["Sealing Type"] || "EPDM Quad Gaskets"
  };

  // State options based on mechanism
  const getMotionButtons = () => {
    if (mechanism === 'swing') {
      return [
        { id: 'CLOSED', label: 'CLOSED' },
        { id: 'SWING_OUT', label: 'SWING OUT' },
        { id: 'TILT', label: 'TILT MODE' },
        { id: 'SEAL', label: 'COMPRESS SEAL' },
        { id: 'LOCK', label: '3-POINT LOCK' }
      ];
    } else if (mechanism === 'curtainwall') {
      return [
        { id: 'CLOSED', label: 'FACADE VIEW' },
        { id: 'SLIDE', label: 'FACADE ZOOM' },
        { id: 'SWING_OUT', label: 'OPEN VENT' },
        { id: 'SEAL', label: 'EPDM SEAL' },
        { id: 'LOCK', label: 'ANCHOR LOCK' }
      ];
    } else {
      // sliding
      return [
        { id: 'CLOSED', label: 'CLOSED' },
        { id: 'SLIDE', label: 'SLIDE OPEN' },
        { id: 'INTERLOCK', label: 'INTERLOCK' },
        { id: 'SEAL', label: 'EPDM SEAL' },
        { id: 'LOCK', label: 'LOCK' }
      ];
    }
  };

  const motionButtons = getMotionButtons();

  return (
    <div className="bg-[#111318] rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-white font-sans">
      
      {/* Top Bar / View Mode Toggles */}
      <div className="bg-black/60 backdrop-blur-md px-6 py-4 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
            AARPU 2.5D INTERACTIVE ENGINE &bull; {product.name}
          </span>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-mono">
          <button
            onClick={() => setViewMode('OPERATIONAL')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'OPERATIONAL'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2.5D OPERATIONAL SHOWROOM
          </button>
          <button
            onClick={() => setViewMode('EXPLODED')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'EXPLODED'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            EXPLODED ASSEMBLY
          </button>
          <button
            onClick={() => setViewMode('CROSS_SECTION')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              viewMode === 'CROSS_SECTION'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PROFILE CROSS-SECTION
          </button>
        </div>
      </div>

      {/* Main Visualizer Stage */}
      <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-b from-[#090b0e] via-[#11141c] to-[#0d0f14] flex items-center justify-center p-6 overflow-hidden">
        
        {/* Subtle Architectural Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* 1. OPERATIONAL VIEW MODE */}
        {viewMode === 'OPERATIONAL' && (
          <div className="relative w-full max-w-4xl h-[380px] sm:h-[420px] flex items-center justify-center">
            
            {/* Outer Structural Aluminium Frame Bounds */}
            <div className="absolute inset-x-8 inset-y-6 border-4 border-slate-700/80 rounded-2xl bg-black/40 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Top Rail Track */}
              <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 border-b border-slate-500/50 flex items-center px-4 justify-between">
                <span className="text-[9px] font-mono text-slate-400">CONCEALED TOP TRACK RAIL</span>
                <span className="text-[9px] font-mono text-emerald-400">EPDM DUST SEAL</span>
              </div>

              {/* Central Opening Area */}
              <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
                
                {/* Background Wall / Interior View simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 flex items-center justify-center">
                  <div className="text-center space-y-2 opacity-30">
                    <span className="text-4xl font-display text-white font-bold">AARPU LUXURY VILLA</span>
                    <p className="text-xs font-mono text-slate-300">Panorama Interior View</p>
                  </div>
                </div>

                {/* SLIDING MECHANISM RENDER */}
                {mechanism === 'sliding' && (
                  <div className="relative w-full h-full flex items-center">
                    
                    {/* Fixed Glass Panel (Left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-sky-500/10 border-2 border-sky-300/30 backdrop-blur-xs flex items-center justify-center">
                      {/* Glass Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                      <div className="border border-sky-200/20 px-3 py-1 rounded bg-black/40 text-[10px] font-mono text-sky-200">
                        FIXED SASH PANEL
                      </div>
                    </div>

                    {/* Active Sliding Glass Panel (Right to Left Motion) */}
                    <motion.div
                      animate={{
                        x: motionState === 'SLIDE' 
                          ? '-65%' 
                          : motionState === 'INTERLOCK' 
                          ? '-30%' 
                          : '0%',
                        rotateY: motionState === 'TILT' ? -5 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                      className="absolute right-0 top-0 bottom-0 w-1/2 bg-sky-400/20 border-2 border-sky-300/50 backdrop-blur-sm shadow-2xl flex items-center justify-center"
                    >
                      {/* Glass Diagonal Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none" />
                      
                      {/* Interlock Left Edge Indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-3 transition-colors ${
                        motionState === 'INTERLOCK' || motionState === 'SEAL' ? 'bg-amber-400' : 'bg-slate-400'
                      }`}>
                        <div className="h-full flex flex-col justify-around items-center">
                          <div className="w-1 h-3 bg-black/50 rounded-full" />
                          <div className="w-1 h-3 bg-black/50 rounded-full" />
                          <div className="w-1 h-3 bg-black/50 rounded-full" />
                        </div>
                      </div>

                      {/* Roller Motion Indicator */}
                      <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-black/80 px-2 py-1 rounded text-[10px] font-mono text-amber-300 border border-amber-400/30">
                        <div className={`w-2 h-2 rounded-full ${motionState === 'SLIDE' ? 'bg-amber-400 animate-ping' : 'bg-slate-500'}`} />
                        <span>{specs.interlockFaceWidth} SIGHTLINE</span>
                      </div>

                      {/* Center Label */}
                      <div className="border border-white/30 px-3 py-1 rounded bg-black/60 text-[10px] font-mono text-white">
                        ACTIVE OPERATING SASH
                      </div>
                    </motion.div>

                    {/* Interlock Overlay Glow when Interlocked or Locked */}
                    {(motionState === 'INTERLOCK' || motionState === 'SEAL' || motionState === 'LOCK') && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-12 bg-amber-400/20 border-x border-amber-400/50 flex flex-col items-center justify-center gap-2 pointer-events-none"
                      >
                        <span className="bg-amber-400 text-black px-1.5 py-0.5 text-[8px] font-mono font-bold rounded">
                          INTERLOCK SEALED
                        </span>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* SWING / CASEMENT MECHANISM RENDER */}
                {mechanism === 'swing' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotateY: motionState === 'SWING_OUT' ? -45 : 0,
                        rotateX: motionState === 'TILT' ? 12 : 0,
                        scale: motionState === 'SEAL' ? 0.98 : 1
                      }}
                      transition={{ type: 'spring', stiffness: 50, damping: 14 }}
                      style={{ transformOrigin: 'left center' }}
                      className="w-3/4 h-5/6 bg-sky-400/15 border-4 border-slate-300 rounded-xl backdrop-blur-md shadow-2xl relative flex items-center justify-center"
                    >
                      {/* Glass Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none" />

                      {/* Hinge Points on Left */}
                      <div className="absolute left-0 top-6 w-2 h-8 bg-amber-400 rounded-r border border-black/50" />
                      <div className="absolute left-0 bottom-6 w-2 h-8 bg-amber-400 rounded-r border border-black/50" />

                      {/* Handle on Right */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-12 bg-white rounded-full shadow-lg border border-black/50 flex items-center justify-center">
                        <div className="w-1 h-3 bg-slate-800 rounded-full" />
                      </div>

                      <div className="text-center bg-black/70 p-3 rounded-xl border border-white/20 font-mono text-xs">
                        <span className="text-amber-300 font-bold block">{product.name}</span>
                        <span className="text-[10px] text-slate-300">
                          {motionState === 'TILT' ? '15° Micro-Ventilation Tilt Active' : motionState === 'SWING_OUT' ? 'Pivoted Outward on Friction Stay' : 'Casement Sealed'}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* CURTAIN WALL MECHANISM RENDER */}
                {mechanism === 'curtainwall' && (
                  <div className="relative w-full h-full grid grid-cols-3 gap-2 p-4">
                    {[1, 2, 3, 4, 5, 6].map((cell) => (
                      <motion.div
                        key={cell}
                        animate={{
                          scale: motionState === 'SLIDE' && cell === 2 ? 1.05 : 1,
                          rotateY: motionState === 'SWING_OUT' && cell === 2 ? -25 : 0
                        }}
                        className={`relative border-2 ${cell === 2 ? 'border-amber-400 bg-sky-400/25' : 'border-slate-600 bg-sky-500/10'} rounded-lg backdrop-blur-xs flex items-center justify-center`}
                      >
                        <div className="text-[9px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                          {cell === 2 ? 'OPENABLE VENT MODULE' : `CW MODULE 0${cell}`}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

              </div>

              {/* Bottom Track Rail & Rollers */}
              <div className="h-8 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 border-t border-slate-500/50 flex items-center justify-between px-6">
                <span className="text-[10px] font-mono text-amber-300 font-bold">
                  FLUSH ZERO-THRESHOLD BOTTOM RAIL
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  MAX SASH: {specs.maxWeightPerSash}
                </span>
              </div>
            </div>

            {/* Hotspots Overlay */}
            {hotspots && hotspots.map((hs) => (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot?.id === hs.id ? null : hs)}
                  className="relative group cursor-pointer"
                >
                  <span className="absolute -inset-2 bg-amber-400/30 rounded-full animate-ping" />
                  <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-black flex items-center justify-center text-black font-bold text-xs shadow-lg group-hover:scale-125 transition-transform">
                    +
                  </div>
                </button>
              </div>
            ))}

            {/* Active Hotspot Info Card */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute z-40 bottom-4 left-6 right-6 md:left-auto md:right-8 md:max-w-sm bg-black/90 backdrop-blur-xl border border-amber-400/40 p-4 rounded-2xl shadow-2xl space-y-2 text-xs font-mono"
                >
                  <div className="flex items-center justify-between text-amber-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeHotspot.title}
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-slate-400 hover:text-white cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    {activeHotspot.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}

        {/* 2. EXPLODED ASSEMBLY VIEW */}
        {viewMode === 'EXPLODED' && (
          <div className="relative w-full max-w-4xl py-6 flex flex-col items-center justify-center space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                EXPLODED ENGINEERING DIAGRAM & ASSEMBLY
              </span>
              <p className="text-xs text-slate-400">
                Visualizing how individual profile extrusions, glass panes, interlocks and roller carriages assemble together.
              </p>
            </div>

            <div className="w-full space-y-3 font-mono text-xs">
              {explodedComponents && explodedComponents.map((comp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-8 rounded border border-white/30 shrink-0"
                      style={{ backgroundColor: comp.color }}
                    />
                    <div>
                      <span className="text-amber-300 font-bold block">{comp.name}</span>
                      <span className="text-[10px] text-slate-400">{comp.depth}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-black/60 text-slate-300 px-3 py-1 rounded-full border border-white/10">
                    LAYER 0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. PROFILE CROSS-SECTION VIEW */}
        {viewMode === 'CROSS_SECTION' && (
          <div className="relative w-full max-w-3xl py-6 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                TECHNICAL ALUMINIUM PROFILE CROSS-SECTION
              </span>
              <p className="text-xs text-slate-400">
                Authoritative CAD profile drawing showing glass pocket alignment, thermal polyamide break and internal screw geometry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* CAD Cross-Section Graphic */}
              <div className="bg-black/80 border-2 border-slate-700 p-6 rounded-2xl space-y-4 font-mono text-[11px]">
                <div className="text-amber-300 font-bold border-b border-white/10 pb-2">
                  CAD PROFILE SPECS
                </div>
                {crossSectionData && Object.entries(crossSectionData).map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center border-b border-white/5 py-1.5">
                    <span className="text-slate-400 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-white font-bold">{v}</span>
                  </div>
                ))}
              </div>

              {/* Architectural Technical Detail Card */}
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                <span className="text-amber-300 font-bold block">
                  ENGINEERING HIGHLIGHTS
                </span>
                <ul className="space-y-2 text-slate-300 font-sans text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&bull;</span>
                    <span>High-tensile 6063-T6 architectural aluminium extrusions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&bull;</span>
                    <span>PA66 polyamide thermal break strips preventing thermal bridging.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&bull;</span>
                    <span>Concealed drainage channels for rapid rainwater discharge.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Bottom Interactive Sequence Controls (for Operational Mode) */}
      {viewMode === 'OPERATIONAL' && (
        <div className="bg-black/80 p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          
          <div className="flex items-center gap-2">
            <span className="text-slate-400 uppercase tracking-wider text-[10px]">
              MOTION SEQUENCE:
            </span>
            <span className="text-amber-300 font-bold uppercase">
              {motionState.replace('_', ' ')}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {motionButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setMotionState(btn.id)}
                className={`px-4 py-2 rounded-xl border transition-all cursor-pointer font-mono text-xs uppercase ${
                  motionState === btn.id
                    ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-white text-black font-bold px-5 py-2 rounded-xl hover:bg-slate-200 transition-colors uppercase tracking-wider text-[11px] shrink-0 cursor-pointer"
          >
            SPEC THIS SYSTEM
          </button>
        </div>
      )}

    </div>
  );
}
