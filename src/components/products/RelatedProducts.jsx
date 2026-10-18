import React from 'react';
import ProductCard from './ProductCard';

export default function RelatedProducts({ relatedProducts }) {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="space-y-6 pt-8 border-t border-[#E2E2E2]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-[#FF393B]" />
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
          RELATED PRODUCTS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
