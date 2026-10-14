import { site } from './site';

const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  jobTitle: 'Teacher and Tutor (English, Psychology, Political Science, Sociology)',
  url: `${site.url}/`,
  image: `${site.url}/og-image.jpg`,
  knowsAbout: ['English', 'Psychology', 'Political Science', 'Sociology', 'Guidance and Counselling'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Panjab University' },
    { '@type': 'CollegeOrUniversity', name: 'Guru Nanak Dev University' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'UGC NET/SLET (Assistant Professor eligibility), 2011' },
    { '@type': 'EducationalOccupationalCredential', name: 'M.Ed., Panjab University, 2009' },
  ],
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

export const aboutSchema = { '@context': 'https://schema.org', '@graph': [person] };

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'ProfessionalService',
      name: 'Monika Kakar - Class 11 & 12 Tuition',
      provider: { '@id': `${site.url}/#person` },
      url: `${site.url}/`,
      areaServed: [{ '@type': 'City', name: 'Ludhiana' }, { '@type': 'Country', name: 'India' }],
      serviceType: 'Tutoring: English, Psychology, Political Science, Sociology (CBSE, ICSE, IB)',
    },
  ],
};
