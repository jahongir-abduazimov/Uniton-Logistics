import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import { CheckCircle2 } from 'lucide-react';

interface AdvantagesProps {
  translations: Translations;
}

const advantagesKeys = [
  'reliability',
  'transparency',
  'flexibility',
  'efficiency',
  'optimalRoutes',
  'professionalism',
] as const;

export const Advantages: React.FC<AdvantagesProps> = ({ translations }) => {
  return (
    <Section id="advantages" className="bg-linear-to-b from-gray-50/50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#074C6E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#074C6E]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 md:mb-6 mb-4 tracking-tight">
            <span className="gradient-text">{translations.advantages.title}</span>
          </h2>
          {/* <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {translations.advantages.subtitle}
          </p> */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-3 h-3 bg-linear-to-br from-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-20 h-1 bg-linear-to-r from-[#0ea5e9] via-[#074C6E] to-transparent rounded-full" />
          </div>
        </div>

        {/* Advantages List - Two Column Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {advantagesKeys.map((key, index) => {
              const advantage = translations.advantages.items[key];

              return (
                <div
                  key={key}
                  className="group flex items-start gap-4 p-3 lg:p-6 rounded-xl bg-white border border-gray-200/60 hover:border-[#074C6E]/40 hover:shadow-lg hover:shadow-[#074C6E]/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Checkmark Icon */}
                  <div className="relative shrink-0 mt-0.5">
                    <div className="absolute inset-0 bg-[#074C6E]/10 rounded-full blur-md group-hover:bg-[#074C6E]/20 transition-all duration-300" />
                    <div className="relative p-2 bg-[#074C6E] rounded-full group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#074C6E] transition-colors duration-300 leading-relaxed">
                      {advantage}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

