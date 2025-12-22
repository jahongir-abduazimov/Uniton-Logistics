'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { ChevronDown, Globe } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
  isScrolled?: boolean;
  isMobile?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  className,
  isScrolled = false,
  isMobile = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return; // Don't need click outside handler for mobile
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  const switchLanguage = (locale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '') || '/';
    // Navigate to new locale
    router.push(`/${locale}${pathWithoutLocale}`);
    router.refresh();
    setIsOpen(false);
  };

  const localeNames: Record<Locale, string> = {
    en: 'EN',
    ru: 'RU',
  };

  const localeCountryCodes: Record<Locale, string> = {
    en: 'GB',
    ru: 'RU',
  };

  // Mobile version: 2 buttons side by side
  if (isMobile) {
    return (
      <div className={cn('flex gap-2', className)}>
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={cn(
              'flex-1 px-4 py-2 rounded-lg transition-all font-medium border flex items-center justify-center gap-2',
              currentLocale === locale
                ? 'bg-[#074C6E] text-white border-[#074C6E]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            )}
          >
            <ReactCountryFlag
              countryCode={localeCountryCodes[locale]}
              svg
              style={{
                width: '20px',
                height: '15px',
              }}
              title={locale.toUpperCase()}
            />
            <span>{locale.toUpperCase()}</span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop version: dropdown
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
        <ReactCountryFlag
          countryCode={localeCountryCodes[currentLocale]}
          svg
          style={{
            width: '18px',
            height: '14px',
          }}
          title={currentLocale.toUpperCase()}
        />
        <span className="hidden xl:inline">{localeNames[currentLocale]}</span>
        <span className="xl:hidden">{currentLocale.toUpperCase()}</span>
        <ChevronDown
          size={16}
          className={cn('transition-transform', isOpen ? 'rotate-180' : '')}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-26 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={cn(
                'w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2',
                currentLocale === locale
                  ? 'bg-[#074C6E]/10 text-[#074C6E]'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <ReactCountryFlag
                countryCode={localeCountryCodes[locale]}
                svg
                style={{
                  width: '18px',
                  height: '14px',
                }}
                title={locale.toUpperCase()}
              />
              <span>{locale.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

