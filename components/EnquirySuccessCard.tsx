import { memo } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, CONTACT_CONTENT } from '@/lib/site-content';

interface EnquirySuccessCardProps {
  parentName: string;
  grade: string;
  phone: string;
  onReset: () => void;
}

const EnquirySuccessCard = memo(function EnquirySuccessCard({
  parentName,
  grade,
  phone,
  onReset,
}: EnquirySuccessCardProps) {
  return (
    <div className="py-10 text-center flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-[#16110E]">
        {CONTACT_CONTENT.successTitle}
      </h3>
      <p className="text-sm text-[#4A3E36] max-w-md mx-auto">
        Thank you, {parentName}. Our {BRAND_INFO.city.split(',')[0]} admissions office has received your enquiry for {grade} and will contact you at {phone}.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="apple-btn-ghost rounded-full px-6 py-2.5 text-xs font-semibold cursor-pointer"
      >
        {CONTACT_CONTENT.successResetButton}
      </button>
    </div>
  );
});

export default EnquirySuccessCard;
