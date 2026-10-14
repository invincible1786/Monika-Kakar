export type Subject = {
  slug: string; name: string; accent: string; soft: string;
  intro: string; class11: string[]; class12: string[]; background: string;
};

export const subjects: Subject[] = [
  {
    slug: 'english',
    name: 'English',
    accent: 'var(--color-english)',
    soft: 'var(--color-english-soft)',
    intro: 'Monika teaches English to Class 11 and 12 students with equal weight on textual comprehension, literary criticism, advanced writing skills, and targeted exam technique. Students develop a nuanced command of core prose, poetry, and drama texts while mastering formal writing formats such as reports, articles, debate speeches, and analytical essays. Rigorous past-paper discussions and structured rubric-based feedback ensure students consistently secure top marks in board examinations.',
    class11: ['Grammar and usage', 'Writing skills (notices, letters, speeches)', 'Prose, poetry and literary devices', 'Reading comprehension techniques'],
    class12: ['Core literature & in-depth text analysis', 'Advanced writing formats & analytical writing', 'Board exam practice & answer evaluation', 'Time management and presentation strategy'],
    background: 'M.A. English, B.Ed. (Pedagogy of English), UGC NET',
  },
  {
    slug: 'psychology',
    name: 'Psychology',
    accent: 'var(--color-psychology)',
    soft: 'var(--color-psychology-soft)',
    intro: 'Psychology is taught from first principles, bridging foundational theoretical paradigms with everyday human behaviour, cognitive processes, and emotional dynamics. The curriculum systematically guides students through scientific research methodologies, psychological testing, developmental stages, and personality frameworks. Complex clinical concepts, therapeutic approaches, and social attitudes are unpacked through case studies and practical discussions, making answer retention and high-order application effortless.',
    class11: ['Foundations of psychology & scientific methods', 'Biological bases of behaviour', 'Human development & sensory processes', 'Learning, memory and cognition'],
    class12: ['Variations in psychological attributes & intelligence', 'Self, personality and coping with stress', 'Psychological disorders & therapeutic approaches', 'Attitude, social cognition and group processes'],
    background: 'M.Ed. (Psychology, Guidance and Counselling), B.A. Psychology',
  },
  {
    slug: 'political-science',
    name: 'Political Science',
    accent: 'var(--color-polsci)',
    soft: 'var(--color-polsci-soft)',
    intro: 'Political Science sessions seamlessly connect Constitutional structures, political philosophy, and democratic theory to contemporary governance and international relations. Students learn to critically evaluate institutional mechanisms, civil liberties, and federal relations in India, alongside global geopolitical frameworks and post-Cold War developments. Lessons emphasize structured essay composition, balanced argumentation, and precise factual citation for board and competitive readiness.',
    class11: ['Indian Constitution at work & institutional design', 'Political theory: Freedom, equality & justice', 'Rights, citizenship and secularism', 'Local governments and constitutional amendments'],
    class12: ['Contemporary world politics & global organisations', 'Security, environment and globalisation', 'Challenges of nation-building & democratic order', 'Recent developments in Indian politics'],
    background: 'Taught Social Science in school as a PGT',
  },
  {
    slug: 'sociology',
    name: 'Sociology',
    accent: 'var(--color-sociology)',
    soft: 'var(--color-sociology-soft)',
    intro: 'Sociology is taught through grounded examples drawn from Indian society and classical sociological perspectives, making abstract theories immediately tangible and memorable. Students explore patterns of social stratification, kinship, rural-urban transformation, and the structural dynamics of caste, class, and gender. The coursework equips learners with analytical vocabulary, enabling them to articulate socio-cultural phenomena persuasively in subjective examinations.',
    class11: ['Sociology and society: perspectives & methods', 'Social institutions: family, marriage & kinship', 'Culture and socialisation processes', 'Social structure, stratification and processes in society'],
    class12: ['Demographic structure of Indian society', 'Social inequality, exclusion and caste dynamics', 'Structural and cultural change in modern India', 'Social movements, state and civil society'],
    background: 'M.A. Sociology, UGC NET',
  },
];
