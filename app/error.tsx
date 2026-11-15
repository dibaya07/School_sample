'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft, AlertTriangle } from 'lucide-react';
import { SYSTEM_PAGES_CONTENT } from '@/lib/site-content';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { error: errorCopy } = SYSTEM_PAGES_CONTENT;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#16110E] flex flex-col items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-lg w-full rounded-3xl bg-white border border-[#2C1E16]/10 shadow-[0_14px_40px_-10px_rgba(22,17,14,0.1)] p-8 sm:p-10 flex flex-col items-center text-center gap-5">
        <div className="w-12 h-12 rounded-2xl bg-[#3B2D23] text-[#FFFBF4] flex items-center justify-center">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3B2D23]">
            {errorCopy.eyebrow}
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#16110E] text-balance">
            {errorCopy.title}
          </h1>
          <p className="text-sm text-[#4A3E36] leading-relaxed">
            {errorCopy.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="apple-btn-primary rounded-full min-h-[46px] px-6 py-3 text-sm font-semibold flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{errorCopy.retryButton}</span>
          </button>
          <Link
            href="/"
            className="apple-btn-outline-dark rounded-full min-h-[46px] px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{errorCopy.homeButton}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
