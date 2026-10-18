import React from 'react';

export default function ProductDescription({ product }) {
  return (
    <section className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl p-8 sm:p-12 space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
        ABOUT {product.name}
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] leading-relaxed font-sans max-w-4xl text-justify">
        {product.description}
      </p>
    </section>
  );
}
