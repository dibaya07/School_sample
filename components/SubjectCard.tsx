import {
  Calculator,
  Atom,
  Code2,
  BookOpen,
  Languages,
  TrendingUp,
  Dna,
  Music,
} from 'lucide-react';
import type { SubjectIconKey, SubjectItem } from '@/lib/site-content';

const ICON_MAP: Record<SubjectIconKey, typeof Calculator> = {
  calculator: Calculator,
  atom: Atom,
  code: Code2,
  book: BookOpen,
  languages: Languages,
  trending: TrendingUp,
  dna: Dna,
  music: Music,
};

export default function SubjectCard({ subject }: { subject: SubjectItem }) {
  const Icon = ICON_MAP[subject.icon];

  return (
    <div className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)] apple-card rounded-3xl p-6 flex flex-col justify-between bg-white">
      <div className="flex flex-col">
        <div className="w-10 h-10 rounded-2xl bg-[#2C1E16] flex items-center justify-center text-[#FFFBF4] mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <p className="text-xs text-[#6B5E54] font-medium mb-1">
          {subject.stream}
        </p>
        <h3 className="font-display text-lg font-semibold text-[#16110E]">
          {subject.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#4A3E36] mt-2 leading-relaxed">
          {subject.summary}
        </p>
      </div>
    </div>
  );
}
