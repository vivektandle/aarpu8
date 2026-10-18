"use client";

import React, { Ref, forwardRef, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { fill, className, style, alt = "", ...props },
  ref
) {
  return (
    <img
      ref={ref}
      alt={alt}
      className={cn(fill ? "w-full h-full object-cover" : "", className)}
      style={{ ...(fill ? { width: "100%", height: "100%", objectFit: "cover" } : {}), ...style }}
      {...props}
    />
  );
});
Image.displayName = "Image";

export type Direction = "left" | "right";

export interface PhotoItem {
  id: number | string;
  order?: number;
  x?: string | number;
  y?: string | number;
  zIndex?: number;
  direction?: Direction;
  src: string;
  title?: string;
  category?: string;
  slug?: string;
  onClick?: () => void;
}

export const PhotoGallery = ({
  animationDelay = 0.2,
  title = "Welcome to Our Stories",
  titleHighlight = "Stories",
  subtitle,
  buttonText = "See More Products",
  onButtonClick,
  photosData,
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight",
  photoWidth = 280,
  photoHeight = 350,
  showImageDetails = true,
}: {
  animationDelay?: number;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  photosData?: PhotoItem[];
  titleClassName?: string;
  photoWidth?: number;
  photoHeight?: number;
  showImageDetails?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, [animationDelay]);

  const defaultPhotos: PhotoItem[] = [
    {
      id: 1,
      order: 0,
      direction: "left" as Direction,
      src: "/images/Final_Images/image1.jpeg",
      title: "AP Slide 18 Luxoria",
      category: "Minimal Sliding",
    },
    {
      id: 2,
      order: 1,
      direction: "left" as Direction,
      src: "/images/Final_Images/image10.jpeg",
      title: "Standard Line Swing 38",
      category: "Casement Windows",
    },
    {
      id: 3,
      order: 2,
      direction: "right" as Direction,
      src: "/images/Final_Images/image13.jpeg",
      title: "AP Pivot 47 Monumental",
      category: "Pivot Doors",
    },
    {
      id: 4,
      order: 3,
      direction: "right" as Direction,
      src: "/images/Final_Images/image4.jpeg",
      title: "Curtain Wall 34",
      category: "Curtain Wall Systems",
    },
    {
      id: 5,
      order: 4,
      direction: "left" as Direction,
      src: "/images/Final_Images/image15.jpeg",
      title: "AP Corner Joint 00",
      category: "Structural Corner Glass",
    },
  ];

  const photos = photosData && photosData.length > 0 ? photosData : defaultPhotos;

  const cardWidth = photoWidth;
  const cardHeight = photoHeight;

  return (
    <div className="w-full relative">
      {/* Title & Quick Navigation Header - minimal gap below */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-1 sm:mb-2">
        {subtitle && (
          <p className="mb-1 text-center text-xs sm:text-sm font-mono font-medium uppercase tracking-widest text-[#5F5F5F]">
            {subtitle}
          </p>
        )}

        <div className="flex items-center justify-center">
          {/* Centered Heading */}
          <h2 className={`text-center ${titleClassName}`}>
            {titleHighlight && title.includes(titleHighlight) ? (
              <>
                {title.split(titleHighlight)[0]}
                <span className="text-[#FF393B] font-light">{titleHighlight}</span>
                {title.split(titleHighlight)[1]}
              </>
            ) : (
              title
            )}
          </h2>
        </div>
      </div>

      {/* 
        Photo Gallery Reel:
        - Images in a single horizontal row only
        - Little bit gap between images (gap-3 sm:gap-4 md:gap-5)
        - Clean upright presentation, no images one on another
        - Smooth horizontal scroll/drag with hidden scrollbar
      */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none py-3 sm:py-4 px-4 sm:px-6 md:px-8 select-none scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 w-max min-w-full justify-start">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="shrink-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: "easeOut",
              }}
            >
              <Photo
                width={cardWidth}
                height={cardHeight}
                src={photo.src}
                alt={photo.title || "Architectural System"}
                direction={photo.direction || (index % 2 === 0 ? "left" : "right")}
                title={showImageDetails ? photo.title : undefined}
                category={showImageDetails ? photo.category : undefined}
                onClick={photo.onClick}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Button Centered - Same Design as Enquiry Button */}
      <div className="flex w-full justify-center mt-3 sm:mt-4">
        <button
          type="button"
          onClick={onButtonClick}
          className="btn-aarpu-primary text-xs py-2 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

export const Photo = ({
  src,
  alt,
  className,
  width,
  height,
  title,
  category,
  onClick,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
  title?: string;
  category?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        width,
        height,
      }}
      className={cn(
        className,
        "relative shrink-0 transition-shadow duration-300",
        onClick ? "cursor-pointer" : "cursor-default"
      )}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl border border-[#E2E2E2] bg-neutral-900 transition-all duration-300">
        <MotionImage
          className={cn("rounded-2xl sm:rounded-3xl object-cover w-full h-full select-none pointer-events-none")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
        {title && (() => {
          const hasHyphen = typeof title === 'string' && title.includes(' - ');
          const displayTitle = !category && hasHyphen ? title.split(' - ')[0].trim() : title;
          const displayCategory = category || (hasHyphen ? title.split(' - ')[1].trim() : undefined);
          return (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end pointer-events-none">
              <h4 className="text-white text-sm sm:text-base font-bold font-display leading-tight">{displayTitle}</h4>
              {displayCategory && displayCategory !== displayTitle && (
                <p className="text-white/75 text-[11px] font-mono mt-0.5">{displayCategory}</p>
              )}
            </div>
          );
        })()}
      </div>
    </motion.div>
  );
};
