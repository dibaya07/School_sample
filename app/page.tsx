import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SubjectsSection from '@/components/SubjectsSection';
import FacultySection from '@/components/FacultySection';
import PhotoGallery from '@/components/PhotoGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#16110E] selection:bg-[#2C1E16] selection:text-[#FFFBF4] flex flex-col justify-between overflow-x-hidden w-full">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SubjectsSection />
        <FacultySection />
        <PhotoGallery />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
