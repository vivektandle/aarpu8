import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, RotateCcw, ArrowRight, ChevronRight, ArrowDownRight, Compass } from 'lucide-react';
import { HOME_PRODUCT_SCENES } from '../../constants/homeProductScenes';
import CinematicProductStage from './CinematicProductStage';
import SectionTitle from '../common/SectionTitle';

export default function CinematicProductFilm({ onOpenQuoteModal }) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const activeScene = HOME_PRODUCT_SCENES[activeSceneIndex];
  const stepCount = activeScene.animationSteps.length;
  const timerRef = useRef(null);

  // Auto-advance animation steps when playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < stepCount - 1) {
            return prev + 1;
          } else {
            setActiveSceneIndex((sPrev) => (sPrev + 1) % HOME_PRODUCT_SCENES.length);
            return 0;
          }
        });
      }, 3500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, stepCount]);

  const handleSceneSelect = (index) => {
    setActiveSceneIndex(index);
    setCurrentStepIndex(0);
    setIsExploded(false);
    setActiveHotspot(null);
  };

  const handleNextStep = () => {
    if (currentStepIndex < stepCount - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleSceneSelect((activeSceneIndex + 1) % HOME_PRODUCT_SCENES.length);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full bg-[#F7F7F7] text-[#171717] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-b border-[#E2E2E2]">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architecture-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* SECTION HEADER */}
        <SectionTitle
          number="04"
          eyebrow="ENGINEERING INTERACTION"
          title="Interactive Product Film & Mechanism Visualizer"
          subtitle="Explore the internal geometry, zero-threshold tracks and precision locking mechanisms behind Aarpu aluminium systems."
          centered
        />

        {/* PRODUCT SELECTOR TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#E2E2E2] pb-6">
          {HOME_PRODUCT_SCENES.map((scene, idx) => {
            const isActive = idx === activeSceneIndex;
            return (
              <button
                key={scene.id}
                onClick={() => handleSceneSelect(idx)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#FF393B] text-white border-[#FF393B] shadow-xs'
                    : 'bg-white text-[#5F5F5F] border-[#E2E2E2] hover:border-[#FF393B] hover:text-[#FF393B]'
                }`}
              >
                <span>
                  0{idx + 1} &bull;
                </span>
                <span>{scene.name}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN STAGE & SPECS MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 2.5D INTERACTIVE PRODUCT STAGE */}
          <div className="lg:col-span-8 w-full space-y-4">
            <CinematicProductStage
              scene={activeScene}
              currentStepIndex={currentStepIndex}
              isExploded={isExploded}
              activeHotspot={activeHotspot}
              onHotspotClick={setActiveHotspot}
              onToggleExploded={() => setIsExploded(!isExploded)}
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
            />

            {/* CONTROLS & STEP DOTS */}
            <div className="bg-white p-4 rounded-xl border border-[#E2E2E2] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn-aarpu-primary text-[10px] px-3.5 py-2 rounded-lg"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  <span>{isPlaying ? 'PAUSE FILM' : 'PLAY FILM'}</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentStepIndex(0);
                    setIsPlaying(true);
                  }}
                  className="p-2 rounded-lg border border-[#E2E2E2] bg-[#F7F7F7] text-[#5F5F5F] hover:text-[#FF393B] hover:border-[#FF393B] cursor-pointer"
                  title="Restart Scene"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Step Progress Dots */}
              <div className="flex items-center gap-1.5">
                {activeScene.animationSteps.map((step, sIdx) => (
                  <button
                    key={step.step}
                    onClick={() => setCurrentStepIndex(sIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      sIdx === currentStepIndex
                        ? 'w-8 bg-[#FF393B]'
                        : sIdx < currentStepIndex
                        ? 'w-2 bg-[#171717]'
                        : 'w-2 bg-[#E2E2E2]'
                    }`}
                    title={`Step ${step.step}: ${step.title}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT: SPECIFICATIONS PANEL */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E2E2E2] rounded-2xl p-6 space-y-6 shadow-xs">
              
              <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-4">
                <span className="px-3 py-1 bg-[#F7F7F7] text-[#FF393B] text-[10px] font-mono font-bold tracking-wider uppercase rounded-full border border-[#E2E2E2]">
                  {activeScene.badge}
                </span>
                <span className="text-[11px] font-mono text-[#8A8A8A]">
                  PRECISION SYSTEM
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-[#171717]">
                  {activeScene.name}
                </h3>
                <p className="text-xs text-[#FF393B] font-mono font-bold">
                  {activeScene.category}
                </p>
                <p className="text-xs text-[#5F5F5F] leading-relaxed font-sans pt-1">
                  {activeScene.tagline}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#8A8A8A] font-bold border-b border-[#E2E2E2] pb-2">
                  KEY SPECIFICATIONS
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-[#F7F7F7] p-3 rounded-xl border border-[#E2E2E2]">
                    <span className="text-[10px] text-[#8A8A8A] uppercase block">MAX HEIGHT</span>
                    <span className="text-[#171717] font-bold block mt-0.5">{activeScene.specifications.maxDimensions || 'Custom Height'}</span>
                  </div>

                  <div className="bg-[#F7F7F7] p-3 rounded-xl border border-[#E2E2E2]">
                    <span className="text-[10px] text-[#8A8A8A] uppercase block">SASH WEIGHT</span>
                    <span className="text-[#171717] font-bold block mt-0.5">{activeScene.specifications.maxWeightPerSash || '380 Kg'}</span>
                  </div>

                  <div className="bg-[#F7F7F7] p-3 rounded-xl border border-[#E2E2E2]">
                    <span className="text-[10px] text-[#8A8A8A] uppercase block">GLAZING DEPTH</span>
                    <span className="text-[#171717] font-bold block mt-0.5">{activeScene.specifications.glazing || '22-36 mm'}</span>
                  </div>

                  <div className="bg-[#F7F7F7] p-3 rounded-xl border border-[#E2E2E2]">
                    <span className="text-[10px] text-[#8A8A8A] uppercase block">INTERLOCK SIGHTLINE</span>
                    <span className="text-[#FF393B] font-bold block mt-0.5">
                      {activeScene.specifications.interlockWidth || activeScene.specifications.mullionFaceWidth || '18 mm'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E2E2E2]">
                <button
                  onClick={onOpenQuoteModal}
                  className="btn-aarpu-primary w-full py-3 text-xs"
                >
                  <span>Request System Specifications</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                <Link
                  to={`/products/${activeScene.slug}`}
                  className="btn-aarpu-secondary w-full py-3 text-xs text-center justify-center"
                >
                  <span>Explore Product Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
