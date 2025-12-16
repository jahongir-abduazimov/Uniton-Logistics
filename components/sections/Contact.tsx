'use client';

import React, { useState } from 'react';
import { Translations } from '@/lib/i18n';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  translations: Translations;
}

export const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    company: '',
    phone: '',
    from: '',
    to: '',
    cargoDescription: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert(translations.locale === 'en' ? 'Thank you! We will contact you soon.' : 'Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', surname: '', email: '', company: '', phone: '', from: '', to: '', cargoDescription: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {translations.contact.title}
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-5 md:p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row: Name, Surname, Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? 'Enter your name' : 'Введите ваше имя'}
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? 'your@email.com' : 'ваш@email.com'}
                    />
                  </div>
                </div>

                {/* Second Row: Company, Phone, From, To */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-1">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.company} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? 'Company name' : 'Название компании'}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? '+1 (555) 123-4567' : '+7 (999) 123-45-67'}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label
                      htmlFor="from"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.from}
                    </label>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? 'Origin' : 'Откуда'}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.to}
                    </label>
                    <input
                      type="text"
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.locale === 'en' ? 'Destination' : 'Куда'}
                    />
                  </div>
                </div>

                {/* Third Row: Cargo Description */}
                <div>
                  <label
                    htmlFor="cargoDescription"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.cargoDescription} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cargoDescription"
                    name="cargoDescription"
                    value={formData.cargoDescription}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 resize-none hover:border-gray-300"
                    placeholder={translations.locale === 'en' ? 'Describe your cargo...' : 'Опишите ваш груз...'}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full py-3 md:text-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {translations.contact.form.submit}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info - Compact version, moved below on mobile */}
          <div className="lg:col-span-1 space-y-4 mt-8 lg:mt-0">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-[#074C6E] to-[#063d57] text-white">
              <h3 className="text-xl font-bold mb-6 text-white">
                {translations.locale === 'en' ? 'Contact Information' : 'Контактная информация'}
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white/90 mb-1">
                      {translations.contact.info.phone}
                    </h4>
                    <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white/90 mb-1">
                      {translations.contact.info.email}
                    </h4>
                    <p className="text-white/80 text-sm break-all">info@unitonlogistics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white/90 mb-1">
                      {translations.contact.info.address}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {translations.locale === 'en'
                        ? '123 Logistics Street, Business District, City 12345'
                        : 'ул. Логистическая, 123, Бизнес-район, Город 12345'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

