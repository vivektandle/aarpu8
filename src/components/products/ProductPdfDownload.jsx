import React, { useState } from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import PdfDownloadEnquiryModal from './PdfDownloadEnquiryModal';

export default function ProductPdfDownload({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const sanitizedName = product.name.replace(/\s+/g, '_').toUpperCase();
  const fileName = `AARPU_${sanitizedName}_MARKETING_BROCHURE.pdf`;
  const fileUrl = `/documents/${fileName}`;

  const handleDownloadClick = (e) => {
    e.preventDefault();
    if (!hasDownloaded) {
      setIsModalOpen(true);
    } else {
      // If already filled, allow direct re-download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="product-pdf-download-section" className="pt-8 border-t border-[#E2E2E2] space-y-4">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF393B]" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
            TECHNICAL DOCUMENTATION
          </h2>
        </div>
        <p className="text-sm text-[#5F5F5F]">
          Download the official architectural datasheet and profile cross-section references for {product.name}.
        </p>
      </div>

      {/* Download Option Box with File Name and Text */}
      <div className="bg-[#F7F7F7] border border-[#E2E2E2] hover:border-[#171717] rounded-2xl p-5 sm:p-6 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          
          {/* File Icon & Information */}
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF393B]/10 border border-[#FF393B]/20 flex items-center justify-center shrink-0 text-[#FF393B]">
              <FileText className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm sm:text-base font-display font-bold text-[#171717]">
                  {product.name} — Technical Specification & CAD Catalog
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#FF393B] text-white rounded">
                  PDF
                </span>
                {hasDownloaded && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Enquiry Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <button
              type="button"
              id="product-download-pdf-btn"
              onClick={handleDownloadClick}
              className="btn-aarpu-primary text-xs py-2.5 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Download className="w-4 h-4" />
              <span>{hasDownloaded ? 'Download PDF Again' : 'Download PDF'}</span>
            </button>
            {hasDownloaded && (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-[11px] font-mono text-slate-500 hover:text-[#171717] underline text-center cursor-pointer px-2"
              >
                Submit another enquiry
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Enquiry Form Modal */}
      <PdfDownloadEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        fileName={fileName}
        fileUrl={fileUrl}
        onDownloadSuccess={() => setHasDownloaded(true)}
      />
    </section>
  );
}
