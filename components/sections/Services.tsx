import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import {
  Globe,
  Container,
  Truck,
  Ship,
  Train,
  Plane,
} from 'lucide-react';

interface ServicesProps {
  translations: Translations;
}

const servicesConfig = [
  {
    key: 'freightForwarding' as const,
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'containerLogistics' as const,
    icon: Container,
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    key: 'roadTransport' as const,
    icon: Truck,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    key: 'seaTransport' as const,
    icon: Ship,
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    key: 'railTransport' as const,
    icon: Train,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    key: 'airTransport' as const,
    icon: Plane,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export const Services: React.FC<ServicesProps> = ({ translations }) => {
  return (
    <Section id="services" className="bg-linear-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Modern Background Decorations */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-linear-to-br from-[#074C6E]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#074C6E]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-radial-gradient from-[#074C6E]/5 via-[#0ea5e9]/3 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 md:mb-6 mb-4 tracking-tight">
            <span className="gradient-text">{translations.services.title}</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {translations.services.intro}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-3 h-3 bg-linear-to-br from-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-20 h-1 bg-linear-to-r from-[#0ea5e9] via-[#074C6E] to-transparent rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesConfig.map((config, index) => {
            const service = translations.services.items[config.key];
            const Icon = config.icon;

            return (
              <Card
                key={config.key}
                className="group relative overflow-hidden border border-gray-200/60 hover:border-[#074C6E]/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${config.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="relative shrink-0">
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-linear-to-br ${config.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-2xl transition-opacity duration-500 scale-150`} />

                      {/* Icon Container */}
                      <div className={`relative p-4 bg-linear-to-br ${config.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-glow`}>
                        <Icon className="text-white" size={30} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-800 transition-colors duration-300 mb-4">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-linear-to-r from-[#074C6E] via-[#0ea5e9] to-transparent transition-all duration-500 rounded-full" />

                  {/* Hover Arrow Indicator */}
                  {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#074C6E] to-[#0ea5e9] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

