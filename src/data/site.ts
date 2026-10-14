export const site = {
  name: 'Monika Kakar',
  url: 'https://monikakakar.com',
  city: 'Ludhiana, Punjab',
  email: import.meta.env.PUBLIC_EMAIL ?? 'contact@monikakakar.com',
  phone: import.meta.env.PUBLIC_PHONE ?? '+91 98725 24445',
  linkedin: '',            // optional
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
