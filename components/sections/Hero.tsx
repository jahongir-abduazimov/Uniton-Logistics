'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Translations } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { ArrowRight, Truck, Globe, Shield } from 'lucide-react';

interface HeroProps {
  translations: Translations;
}

export const Hero: React.FC<HeroProps> = ({ translations }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openConsultationModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative lg:min-h-screen flex items-center justify-center pt-25 pb-16 px-4 md:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Image/Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 scale-105">
          <Image
            src="/img/hero-bg.jpg"
            alt="Logistics background"
            fill
            priority
            // quality={100}
            className="object-cover object-right md:object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#074C6E]/70 via-[#0a5f84]/65 to-[#063d57]/70" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Background Shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#0ea5e9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#074C6E]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 glass-strong rounded-full border border-white/30 shadow-glow">
          <div className="relative">
            <div className="relative w-2.5 h-2.5 bg-green-400 rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-wide">{translations.hero.yearsOfExcellence}</span>
        </div>

        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block bg-linear-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            {translations.hero.headline}
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-50/95 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
          {translations.hero.subtitle}
        </p>

        {/* Modern Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <div className="group flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <Truck className="text-blue-200 group-hover:text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-lg md:text-xl font-bold">10K+</div>
              <div className="text-xs md:text-sm text-blue-200/90">{translations.hero.deliveries}</div>
            </div>
          </div>
          <div className="group flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <Globe className="text-blue-200 group-hover:text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-lg md:text-xl font-bold">30+</div>
              <div className="text-xs md:text-sm text-blue-200/90">{translations.hero.countries}</div>
            </div>
          </div>
          <div className="group flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <Shield className="text-blue-200 group-hover:text-white" size={20} />
            </div>
            <div className="text-left">
              <div className="text-lg md:text-xl font-bold">99.9%</div>
              <div className="text-xs md:text-sm text-blue-200/90">{translations.hero.safetyRate}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={openConsultationModal}
            className="group flex items-center justify-center gap-2 shadow-glow-strong hover:scale-105 hover:shadow-glow transition-all duration-300 min-w-[200px]"
          >
            <span className="font-semibold">{translations.hero.getQuote}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          {/* <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border-2 border-white/40 text-white hover:bg-white glass hover:border-white transition-all duration-300 shadow-xl hover:scale-105 min-w-[200px] font-semibold"
          >
            {translations.hero.contactUs}
          </Button> */}
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translations={translations}
      />
    </section>
  );
};

