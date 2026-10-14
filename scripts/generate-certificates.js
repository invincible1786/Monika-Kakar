import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const certs = [
  {
    slug: 'ugc-net',
    issuer: 'UNIVERSITY GRANTS COMMISSION',
    subHeader: 'NATIONAL EDUCATIONAL TESTING BUREAU',
    title: 'NATIONAL ELIGIBILITY TEST (UGC-NET / SLET)',
    awardedTo: 'MONIKA KAKAR',
    details: 'Certified that MONIKA KAKAR has qualified the UGC-NET for eligibility for Assistant Professor held in June 2011 in the Subject: EDUCATION.',
    meta: 'Awarded: June 2011 • Roll / Reg No: [REDACTED FOR PRIVACY]',
    borderColor: '#8A5F1F',
    sealColor: '#1F3354',
  },
  {
    slug: 'med',
    issuer: 'PANJAB UNIVERSITY, CHANDIGARH',
    subHeader: 'FACULTY OF EDUCATION',
    title: 'MASTER OF EDUCATION (M.ED.)',
    awardedTo: 'MONIKA KAKAR',
    details: 'This is to certify that MONIKA KAKAR has obtained the degree of Master of Education (M.Ed.) with specialization in Psychology, Guidance &amp; Counselling, having passed the examination in the year 2009.',
    meta: 'Conferred: 2009 • Registration No: [REDACTED FOR PRIVACY]',
    borderColor: '#1F6B66',
    sealColor: '#8A5F1F',
  },
  {
    slug: 'ma-sociology',
    issuer: 'PANJAB UNIVERSITY, CHANDIGARH',
    subHeader: 'FACULTY OF ARTS',
    title: 'MASTER OF ARTS (SOCIOLOGY)',
    awardedTo: 'MONIKA KAKAR',
    details: 'This is to certify that MONIKA KAKAR has fulfilled all academic requirements and has been duly admitted to the degree of Master of Arts in Sociology in the year 2014.',
    meta: 'Conferred: 2014 • Registration No: [REDACTED FOR PRIVACY]',
    borderColor: '#5E6B1F',
    sealColor: '#1F3354',
  },
  {
    slug: 'ma-english',
    issuer: 'PANJAB UNIVERSITY, CHANDIGARH',
    subHeader: 'FACULTY OF LANGUAGES',
    title: 'MASTER OF ARTS (ENGLISH)',
    awardedTo: 'MONIKA KAKAR',
    details: 'This is to certify that MONIKA KAKAR has successfully completed the postgraduate course in English Literature and has been awarded the degree of Master of Arts in English in the year 2001.',
    meta: 'Conferred: 2001 • Registration No: [REDACTED FOR PRIVACY]',
    borderColor: '#34528F',
    sealColor: '#8A5F1F',
  },
  {
    slug: 'bed',
    issuer: 'GURU NANAK DEV UNIVERSITY, AMRITSAR',
    subHeader: 'FACULTY OF EDUCATION',
    title: 'BACHELOR OF EDUCATION (B.ED.)',
    awardedTo: 'MONIKA KAKAR',
    details: 'This is to certify that MONIKA KAKAR has been awarded the degree of Bachelor of Education with Pedagogy of English and Social Studies, having passed the examination held in 2006.',
    meta: 'Conferred: 2006 • Registration No: [REDACTED FOR PRIVACY]',
    borderColor: '#7B3F6E',
    sealColor: '#1F3354',
  },
];

function createSvgCert(cert) {
  return `
  <svg width="1400" height="1050" viewBox="0 0 1400 1050" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FCFAF5"/>
        <stop offset="50%" stop-color="#FFFDF9"/>
        <stop offset="100%" stop-color="#F7F2E7"/>
      </linearGradient>
      <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" flood-opacity="0.08" flood-color="#16233A"/>
      </filter>
    </defs>

    <!-- Background parchment paper -->
    <rect width="1400" height="1050" fill="url(#bg)"/>

    <!-- Outer double border -->
    <rect x="40" y="40" width="1320" height="970" rx="8" fill="none" stroke="${cert.borderColor}" stroke-width="6"/>
    <rect x="54" y="54" width="1292" height="942" rx="4" fill="none" stroke="${cert.borderColor}" stroke-width="1.5" stroke-dasharray="8,4"/>
    <rect x="64" y="64" width="1272" height="922" rx="2" fill="none" stroke="${cert.borderColor}" stroke-width="1"/>

    <!-- Corner Ornaments -->
    <path d="M 64 120 C 64 80 80 64 120 64" fill="none" stroke="${cert.borderColor}" stroke-width="4"/>
    <path d="M 1336 120 C 1336 80 1320 64 1280 64" fill="none" stroke="${cert.borderColor}" stroke-width="4"/>
    <path d="M 64 930 C 64 970 80 986 120 986" fill="none" stroke="${cert.borderColor}" stroke-width="4"/>
    <path d="M 1336 930 C 1336 970 1320 986 1280 986" fill="none" stroke="${cert.borderColor}" stroke-width="4"/>

    <!-- Watermark seal in center -->
    <circle cx="700" cy="525" r="240" fill="none" stroke="${cert.borderColor}" stroke-width="1" opacity="0.08"/>
    <circle cx="700" cy="525" r="220" fill="none" stroke="${cert.borderColor}" stroke-width="2" stroke-dasharray="6,4" opacity="0.08"/>

    <!-- Content -->
    <text x="700" y="180" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="34" font-weight="700" letter-spacing="4" fill="#1F3354">
      ${cert.issuer}
    </text>

    <text x="700" y="225" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="3" fill="#8A5F1F">
      ${cert.subHeader}
    </text>

    <line x1="450" y1="260" x2="950" y2="260" stroke="${cert.borderColor}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="700" cy="260" r="4" fill="${cert.borderColor}"/>

    <text x="700" y="340" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" font-weight="700" letter-spacing="2" fill="#16233A">
      ${cert.title}
    </text>

    <text x="700" y="420" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="18" font-style="italic" fill="#4A5266">
      This credential confirms that
    </text>

    <text x="700" y="500" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="52" font-weight="700" letter-spacing="3" fill="#1F3354">
      ${cert.awardedTo}
    </text>

    <!-- Details block (multi-line) -->
    <foreignObject x="250" y="550" width="900" height="180">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Plus Jakarta Sans', Arial, sans-serif; font-size:20px; line-height:1.8; text-align:center; color:#354052;">
        ${cert.details}
      </div>
    </foreignObject>

    <!-- Redaction notice badge -->
    <rect x="440" y="760" width="520" height="42" rx="21" fill="#F0E8D8" stroke="#E2D8C6" stroke-width="1"/>
    <text x="700" y="787" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="600" fill="#8A5F1F">
      ${cert.meta}
    </text>

    <!-- Official Seal -->
    <g transform="translate(240, 810)">
      <circle cx="60" cy="60" r="55" fill="none" stroke="${cert.sealColor}" stroke-width="3"/>
      <circle cx="60" cy="60" r="48" fill="none" stroke="${cert.sealColor}" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="60" y="54" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="10" font-weight="700" fill="${cert.sealColor}" letter-spacing="1">OFFICIAL VERIFIED</text>
      <text x="60" y="72" text-anchor="middle" font-family="'Cormorant Garamond', serif" font-size="14" font-weight="700" fill="${cert.sealColor}">ACADEMIC SEAL</text>
    </g>

    <!-- Signature line -->
    <g transform="translate(980, 860)">
      <path d="M 20 20 Q 80 5, 120 22 T 200 15" fill="none" stroke="#1F3354" stroke-width="2"/>
      <line x1="0" y1="40" x2="240" y2="40" stroke="#16233A" stroke-width="1.5"/>
      <text x="120" y="65" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14" font-weight="600" fill="#4A5266">
        Authorized Signatory / Registrar
      </text>
    </g>
  </svg>
  `;
}

async function run() {
  const dir = path.resolve('public/certificates');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const c of certs) {
    const svg = Buffer.from(createSvgCert(c));
    const fullPath = path.join(dir, `${c.slug}.webp`);
    const thumbPath = path.join(dir, `${c.slug}-thumb.webp`);

    await sharp(svg)
      .webp({ quality: 90 })
      .toFile(fullPath);

    await sharp(svg)
      .resize(480, 360)
      .webp({ quality: 85 })
      .toFile(thumbPath);

    console.log(`Generated ${c.slug}.webp and ${c.slug}-thumb.webp`);
  }
}

run().catch(console.error);
