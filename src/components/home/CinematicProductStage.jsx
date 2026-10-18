import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Maximize2, RotateCcw, Info, Check, ShieldCheck } from 'lucide-react';

export default function CinematicProductStage({
  scene,
  currentStepIndex,
  isExploded,
  activeHotspot,
  onHotspotClick,
  onToggleExploded,
  onNextStep,
  onPrevStep
}) {
  const stepData = scene.animationSteps[currentStepIndex] || scene.animationSteps[0];
  const mechanism = scene.mechanismType;
  const isExplodedMode = isExploded || stepData.viewType === 'exploded';

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] bg-white rounded-2xl border border-[#E2E2E2] shadow-xs overflow-hidden flex flex-col justify-between p-4 sm:p-8 select-none text-[#171717]">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architecture-grid opacity-50 pointer-events-none" />

      {/* TOP HUD BAR */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 bg-[#F7F7F7] backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E2E2E2] text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#FF393B]" />
          <span className="text-[#FF393B] font-bold uppercase tracking-wider text-[11px]">
            {scene.name}
          </span>
          <span className="text-[#8A8A8A] hidden sm:inline">&bull;</span>
          <span className="text-[#5F5F5F] hidden sm:inline text-[10px]">
            STEP 0{currentStepIndex + 1} / 0{scene.animationSteps.length} &bull; {stepData.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleExploded}
            className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isExplodedMode
                ? 'bg-[#FF393B] text-white border-[#FF393B]'
                : 'bg-white text-[#171717] border-[#E2E2E2] hover:border-[#FF393B] hover:text-[#FF393B]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{isExplodedMode ? 'ASSEMBLE VIEW' : 'EXPLODED ASSEMBLY'}</span>
          </button>
        </div>
      </div>

      {/* MAIN CINEMATIC STAGE */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center my-4 overflow-hidden">
        
        {/* ASSEMBLED MODE VISUALIZER */}
        {!isExplodedMode && (
          <div className="relative w-full max-w-3xl h-[340px] sm:h-[400px] flex items-center justify-center">
            
            {/* Outer Architectural Frame Chassis */}
            <div className="absolute inset-x-4 sm:inset-x-12 inset-y-4 border-2 border-[#E2E2E2] rounded-xl bg-[#F7F7F7] shadow-xs flex flex-col justify-between overflow-hidden">
              
              {/* Top Track & Ceiling Recess */}
              <div className="h-6 bg-[#EEEEEE] border-b border-[#E2E2E2] flex items-center justify-between px-4 text-[9px] font-mono text-[#5F5F5F]">
                <span>CONCEALED TOP RAIL</span>
                <span className="text-[#FF393B] font-semibold">PA66 THERMAL BREAK</span>
              </div>

              {/* Interior Vista Canvas */}
              <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
                
                {/* Background Architectural View */}
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                  <div className="text-center space-y-1 opacity-20 pointer-events-none">
                    <span className="text-2xl font-display font-bold text-[#171717] tracking-widest">
                      AARPU ARCHITECTURAL SYSTEM
                    </span>
                    <p className="text-[10px] font-mono text-[#5F5F5F]">
                      Precision Glass Profile Elevation
                    </p>
                  </div>
                </div>

                {/* --- A. SLIDING MECHANISM --- */}
                {mechanism === 'sliding' && (
                  <div className="relative w-full h-full flex items-center">
                    
                    {/* Fixed Pane (Left) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-sky-50 border-r-2 border-[#E2E2E2] flex items-center justify-center">
                      <span className="text-[9px] font-mono bg-white px-2.5 py-1 rounded text-[#5F5F5F] border border-[#E2E2E2]">
                        FIXED SASH PANEL
                      </span>
                    </div>

                    {/* Active Sliding Sash */}
                    <motion.div
                      animate={{
                        x: stepData.sashOffset ? `-${stepData.sashOffset}%` : '0%',
                        scale: stepData.highlightTarget === 'glass' ? 1.02 : 1
                      }}
                      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                      className="absolute right-0 top-0 bottom-0 w-1/2 bg-sky-100/50 border-2 border-[#FF393B]/40 shadow-xs flex items-center justify-center"
                    >
                      {/* Interlock Edge Indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-3 transition-colors ${
                        stepData.highlightTarget === 'interlock' ? 'bg-[#FF393B]' : 'bg-[#8A8A8A]'
                      }`}>
                        <div className="h-full flex flex-col justify-around items-center opacity-60">
                          <div className="w-1 h-3 bg-white rounded-full" />
                          <div className="w-1 h-3 bg-white rounded-full" />
                          <div className="w-1 h-3 bg-white rounded-full" />
                        </div>
                      </div>

                      {/* Sliding Direction Tag */}
                      {stepData.sashOffset > 0 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#FF393B] px-3 py-1 rounded-full border border-[#D92F32] text-[10px] font-mono text-white shadow-xs flex items-center gap-1.5 animate-pulse">
                          <span>&larr; SLIDE MOTION &rarr;</span>
                        </div>
                      )}

                      <span className="text-[9px] font-mono bg-white px-2.5 py-1 rounded text-[#171717] border border-[#E2E2E2]">
                        ACTIVE OPERATING SASH
                      </span>
                    </motion.div>

                  </div>
                )}

                {/* --- B. SWING / CASEMENT MECHANISM --- */}
                {mechanism === 'swing' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotateY: stepData.swingAngle || 0,
                        rotateX: stepData.tiltAngle || 0,
                        scale: stepData.highlightTarget === 'lock' ? 0.98 : 1
                      }}
                      transition={{ type: 'spring', stiffness: 45, damping: 12 }}
                      style={{ transformOrigin: 'left center', perspective: 1000 }}
                      className="w-3/4 h-5/6 bg-sky-100/50 border-3 border-[#171717] rounded-xl shadow-xs relative flex items-center justify-center"
                    >
                      {/* Hinge Points */}
                      <div className={`absolute left-0 top-6 w-2.5 h-10 rounded-r border border-[#171717] transition-colors ${
                        stepData.highlightTarget === 'hinge' ? 'bg-[#FF393B]' : 'bg-[#8A8A8A]'
                      }`} />
                      <div className={`absolute left-0 bottom-6 w-2.5 h-10 rounded-r border border-[#171717] transition-colors ${
                        stepData.highlightTarget === 'hinge' ? 'bg-[#FF393B]' : 'bg-[#8A8A8A]'
                      }`} />

                      {/* Handle */}
                      <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-14 rounded-full border border-[#171717] flex items-center justify-center transition-colors ${
                        stepData.highlightTarget === 'lock' ? 'bg-[#FF393B]' : 'bg-white'
                      }`}>
                        <div className="w-1 h-4 bg-[#171717] rounded-full" />
                      </div>

                      <div className="text-center bg-white px-4 py-2 rounded-xl border border-[#E2E2E2] font-mono text-xs">
                        <span className="text-[#FF393B] font-bold block">{scene.name}</span>
                        <span className="text-[10px] text-[#5F5F5F] block mt-0.5">
                          {stepData.tiltAngle ? '15° Micro-Ventilation Active' : stepData.swingAngle ? 'Outward Swing Active' : 'Casement Sealed'}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* --- C. CURTAIN WALL MECHANISM --- */}
                {mechanism === 'curtainwall' && (
                  <motion.div 
                    animate={{
                      scale: stepData.cameraFocus === 'building' ? 0.9 : stepData.cameraFocus === 'facade' ? 1.05 : 1.2
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full grid grid-cols-3 gap-2 p-4"
                  >
                    {[1, 2, 3, 4, 5, 6].map((cell) => (
                      <motion.div
                        key={cell}
                        animate={{
                          rotateY: stepData.ventAngle && cell === 2 ? stepData.ventAngle : 0,
                          scale: stepData.highlightTarget === 'vent' && cell === 2 ? 1.05 : 1
                        }}
                        style={{ transformOrigin: 'top center' }}
                        className={`relative border-2 ${cell === 2 ? 'border-[#FF393B] bg-red-50' : 'border-[#E2E2E2] bg-sky-50/50'} rounded-lg flex items-center justify-center shadow-xs`}
                      >
                        <div className="text-[9px] font-mono text-[#171717] bg-white px-2 py-0.5 rounded border border-[#E2E2E2]">
                          {cell === 2 ? 'OPENABLE VENT MODULE' : `CW MODULE 0${cell}`}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              </div>

              {/* Bottom Rail Threshold */}
              <div className="h-8 bg-[#EEEEEE] border-t border-[#E2E2E2] flex items-center justify-between px-4 text-[10px] font-mono">
                <span className="text-[#FF393B] font-bold">FLUSH ZERO-THRESHOLD BOTTOM TRACK</span>
                <span className="text-[#5F5F5F]">MAX SASH: {scene.specifications.maxWeightPerSash || '380 Kg'}</span>
              </div>

            </div>

            {/* Hotspots Overlay */}
            {scene.hotspots && scene.hotspots.map((hs) => (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  onClick={() => onHotspotClick(activeHotspot?.id === hs.id ? null : hs)}
                  className="relative group cursor-pointer"
                  aria-label={hs.title}
                >
                  <span className="absolute -inset-2 bg-[#FF393B]/20 rounded-full animate-ping" />
                  <div className="px-2.5 py-1 rounded-full bg-[#FF393B] text-white font-mono font-bold text-[10px] shadow-xs group-hover:scale-105 transition-transform flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>{hs.label}</span>
                  </div>
                </button>
              </div>
            ))}

            {/* Active Hotspot Modal */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute z-40 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xs bg-white border border-[#FF393B] p-4 rounded-xl shadow-lg space-y-2 text-xs font-mono"
                >
                  <div className="flex items-center justify-between text-[#FF393B] font-bold">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeHotspot.title}
                    </span>
                    <button
                      onClick={() => onHotspotClick(null)}
                      className="text-[#8A8A8A] hover:text-[#171717] cursor-pointer text-base"
                    >
                      &times;
                    </button>
                  </div>
                  <p className="text-[#5F5F5F] leading-relaxed font-sans text-xs">
                    {activeHotspot.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}

        {/* EXPLODED MODE */}
        {isExplodedMode && (
          <div className="relative w-full max-w-2xl py-2 space-y-3 font-mono text-xs">
            <div className="text-center space-y-1 mb-4">
              <span className="text-xs font-mono text-[#FF393B] uppercase tracking-widest font-bold">
                EXPLODED ENGINEERING ASSEMBLY & COMPONENT LAYERS
              </span>
              <p className="text-[11px] font-sans text-[#5F5F5F]">
                Component separation breakdown for {scene.name}.
              </p>
            </div>

            <div className="space-y-2.5">
              {scene.explodedLayers && scene.explodedLayers.map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-[#F7F7F7] p-3.5 rounded-xl border border-[#E2E2E2] hover:border-[#FF393B] transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3.5 h-7 rounded border border-[#E2E2E2] shrink-0"
                      style={{ backgroundColor: layer.color || '#FF393B' }}
                    />
                    <div>
                      <span className="text-[#FF393B] font-bold text-xs block">{layer.name}</span>
                      <span className="text-[10px] text-[#5F5F5F]">{layer.depthLabel}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white text-[#171717] px-2.5 py-1 rounded-md border border-[#E2E2E2] font-bold shrink-0">
                    LAYER 0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F7F7F7] px-5 py-3 rounded-xl border border-[#E2E2E2] text-xs font-mono">
        
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevStep}
            disabled={currentStepIndex === 0}
            className="btn-aarpu-secondary text-[10px] px-3 py-1.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            &larr; PREV STEP
          </button>
          
          <button
            onClick={onNextStep}
            disabled={currentStepIndex === scene.animationSteps.length - 1}
            className="btn-aarpu-primary text-[10px] px-4 py-1.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            NEXT STEP &rarr;
          </button>
        </div>

        <div className="text-[#5F5F5F] text-[10px] text-center sm:text-right">
          <span className="text-[#FF393B] font-bold">{stepData.code}</span>: {stepData.desc}
        </div>

      </div>

    </div>
  );
}
