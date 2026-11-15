import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS, NAV_TEXT, SCHOOL_CONTACT } from '@/lib/site-content';
import MobileNavDrawer from '@/components/MobileNavDrawer';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFBF4]/90 backdrop-blur-xl border-b border-[#2C1E16]/10 shadow-[0_4px_24px_rgba(22,17,14,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        <a
          href="#"
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B2D23] to-[#16110E] text-[#FFFBF4] flex items-center justify-center shadow-sm ring-1 ring-black/15 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </span>
          <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#16110E]">
            {BRAND_INFO.logoName}
          </span>
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#F4EFE7] border border-[#2C1E16]/10 text-sm font-medium text-[#4A3E36]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full hover:bg-white hover:text-[#16110E] hover:shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="#contact"
            className="apple-btn-primary rounded-full px-5 py-2.5 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>{NAV_TEXT.primaryCtaLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <MobileNavDrawer
          navLinks={NAV_LINKS}
          phoneHref={SCHOOL_CONTACT.phoneHref}
          whatsappHref={SCHOOL_CONTACT.whatsappHref}
          primaryCtaLabel={NAV_TEXT.primaryCtaLabel}
          callCtaLabel={NAV_TEXT.callCtaLabel}
          whatsappCtaLabel={NAV_TEXT.whatsappCtaLabel}
          openMenuAria={NAV_TEXT.openMenuAria}
          closeMenuAria={NAV_TEXT.closeMenuAria}
        />
      </div>
    </header>
  );
}
