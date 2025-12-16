'use client';

import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, ArrowRight } from 'lucide-react';

interface DirectionsProps {
  translations: Translations;
}

export const Directions: React.FC<DirectionsProps> = ({ translations }) => {
  const directions = translations.directions.items;

  // Background images for each direction - Unsplash URLs
  const directionImages: Record<string, string> = {
    europe: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
    china: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop',
    turkey: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
    kazakhstan: 'https://www.unocha.org/sites/default/files/styles/full_width_2_1_246/public/2023-06/AdobeStock_284095826.jpeg.webp',
    uzbekistan: 'https://www.tracksaroundtheworld.de/wp-content/uploads/2025/06/250527-19-ED56121D-2464-48F0-8818-D2DB1C295EB0-1170x680.jpg',
    asia: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop&q=80',
  };

  return (
    <Section id="directions" className="bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br from-[#074C6E]/5 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-linear-to-tr from-[#074C6E]/5 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {translations.directions.title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.directions.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-transparent rounded-full" />
            <div className="w-2 h-2 bg-[#074C6E] rounded-full" />
            <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-transparent rounded-full" />
          </div>
        </div>

        {/* Directions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {directions.map((direction, index) => (
            <div
              key={direction.key}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 hover:border-[#074C6E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#074C6E]/10 hover:-translate-y-2"
              style={{
                backgroundImage: `url(${directionImages[direction.key] || '/img/directions/default.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Dark Overlay - Tiniqlashadi hover qilinganda */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Region Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-[#074C6E] transition-colors duration-300">
                      <MapPin className="text-white group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                        {direction.name}
                      </h3>
                      <span className="text-sm text-white/80 font-medium mt-1 inline-block">
                        {direction.serviceType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-3 mb-8">
                  {direction.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center gap-3 text-white/90 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action Button */}
                <Button
                  variant="primary"
                  size="md"
                  className="w-full group/btn"
                  onClick={() => {
                    // Scroll to contact form
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {translations.directions.sendRequest}
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={18} />
                  </span>
                </Button>

                {/* Decorative Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
