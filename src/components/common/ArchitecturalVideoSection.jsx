import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

/**
 * Premium Architectural Video Component
 * Designed for Aarpu's minimalist architectural visual identity.
 *
 * Supports:
 * - 'cinematic': Expansive full-width or near full-bleed with cinematic backdrop & minimal floating badge
 * - 'card': Pristine rounded architectural container with optional text header/description
 * - 'split': 2-column layout with video alongside architectural narrative
 */
export default function ArchitecturalVideoSection({
  src,
  poster,
  badge = "AARPU ARCHITECTURAL CINEMA",
  title,
  subtitle,
  description,
  variant = "card", // "cinematic" | "card" | "split"
  aspectRatio = "aspect-[16/9]",
  autoPlayInView = true,
  className = "",
  id,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // IntersectionObserver to gracefully auto-play when in view and pause when out of view
  useEffect(() => {
    if (!autoPlayInView || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {
            // Autoplay policy prevented playback, keep paused state
            setIsPlaying(false);
          });
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlayInView]);

  // Track playback progress
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  // Video Frame with Controls
  const renderVideoPlayer = (customAspect = aspectRatio) => (
    <div
      ref={containerRef}
      className={`group relative w-full ${customAspect} bg-[#111111] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 shadow-md transition-all duration-300`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted={isMuted}
        loop
        autoPlay
        controlsList="nodownload"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover select-none cursor-pointer"
        aria-label={title || "Aarpu architectural video"}
      />

      {/* Subtle top and bottom dark gradient overlay for control visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Floating Badge */}
      {badge && (
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-medium tracking-wider text-white/90 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF393B] animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10 flex items-center justify-between pointer-events-auto">
        {/* Left: Play/Pause and Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            )}
          </button>

          {subtitle && (
            <span className="hidden sm:inline-block text-xs font-mono font-medium tracking-wide text-white/80 uppercase backdrop-blur-xs px-2.5 py-1 rounded bg-black/30">
              {subtitle}
            </span>
          )}
        </div>

        {/* Right: Audio and Fullscreen */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#FF393B]" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            title="Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Track at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 overflow-hidden">
        <div
          className="h-full bg-[#FF393B] transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  // Variant 1: "cinematic" (Full-width / Panoramic Band with minimal container or edge-to-edge)
  if (variant === "cinematic") {
    return (
      <section
        id={id}
        className={`w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E2E2] text-[#171717] overflow-hidden ${className}`}
      >
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto space-y-6 sm:space-y-8">
          {(title || description) && (
            <div className="text-center max-w-3xl mx-auto space-y-2.5 px-4">
              {subtitle && (
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF393B]">
                  {subtitle}
                </div>
              )}
              {title && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Cinematic Large Video Player */}
          {renderVideoPlayer("aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1]")}
        </div>
      </section>
    );
  }

  // Variant 2: "split" (Side-by-side video and architectural text)
  if (variant === "split") {
    return (
      <section
        id={id}
        className={`py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E2E2] text-[#171717] overflow-hidden ${className}`}
      >
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Video Side (7 cols) */}
            <div className="lg:col-span-7">
              {renderVideoPlayer("aspect-[16/10] sm:aspect-[16/9]")}
            </div>

            {/* Narrative Side (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              {subtitle && (
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF393B]">
                  {subtitle}
                </div>
              )}
              {title && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-tight text-[#171717] leading-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed text-justify">
                  {description}
                </p>
              )}

              {/* Architectural Highlights Pills */}
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-wider text-[#171717]">
                <span className="px-3 py-1.5 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2]">
                  18mm Sightline
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2]">
                  Structural Thermal Break
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#F7F7F7] border border-[#E2E2E2]">
                  Zero-Threshold Track
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant 3: "card" (Centered framed architecture card)
  return (
    <section
      id={id}
      className={`py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E2E2] text-[#171717] overflow-hidden ${className}`}
    >
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto space-y-6 sm:space-y-8">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto space-y-2.5 px-4">
            {subtitle && (
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF393B]">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-tight text-[#171717] leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Video Player */}
        <div className="w-full">
          {renderVideoPlayer(aspectRatio)}
        </div>
      </div>
    </section>
  );
}
