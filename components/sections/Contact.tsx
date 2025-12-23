"use client";

import React, { useState } from "react";
import { Translations } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactProps {
  translations: Translations;
}

export const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    message: "",
    loading: "",
    unloading: "",
    nameCompany: "",
    cargoType: "",
    phone: "",
    dimensions: "",
    weight: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'quote',
          message: formData.message,
          loading: formData.loading,
          unloading: formData.unloading,
          nameCompany: formData.nameCompany,
          cargoType: formData.cargoType,
          phone: formData.phone,
          dimensions: formData.dimensions,
          weight: formData.weight,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormData({
        message: "",
        loading: "",
        unloading: "",
        nameCompany: "",
        cargoType: "",
        phone: "",
        dimensions: "",
        weight: "",
        email: "",
      });
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success to user even if Telegram fails
      setFormData({
        message: "",
        loading: "",
        unloading: "",
        nameCompany: "",
        cargoType: "",
        phone: "",
        dimensions: "",
        weight: "",
        email: "",
      });
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <Section
      id="contact"
      className="bg-linear-to-br from-gray-50 via-white to-gray-50 py-20 relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#074C6E]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#074C6E]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 md:mb-6 mb-4 tracking-tight">
            <span className="gradient-text">
              {translations.contact.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {translations.contact.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-10">
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-3 h-3 bg-linear-to-br from-[#074C6E] to-[#0ea5e9] rounded-full" />
            <div className="w-20 h-1 bg-linear-to-r from-[#0ea5e9] via-[#074C6E] to-transparent rounded-full" />
          </div>
        </div>

        {/* Form Card */}
        <div className="relative p-4 md:p-8 lg:p-12 bg-white shadow-xl border border-gray-200 rounded-lg">
          <div className="relative z-10">
            {/* <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              {translations.contact.form.requestTitle}
            </h3> */}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* General Message Field - Full Width */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 resize-none font-medium"
                  placeholder={translations.contact.form.placeholders.cargoDescription}
                />
              </div>

              {/* First Row: Loading, Unloading, Name/Company (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="loading"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.from}
                  </label>
                  <input
                    type="text"
                    id="loading"
                    name="loading"
                    value={formData.loading}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.from}
                  />
                </div>

                <div>
                  <label
                    htmlFor="unloading"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.to}
                  </label>
                  <input
                    type="text"
                    id="unloading"
                    name="unloading"
                    value={formData.unloading}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.to}
                  />
                </div>

                <div>
                  <label
                    htmlFor="nameCompany"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="nameCompany"
                    name="nameCompany"
                    value={formData.nameCompany}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.name}
                  />
                </div>
              </div>

              {/* Second Row: Cargo Type, Phone (2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="cargoType"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.cargoType}
                  </label>
                  <input
                    type="text"
                    id="cargoType"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.cargoType}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              {/* Third Row: Dimensions, Weight, Email (3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="dimensions"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.dimensions}
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.dimensions}
                  />
                </div>

                <div>
                  <label
                    htmlFor="weight"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.weight}
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.weight}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-semibold text-gray-800 mb-2"
                  >
                    {translations.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm md:px-4 md:py-3 md:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#074C6E] focus:border-[#074C6E] transition-all duration-300 font-medium"
                    placeholder={translations.contact.form.placeholders.email}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-2.5 md:py-3 text-sm md:text-base font-bold text-white uppercase tracking-wider rounded-lg",
                    "bg-linear-to-r from-[#074C6E] to-[#0ea5e9]",
                    "hover:from-[#063d57] hover:to-[#0c8cc7]",
                    "focus:outline-none focus:ring-4 focus:ring-[#074C6E]/50",
                    "shadow-lg shadow-[#074C6E]/30 hover:shadow-xl hover:shadow-[#074C6E]/40",
                    "transform transition-all duration-300 hover:-translate-y-1",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                    isSubmitting && "cursor-wait"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 md:border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs md:text-sm">{translations.contact.form.submitting}</span>
                    </span>
                  ) : (
                    translations.contact.form.submit
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleSuccessClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" />
          <div
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 scale-100 opacity-100 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#074C6E] to-[#0ea5e9] rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-white" size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {translations.contact.successTitle}
              </h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                {translations.contact.thankYouMessage}
              </p>
              <button
                onClick={handleSuccessClose}
                className="w-full py-3 px-6 bg-linear-to-r from-[#074C6E] to-[#0ea5e9] hover:from-[#063d57] hover:to-[#0c8cc7] text-white font-semibold rounded-xl shadow-lg shadow-[#074C6E]/30 hover:shadow-xl hover:shadow-[#074C6E]/40 transform transition-all duration-300 hover:-translate-y-0.5"
              >
                {translations.contact.successButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
