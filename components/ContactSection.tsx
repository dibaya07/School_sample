import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import {
  CONTACT_CONTENT,
  SCHOOL_CONTACT,
  type SocialLinkItem,
} from '@/lib/site-content';
import EnquiryForm from '@/components/EnquiryForm';

const SOCIAL_ICON_MAP: Record<SocialLinkItem['icon'], typeof Instagram> = {
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  facebook: Facebook,
  globe: Globe,
};

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F4EFE7] border-t border-[#2C1E16]/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3B2D23] mb-2">
            {CONTACT_CONTENT.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#16110E] text-balance">
            {CONTACT_CONTENT.heading}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="w-full lg:w-[58%] apple-card rounded-3xl p-6 sm:p-8 lg:p-10 bg-white flex flex-col justify-between">
            <EnquiryForm
              phoneHref={SCHOOL_CONTACT.phoneHref}
              whatsappHref={SCHOOL_CONTACT.whatsappHref}
            />
          </div>

          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#3B2D23] text-[#FFFBF4] border border-[#16110E]/20 shadow-[0_14px_34px_-6px_rgba(22,17,14,0.22)] flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#D6C7B6]">
                    {CONTACT_CONTENT.locationEyebrow}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#FFFBF4] mt-1">
                    {CONTACT_CONTENT.locationTitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#241A13] flex items-center justify-center text-[#FFFBF4] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col gap-3 text-sm text-[#E5D5C3]">
                <p className="leading-relaxed">{SCHOOL_CONTACT.address}</p>
                <div className="flex items-center gap-2 text-xs text-[#D6C7B6]">
                  <Clock className="w-4 h-4 text-[#FFFBF4] shrink-0" />
                  <span>{SCHOOL_CONTACT.hours}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={SCHOOL_CONTACT.phoneHref}
                  className="flex-1 bg-[#16110E] hover:bg-black text-[#FFFBF4] rounded-2xl min-h-[44px] py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SCHOOL_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={SCHOOL_CONTACT.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#FFFBF4] hover:bg-[#EAE2D6] text-[#16110E] rounded-2xl min-h-[44px] py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{CONTACT_CONTENT.openMapsLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="apple-card rounded-3xl p-6 sm:p-8 bg-white flex-1 flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#3B2D23]">
                  {CONTACT_CONTENT.socialEyebrow}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#16110E] mt-1 mb-4">
                  {CONTACT_CONTENT.socialHeading}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {CONTACT_CONTENT.socialLinks.map((social) => {
                    const Icon = SOCIAL_ICON_MAP[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="w-full sm:w-[calc(50%-0.3125rem)] flex items-center gap-3 p-3 rounded-2xl bg-[#F4EFE7] hover:bg-[#EAE2D6] transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#2C1E16] text-[#FFFBF4] flex items-center justify-center shadow-xs shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-[#16110E] flex items-center gap-1">
                            <span>{social.name}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[11px] text-[#5C4E44] truncate">
                            {social.handle}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
