import { GraduationCap } from 'lucide-react';
import { SYSTEM_PAGES_CONTENT } from '@/lib/site-content';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#16110E] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#2C1E16] text-[#FFFBF4] flex items-center justify-center animate-pulse">
          <GraduationCap className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium text-[#4A3E36]">
          {SYSTEM_PAGES_CONTENT.loadingLabel}
        </p>
      </div>
    </div>
  );
}
