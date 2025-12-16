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
    <Section id="services" className="bg-linear-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Modern Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-br from-[#074C6E]/8 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-[#074C6E]/8 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#074C6E]/3 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {translations.services.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.services.intro}
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-transparent rounded-full" />
            <div className="w-2 h-2 bg-[#074C6E] rounded-full" />
            <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-transparent rounded-full" />
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
                className="group relative overflow-hidden border lg:border-gray-200/80 border-[#074C6E]/30 hover:border-[#074C6E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#074C6E]/10 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative shrink-0">
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-linear-to-br ${config.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                      {/* Icon Container */}
                      <div className={`relative p-4 bg-linear-to-br ${config.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="text-white" size={28} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#074C6E] transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-0.5 lg:w-0 w-full group-hover:w-full bg-linear-to-r from-[#074C6E] to-transparent transition-all duration-500 rounded-full" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

