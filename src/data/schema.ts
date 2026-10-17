import { site } from './site';

export const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  jobTitle: 'Teacher (English, Psychology, Political Science, Sociology)',
  url: `${site.url}/`,
  image: `${site.url}/og-image.jpg`,
  knowsAbout: ['English', 'Psychology', 'Political Science', 'Sociology', 'CBSE', 'ICSE', 'IB', 'Guidance and Counselling'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Panjab University' },
    { '@type': 'CollegeOrUniversity', name: 'Guru Nanak Dev University' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'UGC NET/SLET (Assistant Professor eligibility), 2011' },
    { '@type': 'EducationalOccupationalCredential', name: 'M.Ed., Panjab University, 2009' },
    { '@type': 'EducationalOccupationalCredential', name: 'M.A. English, Panjab University, 2001' },
    { '@type': 'EducationalOccupationalCredential', name: 'M.A. Sociology, Panjab University, 2014' },
    { '@type': 'EducationalOccupationalCredential', name: 'B.Ed. (Pedagogy of English, SST), Guru Nanak Dev University, 2006' },
  ],
  sameAs: Object.values(site.socials),
};

export const business = {
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${site.url}/#business`,
  name: site.brandName,
  url: `${site.url}/`,
  image: `${site.url}/og-image.jpg`,
  description: 'Class 11 & 12 English, Psychology, Political Science and Sociology tuition for CBSE, ICSE and IB in Ludhiana and online.',
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [
    { '@type': 'City', name: 'Ludhiana' },
    { '@type': 'AdministrativeArea', name: 'Punjab' },
    { '@type': 'Country', name: 'India' },
    'Online',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
  ],
  sameAs: Object.values(site.socials),
  founder: { '@id': `${site.url}/#person` },
};

export const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.brandName,
  publisher: { '@id': `${site.url}/#business` },
  inLanguage: 'en-IN',
};

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [business, person, website],
};

export const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    business,
    {
      '@type': 'AboutPage',
      '@id': `${site.url}/about/#webpage`,
      url: `${site.url}/about/`,
      name: 'About Monika Kakar | UGC NET Qualified Teacher, M.Ed., Ludhiana',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#person` },
    },
  ],
};

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function getCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  courseCode?: string;
}) {
  return {
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: { '@id': `${site.url}/#business` },
    url: course.url,
    educationalCredentialAwarded: 'Class 11 & 12 Board Preparation (CBSE, ICSE, IB)',
    ...(course.courseCode ? { courseCode: course.courseCode } : {}),
  };
}
