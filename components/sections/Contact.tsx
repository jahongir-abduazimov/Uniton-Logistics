"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactProps {
  translations: Translations;
}

export const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    company: "",
    phone: "",
    from: "",
    to: "",
    cargoDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      surname: "",
      email: "",
      company: "",
      phone: "",
      from: "",
      to: "",
      cargoDescription: "",
    });
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
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
    <Section
      id="contact"
      className="bg-linear-to-br from-gray-50 via-white to-gray-50 py-20"
    >
      <div className="">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
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
                      {translations.contact.form.name}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200"
                      placeholder={translations.contact.form.placeholders.name}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      {translations.contact.form.email}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={translations.contact.form.placeholders.email}
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
                      {translations.contact.form.company}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 hover:border-gray-300"
                      placeholder={
                        translations.contact.form.placeholders.company
                      }
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
                      placeholder={translations.contact.form.placeholders.phone}
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
                      placeholder={translations.contact.form.placeholders.from}
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
                      placeholder={translations.contact.form.placeholders.to}
                    />
                  </div>
                </div>

                {/* Third Row: Cargo Description */}
                <div>
                  <label
                    htmlFor="cargoDescription"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.cargoDescription}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cargoDescription"
                    name="cargoDescription"
                    value={formData.cargoDescription}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] outline-none transition-all duration-200 resize-none hover:border-gray-300"
                    placeholder={
                      translations.contact.form.placeholders.cargoDescription
                    }
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full py-3 md:text-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {translations.contact.form.submitting || "Sending..."}
                    </span>
                  ) : (
                    translations.contact.form.submit
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info - Compact version, moved below on mobile */}
          <div className="lg:col-span-1 space-y-4 mt-8 lg:mt-0">
            <Card className="p-6 shadow-lg border-0 bg-linear-to-br from-[#074C6E] to-[#063d57] text-white">
              <h3 className="text-xl font-bold mb-6 text-white">
                {translations.contact.contactInformation}
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
                    <p className="text-white/80 text-sm">+998 91 537 1967</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white/90 mb-1">
                      {translations.contact.info.phone}
                    </h4>
                    <p className="text-white/80 text-sm">+998 88 397 8781</p>
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
                    <p className="text-white/80 text-sm break-all">
                      info@unitonlogistics.com
                    </p>
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
                      {translations.contact.info.addressText}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleSuccessClose}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />
          <div
            className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {translations.contact.successTitle || "Success!"}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {translations.contact.thankYouMessage}
              </p>
              <Button
                onClick={handleSuccessClose}
                variant="primary"
                size="md"
                className="w-full"
              >
                {translations.contact.successButton || "Close"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
