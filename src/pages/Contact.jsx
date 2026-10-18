import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '../components/common/SEO';
import Hero, { CONTACT_SLIDES } from '../components/home/Hero';
import { COMPANY_INFO } from '../constants/companyData';

export default function Contact({ onOpenQuoteModal }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Inquiry Sent Successfully!', {
      description: `Thank you, ${data.name}. Our technical team will be in touch shortly.`
    });
    reset();
  };

  return (
    <>
      <SEO
        title="Contact Aarpu Precision Center | Bangalore"
        description="Get in touch with Aarpu's senior facade engineers for CAD BIM files, thermal calculations, factory tours, or custom project quotes."
      />

      <main className="pb-12 bg-[#F2F2F2] min-h-screen text-[#1A1A1A] overflow-x-hidden">
        {/* Banner same as product page with image & text: Contact us */}
        <Hero onOpenQuoteModal={onOpenQuoteModal} slides={CONTACT_SLIDES} />

        <div className="pt-10 sm:pt-12 max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch max-w-4xl mx-auto">
            
            {/* Contact Form Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-base font-bold font-display text-[#171717] mb-2">
                  Send Project Specification
                </h2>
                <p className="text-[11px] text-slate-500 font-sans">
                  Submit technical requirements or inquiries for a quote.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 font-mono text-xs flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <label className="block text-slate-700 font-semibold uppercase mb-1 text-[10px] tracking-wider">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                    />
                    {errors.name && <p className="text-rose-600 text-[10px] mt-0.5">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold uppercase mb-1 text-[10px] tracking-wider">Phone *</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="+91 -9036410151"
                      className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                    />
                    {errors.phone && <p className="text-rose-600 text-[10px] mt-0.5">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold uppercase mb-1 text-[10px] tracking-wider">Email *</label>
                    <input
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B]"
                    />
                    {errors.email && <p className="text-rose-600 text-[10px] mt-0.5">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold uppercase mb-1 text-[10px] tracking-wider">Message *</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows="3"
                      placeholder="Describe opening dimensions, glass specifications, motorization needs..."
                      className="w-full bg-slate-50 border border-black/15 rounded-lg px-3 py-2 text-[#1A1A1A] text-xs placeholder-slate-400 focus:outline-none focus:border-[#FF393B] resize-none"
                    />
                    {errors.message && <p className="text-rose-600 text-[10px] mt-0.5">{errors.message.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-aarpu-primary py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm hover:scale-[1.005] transition-all mt-1"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message to Engineers</span>
                      <Send className="w-3.5 h-3.5 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Aarpu Precision Center Info Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-base font-bold font-display text-[#171717] mb-2">
                  Aarpu Precision Center
                </h2>
                <p className="text-[11px] text-slate-500 font-sans">
                  Technology Center, factory coordination desk &amp; private visits.
                </p>
              </div>

              {/* Contact Information Items */}
              <div className="space-y-3 font-mono text-xs flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-black/5 flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#FF393B] shadow-2xs">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Address</span>
                      <p className="text-[#1A1A1A] font-sans text-xs leading-tight">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg border border-black/5 flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#FF393B] shadow-2xs">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Hours</span>
                      <p className="text-[#1A1A1A] font-sans text-xs leading-tight">{COMPANY_INFO.workingHours}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-black/5 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#FF393B] shadow-2xs">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Phone</span>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#1A1A1A] text-[11px] block truncate hover:text-[#FF393B]">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-lg border border-black/5 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#FF393B] shadow-2xs">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Email</span>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#1A1A1A] text-[11px] block truncate hover:text-[#FF393B]">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Consultation Link Button */}
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Direct%20Technical%20Inquiry%20-%20Aarpu`}
                  className="w-full btn-aarpu-primary py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-sm hover:scale-[1.005] transition-all mt-1"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Email Concierge Desk</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
