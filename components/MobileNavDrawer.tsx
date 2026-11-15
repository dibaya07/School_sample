'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import type { NavLinkItem } from '@/lib/site-content';

interface MobileNavDrawerProps {
  navLinks: NavLinkItem[];
  phoneHref: string;
  whatsappHref: string;
  primaryCtaLabel: string;
  callCtaLabel: string;
  whatsappCtaLabel: string;
  openMenuAria: string;
  closeMenuAria: string;
}

export default function MobileNavDrawer({
  navLinks,
  phoneHref,
  whatsappHref,
  primaryCtaLabel,
  callCtaLabel,
  whatsappCtaLabel,
  openMenuAria,
  closeMenuAria,
}: MobileNavDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="p-2.5 rounded-full bg-[#F4EFE7] text-[#16110E] border border-[#2C1E16]/15 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        aria-label={open ? closeMenuAria : openMenuAria}
        aria-expanded={open}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 sm:top-20 z-50 bg-[#FFFBF4]/95 backdrop-blur-xl border-b border-[#2C1E16]/15 px-4 py-5 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-medium text-[#16110E] hover:bg-[#F4EFE7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-[#2C1E16]/10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="apple-btn-primary rounded-full min-h-[46px] py-3 px-5 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>{primaryCtaLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex gap-2.5">
              <a
                href={phoneHref}
                className="flex-1 apple-btn-outline-dark rounded-full min-h-[44px] py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{callCtaLabel}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 apple-btn-whatsapp rounded-full min-h-[44px] py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{whatsappCtaLabel}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
