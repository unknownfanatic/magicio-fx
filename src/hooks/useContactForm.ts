import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FormData } from '../types/contact';
import { submitContactForm } from '../services/contactService';

export function useContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await submitContactForm(data);
      setIsSubmitted(true);
      toast.success('Message sent successfully!');
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message.');
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitted
  };
}
