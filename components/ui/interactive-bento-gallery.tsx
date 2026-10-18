"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// MediaItemType defines the structure of a media item
export interface MediaItemType {
  id: number | string;
  type: string;
  title?: string;
  desc?: string;
  url: string;
  span: string;
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({
  item,
  className,
}: {
  item: MediaItemType;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  // Intersection Observer to detect if video is in view and play/pause accordingly
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Handle video play/pause based on whether the video is in view or not
  useEffect(() => {
    let mounted = true;

    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return;

      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false);
          await videoRef.current.play();
        } else {
          setIsBuffering(true);
          await new Promise((resolve) => {
            if (videoRef.current) {
              videoRef.current.oncanplay = resolve;
            }
          });
          if (mounted) {
            setIsBuffering(false);
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.warn('Video playback failed:', error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [isInView]);

  // Render either a video or image based on item.type
  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden pointer-events-none select-none`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover pointer-events-none"
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: 'opacity 0.2s',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={item.url}
      alt={item.title || 'Gallery item'}
      className={`${className} object-cover pointer-events-none select-none`}
      loading="lazy"
      decoding="async"
    />
  );
};

export interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  title?: string;
  description?: string;
  className?: string;
  gridClassName?: string;
  onItemClick?: (item: MediaItemType) => void;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
  className = '',
  gridClassName = '',
  onItemClick,
}) => {
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    setItems(mediaItems);
  }, [mediaItems]);

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-4 text-center">
          {title && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#171717] tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              className="mt-1 text-xs text-[#5F5F5F]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      )}

      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 auto-rows-[48px] sm:auto-rows-[58px] md:auto-rows-[66px] lg:auto-rows-[72px] ${gridClassName}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {items.map((item, index) => {
          // Fast continuous floating & moving wave animation
          const duration = 1.6 + (index % 3) * 0.3;
          const yDist = index % 2 === 0 ? 7 : -7;
          const xDist = (index % 4 === 0 || index % 4 === 3) ? 4 : -4;

          return (
            <motion.div
              key={item.id}
              layoutId={`media-${item.id}`}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer border border-black/10 shadow-xs hover:shadow-xl transition-shadow group ${item.span}`}
              onClick={() => {
                if (!hasDraggedRef.current) {
                  onItemClick?.(item);
                }
              }}
              variants={{
                hidden: { y: 25, scale: 0.95, opacity: 0 },
                visible: {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 350,
                    damping: 25,
                    delay: index * 0.025,
                  },
                },
              }}
              animate={{
                y: isDragging ? 0 : [0, yDist, 0, -yDist * 0.7, 0],
                x: isDragging ? 0 : [0, xDist, 0, -xDist, 0],
                scale: isDragging ? 1 : [1, 1.012, 1, 0.992, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: duration,
                  ease: 'easeInOut',
                  times: [0, 0.28, 0.5, 0.78, 1],
                },
              }}
              whileHover={{ 
                scale: 1.04, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
              onDragStart={() => {
                setIsDragging(true);
                hasDraggedRef.current = true;
              }}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                const moveDistance = info.offset.x + info.offset.y;
                if (Math.abs(moveDistance) > 30) {
                  const newItems = [...items];
                  const draggedItem = newItems[index];
                  const targetIndex =
                    moveDistance > 0
                      ? Math.min(index + 1, items.length - 1)
                      : Math.max(index - 1, 0);
                  newItems.splice(index, 1);
                  newItems.splice(targetIndex, 0, draggedItem);
                  setItems(newItems);
                }
                // Reset drag flag after short tick so quick click fires cleanly
                setTimeout(() => {
                  hasDraggedRef.current = false;
                }, 50);
              }}
            >
              <MediaItem
                item={item}
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default InteractiveBentoGallery;
