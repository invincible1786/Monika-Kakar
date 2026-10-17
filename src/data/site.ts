export const site = {
  name: 'Monika Kakar',
  brandName: 'Monika Kakar - Class 11 & 12 Tuition',
  url: 'https://monikakakar.in',
  city: 'Ludhiana, Punjab',
  email: import.meta.env.PUBLIC_EMAIL ?? 'monikakakar1977@gmail.com',
  phone: import.meta.env.PUBLIC_PHONE ?? '+91 98725 24445',
  phoneRaw: '+919872524445',
  whatsapp: 'https://wa.me/919872524445?text=Hello%20Monika%2C%20I%20would%20like%20to%20enquire%20about%20Class%2011-12%20tuition.',
  address: {
    street: 'Model Town & Sarabha Nagar Area',
    city: 'Ludhiana',
    region: 'Punjab',
    postalCode: '141001',
    country: 'IN',
  },
  localities: [
    'Model Town',
    'Sarabha Nagar',
    'BRS Nagar',
    'Pakhowal Road',
    'Civil Lines',
    'South City',
    'Gurdev Nagar',
  ],
  socials: {
    instagram: 'https://www.instagram.com/monikakakartuition',
    linkedin: 'https://www.linkedin.com/in/monika-kakar-tuition',
    youtube: 'https://www.youtube.com/@MonikaKakarTuition',
    facebook: 'https://www.facebook.com/monikakakartuition',
  },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
    display: 'Mon – Sat: 9:00 AM – 7:00 PM',
  },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/online-tuition/', label: 'Online Tuition' },
  { href: '/faq/', label: 'FAQs' },
  { href: '/contact/', label: 'Contact' },
];

export const subjectNav = [
  { href: '/english-tuition-ludhiana/', label: 'English Tuition', shortLabel: 'English', slug: 'english' },
  { href: '/psychology-tuition-ludhiana/', label: 'Psychology Tuition', shortLabel: 'Psychology', slug: 'psychology' },
  { href: '/political-science-tuition-ludhiana/', label: 'Political Science Tuition', shortLabel: 'Political Science', slug: 'political-science' },
  { href: '/sociology-tuition-ludhiana/', label: 'Sociology Tuition', shortLabel: 'Sociology', slug: 'sociology' },
  { href: '/online-tuition/', label: 'Online Tuition (Pan-India)', shortLabel: 'Online Tuition', slug: 'online' },
];

export const authoritativeLinks = [
  {
    name: 'CBSE Academic Official Portal',
    url: 'https://cbseacademic.nic.in',
    desc: 'Official senior secondary syllabus, curriculum guidelines & question banks',
    tag: 'CBSE',
  },
  {
    name: 'NCERT Textbooks & Curriculum',
    url: 'https://ncert.nic.in',
    desc: 'National Council of Educational Research & Training official textbooks',
    tag: 'NCERT',
  },
  {
    name: 'CISCE Official Portal (ISC Class 11-12)',
    url: 'https://cisce.org',
    desc: 'Council for the Indian School Certificate Examinations syllabus & regulations',
    tag: 'CISCE',
  },
  {
    name: 'International Baccalaureate (IB DP)',
    url: 'https://www.ibo.org',
    desc: 'IB Diploma Programme curriculum & evaluation standards',
    tag: 'IB DP',
  },
];
