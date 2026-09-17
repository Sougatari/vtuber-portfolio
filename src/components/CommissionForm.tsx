import { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Upload, X, Image, Link, AtSign, Coffee, Palette, CirclePlay, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/config';
import { artPricing, riggingPricing } from '../data/pricing';
import { socialLinks } from '../data/socials';
import Button from '../components/Button';
import NoTranslate from '../components/NoTranslate';

const socialIconMap: Record<string, React.ElementType> = {
  twitter: AtSign,
  coffee: Coffee,
  palette: Palette,
  youtube: CirclePlay,
};

export default function CommissionForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isOpen = siteConfig.commissionStatus === 'OPEN';
  const isDisabled = !isOpen && siteConfig.closedBehavior === 'disabled';

  // Handle file selection with preview generation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles((prev) => [...prev, ...files]);

    // Generate previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove a selected file
  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));

    // Reset the file input so re-selecting the same file works
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle form submission via AJAX to prevent redirect
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Let the browser handle native validation first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitStatus('loading');

    // Build FormData from all form fields (text, selects, checkboxes, etc.)
    const formData = new FormData(form);

    // The file input is CSS-hidden and its value may not match the React state
    // after manual removals. Remove whatever the DOM added and re-append from state.
    formData.delete('reference_images');
    selectedFiles.forEach((file) => {
      formData.append('reference_images', file, file.name);
    });

    try {
      // Do NOT set Content-Type manually — let the browser set it with the
      // correct multipart boundary so FormSubmit can parse the file attachments.
      const response = await fetch("https://formsubmit.co/ajax/779pablochambi@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        console.error("Form submission failed", await response.text());
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setSubmitStatus('error');
    }
  };

  if (isDisabled) {
    return (
      <div className="text-center py-12">
        <AlertCircle size={48} className="mx-auto text-cream-300 mb-4" />
        <p className="text-cream-200 text-lg">{siteConfig.closedMessage}</p>
      </div>
    );
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto text-success mb-4" />
        <h3 className="text-2xl font-heading font-semibold text-cream-50 mb-2">
          Commission Request Sent!
        </h3>
        <p className="text-cream-200 max-w-md mx-auto">
          Thank you! I have received your request and reference images. Please make sure to contact me or follow me on my social media so we can stay in touch easily while I review your project.
        </p>

        {/* Social media links */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {socialLinks.map((social) => {
            const IconComponent = socialIconMap[social.icon] || ExternalLink;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 hover:border-gold-500/40 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                <IconComponent size={18} />
                {social.label}
              </a>
            );
          })}
        </div>

        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitStatus('idle');
            setSelectedFiles([]);
            setPreviews([]);
          }}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  // Combine all extras for the checkbox grid
  const allExtras = [
    ...artPricing.extras.map((e) => ({ ...e, category: 'Art' })),
    ...riggingPricing.extras.map((e) => ({ ...e, category: 'Rigging' })),
  ];

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/779pablochambi@gmail.com"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-10 max-w-2xl mx-auto"
    >
      {/* FormSubmit hidden fields */}
      <input type="hidden" name="_subject" value="Nueva Solicitud de Comisión VTuber" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* Commission closed message for waitlist/message */}
      {!isOpen && (
        <div className="bg-charcoal-800 rounded-xl border border-gold-500/20 p-4 text-center">
          <p className="text-cream-200 text-sm">{siteConfig.closedMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
          <AlertCircle size={20} className="text-error shrink-0" />
          <p className="text-cream-200 text-sm">
            Something went wrong. Please try again or reach out via social media.
          </p>
        </div>
      )}

      {/* ══════════ Contact Info ══════════ */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4 flex items-center gap-2">
          Contact Information
        </legend>

        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm text-cream-200 mb-1.5">
            Name / Alias <span className="text-error">*</span>
          </label>
          <input
            id="cf-name"
            name="Name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
            placeholder="Your name or alias"
          />
          <p className="text-charcoal-600 text-xs mt-1">
            How should I address you in our conversation (You'll go out with this name in the show_case).
          </p>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="block text-sm text-cream-200 mb-1.5">
            Email <span className="text-error">*</span>
          </label>
          <input
            id="cf-email"
            name="Email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
            placeholder="your@email.com"
          />
          <p className="text-charcoal-600 text-xs mt-1">
            I'll send quotes, updates, and final deliveries to this address.
          </p>
        </div>

        {/* Discord / Social */}
        <div>
          <label htmlFor="cf-social" className="block text-sm text-cream-200 mb-1.5">
            Social / Discord
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
              Optional
            </span>
          </label>
          <input
            id="cf-social"
            name="Social / Discord"
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
            placeholder="Discord tag or social handle"
          />
          <p className="text-charcoal-600 text-xs mt-1">
            Alternative contact if you prefer real-time messaging.
          </p>
        </div>
      </fieldset>

      {/* ══════════ Service Selection ══════════ */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4">
          Service
        </legend>

        {/* Service type */}
        <div>
          <label htmlFor="cf-service" className="block text-sm text-cream-200 mb-1.5">
            Select Service <span className="text-error">*</span>
          </label>
          <select
            id="cf-service"
            name="Service"
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Choose a service...</option>
            <option value="art-psd">Art + PSD Preparation</option>
            <option value="rigging">Live2D Rigging</option>
            <option value="full-model">Full Model — Art + Rigging</option>
          </select>
          <p className="text-charcoal-600 text-xs mt-1">
            Determines the scope and pricing of your commission.
          </p>
        </div>

        {/* Body size */}
        <div>
          <label htmlFor="cf-bodySize" className="block text-sm text-cream-200 mb-1.5">
            Desired Body Size <span className="text-error">*</span>
          </label>
          <select
            id="cf-bodySize"
            name="Body Size"
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Choose a size...</option>
            <option value="bust">Bust</option>
            <option value="halfBody">Half Body</option>
            <option value="fullBody">Full Body</option>
          </select>
          <p className="text-charcoal-600 text-xs mt-1">
            Affects illustration coverage and rigging complexity.
          </p>
        </div>
      </fieldset>

      {/* ══════════ Character Details ══════════ */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4">
          Character Details
        </legend>

        {/* Character description */}
        <div>
          <label htmlFor="cf-charDesc" className="block text-sm text-cream-200 mb-1.5">
            Character Description <span className="text-error">*</span>
          </label>
          <textarea
            id="cf-charDesc"
            name="Character Description"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors resize-y"
            placeholder="Describe your character's appearance, personality, and key features... This is very useful for me regarding the shapes of his mouth"

          />
          <p className="text-charcoal-600 text-xs mt-1">
            The more detail you provide, the more accurate the initial sketch will be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Complexity */}
          <div>
            <label htmlFor="cf-complexity" className="block text-sm text-cream-200 mb-1.5">
              Complexity
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
                Optional
              </span>
            </label>
            <input
              id="cf-complexity"
              name="Complexity"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
              placeholder="Simple, moderate, or complex design?"
            />
            <p className="text-charcoal-600 text-xs mt-1">
              Helps estimate the time and price of your commission.
            </p>
          </div>
        </div>
      </fieldset>

      {/* ══════════ Visual References ══════════ */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4">
          Visual References
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30 font-normal">
            Optional
          </span>
        </legend>

        {/* File upload area */}
        <div>
          <label className="block text-sm text-cream-200 mb-1.5">
            Reference Images
          </label>
          <div
            className="file-upload-area rounded-xl border-2 border-dashed border-charcoal-600 hover:border-gold-500/40 bg-charcoal-800/30 transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <Upload size={32} className="text-charcoal-600 mb-3" />
              <p className="text-cream-200 text-sm font-medium mb-1">
                Click to upload reference images
              </p>
              <p className="text-charcoal-600 text-xs">
                PNG, JPG, WEBP — multiple files allowed
              </p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            name="reference_images"
            multiple
            accept="image/png,image/jpeg,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* File previews */}
          {previews.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative group/preview aspect-square rounded-lg overflow-hidden bg-charcoal-800 border border-charcoal-700">
                  <img
                    src={preview}
                    alt={`Reference ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-charcoal-950/80 text-cream-100 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity cursor-pointer"
                    aria-label={`Remove reference ${index + 1}`}
                  >
                    <X size={14} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-charcoal-950/70 px-2 py-1">
                    <p className="text-cream-200 text-[10px] truncate flex items-center gap-1">
                      <Image size={10} className="shrink-0" />
                      {selectedFiles[index]?.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-charcoal-600 text-xs mt-2">
            Mood boards, character sheets, or pose references help me understand your vision.
          </p>
        </div>

        {/* Alternative link field */}
        <div>
          <label htmlFor="cf-refLinks" className="block text-sm text-cream-200 mb-1.5 flex items-center gap-1.5">
            <Link size={14} className="text-charcoal-600" />
            Reference Links or reviews of .PSD
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
              Optional
            </span>
          </label>
          <textarea
            id="cf-refLinks"
            name="Reference Links"
            rows={2}
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors resize-y"
            placeholder="Paste Google Drive / Imgur / Pinterest links if your files are too large"
          />
          <p className="text-charcoal-600 text-xs mt-1">
            Or paste a <NoTranslate>Google Drive</NoTranslate> / <NoTranslate>Imgur</NoTranslate> / <NoTranslate>Pinterest</NoTranslate> link if your files are too large.
          </p>
        </div>
      </fieldset>

      {/* ══════════ Extras ══════════ */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4">
          Extras
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30 font-normal">
            Optional
          </span>
        </legend>
        <p className="text-charcoal-600 text-xs -mt-2 mb-3">
          Select any add-ons you'd like to include with your commission.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {allExtras.map((extra) => (
            <label
              key={extra.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-charcoal-800/50 border border-charcoal-700/50 hover:border-gold-500/20 transition-colors cursor-pointer"
            >
              <input
                type="checkbox"
                name="Extras"
                value={`${extra.name} (${extra.category})`}
                className="mt-0.5 w-4 h-4 rounded border-charcoal-700 bg-charcoal-800 text-gold-500 focus:ring-gold-500/30 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <span className="text-cream-100 text-sm font-medium block">
                  {extra.name}
                  <span className="text-gold-400 text-xs ml-2">
                    {extra.price > 0 ? `+$${extra.price}` : 'TBD'}
                  </span>
                </span>
                {extra.description && (
                  <span className="text-charcoal-600 text-xs block mt-0.5">
                    {extra.description}
                  </span>
                )}
                <span className="text-xs text-charcoal-600 mt-0.5 block">{extra.category}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Custom Extras Text Field */}
        <div className="pt-2">
          <label htmlFor="cf-customExtras" className="block text-sm text-cream-200 mb-1.5">
            Other specific extras or custom requests
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
              Optional
            </span>
          </label>
          <input
            id="cf-customExtras"
            name="custom_extras"
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
            placeholder="Describe any other extra features you need..."
          />
        </div>
      </fieldset>

      {/* ══════════ Project Details ══════════ */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-heading font-semibold text-cream-50 mb-4">
          Project Details
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Deadline */}
          <div>
            <label htmlFor="cf-deadline" className="block text-sm text-cream-200 mb-1.5">
              Desired Deadline (Starting from 3 weeks)
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
                Optional
              </span>
            </label>
            <input
              id="cf-deadline"
              name="Deadline"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
              placeholder="e.g., No rush, 2 months"
            />
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="cf-budget" className="block text-sm text-cream-200 mb-1.5">
              Approximate Budget
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
                Optional
              </span>
            </label>
            <input
              id="cf-budget"
              name="Budget"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors"
              placeholder="USD range or amount"
            />
            <p className="text-charcoal-600 text-xs mt-1">
              Helps me tailor the scope to your budget.
            </p>
          </div>
        </div>

        {/* Usage */}
        <div>
          <label htmlFor="cf-useType" className="block text-sm text-cream-200 mb-1.5">
            Usage <span className="text-error">*</span>
          </label>
          <select
            id="cf-useType"
            name="Usage"
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Choose usage type...</option>
            <option value="personal">Personal Use</option>
            <option value="commercial">Commercial Use</option>
          </select>
          <p className="text-charcoal-600 text-xs mt-1">
            Commercial use may affect licensing and pricing.
          </p>
        </div>

        {/* Additional details */}
        <div>
          <label htmlFor="cf-additional" className="block text-sm text-cream-200 mb-1.5">
            Additional Details
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-300 border border-charcoal-600/30">
              Optional
            </span>
          </label>
          <textarea
            id="cf-additional"
            name="Additional Details"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-600 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors resize-y"
            placeholder="Anything else you'd like to mention about your project..."
          />
        </div>
      </fieldset>

      {/* ══════════ TOS Agreement ══════════ */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="cf-tos"
          name="TOS Agreed"
          value="Yes"
          required
          className="mt-1 w-4 h-4 rounded border-charcoal-700 bg-charcoal-800 text-gold-500 focus:ring-gold-500/30 cursor-pointer"
        />
        <label htmlFor="cf-tos" className="text-sm text-cream-200 cursor-pointer">
          I have read and agree to the{' '}
          <a href="#tos" className="text-gold-400 hover:text-gold-300 underline">
            Terms of Service
          </a>
          . <span className="text-error">*</span>
        </label>
      </div>

      {/* ══════════ Payment Methods ══════════ */}
      <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-1">
        <p className="text-charcoal-600 text-xs">Accepted payment methods</p>
        <div className="flex flex-wrap justify-center gap-2">
          {siteConfig.paymentMethods.map((method) => (
            <span
              key={method}
              className="px-2.5 py-1 rounded-md bg-charcoal-800/80 border border-charcoal-700 text-cream-200 text-[10px] font-medium"
            >
              <NoTranslate>{method}</NoTranslate>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ Submit ══════════ */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={submitStatus === 'loading'}
        >
          <Send size={18} className={submitStatus === 'loading' ? 'animate-pulse' : ''} />
          {submitStatus === 'loading' ? 'Sending...' : <NoTranslate>Submit Commission Request</NoTranslate>}
        </Button>
      </div>
    </form>
  );
}
