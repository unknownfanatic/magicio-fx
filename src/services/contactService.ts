import { FormData } from '../types/contact';
import { supabase } from '../lib/supabase';

export async function submitContactForm(data: FormData): Promise<void> {
  if (!data.name || !data.email || !data.message) {
    throw new Error('Required fields are missing.');
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({
      name: data.name,
      email: data.email,
      message: data.message
    });

  if (error) {
    throw new Error(error.message);
  }
}