import { FACULTY_CONTENT } from '@/lib/site-content';

export default function FacultySection() {
  return (
    <section id="faculty" className="bg-[#3B2D23] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#2C1E16]">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E5D5C3] mb-2">
            {FACULTY_CONTENT.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFBF4] text-balance">
            {FACULTY_CONTENT.heading}
          </h2>
        </div>

        <div className="flex flex-wrap gap-5">
          {FACULTY_CONTENT.members.map((member) => (
            <div
              key={member.name}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] apple-card rounded-3xl p-6 bg-[#FFFBF4] flex items-center gap-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${member.accentBg} ${member.accentText} font-display font-semibold text-lg flex items-center justify-center shrink-0`}
              >
                {member.initials}
              </div>
              <div className="min-w-0 flex flex-col">
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#16110E] truncate">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#3B2D23] truncate">
                  {member.role}
                </p>
                <p className="text-xs text-[#5C4E44] mt-1 truncate">
                  {member.subject} · {member.credential}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
