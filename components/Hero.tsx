import Image from 'next/image';
import { Phone, MessageCircle, ArrowUpRight, MapPin } from 'lucide-react';
import { HERO_CONTENT, SCHOOL_CONTACT } from '@/lib/site-content';
import MotionReveal from '@/components/MotionReveal';

export default function Hero() {
  return (
    <section className="pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        <MotionReveal variant="slideUp" className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#3B2D23]">
            {HERO_CONTENT.highlights.map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#16110E] leading-[1.06] text-balance">
            {HERO_CONTENT.heading}
          </h1>

          <p className="text-base sm:text-lg text-[#4A3E36] leading-relaxed max-w-xl">
            {HERO_CONTENT.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="apple-btn-primary rounded-full min-h-[48px] px-7 py-3.5 text-sm font-semibold flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={SCHOOL_CONTACT.phoneHref}
              className="apple-btn-outline-dark rounded-full min-h-[48px] px-6 py-3.5 text-sm font-semibold flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{HERO_CONTENT.callCta}</span>
            </a>

            <a
              href={SCHOOL_CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-whatsapp rounded-full min-h-[48px] px-6 py-3.5 text-sm font-semibold flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{HERO_CONTENT.whatsappCta}</span>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#5C4E44]">
            <MapPin className="w-3.5 h-3.5 text-[#2C1E16] shrink-0" />
            <span>{SCHOOL_CONTACT.shortAddress}</span>
          </div>
        </MotionReveal>

        <MotionReveal variant="scaleIn" delay={0.05} className="w-full lg:w-1/2">
          <div className="p-2 sm:p-2.5 rounded-[34px] bg-gradient-to-br from-[#3B2D23] via-[#7A6859] to-[#16110E] shadow-[0_28px_64px_-14px_rgba(22,17,14,0.28)]">
            <div className="relative rounded-[26px] overflow-hidden bg-[#16110E] ring-1 ring-white/25">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={HERO_CONTENT.imageSrc}
                  alt={HERO_CONTENT.imageAlt}
                  fill
                  priority
                  quality={82}
                  placeholder="blur"
                  blurDataURL={HERO_CONTENT.imageBlurDataURL}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16110E]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#FFFBF4]">
                  <div>
                    <p className="text-xs font-medium text-[#FFFBF4]/85">
                      {HERO_CONTENT.campusTag}
                    </p>
                    <p className="font-display text-lg sm:text-xl font-semibold">
                      {HERO_CONTENT.campusLocation}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#FFFBF4]/90">
                    {HERO_CONTENT.establishedLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
