import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ProductHero from '../components/products/ProductHero';
import ProductFeatures from '../components/products/ProductFeatures';
import TechnicalCharacteristics from '../components/products/TechnicalCharacteristics';
import ProductShowcaseRow from '../components/products/ProductShowcaseRow';
import TechnicalDrawings from '../components/products/TechnicalDrawings';
import ProductPdfDownload from '../components/products/ProductPdfDownload';
import { getProductByIdOrSlug } from '../data/products';

export default function ProductDetail({ onOpenQuoteModal }) {
  const { productId } = useParams();
  const product = getProductByIdOrSlug(productId);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <main className="pt-36 pb-24 bg-white text-[#171717] min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-md space-y-6">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="text-[#5F5F5F] text-sm">
            The architectural system you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-[#171717] text-white text-xs font-mono uppercase font-bold rounded-xl hover:bg-[#FF393B] transition-colors"
          >
            ← Return to Product Catalogue
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={product.seoTitle || `${product.name} | Aarpu Architectural Systems`}
        description={product.seoDescription || product.shortDescription}
      />

      <main className="pt-24 sm:pt-28 pb-12 bg-white text-[#171717] min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* 1. PRODUCT HERO & SHOWCASE IMAGES */}
          <ProductHero product={product} />

          {/* 2. 2-COLUMN LAYOUT: COLUMN 1 = FEATURES, COLUMN 2 = TECHNICAL CHARACTERISTICS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-4 border-t border-[#E2E2E2]">
            {/* COLUMN 1: FEATURES */}
            <div>
              <ProductFeatures features={product.features} />
            </div>

            {/* COLUMN 2: TECHNICAL CHARACTERISTICS */}
            <div>
              <TechnicalCharacteristics characteristics={product.technicalCharacteristics} />
            </div>
          </div>

          {/* 3. TWO-LINE PARAGRAPH & TWO IMAGES IN SAME ROW (LEFT & RIGHT) */}
          <ProductShowcaseRow product={product} />

          {/* 4. TECHNICAL DRAWINGS */}
          <TechnicalDrawings
            productId={product.slug || product.id}
            name={product.name}
          />

          {/* 5. PDF DOWNLOAD OPTION (WITH FILE NAME AND TEXT) */}
          <ProductPdfDownload product={product} />

        </div>
      </main>
    </>
  );
}
