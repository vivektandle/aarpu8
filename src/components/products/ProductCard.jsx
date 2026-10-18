import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between h-full">
      <Link to={`/products/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="aspect-[16/9.5] sm:aspect-[16/9.2] w-full rounded-xl overflow-hidden bg-[#F7F7F7] mb-3.5 relative border border-[#EEEEEE]">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Red Accent line on top of image on hover */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF393B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Meta */}
        <div className="space-y-1.5">
          <h3 className="text-sm sm:text-base font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs sm:text-[13px] text-[#5F5F5F] leading-relaxed line-clamp-2 font-sans">
            {product.shortDescription}
          </p>
        </div>
      </Link>

      {/* CTA Button Link */}
      <div className="pt-3.5 mt-3.5 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
        <Link
          to={`/products/${product.slug}`}
          className="flex items-center justify-between w-full group-hover:text-[#FF393B] transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
