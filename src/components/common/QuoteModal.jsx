import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Send, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { COMPANY_INFO } from '../../constants/companyData';

export default function QuoteModal({ isOpen, onClose }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    // Simulate server response
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success('Enquiry Submitted Successfully!', {
      description: `Thank you, ${data.name}. The Aarpu team will reach out to you shortly.`
    });
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
          className="relative w-full max-w-lg sm:max-w-xl bg-white p-6 sm:p-7 rounded-2xl border border-black/10 shadow-2xl text-[#1A1A1A]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#1A1A1A] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-1.5 mb-4 pr-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#171717] tracking-tight">
              CONTACT US
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Our engineering team is ready to address your architectural inquiries.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 text-xs sm:text-[13px] font-mono text-slate-700">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[#FF393B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF393B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#FF393B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF393B]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 sm:space-y-4 font-mono text-xs sm:text-sm">
            {/* Grid for Name, Phone, Email, Message */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {/* Name */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-1 text-[11px] sm:text-xs tracking-wider">
                  Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your name"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 sm:py-2.5 text-[#1A1A1A] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#FF393B] transition-colors"
                />
                {errors.name && <p className="text-rose-600 text-[10px] sm:text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-1 text-[11px] sm:text-xs tracking-wider">
                  Phone *
                </label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  placeholder="+91 -9036410151"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 sm:py-2.5 text-[#1A1A1A] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#FF393B] transition-colors"
                />
                {errors.phone && <p className="text-rose-600 text-[10px] sm:text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-1 text-[11px] sm:text-xs tracking-wider">
                  Email *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 sm:py-2.5 text-[#1A1A1A] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#FF393B] transition-colors"
                />
                {errors.email && <p className="text-rose-600 text-[10px] sm:text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 font-semibold uppercase mb-1 text-[11px] sm:text-xs tracking-wider">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={2}
                  placeholder="How can we assist you?"
                  className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 sm:py-2.5 text-[#1A1A1A] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#FF393B] resize-none min-h-[46px] sm:min-h-[52px] transition-colors"
                />
                {errors.message && <p className="text-rose-600 text-[10px] sm:text-xs mt-1">{errors.message.message}</p>}
              </div>
            </div>

            {/* Consent to Publish Testimonial */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-start gap-2.5 cursor-pointer text-[11px] sm:text-xs font-sans text-slate-600 leading-relaxed select-none">
                <input
                  type="checkbox"
                  {...register('consent', { required: 'Please check to consent' })}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-gray-300 text-[#FF393B] focus:ring-[#FF393B] accent-[#FF393B] cursor-pointer"
                />
                <span>
                  I agree to personal data processing per Privacy Policy. Your data will be securely handled for contact and support.
                </span>
              </label>
              {errors.consent && <p className="text-rose-600 text-[10px] sm:text-xs mt-1">{errors.consent.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-aarpu-primary text-xs sm:text-sm py-2.5 sm:py-3 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 mt-1"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
