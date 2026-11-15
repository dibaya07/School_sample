import { SUBJECTS_CONTENT } from '@/lib/site-content';
import SubjectCard from '@/components/SubjectCard';
import SubjectsFilterClient from '@/components/SubjectsFilterClient';

export default function SubjectsSection() {
  const renderedSubjects = SUBJECTS_CONTENT.subjects.map((subject) => ({
    title: subject.title,
    wing: subject.wing,
    node: <SubjectCard key={subject.title} subject={subject} />,
  }));

  return (
    <section id="subjects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-xl mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3B2D23] mb-2">
          {SUBJECTS_CONTENT.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#16110E] text-balance">
          {SUBJECTS_CONTENT.heading}
        </h2>
      </div>

      <SubjectsFilterClient
        items={renderedSubjects}
        wingTabs={SUBJECTS_CONTENT.wingTabs}
      />
    </section>
  );
}
