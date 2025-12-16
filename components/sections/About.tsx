import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import { Globe, Clock, Shield } from 'lucide-react';

interface AboutProps {
  translations: Translations;
}

export const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#074C6E]/5 to-transparent" />

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div>
            {/* <div className="inline-block px-4 py-2 mb-4 bg-[#074C6E]/10 rounded-full text-[#074C6E] text-sm font-semibold">
              TRUSTED PARTNER
            </div> */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {translations.about.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {translations.about.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5 group">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#074C6E]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                <div className="relative p-4 bg-gradient-to-br from-[#074C6E] to-[#085f87] rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#074C6E] transition-colors">
                  {translations.advantages.items.efficiency}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {translations.about.efficiencyDescription}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#074C6E]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                <div className="relative p-4 bg-gradient-to-br from-[#074C6E] to-[#085f87] rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#074C6E] transition-colors">
                  {translations.advantages.items.reliability}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {translations.about.reliabilityDescription}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#074C6E]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                <div className="relative p-4 bg-gradient-to-br from-[#074C6E] to-[#085f87] rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#074C6E] transition-colors">
                  {translations.about.globalReach}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {translations.about.globalReachDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#074C6E]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#074C6E]/10 rounded-full blur-2xl" />

          <div className="relative bg-gradient-to-br from-[#074C6E] via-[#085f87] to-[#063d57] rounded-3xl p-12 text-white shadow-glow-strong overflow-hidden">
            {/* Simple Moving Lines - Represents Logistics Routes */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-white animate-moving-line" />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white animate-moving-line" style={{ animationDelay: '2s' }} />
              <div className="absolute top-3/4 left-0 w-full h-0.5 bg-white animate-moving-line" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10 text-center">
              <div className="text-7xl md:text-8xl font-extrabold mb-4 bg-gradient-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                15+
              </div>
              <div className="text-2xl md:text-3xl font-semibold opacity-95 mb-6">
                {translations.statistics.yearsExperience}
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full" />
              <p className="mt-6 text-blue-100 text-lg font-light">
                {translations.about.deliveringExcellence}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

