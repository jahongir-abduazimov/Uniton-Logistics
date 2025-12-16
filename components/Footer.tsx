'use client';

import React from 'react';
import { Translations } from '@/lib/i18n';
import { Facebook, Twitter, Linkedin, Instagram, Truck, Phone, Mail, MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/public/img/logo.png';
import Image from 'next/image';

interface FooterProps {
  translations: Translations;
}

export const Footer: React.FC<FooterProps> = ({ translations }) => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    translations.services.items.freightForwarding.title,
    translations.services.items.containerLogistics.title,
    translations.services.items.roadTransport.title,
    translations.services.items.seaTransport.title,
    translations.services.items.railTransport.title,
    translations.services.items.airTransport.title,
  ];

  return (
    <footer className="relative bg-linear-to-br from-[#074C6E] via-[#085f87] to-[#063d57] text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src={Logo} alt="Uniton Logo" className="brightness-0 invert w-30" />
            </div>
            <p className="text-blue-100 text-base leading-relaxed">
              {translations.footer.slogan}
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative p-3.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-linear-to-br hover:from-white/20 hover:to-[#0ea5e9]/20 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/30 hover:shadow-glow"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-linear-to-br from-[#0ea5e9]/0 to-[#0ea5e9]/0 group-hover:from-[#0ea5e9]/20 group-hover:to-transparent rounded-xl transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/20 flex items-center gap-2">
              <Navigation size={18} />
              {translations.locale === 'en' ? 'Navigation' : 'Навигация'}
            </h4>
            <ul className="space-y-3 text-blue-100">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  <span className="font-medium">{translations.header.nav.services}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  <span className="font-medium">{translations.header.nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('advantages')}
                  className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  <span className="font-medium">{translations.header.nav.advantages}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2 w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  <span className="font-medium">{translations.header.nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/20 flex items-center gap-2">
              <Truck size={18} />
              {translations.services.title}
            </h4>
            <ul className="space-y-3 text-blue-100">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="group flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-2 w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                    <span className="text-sm font-medium">{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/20 flex items-center gap-2">
              <Phone size={18} />
              {translations.header.nav.contact}
            </h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3 group hover:text-white transition-all duration-300 hover:translate-x-2">
                <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-linear-to-br group-hover:from-white/20 group-hover:to-[#0ea5e9]/20 transition-all duration-300 group-hover:scale-110 border border-white/10 group-hover:border-white/30">
                  <Phone className="text-white" size={18} />
                </div>
                <a href="tel:+998915371967" className="font-medium hover:underline">+998 91 537 1967</a>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-all duration-300 hover:translate-x-2">
                <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-linear-to-br group-hover:from-white/20 group-hover:to-[#0ea5e9]/20 transition-all duration-300 group-hover:scale-110 border border-white/10 group-hover:border-white/30">
                  <Phone className="text-white" size={18} />
                </div>
                <a href="tel:+998883978781" className="font-medium hover:underline">+998 88 397 8781</a>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-all duration-300 hover:translate-x-2">
                <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-linear-to-br group-hover:from-white/20 group-hover:to-[#0ea5e9]/20 transition-all duration-300 group-hover:scale-110 border border-white/10 group-hover:border-white/30">
                  <Mail className="text-white" size={18} />
                </div>
                <a href="mailto:info@unitonlogistics.com" className="font-medium hover:underline break-all">info@unitonlogistics.com</a>
              </li>
              {translations.contact.info.addressText && (
                <li className="flex items-start gap-3 group hover:text-white transition-all duration-300 hover:translate-x-2">
                  <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-linear-to-br group-hover:from-white/20 group-hover:to-[#0ea5e9]/20 transition-all duration-300 group-hover:scale-110 border border-white/10 group-hover:border-white/30 mt-0.5">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-sm leading-relaxed">{translations.contact.info.addressText}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">
            @ {new Date().getFullYear()} {translations.footer.copyright}
          </p>
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <span>{translations.footer.madeBy}</span>
            <Link target="_blank" href="https://netqadam.uz" className="text-white hover:text-gray-300 transition-colors">Netqadam</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

