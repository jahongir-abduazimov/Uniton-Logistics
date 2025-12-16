'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
  isScrolled?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  className,
  isScrolled = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (locale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '') || '/';
    // Navigate to new locale
    router.push(`/${locale}${pathWithoutLocale}`);
    router.refresh();
    setIsOpen(false);
  };

  const localeNames: Record<Locale, string> = {
    en: 'English',
    ru: 'Русский',
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium',
          isScrolled
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-white hover:bg-white/10'
        )}
      >
        <Globe size={18} />
        <span className="hidden xl:inline">{localeNames[currentLocale]}</span>
        <span className="xl:hidden">{currentLocale.toUpperCase()}</span>
        <ChevronDown
          size={16}
          className={cn('transition-transform', isOpen ? 'rotate-180' : '')}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={cn(
                'w-full text-left px-4 py-2 text-sm font-medium transition-colors',
                currentLocale === locale
                  ? 'bg-[#074C6E]/10 text-[#074C6E]'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

