'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale, Translations } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Logo from '@/public/img/logo.png';
import Image from 'next/image';

interface HeaderProps {
  locale: Locale;
  translations: Translations;
}

export const Header: React.FC<HeaderProps> = ({ locale, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+998915371967';
  };
  const handleCall2 = () => {
    window.location.href = 'tel:+998883978781';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 lg:px-8 ${isScrolled || isMobileMenuOpen
        ? 'bg-white/90 backdrop-blur-xl shadow-modern border-b border-gray-200/50'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="group flex items-center gap-3 z-10">
            <Image
              src={Logo}
              alt="Uniton Logo"
              width={100}
              height={100}
              className={`transition-all duration-200 w-20 lg:w-24 ${isScrolled || isMobileMenuOpen
                ? 'brightness-100'
                : 'brightness-0 invert'
                }`}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('services')}
              className={`px-5 py-2.5 transition-all font-semibold rounded-xl hover:bg-linear-to-r hover:from-[#074C6E]/10 hover:to-[#0ea5e9]/10 relative group ${isScrolled
                ? 'text-gray-700 hover:text-[#074C6E]'
                : 'text-white hover:text-blue-200'
                }`}
            >
              {translations.header.nav.services}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 transition-all duration-300 rounded-full ${isScrolled ? 'bg-linear-to-r from-[#074C6E] to-[#0ea5e9]' : 'bg-linear-to-r from-white to-blue-200'
                }`} />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`px-5 py-2.5 transition-all font-semibold rounded-xl hover:bg-linear-to-r hover:from-[#074C6E]/10 hover:to-[#0ea5e9]/10 relative group ${isScrolled
                ? 'text-gray-700 hover:text-[#074C6E]'
                : 'text-white hover:text-blue-200'
                }`}
            >
              {translations.header.nav.about}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 transition-all duration-300 rounded-full ${isScrolled ? 'bg-linear-to-r from-[#074C6E] to-[#0ea5e9]' : 'bg-linear-to-r from-white to-blue-200'
                }`} />
            </button>
            <button
              onClick={() => scrollToSection('advantages')}
              className={`px-5 py-2.5 transition-all font-semibold rounded-xl hover:bg-linear-to-r hover:from-[#074C6E]/10 hover:to-[#0ea5e9]/10 relative group ${isScrolled
                ? 'text-gray-700 hover:text-[#074C6E]'
                : 'text-white hover:text-blue-200'
                }`}
            >
              {translations.header.nav.advantages}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 transition-all duration-300 rounded-full ${isScrolled ? 'bg-linear-to-r from-[#074C6E] to-[#0ea5e9]' : 'bg-linear-to-r from-white to-blue-200'
                }`} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-5 py-2.5 transition-all font-semibold rounded-xl hover:bg-linear-to-r hover:from-[#074C6E]/10 hover:to-[#0ea5e9]/10 relative group ${isScrolled
                ? 'text-gray-700 hover:text-[#074C6E]'
                : 'text-white hover:text-blue-200'
                }`}
            >
              {translations.header.nav.contact}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 transition-all duration-300 rounded-full ${isScrolled ? 'bg-linear-to-r from-[#074C6E] to-[#0ea5e9]' : 'bg-linear-to-r from-white to-blue-200'
                }`} />
            </button>
          </div>

          {/* Right Side - CTA Button and Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleCall}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-semibold shadow-lg hover:shadow-glow ${isScrolled
                ? 'bg-linear-to-r from-[#074C6E] to-[#0ea5e9] text-white hover:from-[#063d57] hover:to-[#074C6E]'
                : 'glass-strong text-white hover:bg-white/20 border border-white/30'
                }`}
            >
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline">+998 91 537 1967</span>
            </button>
            <LanguageSwitcher currentLocale={locale} isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#074C6E]' : 'text-white'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden pb-4 mt-2 pt-4 ${isScrolled ? 'border-t border-gray-200' : 'border-t border-white/20'
            }`}>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('services')}
                className={`group flex items-center justify-between text-left transition-all duration-300 font-semibold px-5 py-3.5 rounded-xl border hover:scale-[1.02] ${isScrolled || isMobileMenuOpen
                  ? 'text-[#074C6E] border-[#074C6E]/30 hover:bg-linear-to-r hover:from-[#074C6E]/5 hover:to-[#0ea5e9]/5 hover:border-[#074C6E]/50'
                  : 'text-white hover:text-blue-200 border-white/20 hover:border-white/40 hover:bg-white/10 glass'
                  }`}
              >
                <span>{translations.header.nav.services}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${isScrolled || isMobileMenuOpen ? 'text-[#074C6E]' : 'text-white'}`}
                />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`group flex items-center justify-between text-left transition-all duration-300 font-semibold px-5 py-3.5 rounded-xl border hover:scale-[1.02] ${isScrolled || isMobileMenuOpen
                  ? 'text-[#074C6E] border-[#074C6E]/30 hover:bg-linear-to-r hover:from-[#074C6E]/5 hover:to-[#0ea5e9]/5 hover:border-[#074C6E]/50'
                  : 'text-white hover:text-blue-200 border-white/20 hover:border-white/40 hover:bg-white/10 glass'
                  }`}
              >
                <span>{translations.header.nav.about}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${isScrolled || isMobileMenuOpen ? 'text-[#074C6E]' : 'text-white'}`}
                />
              </button>
              <button
                onClick={() => scrollToSection('advantages')}
                className={`group flex items-center justify-between text-left transition-all duration-300 font-semibold px-5 py-3.5 rounded-xl border hover:scale-[1.02] ${isScrolled || isMobileMenuOpen
                  ? 'text-[#074C6E] border-[#074C6E]/30 hover:bg-linear-to-r hover:from-[#074C6E]/5 hover:to-[#0ea5e9]/5 hover:border-[#074C6E]/50'
                  : 'text-white hover:text-blue-200 border-white/20 hover:border-white/40 hover:bg-white/10 glass'
                  }`}
              >
                <span>{translations.header.nav.advantages}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${isScrolled || isMobileMenuOpen ? 'text-[#074C6E]' : 'text-white'}`}
                />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`group flex items-center justify-between text-left transition-all duration-300 font-semibold px-5 py-3.5 rounded-xl border hover:scale-[1.02] ${isScrolled || isMobileMenuOpen
                  ? 'text-[#074C6E] border-[#074C6E]/30 hover:bg-linear-to-r hover:from-[#074C6E]/5 hover:to-[#0ea5e9]/5 hover:border-[#074C6E]/50'
                  : 'text-white hover:text-blue-200 border-white/20 hover:border-white/40 hover:bg-white/10 glass'
                  }`}
              >
                <span>{translations.header.nav.contact}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${isScrolled || isMobileMenuOpen ? 'text-[#074C6E]' : 'text-white'}`}
                />
              </button>
              <div className="border-t border-gray-200 pt-4 mt-2">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg text-gray-700"
                >
                  <Phone size={18} className="text-[#074C6E]" />
                  <div className="flex-1">
                    <div className="font-medium">{translations.header.callUs}</div>
                    <div className="text-sm text-gray-500">+998 91 537 1967</div>
                  </div>
                </button>
                <button
                  onClick={handleCall2}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors rounded-lg text-gray-700"
                >
                  <Phone size={18} className="text-[#074C6E]" />
                  <div className="flex-1">
                    <div className="font-medium">{translations.header.callUs}</div>
                    <div className="text-sm text-gray-500">+998 88 397 8781</div>
                  </div>
                </button>
                <div className="px-4 py-3">
                  <LanguageSwitcher currentLocale={locale} isScrolled={isScrolled || isMobileMenuOpen} isMobile={true} />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
