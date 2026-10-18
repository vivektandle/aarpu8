import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToProducts() {
  return (
    <Link
      to="/products"
      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors group py-2"
    >
      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
      <span>Back to Products</span>
    </Link>
  );
}
