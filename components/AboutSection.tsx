import { Award, Cpu, Compass } from 'lucide-react';
import { ABOUT_CONTENT, type HighlightItem } from '@/lib/site-content';

const HIGHLIGHT_ICONS: Record<HighlightItem['icon'], typeof Award> = {
  award: Award,
  cpu: Cpu,
  compass: Compass,
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#3B2D23] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#2C1E16]">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E5D5C3] mb-2">
            {ABOUT_CONTENT.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFBF4] text-balance">
            {ABOUT_CONTENT.heading}
          </h2>
          <p className="mt-4 text-base text-[#DED1C1] leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {ABOUT_CONTENT.metrics.map((m) => (
            <div
              key={m.label}
              className="w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] rounded-3xl p-6 bg-[#241A13] border border-white/10 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#FFFBF4] tabular-nums tracking-tight">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#D6C7B6] mt-1.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {ABOUT_CONTENT.highlights.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="flex-1 apple-card rounded-3xl p-6 sm:p-7 bg-[#FFFBF4] flex flex-col"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#2C1E16] flex items-center justify-center text-[#FFFBF4] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#16110E]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A3E36] mt-1.5 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
