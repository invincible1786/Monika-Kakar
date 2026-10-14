export const site = {
  name: 'Monika Kakar',
  url: 'https://monikakakar.in',
  city: 'Ludhiana, Punjab',
  email: import.meta.env.PUBLIC_EMAIL ?? 'contact@monikakakar.in',
  phone: import.meta.env.PUBLIC_PHONE ?? '+91 98725 24445',
  linkedin: '',            // optional
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
