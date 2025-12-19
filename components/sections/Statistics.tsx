import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';

interface StatisticsProps {
  translations: Translations;
}

const stats = [
  { value: '5+', labelKey: 'yearsExperience' as const },
  { value: '10K+', labelKey: 'deliveredCargos' as const },
  { value: '100+', labelKey: 'partnerCompanies' as const },
  { value: '30+', labelKey: 'countriesCovered' as const },
];

export const Statistics: React.FC<StatisticsProps> = ({ translations }) => {
  return (
    <Section className="relative bg-linear-to-br from-[#074C6E] via-[#085f87] to-[#063d57] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white md:mb-6 mb-4 tracking-tight">
            <span className="bg-linear-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">{translations.statistics.title}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-white/50 to-white rounded-full" />
            <div className="w-3 h-3 bg-linear-to-br from-white to-blue-200 rounded-full" />
            <div className="w-20 h-1 bg-linear-to-r from-white via-white/50 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <div className="text-3xl lg:text-6xl font-extrabold mb-2 bg-linear-to-b from-white to-blue-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                {translations.statistics[stat.labelKey]}
              </div>
              <div className="h-1 w-0 group-hover:w-12 bg-white/50 mx-auto rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

