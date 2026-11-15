'use client';

import { useMemo, useState, type ReactNode } from 'react';
import type { WingFilter } from '@/lib/site-content';

export interface RenderedSubjectItem {
  title: string;
  wing: WingFilter[];
  node: ReactNode;
}

interface SubjectsFilterClientProps {
  items: RenderedSubjectItem[];
  wingTabs: { id: WingFilter; label: string }[];
}

export default function SubjectsFilterClient({
  items,
  wingTabs,
}: SubjectsFilterClientProps) {
  const [selectedWing, setSelectedWing] = useState<WingFilter>('all');

  const filteredItems = useMemo(
    () =>
      selectedWing === 'all'
        ? items
        : items.filter((item) => item.wing.includes(selectedWing)),
    [items, selectedWing],
  );

  return (
    <>
      <div className="mb-10 flex justify-start md:justify-end">
        <div className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-[#F4EFE7] rounded-full border border-[#2C1E16]/10">
          {wingTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedWing(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedWing === tab.id
                  ? 'bg-[#2C1E16] text-[#FFFBF4] shadow-sm'
                  : 'text-[#4A3E36] hover:text-[#16110E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {filteredItems.map((item) => item.node)}
      </div>
    </>
  );
}
