import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Download, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { COMPANY_INFO } from '../../constants/companyData';

export default function PdfDownloadEnquiryModal({
  isOpen,
  onClose,
  product,
  fileName,
  fileUrl,
  onDownloadSuccess
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      message: `Requesting technical specification & CAD files for ${product?.name || 'architectural system'}.`
    }
  });

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    // Simulate server response
    await new Promise((resolve) => setTimeout(resolve, 750));

    // Automatically trigger PDF download
    try {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Download trigger error:', e);
    }

    toast.success('Enquiry Submitted Successfully!', {
      description: `Thank you, ${data.name}. Your download for ${product.name} specification has started automatically.`
    });

    if (onDownloadSuccess) {
      onDownloadSuccess();
    }

    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-md bg-white p-4 sm:p-5 rounded-2xl border border-black/10 shadow-2xl text-[#1A1A1A]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[#1A1A1A] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Header */}
          <div className="space-y-1 mb-2.5 pr-6">
            <h2 className="text-base sm:text-lg font-bold font-display text-[#171717] tracking-tight">
              ENQUIRE TO DOWNLOAD
            </h2>

            {/* Product & File Banner */}
            <div className="bg-[#F7F7F7] border border-[#E2E2E2] rounded-lg p-2 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#FF393B]/10 border border-[#FF393B]/20 flex items-center justify-center text-[#FF393B] shrink-0">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#171717] truncate font-display">
                  {product.name} — Technical Specification
                </p>
                <p className="text-[9.5px] font-mono text-slate-500 truncate">
                  {fileName}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 font-sans leading-tight">
              Please enter your details. The catalog will download automatically upon submit.
            </p>

            <div className="flex flex-wrap gap-3 pt-0.5 text-[10.5px] font-mono text-slate-700">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1 hover:text-[#FF393B] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#FF393B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-1 hover:text-[#FF393B] transition-colors"
              >
                <Mail className="w-3 h-3 text-[#FF393B]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 font-mono text-[11px]">
            {/* Grid for Name, Phone, Email, Profession */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Name */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-0.5 text-[10px] tracking-wider">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your name"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-2.5 py-1.5 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                />
                {errors.name && <p className="text-rose-600 text-[9.5px] mt-0.5">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-0.5 text-[10px] tracking-wider">
                  Phone Number *
                </label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  placeholder="+91 -9036410151"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-2.5 py-1.5 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                />
                {errors.phone && <p className="text-rose-600 text-[9.5px] mt-0.5">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-0.5 text-[10px] tracking-wider">
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-2.5 py-1.5 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                />
                {errors.email && <p className="text-rose-600 text-[9.5px] mt-0.5">{errors.email.message}</p>}
              </div>

              {/* Profession / Role */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-0.5 text-[10px] tracking-wider">
                  Profession / Firm
                </label>
                <input
                  {...register('profession')}
                  placeholder="Architect / Builder"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-2.5 py-1.5 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                />
              </div>
            </div>

            {/* Message / Project Notes */}
            <div>
              <label className="block text-slate-700 font-semibold uppercase mb-0.5 text-[10px] tracking-wider">
                Requirement Scope *
              </label>
              <textarea
                {...register('message', { required: 'Requirement notes are required' })}
                rows={1}
                placeholder="Details about your project requirements..."
                className="w-full bg-slate-50 border border-black/15 rounded-lg px-2.5 py-1.5 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B] resize-none min-h-[34px]"
              />
              {errors.message && <p className="text-rose-600 text-[9.5px] mt-0.5">{errors.message.message}</p>}
            </div>

            {/* Consent */}
            <div className="pt-1 border-t border-slate-100">
              <label className="flex items-start gap-2 cursor-pointer text-[9.5px] font-sans text-slate-600 leading-tight select-none">
                <input
                  type="checkbox"
                  {...register('consent', { required: 'Please check to consent' })}
                  className="mt-0.5 h-3 w-3 shrink-0 rounded border-gray-300 text-[#FF393B] focus:ring-[#FF393B] accent-[#FF393B] cursor-pointer"
                />
                <span>
                  I agree to personal data processing per Privacy Policy for technical documentation and consultation.
                </span>
              </label>
              {errors.consent && <p className="text-rose-600 text-[9.5px] mt-0.5">{errors.consent.message}</p>}
            </div>

            {/* Submit & Download Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-aarpu-primary text-xs py-2 px-4 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 mt-1"
            >
              {isSubmitting ? (
                <span>Submitting & Preparing Download...</span>
              ) : (
                <>
                  <span>Submit & Download PDF</span>
                  <Download className="w-3.5 h-3.5 text-white" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
