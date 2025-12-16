'use client';

import React, { useState } from 'react';
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
    <section className="relative lg:min-h-screen flex items-center justify-center md:pt-20 pt-25 pb-16 px-4 md:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Image/Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image - Replace with your logistics image */}
        <div
          className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/hero-bg.jpg)',
            // Fallback gradient if image is not found
            backgroundColor: '#074C6E',
          }}
        />

        {/* Alternative: Video Background (uncomment if you want to use video instead) */}
        {/* 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/img/logistics-bg.mp4" type="video/mp4" />
          <source src="/img/logistics-bg.webm" type="video/webm" />
        </video>
        */}

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#074C6E]/70 via-[#0a5f84]/65 to-[#063d57]/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">{translations.hero.yearsOfExcellence}</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-fade-in-up">
          <span className="block">{translations.hero.headline}</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {translations.hero.subtitle}
        </p>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <Truck className="text-blue-300" size={20} />
            <span className="font-semibold">50K+</span>
            <span className="text-blue-200">{translations.hero.deliveries}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="text-blue-300" size={20} />
            <span className="font-semibold">30+</span>
            <span className="text-blue-200">{translations.hero.countries}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="text-blue-300" size={20} />
            <span className="font-semibold">99.9%</span>
            <span className="text-blue-200">{translations.hero.safetyRate}</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            variant="secondary"
            size="md"
            onClick={openConsultationModal}
            className="group flex items-center justify-center gap-2 shadow-2xl hover:scale-105 transition-transform"
          >
            <span>{translations.hero.getQuote}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={scrollToContact}
            className="border-2 border-white/30 text-white hover:bg-white hover:text-[#074C6E] backdrop-blur-sm hover:border-white transition-all shadow-xl hover:scale-105"
          >
            {translations.hero.contactUs}
          </Button>
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

