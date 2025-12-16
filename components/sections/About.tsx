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

          <div className="relative bg-gradient-to-br from-[#074C6E] via-[#085f87] to-[#063d57] rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h20v-2h-2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2h-2V0h2v2h2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2h-2V0h2v2h2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2v-2h-2v-2h-2V8h-2V6h-2V4h-2V2h-2V0h2v2h2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative z-10 text-center">
              <div className="text-7xl md:text-8xl font-extrabold mb-4 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-2xl md:text-3xl font-semibold opacity-95 mb-6">
                {translations.statistics.yearsExperience}
              </div>
              <div className="h-1 w-24 bg-white/30 mx-auto rounded-full" />
              <p className="mt-6 text-blue-100 text-lg">
                {translations.about.deliveringExcellence}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

