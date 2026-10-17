export interface FAQItem {
  q: string;
  a: string;
  category?: 'general' | 'admissions' | 'academics' | 'location';
}

export const faqs: FAQItem[] = [
  {
    q: 'Which subjects does Monika Kakar teach?',
    a: 'Monika Kakar specializes in English (Core & Elective), Psychology, Political Science, and Sociology for senior secondary students (Class 11 and Class 12).',
    category: 'general',
  },
  {
    q: 'Which educational boards are covered?',
    a: 'Comprehensive coaching is provided for CBSE, ICSE / ISC, and International Baccalaureate (IB DP) curricula, with targeted focus on each board’s distinctive evaluation criteria and answer format.',
    category: 'academics',
  },

  {
    q: 'Are classes conducted offline in Ludhiana or online?',
    a: 'Both modes are available. Offline classes are conducted at the learning centre in Ludhiana (serving Model Town, Sarabha Nagar, BRS Nagar, and Pakhowal Road). Online interactive live classes are conducted pan-India with digital whiteboards and recorded revision access.',
    category: 'location',
  },
  {
    q: 'Do you offer a demo class or initial consultation?',
    a: 'Yes. Monika conducts an initial consultation and demo evaluation to assess the student’s current syllabus standing, target areas of improvement, and learning style before finalising enrollment.',
    category: 'admissions',
  },
  {
    q: 'What is the batch timing and weekly schedule?',
    a: 'Classes run Monday through Saturday between 9:00 AM and 7:00 PM. Each batch typically meets 3 to 4 times per week, with weekend doubt-clearing sessions and mock writing tests.',
    category: 'general',
  },
  {
    q: 'How are board exams and sample papers practiced?',
    a: 'Students undergo rigorous chapter-wise subjective tests, past 10-year board paper discussions, NCERT / textbook answer structuring, and time-bound full-syllabus pre-board mock examinations evaluated against official marking schemes.',
    category: 'academics',
  },
  {
    q: 'What are Monika Kakar’s educational qualifications?',
    a: 'Monika is UGC NET/SLET qualified (Assistant Professor eligibility) with a Master of Education (M.Ed.) from Panjab University, an M.A. in English, and an M.A. in Sociology, with over 15 years of classroom and senior coaching experience.',
    category: 'general',
  },
  {
    q: 'What are the fees for Class 11 and 12 tuition?',
    a: 'Fees depend on the selected subject, board (CBSE, ICSE, or IB DP), and mode (small group batch vs 1-on-1 private tuition). Contact Monika directly via call or WhatsApp for a transparent breakdown tailored to your requirement.',
    category: 'admissions',
  },
  {
    q: 'How can students or parents enrol and get started?',
    a: 'You can submit the enquiry form on our Contact page or call/WhatsApp Monika directly at +91 98725 24445. Mention your current class, school board, and desired subjects to schedule your introductory discussion.',
    category: 'admissions',
  },
];
