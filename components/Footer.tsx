import React from 'react';
import { Translations } from '@/lib/i18n';
import { Facebook, Twitter, Linkedin, Instagram, Truck, Phone, Mail } from 'lucide-react';
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

  return (
    <footer className="relative bg-gradient-to-br from-[#074C6E] via-[#085f87] to-[#063d57] text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image src={Logo} alt="Uniton Logo" className="brightness-0 invert w-30" />
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
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
                    className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all hover:scale-110 border border-white/10 hover:border-white/30"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 pb-2 border-b border-white/20">
              {translations.header.nav.contact}
            </h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="text-white" size={18} />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="text-white" size={18} />
                </div>
                <span>info@unitonlogistics.com</span>
              </li>
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
            {/* <span>{translations.locale === 'en' ? 'for logistics excellence' : 'для превосходства в логистике'}</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

