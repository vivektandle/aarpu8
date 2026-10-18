import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders } from 'lucide-react';

const SIMULATOR_MODES = [
  {
    id: 'sliding',
    label: 'Door Sliding',
    title: '18mm Interlocking Slide',
    desc: 'Ultra-narrow 18mm vertical interlock sliding smoothly on stainless steel rollers.',
    sightline: '18 mm',
    weightCap: '800 kg',
    uValue: '1.1 W/m²K'
  },
  {
    id: 'opening',
    label: 'Pivot Door',
    title: 'AP 47 Grand Pivot',
    desc: 'Magnetic soft-close pivot hinge with zero bottom threshold obstruction.',
    sightline: 'Concealed',
    weightCap: '500 kg',
    uValue: '1.2 W/m²K'
  },
  {
    id: 'joining',
    label: 'Glass Joint',
    title: 'Invisible Glass Corner',
    desc: 'Structural silicone corner joining without vertical aluminum mullions.',
    sightline: '0 mm (Pure Glass)',
    weightCap: '1200 kg',
    uValue: '0.9 W/m²K'
  },
  {
    id: 'casement',
    label: 'Tilt & Turn',
    title: 'Acoustic Tilt & Turn',
    desc: 'Dual-action micro-ventilation tilt mechanism with quad-gasket sealing.',
    sightline: '32 mm',
    weightCap: '250 kg',
    uValue: '1.0 W/m²K'
  }
];

export default function InteractiveFrameSimulator() {
  const [activeMode, setActiveMode] = useState('sliding');
  const [sliderVal, setSliderVal] = useState(65);

  const currentConfig = SIMULATOR_MODES.find((m) => m.id === activeMode);

  return (
    <section className="py-12 px-6 bg-[#060709] border-t border-white/5 relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Compact Header */}
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#FF393B]">
            ENGINEERING LAB
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Interactive Frame Mechanics
          </h2>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SIMULATOR_MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => {
                setActiveMode(mode.id);
                setSliderVal(65);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border ${
                activeMode === mode.id
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-white/5 text-gray-300 hover:text-white border-white/10 hover:border-white/30'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Small Compact Simulator Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#0a0b0f] p-5 sm:p-6 rounded-2xl border border-white/15 shadow-xl">
          
          {/* Visual Canvas Area */}
          <div className="md:col-span-7 relative h-52 sm:h-60 rounded-xl bg-[#030406] border border-white/10 overflow-hidden flex flex-col justify-between p-4">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full relative flex items-center justify-center"
              >
                {/* Simulated Glass Panel Framework */}
                <div className="relative w-full max-w-sm h-36 border-2 border-gray-700 rounded-md p-1.5 bg-gradient-to-b from-blue-950/20 to-slate-900/40 overflow-hidden flex">
                  
                  {/* Fixed Wall/Frame */}
                  <div className="w-1/3 h-full border-r border-amber-400/80 bg-gray-900/80 flex flex-col justify-between p-1.5 text-[9px] font-mono text-amber-300">
                    <span>FRAME</span>
                    <div className="text-center">
                      <span className="block text-white font-bold">{currentConfig.sightline}</span>
                    </div>
                    <span>TRACK</span>
                  </div>

                  {/* Animated Moving Door Panel based on sliderVal */}
                  <motion.div
                    className="h-full border border-white/60 bg-gradient-to-r from-cyan-500/10 via-white/5 to-cyan-400/10 rounded relative flex items-center justify-center"
                    style={{
                      width: `${sliderVal}%`,
                      transformOrigin: activeMode === 'opening' ? 'left center' : 'center',
                      transform: activeMode === 'opening' ? `rotateY(${(100 - sliderVal) * 0.8}deg)` : 'none'
                    }}
                  >
                    <div className="text-center font-mono text-[10px] text-white bg-black/70 px-2 py-1 rounded border border-white/20 whitespace-nowrap">
                      {activeMode === 'sliding' && `Sliding: ${100 - sliderVal}%`}
                      {activeMode === 'opening' && `Angle: ${Math.round((100 - sliderVal) * 0.9)}°`}
                      {activeMode === 'joining' && `Joint: ${sliderVal}%`}
                      {activeMode === 'casement' && `Tilt: ${Math.round((100 - sliderVal) * 0.15)}°`}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Control */}
            <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
              <Sliders className="w-4 h-4 text-white shrink-0" />
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded appearance-none cursor-pointer accent-white"
              />
              <span className="text-white font-bold text-[11px] min-w-[2.5rem] text-right">
                {sliderVal}%
              </span>
            </div>
          </div>

          {/* Compact Info Panel */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              {currentConfig.title}
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              {currentConfig.desc}
            </p>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <span className="text-gray-400 block text-[9px]">SIGHTLINE</span>
                <span className="font-bold text-white">{currentConfig.sightline}</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <span className="text-gray-400 block text-[9px]">THERMAL</span>
                <span className="font-bold text-amber-400">{currentConfig.uValue}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
