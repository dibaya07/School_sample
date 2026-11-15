'use client';

import { useCallback, useState } from 'react';
import { Phone, MessageCircle, Send, Loader2 } from 'lucide-react';
import { CONTACT_CONTENT } from '@/lib/site-content';
import FormField from '@/components/FormField';
import EnquirySuccessCard from '@/components/EnquirySuccessCard';

interface EnquiryFormProps {
  phoneHref: string;
  whatsappHref: string;
}

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-2xl bg-[#F5F2EC] border border-[#2C1E16]/10 focus:border-[#2C1E16] focus:bg-white focus:outline-none transition-all text-[#16110E] disabled:opacity-60 disabled:cursor-not-allowed';

export default function EnquiryForm({ phoneHref, whatsappHref }: EnquiryFormProps) {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState<string>(CONTACT_CONTENT.gradeOptions[1]);
  const [message, setMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    parentName.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSaving || !isFormValid) return;

      setIsSaving(true);
      setErrorMessage(null);

      try {
        const res = await fetch('/api/enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            parentName: parentName.trim(),
            phone: phone.trim(),
            email: email.trim(),
            grade,
            message: message.trim(),
          }),
        });

        if (!res.ok) {
          throw new Error('Request failed');
        }

        setSubmitted(true);
      } catch {
        setErrorMessage(CONTACT_CONTENT.submitError);
      } finally {
        setIsSaving(false);
      }
    },
    [isSaving, isFormValid, parentName, phone, email, grade, message],
  );

  const handleReset = useCallback(() => {
    setSubmitted(false);
    setErrorMessage(null);
    setParentName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }, []);

  if (submitted) {
    return (
      <EnquirySuccessCard
        parentName={parentName}
        grade={grade}
        phone={phone}
        onReset={handleReset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-busy={isSaving}>
      <div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#16110E]">
          {CONTACT_CONTENT.formTitle}
        </h3>
        <p className="text-sm text-[#5C4E44] mt-1">
          {CONTACT_CONTENT.formSubtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <FormField label={CONTACT_CONTENT.fields.parentNameLabel}>
          <input
            type="text"
            required
            disabled={isSaving}
            placeholder={CONTACT_CONTENT.fields.parentNamePlaceholder}
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className={INPUT_CLASS}
          />
        </FormField>

        <FormField label={CONTACT_CONTENT.fields.phoneLabel}>
          <input
            type="tel"
            required
            disabled={isSaving}
            placeholder={CONTACT_CONTENT.fields.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <FormField label={CONTACT_CONTENT.fields.emailLabel}>
          <input
            type="email"
            required
            disabled={isSaving}
            placeholder={CONTACT_CONTENT.fields.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={INPUT_CLASS}
          />
        </FormField>

        <FormField label={CONTACT_CONTENT.fields.gradeLabel}>
          <select
            disabled={isSaving}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={INPUT_CLASS}
          >
            {CONTACT_CONTENT.gradeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label={CONTACT_CONTENT.fields.messageLabel} className="w-full">
        <textarea
          rows={3}
          disabled={isSaving}
          placeholder={CONTACT_CONTENT.fields.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${INPUT_CLASS} resize-none`}
        />
      </FormField>

      {errorMessage && (
        <p role="alert" className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-2xl px-4 py-2.5">
          {errorMessage}
        </p>
      )}

      <div className="pt-1 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={isSaving || !isFormValid}
          className="apple-btn-primary rounded-full min-h-[48px] px-7 py-3.5 text-sm font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{CONTACT_CONTENT.savingButton}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{CONTACT_CONTENT.submitButton}</span>
            </>
          )}
        </button>
        <a
          href={phoneHref}
          aria-disabled={isSaving}
          className={`apple-btn-outline-dark rounded-full min-h-[48px] px-5 py-3.5 text-sm font-semibold flex items-center gap-2 ${
            isSaving ? 'opacity-60 pointer-events-none' : ''
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>{CONTACT_CONTENT.callShortButton}</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isSaving}
          className={`apple-btn-whatsapp rounded-full min-h-[48px] px-5 py-3.5 text-sm font-semibold flex items-center gap-2 ${
            isSaving ? 'opacity-60 pointer-events-none' : ''
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span>{CONTACT_CONTENT.whatsappButton}</span>
        </a>
      </div>
    </form>
  );
}
