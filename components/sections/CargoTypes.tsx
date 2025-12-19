import React from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import {
  Building2,
  Droplet,
  FileText,
  Tractor,
  FlaskConical,
  Pill,
  Package,
  UtensilsCrossed,
  Factory,
  AlertTriangle,
  Leaf,
  Wrench,
} from 'lucide-react';

interface CargoTypesProps {
  translations: Translations;
}

const cargoCategories = [
  {
    icon: Building2,
    items: [
      { key: 'constructionMaterials' as const, icon: Building2 },
      { key: 'motorOils' as const, icon: Droplet },
      { key: 'paper' as const, icon: FileText },
      { key: 'agriculturalMachinery' as const, icon: Tractor },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FlaskConical,
    items: [
      { key: 'householdChemicals' as const, icon: FlaskConical },
      { key: 'medicines' as const, icon: Pill },
      { key: 'industrialTextiles' as const, icon: Package },
      { key: 'foodProducts' as const, icon: UtensilsCrossed },
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Factory,
    items: [
      { key: 'industrialRawMaterials' as const, icon: Factory },
      { key: 'dangerousGoods' as const, icon: AlertTriangle },
      { key: 'veterinaryCargo' as const, icon: Leaf },
      { key: 'autoParts' as const, icon: Wrench },
    ],
    gradient: 'from-orange-500 to-amber-500',
  },
];

export const CargoTypes: React.FC<CargoTypesProps> = ({ translations }) => {
  return (
    <Section id="cargo-types" className="bg-white relative overflow-hidden">
      {/* Modern Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-linear-to-br from-[#074C6E]/5 to-transparent rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-[#074C6E]/5 to-transparent rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 md:mb-6 mb-4 tracking-tight">
            <span className="gradient-text">{translations.cargoTypes.title}</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {translations.cargoTypes.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-3 h-3 bg-linear-to-br from-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-20 h-1 bg-linear-to-r from-[#0ea5e9] via-[#074C6E] to-transparent rounded-full" />
          </div>
        </div>

        {/* Cargo Types Grid - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cargoCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={categoryIndex}
                className="group relative"
              >
                {/* Category Card */}
                <div className="relative h-full p-8 rounded-3xl bg-linear-to-br from-gray-50 to-white border-2 border-[#074C6E]/30 lg:border-gray-100 hover:border-[#074C6E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#074C6E]/10 hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                  {/* Category Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                      {/* Icon Container */}
                      <div className={`relative p-5 bg-linear-to-br ${category.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <CategoryIcon className="text-white" size={32} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Cargo Items List */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      const cargoType = translations.cargoTypes.items[item.key];

                      return (
                        <div
                          key={item.key}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-[#074C6E]/40 hover:bg-white hover:shadow-md transition-all duration-300 group/item"
                        >
                          {/* Item Icon */}
                          <div className="relative shrink-0">
                            <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover/item:opacity-10 rounded-lg blur transition-opacity duration-300`} />
                            <div className={`relative p-2.5 bg-linear-to-br ${category.gradient} rounded-lg group-hover/item:scale-110 transition-transform duration-300`}>
                              <ItemIcon className="text-white" size={18} strokeWidth={2.5} />
                            </div>
                          </div>

                          {/* Item Text */}
                          <div className="flex-1">
                            <p className="text-sm md:text-base font-medium text-gray-800 group-hover/item:text-[#074C6E] transition-colors duration-300 leading-relaxed">
                              {cargoType}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Decorative Accent Line */}
                  <div className="mt-8 h-1 lg:w-0 w-full group-hover:w-full bg-linear-to-r from-[#074C6E] to-transparent transition-all duration-500 rounded-full mx-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
