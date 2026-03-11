export interface FAQItem {
  id: string
  page: string
  track?: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  // HOME
  {
    id: 'home-1',
    page: 'home',
    question: 'Is this site only for Cairo University students?',
    answer: 'Not at all. This guide is for CS students at any Egyptian university — Cairo University, Ain Shams, Alexandria, Mansoura, Helwan, Benha, or any other. The Egyptian tech industry and hiring practices are the same regardless of which university you attend.',
  },
  {
    id: 'home-2',
    page: 'home',
    question: 'Do I need to pay for anything?',
    answer: 'This site is completely free. The vast majority of resources linked here are also free. For paid courses (like Coursera), there\'s usually a free audit option or financial aid available. We clearly label everything.',
  },
  {
    id: 'home-3',
    page: 'home',
    question: 'How do I use the progress tracker?',
    answer: 'Go to the Roadmaps page, pick your track, and check off steps as you complete them. Your progress is saved automatically in your browser\'s local storage — it won\'t sync across devices, but it persists on the same device.',
  },
  {
    id: 'home-4',
    page: 'home',
    question: 'Can I contribute or suggest a resource?',
    answer: 'Absolutely! Click "Recommend a Resource" on the Courses page, or open a GitHub issue directly. All contributions are reviewed and added if they meet quality standards.',
  },
  {
    id: 'home-5',
    page: 'home',
    question: 'Is this site up to date?',
    answer: 'We update the content regularly. Check the "Last updated" date in the footer. If you find something outdated, please open a GitHub issue — we appreciate it.',
  },
  {
    id: 'home-6',
    page: 'home',
    question: 'What if I\'m not a CS student but want to learn programming?',
    answer: 'This site is useful for anyone learning to code in Egypt. The roadmaps, courses, and tools sections are valuable regardless of your degree. Career info is most relevant to CS students, but many career paths are open to self-taught developers too.',
  },
  // COURSES
  {
    id: 'courses-1',
    page: 'courses',
    question: "What's the difference between Free and Audit Free?",
    answer: 'Free means the entire course including certificate is free. Audit Free (like many Coursera courses) means you can access all video content and exercises for free, but the certificate costs money. For Egyptian students, Coursera\'s financial aid covers the certificate cost with high approval rates.',
  },
  {
    id: 'courses-2',
    page: 'courses',
    question: 'Can I really get financial aid for Coursera courses from Egypt?',
    answer: 'Yes. Egyptian students have one of the highest financial aid approval rates on Coursera due to the currency situation and income levels. Apply honestly, write thoughtfully, and you\'ll almost certainly be approved within 10–15 days. Use our Financial Aid helper on any eligible course.',
  },
  {
    id: 'courses-3',
    page: 'courses',
    question: 'Which course should an absolute beginner start with?',
    answer: 'CS50x from Harvard, without question. It\'s free, world-class, and will change how you think about programming. After that, The Odin Project for web dev or the Andrew Ng ML course for AI. For Arabic content, Elzero Web School for web development.',
  },
  {
    id: 'courses-4',
    page: 'courses',
    question: 'Are Arabic courses lower quality than English ones?',
    answer: 'Not necessarily. Elzero Web School, Codezilla, and other Arabic content creators produce excellent material. Arabic courses remove the language barrier which actually helps comprehension. The downside is that tech is documented in English, so you\'ll need English eventually. Recommendation: use Arabic to learn concepts, then practice with English documentation.',
  },
  {
    id: 'courses-5',
    page: 'courses',
    question: 'How were the star ratings determined?',
    answer: 'Ratings are curated by .uwz based on content quality, community feedback, practical value, and how well courses are received by Egyptian students specifically. They are not automated — they reflect real student outcomes.',
  },
  // CAREERS
  {
    id: 'careers-1',
    page: 'careers',
    question: 'What skills do Egyptian companies actually care about?',
    answer: 'It depends on the track, but generally: for web dev, React and Node.js dominate. For backend, Java and Python are most common. For mobile, Flutter is extremely popular locally. Problem-solving skills, GitHub presence, and practical projects matter more than theoretical knowledge.',
  },
  {
    id: 'careers-2',
    page: 'careers',
    question: 'Is GPA important for getting hired in Egypt?',
    answer: 'At large companies like Microsoft and IBM, a minimum GPA (usually 3.0/4.0 or equivalent) may be required for initial screening. At startups, GPA is largely irrelevant — projects, GitHub, and interview performance matter far more. Focus on building skills and projects.',
  },
  {
    id: 'careers-3',
    page: 'careers',
    question: 'How long does the Egyptian hiring process take?',
    answer: 'At startups: 1–3 weeks. At mid-size companies: 2–5 weeks. At multinationals like Microsoft or IBM: 4–8 weeks or more. Apply to multiple companies simultaneously — never wait for one to finish.',
  },
  {
    id: 'careers-4',
    page: 'careers',
    question: 'Should I apply to companies or freelance first?',
    answer: 'Depends on your situation. Companies provide structure, mentorship, and career development — highly recommended for your first 1–2 years. Freelancing too early often means low rates and no guidance. Get 1–2 years of company experience first, then freelance if you want.',
  },
  {
    id: 'careers-5',
    page: 'careers',
    question: 'Do I need a car to work at companies in Smart Village?',
    answer: 'Smart Village is not well-served by public transport. Many companies provide bus transportation from central Cairo locations. Always ask HR about transportation options before accepting. Companies like Microsoft, Vodafone, and Valeo have company buses.',
  },
  // TOOLS
  {
    id: 'tools-1',
    page: 'tools',
    question: 'Is GitHub Copilot really free for students?',
    answer: 'Yes. With the GitHub Student Developer Pack, you get GitHub Copilot for free (normally $10/month). Apply at education.github.com/pack with your university email. Approval usually takes 1–7 days.',
  },
  {
    id: 'tools-2',
    page: 'tools',
    question: 'Which VPN is safest to use in Egypt?',
    answer: 'ProtonVPN is the safest free option — based in Switzerland, strict no-logs policy, open-source. For paid options, Mullvad is excellent. Avoid free VPNs you don\'t recognize — they often sell your data. For Egyptian devs, a VPN is also useful for accessing GitHub Copilot, some payment platforms, and geo-restricted content.',
  },
  {
    id: 'tools-3',
    page: 'tools',
    question: 'How do I get JetBrains IDEs for free?',
    answer: 'Two ways: (1) GitHub Student Developer Pack includes JetBrains — apply at education.github.com/pack. (2) Apply directly at jetbrains.com/student with your university email. You get full access to all IDEs including IntelliJ, PyCharm, WebStorm, and more.',
  },
  {
    id: 'tools-4',
    page: 'tools',
    question: "What's the best free database to use for projects?",
    answer: 'PostgreSQL is the standard recommendation — powerful, production-grade, free. Use Supabase for a hosted Postgres with free tier. For quick prototypes, SQLite is built into Python. For NoSQL, MongoDB Atlas has a free 512MB cluster. For learning, any of these work well.',
  },
  // CV & PROJECTS
  {
    id: 'cv-1',
    page: 'cv_projects',
    question: 'My GPA is not great. How do I compensate?',
    answer: 'Projects and GitHub. Seriously. Build 2–3 real projects that solve actual problems, push them to GitHub with good READMEs, and deploy them with live demos. A weak GPA with strong projects beats a 4.0 GPA with no GitHub activity at almost every company in Egypt.',
  },
  {
    id: 'cv-2',
    page: 'cv_projects',
    question: 'How many projects should I have before applying for jobs?',
    answer: 'Quality over quantity. 2–3 solid, completed, deployed projects beat 10 half-finished tutorial copies. Each project should: have a GitHub repo with a clear README, be deployed and accessible online, and solve a real problem or demonstrate a real skill.',
  },
  {
    id: 'cv-3',
    page: 'cv_projects',
    question: 'Should I build projects from tutorials or from scratch?',
    answer: 'Start with tutorials to learn, but do NOT put tutorial copies on your CV. Build your own version from scratch, adding features the tutorial didn\'t have, and making it your own. Employers can easily spot clones. The project list on this page has original ideas worth building.',
  },
  {
    id: 'cv-4',
    page: 'cv_projects',
    question: "Is it okay to list a graduation project that's not finished yet?",
    answer: 'Yes, especially if you\'re applying for your first job. Label it as "In Progress" and describe what you\'ve built so far. Just make sure you can demo what you have live during an interview. Don\'t list it if it\'s just an idea — it needs to have real code.',
  },
  {
    id: 'cv-5',
    page: 'cv_projects',
    question: 'What makes a project impressive to a remote employer vs a local Egyptian company?',
    answer: 'Local Egyptian companies: they want to see you can ship a complete product with the stack they use (React, Node, Python). Emphasize completion and real functionality. Remote global employers: they care more about code quality, tests, deployment, documentation, and solving a real problem. A well-documented GitHub repo matters more than a fancy UI.',
  },
  // ROADMAPS
  {
    id: 'roadmap-web-1',
    page: 'roadmaps',
    track: 'webdev',
    question: 'Should I learn React or Vue in Egypt?',
    answer: 'React, without question. The vast majority of Egyptian companies use React. Vue is used by some companies but React dominates. Learning React opens more doors locally and globally.',
  },
  {
    id: 'roadmap-web-2',
    page: 'roadmaps',
    track: 'webdev',
    question: 'Do Egyptian companies use TypeScript?',
    answer: 'Increasingly yes. Larger companies and startups with mature engineering teams (like Instabug, Paymob, Halan) use TypeScript. Smaller companies may still use plain JavaScript. TypeScript is the direction the industry is moving — learn it after mastering JavaScript fundamentals.',
  },
  {
    id: 'roadmap-web-3',
    page: 'roadmaps',
    track: 'webdev',
    question: 'How long does it take to get a junior web dev job in Egypt?',
    answer: 'With focused daily practice: 6–12 months from zero. With a university CS background: 3–6 months of focused web dev learning. The key variable is whether you\'re building real projects and applying consistently.',
  },
  {
    id: 'roadmap-ml-1',
    page: 'roadmaps',
    track: 'ai_ml',
    question: 'How much math do I really need for ML?',
    answer: 'For practical ML/AI: linear algebra, basic calculus (derivatives), and probability/statistics. The 3Blue1Brown series on YouTube makes these intuitive. You don\'t need to be a math PhD — you need enough to understand what models are doing.',
  },
  {
    id: 'roadmap-security-1',
    page: 'roadmaps',
    track: 'cybersecurity',
    question: 'Is cybersecurity in demand in Egypt?',
    answer: 'Yes, growing rapidly. Banks, telecom companies, and government agencies all hire security engineers. The Egyptian government\'s digital transformation is creating more demand. Starting salaries are competitive with web dev.',
  },
  {
    id: 'roadmap-mobile-1',
    page: 'roadmaps',
    track: 'mobile',
    question: 'Flutter or React Native for Egypt?',
    answer: 'Flutter. Egyptian companies strongly prefer Flutter for cross-platform mobile development. Halan, Vezeeta, Breadfast, and many others use Flutter. React Native is used less frequently locally. Flutter also has better Arabic text support.',
  },
]
