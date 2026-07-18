export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface ContactInfoItem {
  iconKey: 'mail' | 'phone' | 'mapPin';
  label: string;
  value: string;
}
