import React from 'react';
import { Settings, Sliders, Sparkles, Layers, Lock, Wrench, CheckCircle2 } from 'lucide-react';

export default function ProductFeatures({ features }) {
  if (!features || features.length === 0) return null;

  // Icon mapping helper based on feature keywords
  const getFeatureIcon = (feature) => {
    const text = feature.toLowerCase();
    if (text.includes('security') || text.includes('secure') || text.includes('lock')) return Lock;
    if (text.includes('maintenance') || text.includes('clean') || text.includes('wrench')) return Wrench;
    if (text.includes('flexib') || text.includes('config') || text.includes('versatil')) return Settings;
    if (text.includes('slid') || text.includes('operat') || text.includes('smooth')) return Sliders;
    if (text.includes('aesthet') || text.includes('modern') || text.includes('finish')) return Sparkles;
    if (text.includes('capacity') || text.includes('load') || text.includes('heavy') || text.includes('glass')) return Layers;
    return CheckCircle2;
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-[#FF393B]" />
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
          FEATURES
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature, idx) => {
          const Icon = getFeatureIcon(feature);
          const numberStr = (idx + 1).toString().padStart(2, '0');

          return (
            <div
              key={idx}
              className="bg-white border border-[#E2E2E2] p-4 rounded-xl space-y-2 flex flex-col justify-between hover:border-[#171717] transition-all duration-300 shadow-2xs hover:shadow-xs group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#FF393B]">
                  {numberStr}
                </span>
                <Icon className="w-4 h-4 text-[#171717] group-hover:text-[#FF393B] transition-colors" />
              </div>

              <h3 className="text-xs font-bold text-[#171717] leading-snug">
                {feature}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
