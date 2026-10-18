"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

export const defaultHeroSlides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    title: "Luxoria Ultra-Slim",
    description: "18mm sightline motorized panoramic sliding glass systems.",
    badge: "Minimal Sliding",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    title: "Pivot Grand Entrance",
    description: "Zero-threshold oversized architectural pivot door systems.",
    badge: "Pivot Doors",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    title: "Thermal-Break Facades",
    description: "Acoustic insulated structural glass curtain walls.",
    badge: "Curtain Walls",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    title: "VividSlide Motorized",
    description: "App and remote controlled automated pocket sliding doors.",
    badge: "Smart Automation",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "Arch & Curved Glass",
    description: "Custom bent aluminium profiles with panoramic radius view.",
    badge: "Curved Systems",
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  rotateYMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 120,
      yMultiplier: 4,
      rotationMultiplier: 0,
      rotateYMultiplier: -14,
      scaleReduction: 0.05,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 175,
      yMultiplier: 6,
      rotationMultiplier: 0,
      rotateYMultiplier: -18,
      scaleReduction: 0.07,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 230,
    yMultiplier: 8,
    rotationMultiplier: 0,
    rotateYMultiplier: -22,
    scaleReduction: 0.08,
  };
};

interface CarouselStackedProps {
  slides?: Slide[];
  className?: string;
  autoRotateSpeed?: number;
}

export const CarouselStacked = ({
  slides = defaultHeroSlides,
  className = "",
  autoRotateSpeed = 0.6,
}: CarouselStackedProps) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const isHoveredRef = React.useRef(false);
  const isDraggingRef = React.useRef(false);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous auto-rotation with hover pause
  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && !isDraggingRef.current && delta < 0.1) {
        scrollProgress.set(scrollProgress.get() + delta * autoRotateSpeed);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollProgress, autoRotateSpeed]);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const handleDragStart = () => {
    isDraggingRef.current = true;
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    isDraggingRef.current = false;
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-0 sm:py-1 overflow-hidden select-none",
        className
      )}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onTouchStart={() => {
        isHoveredRef.current = true;
      }}
      onTouchEnd={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-7xl h-72 sm:h-92 md:h-108 lg:h-120 flex items-center justify-center"
      >
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card: React.FC<CardProps> = ({ slide, index, total, progress, config }) => {
  const offset = useTransform(progress, (p: number) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o: number) => o * config.xMultiplier);
  const rotateY = useTransform(offset, (o: number) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotateYMultiplier;
  });
  const rotate = useTransform(offset, (o: number) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o: number) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o: number) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o: number) =>
    Math.round(100 - Math.abs(o) * 10),
  );

  return (
    <motion.div
      style={{
        x,
        y,
        rotateY,
        rotate,
        scale,
        opacity,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 shadow-2xl group pointer-events-none",
        "w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-104",
      )}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.4, 0.15, 0, 0.15, 0.4],
          ),
        }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* Top Badge Only - title and description removed */}
      <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20">
        <Badge className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FF393B] shadow-md border border-[#FF393B]/20">
          {slide.badge}
        </Badge>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
