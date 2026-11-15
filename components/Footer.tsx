import { Phone, MessageCircle, Mail, GraduationCap } from 'lucide-react';
import {
  BRAND_INFO,
  CONTACT_CONTENT,
  NAV_LINKS,
  SCHOOL_CONTACT,
} from '@/lib/site-content';

export default function Footer() {
  return (
    <footer className="bg-[#16110E] text-[#FFFBF4] border-t border-[#2C1E16] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#3B2D23] text-[#FFFBF4] flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </span>
            <p className="font-display text-lg font-semibold text-[#FFFBF4]">
              {BRAND_INFO.logoName} · {SCHOOL_CONTACT.locality}
            </p>
          </div>
          <p className="text-xs text-[#C7B8A8]">
            {BRAND_INFO.affiliationLine}
          </p>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#D6C7B6]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FFFBF4] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={SCHOOL_CONTACT.phoneHref}
            className="bg-[#2C1E16] hover:bg-[#3B2D23] text-[#FFFBF4] rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{CONTACT_CONTENT.callShortButton}</span>
          </a>
          <a
            href={SCHOOL_CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-whatsapp rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{CONTACT_CONTENT.whatsappButton}</span>
          </a>
          <a
            href={`mailto:${SCHOOL_CONTACT.email}`}
            className="bg-[#2C1E16] hover:bg-[#3B2D23] text-[#FFFBF4] rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CONTACT_CONTENT.emailButton}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#2C1E16] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9C8D7E]">
        <p>{BRAND_INFO.copyrightText}</p>
        <p>{BRAND_INFO.affiliationFooterRight}</p>
      </div>
    </footer>
  );
}
