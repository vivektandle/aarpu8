import React from 'react';
import { Link } from 'react-router-dom';
import BackToProducts from './BackToProducts';

export default function ProductHero({ product }) {
  const heroImage = product.mainImage || product.images?.[0];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-4 text-xs font-mono">
        <BackToProducts />
        <div className="text-[#666666]">
          <Link to="/products" className="hover:text-[#FF393B] transition-colors">Products</Link>
          <span className="mx-2 text-[#CCCCCC]">/</span>
          <span className="text-[#171717] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Hero Meta: Name & Description */}
      <div className="space-y-3 w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-[#171717] tracking-tight leading-tight">
          {product.name}
        </h1>

        <p className="w-full text-xs sm:text-sm md:text-base text-[#5F5F5F] font-normal leading-relaxed text-justify [text-align:justify]">
          {product.description}
        </p>
      </div>

      {/* Full Width Edge-to-Edge Product Image with 80% Height */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[380px] max-h-[850px] overflow-hidden bg-neutral-900 border-y border-[#E2E2E2] group">
        <img
          src={heroImage}
          alt={`${product.name} Architectural View`}
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
