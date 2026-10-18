import React, { useRef, useEffect } from 'react';

/**
 * Pure Full-Width Video Banner Component
 * Fully edge-to-edge, zero buttons, zero text, zero timeline, zero badge.
 */
export default function FullWidthVideoBanner({
  src,
  height = "h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] xl:h-[640px]",
  id = "full-width-video-banner",
  playbackRate = 1.0,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, src]);

  return (
    <section
      id={id}
      className="w-full relative overflow-hidden bg-neutral-900 border-y border-[#E2E2E2]"
    >
      <div className={`w-full ${height} relative overflow-hidden`}>
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.playbackRate = playbackRate;
            }
          }}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
