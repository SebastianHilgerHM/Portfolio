// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import { spacing } from '@/lib/design-tokens';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  onCancel?: () => void;
}

const ContactForm = ({ onSubmit, onCancel }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors: ContactFormErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit?.(formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.3s ease-in' }}>
      <FormInput
        id="name"
        label="Name"
        type="text"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        error={errors.name}
      />

      <FormInput
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
        error={errors.email}
      />

      <FormInput
        id="message"
        label="Message"
        type="textarea"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        error={errors.message}
        rows={4}
      />

      <div style={{ display: 'flex', gap: `${spacing.xs}px` }}>
        <Button type="submit" variant="primary">
          Send
        </Button>
        <Button type="button" variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
