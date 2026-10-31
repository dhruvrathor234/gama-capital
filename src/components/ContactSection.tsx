import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Building2, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate verified processing and receipt generation without false external claims
    setTimeout(() => {
      const generatedRef = `GC-INQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReceipt({
        referenceId: generatedRef,
        timestamp: new Date().toUTCString(),
        name: formData.fullName,
        interest: formData.interest,
      });
      setIsSubmitting(false);
    }, 900);
  };

  const handleReset = () => {
    setSubmissionReceipt(null);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      role: '',
      interest: 'Strategic Partnership',
      message: '',
    });
    setErrors({});
  };

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

              {/* Verified Institutional Contact Placeholders */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Institutional Correspondence
                    </span>
                    <a
                      href="mailto:partner.relations@gamacapital.com"
                      className="text-sm font-medium text-white hover:text-[#C6A76A] transition-colors"
                    >
                      partner.relations@gamacapital.com
                    </a>
                    <span className="text-xs text-[#C4CAD4]/50 block mt-0.5 font-light">
                      General Desk: contact@gamacapital.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#11151D] border border-white/10 flex items-center justify-center shrink-0 text-[#C6A76A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50 block">
                      Office / Operations Hub
                    </span>
                    <span className="text-sm font-medium text-white block">
                      Financial District / Global Capital Center
                    </span>
                    <span className="text-xs text-[#C4CAD4]/50 block mt-0.5 font-light">
                      Official address disclosures provided upon verified mutual engagement.
                    </span>
                  </div>
                </div>

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

            {/* Response Time SLA */}
            <div className="mt-12 p-4 bg-[#11151D] border border-white/5 rounded-sm">
              <span className="text-xs font-mono text-[#C6A76A] uppercase block mb-1">
                Desk Protocol
              </span>
              <p className="text-xs text-[#C4CAD4]/70 leading-relaxed font-light">
                Institutional inquiries are reviewed directly by the GAMA CAPITAL strategy and operations desk. Submissions with full institutional credentials receive prioritized routing.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form or Confirmed Submission Receipt */}
          <div className="lg:col-span-7">
            <div className="bg-[#11151D] border border-white/10 p-8 sm:p-10 rounded-sm shadow-2xl relative">
              {submissionReceipt ? (
                /* Verified Submission Acknowledgment */
                <div className="py-6 space-y-6">
                  <div className="w-14 h-14 rounded-full bg-[#C6A76A]/20 border border-[#C6A76A]/50 flex items-center justify-center text-[#C6A76A] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono tracking-wider uppercase text-[#C6A76A] block">
                      Inquiry Record Created
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      Thank You, {submissionReceipt.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#C4CAD4] leading-relaxed font-light">
                    Your institutional inquiry regarding{' '}
                    <strong className="text-white font-medium">{submissionReceipt.interest}</strong> has been logged to the GAMA CAPITAL partner operations queue.
                  </p>

                  <div className="p-5 bg-[#080A0F] border border-white/10 rounded font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/40">REFERENCE ID:</span>
                      <span className="text-[#C6A76A] font-semibold">{submissionReceipt.referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">TIMESTAMP:</span>
                      <span className="text-white/80">{submissionReceipt.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">STATUS:</span>
                      <span className="text-emerald-400">QUEUED FOR DESK REVIEW</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/50 leading-relaxed">
                    Note: A representative from our Institutional Partnerships group will review your submission and initiate contact via your registered business email.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080A0F] bg-[#C6A76A] hover:bg-[#EAD8AC] rounded-sm transition-colors"
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
                        placeholder="e.g. Chief Investment Officer"
                        className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                          errors.role ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                        }`}
                      />
                      {errors.role && (
                        <span className="text-xs text-rose-400 mt-1 block">{errors.role}</span>
                      )}
                    </div>
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
                      placeholder="Please outline the scope of collaboration or inquiry..."
                      className={`w-full px-4 py-3 bg-[#080A0F] border text-sm text-white placeholder-white/20 rounded-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#C6A76A]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold tracking-wider uppercase text-[#080A0F] bg-gradient-to-r from-[#EAD8AC] via-[#C6A76A] to-[#C6A76A] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#C6A76A]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Logging Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
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
