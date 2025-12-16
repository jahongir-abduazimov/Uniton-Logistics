'use client';

import React, { useState, useEffect } from 'react';
import { Translations } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { X, Send, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: Translations;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  translations,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Consultation form submitted:', formData);

    setFormData({ name: '', phone: '', email: '', description: '' });
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleSuccessClose}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {translations.consultationModal?.successTitle || 'Success!'}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {translations.consultationModal?.thankYouMessage || 'Thank you! We will contact you soon.'}
              </p>
              <Button
                onClick={handleSuccessClose}
                variant="primary"
                size="md"
                className="w-full"
              >
                {translations.consultationModal?.successButton || 'Close'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Form Modal */}
      {!showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div
            className={cn(
              'absolute inset-0 bg-black/40 backdrop-blur-sm',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          />

          {/* Modal */}
          <div
            className={cn(
              'relative w-full max-w-md bg-white rounded-xl shadow-2xl',
              isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
              'max-h-[90vh] overflow-y-auto'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-linear-to-r from-[#074C6E] to-[#063d57] text-white p-4 rounded-t-xl flex items-center justify-between z-10">
              <div>
                <h2 className="text-xl font-bold mb-0.5">
                  {translations.consultationModal?.title || 'Get Consultation'}
                </h2>
                <p className="text-blue-100 text-xs">
                  {translations.consultationModal?.subtitle || 'Fill out the form and we will contact you'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 lg:p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="consultation-name"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 mb-1.5"
                >
                  <User size={14} className="text-[#074C6E]" />
                  {translations.consultationModal?.form.name || 'Name'}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="consultation-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] focus:bg-white outline-none transition-all duration-200 hover:ring-gray-400 placeholder:text-gray-400"
                  placeholder={translations.consultationModal?.form.placeholders.name || 'Enter your name'}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="consultation-phone"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 mb-1.5"
                >
                  <Phone size={14} className="text-[#074C6E]" />
                  {translations.consultationModal?.form.phone || 'Phone Number'}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="consultation-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] focus:bg-white outline-none transition-all duration-200 hover:ring-gray-400 placeholder:text-gray-400"
                  placeholder={translations.consultationModal?.form.placeholders.phone || '+1 (555) 123-4567'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="consultation-email"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 mb-1.5"
                >
                  <Mail size={14} className="text-[#074C6E]" />
                  {translations.consultationModal?.form.email || 'Email'}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="consultation-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] focus:bg-white outline-none transition-all duration-200 hover:ring-gray-400 placeholder:text-gray-400"
                  placeholder={translations.consultationModal?.form.placeholders.email || 'your@email.com'}
                />
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="consultation-description"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 mb-1.5"
                >
                  <MessageSquare size={14} className="text-[#074C6E]" />
                  {translations.consultationModal?.form.description || 'Description'}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="consultation-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-[#074C6E] focus:bg-white outline-none resize-none hover:ring-gray-400 placeholder:text-gray-400"
                  placeholder={translations.consultationModal?.form.placeholders.description || 'Tell us about your needs...'}
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-1.5 text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{translations.consultationModal?.form.submitting || 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>{translations.consultationModal?.form.submit || 'Send Request'}</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
