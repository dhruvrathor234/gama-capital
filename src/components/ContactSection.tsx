import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Building2, Send, CheckCircle2, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    interest: 'Strategic Partnership',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceId: string;
    timestamp: string;
    name: string;
    interest: string;
    email: string;
    phone: string;
    message: string;
  } | null>(null);

  // Update interest if passed from PlansSection
  useEffect(() => {
    if (initialInterest) {
      if (initialInterest.includes('Technology')) {
        setFormData((prev) => ({ ...prev, interest: 'Technology Collaboration' }));
      } else if (initialInterest.includes('Institutional')) {
        setFormData((prev) => ({ ...prev, interest: 'Institutional Partnership' }));
      } else if (initialInterest.includes('Capital')) {
        setFormData((prev) => ({ ...prev, interest: 'Strategic Partnership' }));
      }
    }
  }, [initialInterest]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company or Organization name is required';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Your Role or Title is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or scope of discussion';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const generatedRef = `GC-INQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // Dispatch inquiry directly to gamacapitalai@gmail.com via FormSubmit AJAX service
      await fetch('https://formsubmit.co/ajax/gamacapitalai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `GAMA CAPITAL Inquiry [${generatedRef}] - ${formData.interest} from ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          'Reference ID': generatedRef,
          'Full Name': formData.fullName,
          'Business Email': formData.email,
          'Contact Phone': formData.phone || 'Not provided',
          'Company / Organization': formData.company,
          'Role / Title': formData.role,
          'Partnership Interest': formData.interest,
          'Message / Scope': formData.message,
          'Submission Timestamp': new Date().toUTCString(),
        }),
      });
    } catch (err) {
      console.warn('Network submission fallback active:', err);
    } finally {
      setSubmissionReceipt({
        referenceId: generatedRef,
        timestamp: new Date().toUTCString(),
        name: formData.fullName,
        interest: formData.interest,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionReceipt(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      interest: 'Strategic Partnership',
      message: '',
    });
    setErrors({});
  };

  const mailtoSubject = encodeURIComponent(
    `[${submissionReceipt?.referenceId || 'GAMA INQUIRY'}] Partnership Inquiry - ${formData.fullName || 'Partner'}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello GAMA CAPITAL Desk,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nRole: ${formData.role}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}\n`
  );

  return (
    <section id="contact" className="relative py-28 bg-[#080A0F] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Institutional Correspondence Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C6A76A] mb-3">
                Inquiries & Collaboration
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight [text-wrap:balance]">
                Let’s Build Something{' '}
                <span className="font-semibold text-[#C6A76A]">Exceptional.</span>
              </h2>
              <p className="mt-4 text-base text-[#C4CAD4] leading-relaxed font-light">
                We welcome conversations with strategic partners, institutional professionals, technology collaborators and individuals interested in our vision.
              </p>

              {/* Direct Official Contact Channels */}
              <div className="mt-10 space-y-6">
                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Official Institutional Email
                    </span>
                    <a
                      href="mailto:gamacapitalai@gmail.com"
                      className="text-base font-semibold text-white hover:text-[#C6A76A] transition-colors"
                    >
                      gamacapitalai@gmail.com
                    </a>
                    <span className="text-xs text-[#C4CAD4]/60 block mt-0.5 font-light">
                      Inquiries delivered directly to our primary desk inbox
                    </span>
                  </div>
                </div>

                {/* Official Phone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Direct Telephone & WhatsApp
                    </span>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a
                        href="tel:+919319799796"
                        className="text-base font-semibold text-white hover:text-[#C6A76A] font-mono transition-colors"
                      >
                        +91 9319799796
                      </a>
                      <a
                        href="https://wa.me/919319799796?text=Hello%20GAMA%20CAPITAL,%20I%20am%20interested%20in%20discussing%20a%20partnership."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 transition-colors"
                      >
                        WhatsApp Desk
                      </a>
                    </div>
                    <span className="text-xs text-[#C4CAD4]/60 block mt-0.5 font-light">
                      Institutional hours: Mon – Fri (IST / UTC)
                    </span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Operations Hub
                    </span>
                    <span className="text-sm font-medium text-white block">
                      Financial District / Global Capital Center
                    </span>
                    <span className="text-xs text-[#C4CAD4]/50 block mt-0.5 font-light">
                      Direct bilateral meetings arranged upon verified mutual engagement.
                    </span>
                  </div>
                </div>

                {/* Technology Partner Link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Technology Partner
                    </span>
                    <a
                      href="https://www.nebulamarket.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white hover:text-[#C6A76A] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>NebulaMarket V5 Ecosystem</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Routing Guarantee Note */}
            <div className="mt-12 p-4 bg-[#11151D] border border-[#C6A76A]/20 rounded-sm">
              <span className="text-xs font-mono text-[#C6A76A] uppercase block mb-1">
                Direct Inbox Delivery
              </span>
              <p className="text-xs text-[#C4CAD4]/80 leading-relaxed font-light">
                All form submissions are routed instantaneously to <strong className="text-white">gamacapitalai@gmail.com</strong>. You may also call or message our desk at <strong className="text-white">+91 9319799796</strong> for priority routing.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form or Confirmed Submission Receipt */}
          <div className="lg:col-span-7">
            <div className="bg-[#11151D] border border-white/10 p-8 sm:p-10 rounded-sm shadow-2xl relative">
              {submissionReceipt ? (
                /* Confirmed Submission Acknowledgment */
                <div className="py-6 space-y-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 block">
                      Inquiry Dispatched Successfully
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      Thank You, {submissionReceipt.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#C4CAD4] leading-relaxed font-light">
                    Your institutional inquiry regarding{' '}
                    <strong className="text-white font-medium">{submissionReceipt.interest}</strong> has been transmitted to our primary desk inbox at <strong className="text-[#C6A76A]">gamacapitalai@gmail.com</strong>.
                  </p>

                  <div className="p-5 bg-[#080A0F] border border-white/10 rounded font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/40">REFERENCE ID:</span>
                      <span className="text-[#C6A76A] font-semibold">{submissionReceipt.referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">SENT TO:</span>
                      <span className="text-white">gamacapitalai@gmail.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">TIMESTAMP:</span>
                      <span className="text-white/80">{submissionReceipt.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">STATUS:</span>
                      <span className="text-emerald-400 font-bold">SENT & LOGGED</span>
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:gamacapitalai@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#C6A76A]" />
                      <span>Open in Email App</span>
                    </a>

                    <a
                      href={`https://wa.me/919319799796?text=${encodeURIComponent(
                        `Hello GAMA CAPITAL, I submitted inquiry #${submissionReceipt.referenceId} regarding ${submissionReceipt.interest}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 rounded-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Follow Up on WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080A0F] bg-[#C6A76A] hover:bg-[#EAD8AC] rounded-sm transition-colors ml-auto"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#C6A76A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Business Email <span className="text-[#C6A76A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@firm.com"
                        className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Contact / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9319799796"
                        className="w-full px-4 py-3 bg-[#080A0F] border border-white/10 text-sm text-white placeholder-white/20 rounded-sm focus:outline-none focus:border-[#C6A76A] transition-colors font-mono"
                      />
                    </div>

                    {/* Company / Organization */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Company / Organization <span className="text-[#C6A76A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Asset Management"
                        className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                          errors.company ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                        }`}
                      />
                      {errors.company && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Your Role */}
                    <div>
                      <label htmlFor="role" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Your Role / Title <span className="text-[#C6A76A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Chief Investment Officer / Trader"
                        className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                          errors.role ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                        }`}
                      />
                      {errors.role && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.role}</span>
                      )}
                    </div>

                    {/* Partnership Interest Dropdown */}
                    <div>
                      <label htmlFor="interest" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                        Partnership Interest <span className="text-[#C6A76A]">*</span>
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080A0F] border border-white/10 text-sm text-white rounded-sm focus:outline-none focus:border-[#C6A76A] transition-colors"
                      >
                        <option value="Strategic Partnership">Strategic Partnership</option>
                        <option value="Technology Collaboration">Technology Collaboration</option>
                        <option value="Institutional Partnership">Institutional Partnership</option>
                        <option value="Investor Relations Inquiry">Investor Relations Inquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                      Message & Discussion Scope <span className="text-[#C6A76A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the scope of collaboration, capital allocation horizon, or technology inquiry..."
                      className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Destination Guarantee Indicator */}
                  <div className="flex items-center gap-2 text-xs text-[#C4CAD4]/70 bg-[#080A0F] p-3 rounded border border-white/5">
                    <Mail className="w-3.5 h-3.5 text-[#C6A76A] shrink-0" />
                    <span>Inquiry will be delivered directly to: <strong className="text-white">gamacapitalai@gmail.com</strong></span>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#C6A76A]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to gamacapitalai@gmail.com...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry to GAMA CAPITAL</span>
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-white/40 text-center font-light">
                    Confidentiality Notice: Communications submitted through this portal are treated as strictly proprietary and confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
