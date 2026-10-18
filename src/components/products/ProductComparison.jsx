import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import { PRODUCTS_DATA } from '../../constants/productsData';

export default function ProductComparison() {
  const [selectedProd1, setSelectedProd1] = useState(PRODUCTS_DATA[0]?.id || 'ap-slide-18-luxoria');
  const [selectedProd2, setSelectedProd2] = useState(PRODUCTS_DATA[1]?.id || 'ap-slide-19-glissar');

  const p1 = PRODUCTS_DATA.find((p) => p.id === selectedProd1) || PRODUCTS_DATA[0];
  const p2 = PRODUCTS_DATA.find((p) => p.id === selectedProd2) || PRODUCTS_DATA[1];

  const getSpecValue = (p, key) => {
    if (!p || !p.specs) return 'N/A';
    return p.specs[key] || 'Technical detail available on request.';
  };

  const COMPARISON_ROWS = [
    { label: 'Max Recommended Dimensions', k1: getSpecValue(p1, 'maxDimensions'), k2: getSpecValue(p2, 'maxDimensions') },
    { label: 'Frame Visible Width', k1: getSpecValue(p1, 'frameVisibleWidth'), k2: getSpecValue(p2, 'frameVisibleWidth') },
    { label: 'Sash Depth', k1: getSpecValue(p1, 'sashDepth'), k2: getSpecValue(p2, 'sashDepth') },
    { label: 'Sash Visible Width', k1: getSpecValue(p1, 'sashVisibleWidth'), k2: getSpecValue(p2, 'sashVisibleWidth') },
    { label: 'Interlock Face Width', k1: getSpecValue(p1, 'interlockFaceWidth'), k2: getSpecValue(p2, 'interlockFaceWidth') },
    { label: 'System Type Architecture', k1: getSpecValue(p1, 'type'), k2: getSpecValue(p2, 'type') },
    { label: 'Max Weight per Sash', k1: getSpecValue(p1, 'maxWeightPerSash'), k2: getSpecValue(p2, 'maxWeightPerSash') },
    { label: 'Glazing Width Possibilities', k1: getSpecValue(p1, 'glazingWidthPossibilities'), k2: getSpecValue(p2, 'glazingWidthPossibilities') },
    { label: 'Sealing Type', k1: getSpecValue(p1, 'sealingType'), k2: getSpecValue(p2, 'sealingType') },
    { label: 'Maximum Locking Points', k1: getSpecValue(p1, 'maxLockingPoints'), k2: getSpecValue(p2, 'maxLockingPoints') }
  ];

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-black/10 shadow-sm space-y-8 text-[#1A1A1A]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-black/10 pb-6">
        <div className="flex items-center gap-3">
          <Sliders className="w-6 h-6 text-[#1A1A1A]" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-[#1A1A1A]">
              System Spec Matrix & Side-by-Side Comparison
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Compare authoritative engineering specifications across Aarpu minimal aluminium systems.
            </p>
          </div>
        </div>

        {/* Dropdown Selectors */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={selectedProd1}
            onChange={(e) => setSelectedProd1(e.target.value)}
            className="bg-slate-50 text-[#1A1A1A] font-mono text-xs px-4 py-2.5 rounded-xl border border-black/15 focus:outline-none cursor-pointer font-bold"
          >
            {PRODUCTS_DATA.map((p) => (
              <option key={p.id} value={p.id} className="bg-white text-[#1A1A1A]">
                {p.name}
              </option>
            ))}
          </select>

          <span className="text-xs font-mono text-slate-500 font-bold">VS</span>

          <select
            value={selectedProd2}
            onChange={(e) => setSelectedProd2(e.target.value)}
            className="bg-slate-50 text-[#1A1A1A] font-mono text-xs px-4 py-2.5 rounded-xl border border-black/15 focus:outline-none cursor-pointer font-bold"
          >
            {PRODUCTS_DATA.map((p) => (
              <option key={p.id} value={p.id} className="bg-white text-[#1A1A1A]">
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs text-slate-700">
          <thead>
            <tr className="border-b border-black/10 text-slate-500 font-bold">
              <th className="py-3.5 px-4 uppercase text-[11px] w-1/3">SPECIFICATION</th>
              <th className="py-3.5 px-4 uppercase text-[#1A1A1A] font-display text-sm md:text-base w-1/3 font-bold bg-slate-50/50">
                {p1.name}
              </th>
              <th className="py-3.5 px-4 uppercase text-[#1A1A1A] font-display text-sm md:text-base w-1/3 font-bold">
                {p2.name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {COMPARISON_ROWS.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-500">{row.label}</td>
                <td className="py-3.5 px-4 font-bold text-[#1A1A1A] bg-slate-50/30">{row.k1}</td>
                <td className="py-3.5 px-4 font-bold text-[#1A1A1A]">{row.k2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
