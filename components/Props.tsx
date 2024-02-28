export interface CardProps {
  url: string;
  id: number;
  alt: string;
}

export interface Inputs {
  name: string;
  email: string;
  phoneNumber: number | null;
  option: {};
  subject: string;
  message: string;
}

export interface TemplateParams {
  from_name: string;
  from_email: string;
  from_phone_number: number | null;
  option: {};
  subject: string;
  message: string;
}
