import { FAQItem } from './faqs'
import React from 'react'
import { Globe, Cpu, ShieldAlert, Smartphone, Cloud, Database } from 'lucide-react'

export type TrackId = 'webdev' | 'ai_ml' | 'cybersecurity' | 'mobile' | 'cloud_devops' | 'data_engineering'

export interface RoadmapStep {
  id: string
  title: string
  description?: string
  resourceUrl?: string
  resourceName?: string
  estimatedDays?: number
}

export interface RoadmapPhase {
  id: string
  number: 1 | 2 | 3
  name: string
  arabicName: string
  durationEstimate: string
  description: string
  steps: RoadmapStep[]
  buildProject: string
  buildProjectDescription: string
}

export interface Track {
  id: TrackId
  name: string
  arabicName: string
  icon: React.ReactNode
  description: string
  accentColor: string
  phases: RoadmapPhase[]
  faqs: { question: string; answer: string }[]
  egyptianMarketNote: string
}

export const tracks: Track[] = [
  {
    id: 'webdev',
    name: 'Web Development',
    arabicName: 'تطوير الويب',
    icon: React.createElement(Globe),
    description: 'Build websites and web applications. The most in-demand track in Egypt with opportunities at startups, corporates, and remote companies.',
    accentColor: '#4361EE',
    egyptianMarketNote: 'Web dev is the highest-demand track in Egypt. React + Node.js dominate. Companies like Paymob, Halan, Instabug, and virtually all Egyptian startups hire web developers. Remote opportunities are also excellent.',
    faqs: [
      { question: 'Should I learn React or Vue in Egypt?', answer: 'React, without question. The vast majority of Egyptian companies use React. Vue is used by some companies but React dominates. Learning React opens more doors locally and globally.' },
      { question: 'Do Egyptian companies use TypeScript?', answer: 'Increasingly yes. Larger companies and startups with mature engineering teams use TypeScript. Learn it after mastering JavaScript fundamentals.' },
      { question: 'How long does it take to get a junior web dev job in Egypt?', answer: 'With focused daily practice: 6–12 months from zero. With a CS background: 3–6 months of focused web dev learning. The key is building real projects.' },
      { question: 'Should I learn Next.js or just React?', answer: 'Start with React to understand the fundamentals, then move to Next.js. Most Egyptian companies building production apps use Next.js for the SEO and performance benefits.' },
    ],
    phases: [
      {
        id: 'webdev-phase-1',
        number: 1,
        name: 'Internet Fundamentals',
        arabicName: 'أساسيات الإنترنت',
        durationEstimate: '1–2 weeks',
        description: 'Understand how the web works before writing code.',
        buildProject: 'No code yet — just understanding.',
        buildProjectDescription: 'Explain how DNS works and what happens when you type google.com in your browser.',
        steps: [
          { id: 'webdev-1-1', title: 'How does the Internet work?', description: 'Packets, routing, TCP/IP', resourceUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', resourceName: 'MDN Web Docs', estimatedDays: 2 },
          { id: 'webdev-1-2', title: 'What is HTTP?', description: 'Methods, status codes, headers', resourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', resourceName: 'MDN HTTP', estimatedDays: 2 },
          { id: 'webdev-1-3', title: 'Browsers & DNS', description: 'How browsers render, Domain Name System', resourceUrl: 'https://howdns.works/', resourceName: 'How DNS Works', estimatedDays: 2 },
          { id: 'webdev-1-4', title: 'Hosting & Domains', description: 'What is web hosting, how to buy a domain', resourceUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name', resourceName: 'MDN Domains', estimatedDays: 1 },
        ],
      },
      {
        id: 'webdev-phase-2',
        number: 2,
        name: 'HTML & CSS Deep Dive',
        arabicName: 'أساسيات التصميم',
        durationEstimate: '4–6 weeks',
        description: 'Master semantic HTML, modern CSS layouts, and responsive design.',
        buildProject: 'Responsive Landing Page',
        buildProjectDescription: 'Clone a popular website landing page (e.g., Stripe, Apple) using only HTML and CSS.',
        steps: [
          { id: 'webdev-2-1', title: 'Semantic HTML5', description: 'Accessibility, forms, SEO basics', resourceUrl: 'https://web.dev/learn/html/', resourceName: 'web.dev HTML', estimatedDays: 5 },
          { id: 'webdev-2-2', title: 'CSS Box Model & Selectors', description: 'Padding, margins, borders, specificity', resourceUrl: 'https://web.dev/learn/css/box-model/', resourceName: 'web.dev CSS', estimatedDays: 5 },
          { id: 'webdev-2-3', title: 'Flexbox Layouts', description: '1D layouts, alignment, ordering', resourceUrl: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', resourceName: 'Flexbox Guide', estimatedDays: 4 },
          { id: 'webdev-2-4', title: 'CSS Grid Layouts', description: '2D layouts, templates, areas', resourceUrl: 'https://css-tricks.com/snippets/css/complete-guide-grid/', resourceName: 'Grid Guide', estimatedDays: 5 },
          { id: 'webdev-2-5', title: 'Responsive Design', description: 'Media queries, rem/em, mobile-first approach', resourceUrl: 'https://web.dev/learn/design/', resourceName: 'Responsive Guide', estimatedDays: 4 },
          { id: 'webdev-2-6', title: 'Web Accessibility (a11y)', description: 'ARIA, keyboard navigation, color contrast', resourceUrl: 'https://web.dev/learn/accessibility/', resourceName: 'web.dev a11y', estimatedDays: 3 },
        ],
      },
      {
        id: 'webdev-phase-3',
        number: 3,
        name: 'Advanced JavaScript & React',
        arabicName: 'جافاسكريبت ورياكت',
        durationEstimate: '8–12 weeks',
        description: 'Deep JS fundamentals, DOM manipulation, APIs, and the React ecosystem.',
        buildProject: 'Dynamic Dashboard App',
        buildProjectDescription: 'Build a weather dashboard or crypto tracker fetching live data from APIs using React.',
        steps: [
          { id: 'webdev-3-1', title: 'JS Fundamentals & DOM', description: 'Variables, loops, DOM selection, events', resourceUrl: 'https://javascript.info/', resourceName: 'javascript.info', estimatedDays: 10 },
          { id: 'webdev-3-2', title: 'Asynchronous JS', description: 'Promises, async/await, Event Loop, Fetch API', resourceUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ', resourceName: 'JS Event Loop', estimatedDays: 7 },
          { id: 'webdev-3-3', title: 'Modern JS (ES6+)', description: 'Destructuring, spread/rest, arrow functions, modules', resourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', resourceName: 'MDN JS', estimatedDays: 5 },
          { id: 'webdev-3-4', title: 'React Core', description: 'Components, JSX, State vs Props, Lifecycle', resourceUrl: 'https://react.dev/learn', resourceName: 'React Docs', estimatedDays: 14 },
          { id: 'webdev-3-5', title: 'React Hooks', description: 'useState, useEffect, useContext, custom hooks', resourceUrl: 'https://react.dev/reference/react', resourceName: 'React Hooks', estimatedDays: 10 },
          { id: 'webdev-3-6', title: 'State Management', description: 'Zustand, Redux Toolkit, or Context API', resourceUrl: 'https://zustand-demo.pmnd.rs/', resourceName: 'Zustand Docs', estimatedDays: 7 },
          { id: 'webdev-3-7', title: 'Tailwind CSS', description: 'Utility classes, config, responsive design', resourceUrl: 'https://tailwindcss.com/docs', resourceName: 'Tailwind Docs', estimatedDays: 5 },
          { id: 'webdev-3-8', title: 'Git & Version Control', description: 'Branching, PRs, resolving conflicts', resourceUrl: 'https://learngitbranching.js.org/', resourceName: 'Learn Git Branching', estimatedDays: 5 },
        ],
      },
    ],
  },
  {
    id: 'ai_ml',
    name: 'AI & Machine Learning',
    arabicName: 'الذكاء الاصطناعي',
    icon: React.createElement(Cpu),
    description: 'Learn data science, ML algorithms, and deep learning. Build AI-powered applications.',
    accentColor: '#9B5DE5',
    egyptianMarketNote: 'AI/ML is growing rapidly in Egypt. Companies like Halan, Breadfast, and MaxAB have ML teams. Most remote companies value AI skills highly. Graduates from this track also find international remote opportunities more easily.',
    faqs: [
      { question: 'How much math do I really need for ML?', answer: 'For practical ML/AI: linear algebra, basic calculus (derivatives), and probability/statistics. 3Blue1Brown makes these intuitive. You don\'t need a math PhD — enough to understand what models are doing.' },
      { question: 'Python or R for data science in Egypt?', answer: 'Python, overwhelmingly. R is academic but Python is what industry uses. Learn Python first.' },
      { question: 'Should I focus on classical ML or deep learning first?', answer: 'Classical ML first. Understanding regression, decision trees, and SVMs gives you the foundation to appreciate why deep learning works. Andrew Ng\'s course is perfect for this.' },
      { question: 'Is Kaggle important for getting an AI job?', answer: 'Kaggle competitions are a plus but not required. What matters more: real projects, understanding of fundamentals, and ability to deploy models. Use Kaggle to practice, not as your main portfolio.' },
    ],
    phases: [
      {
        id: 'ai-phase-1',
        number: 1,
        name: 'Math & Programming Foundations',
        arabicName: 'الرياضيات والبرمجة',
        durationEstimate: '4–6 weeks',
        description: 'Learn the mathematical and programming foundations required for ML.',
        buildProject: 'No major project yet — focus on exercises.',
        buildProjectDescription: 'Solve math and programming exercises to build a strong foundation.',
        steps: [
          { id: 'ai-1-1', title: 'Calculus Basics', description: 'Derivatives, gradients, chain rule', resourceUrl: 'https://www.3blue1brown.com/topics/calculus', resourceName: '3Blue1Brown Calculus', estimatedDays: 5 },
          { id: 'ai-1-2', title: 'Linear Algebra', description: 'Vectors, matrices, dot products, eigenvalues', resourceUrl: 'https://www.3blue1brown.com/topics/linear-algebra', resourceName: '3Blue1Brown LinAlg', estimatedDays: 7 },
          { id: 'ai-1-3', title: 'Probability & Statistics', description: 'Distributions, Bayes theorem, expected value', resourceUrl: 'https://www.khanacademy.org/math/statistics-probability', resourceName: 'Khan Academy Stats', estimatedDays: 7 },
          { id: 'ai-1-4', title: 'Python for AI', description: 'Functions, OOP, list comprehensions', resourceUrl: 'https://cs50.harvard.edu/python/', resourceName: 'CS50P', estimatedDays: 10 },
          { id: 'ai-1-5', title: 'NumPy & Matrices', description: 'Arrays, broadcasting, vectorization', resourceUrl: 'https://numpy.org/doc/stable/user/quickstart.html', resourceName: 'NumPy Quickstart', estimatedDays: 5 },
        ],
      },
      {
        id: 'ai-phase-2',
        number: 2,
        name: 'Data Processing & Classical ML',
        arabicName: 'تعلم الآلة الكلاسيكي',
        durationEstimate: '8–10 weeks',
        description: 'Data wrangling, feature engineering, and traditional algorithms.',
        buildProject: 'End-to-End Prediction Project',
        buildProjectDescription: 'Build a complete ML project: data collection, EDA, feature engineering, model training, and evaluation.',
        steps: [
          { id: 'ai-2-1', title: 'Data Wrangling (Pandas)', description: 'Cleaning, merging, aggregation, handling missing data', resourceUrl: 'https://www.kaggle.com/learn/pandas', resourceName: 'Kaggle Pandas', estimatedDays: 7 },
          { id: 'ai-2-2', title: 'Exploratory Data Analysis', description: 'Visualization (Matplotlib/Seaborn), uncovering trends', resourceUrl: 'https://seaborn.pydata.org/tutorial.html', resourceName: 'Seaborn Tutorial', estimatedDays: 5 },
          { id: 'ai-2-3', title: 'Supervised Learning', description: 'Linear/Logistic regression, SVMs, Decision Trees', resourceUrl: 'https://www.coursera.org/specializations/machine-learning-introduction', resourceName: 'Andrew Ng ML', estimatedDays: 14 },
          { id: 'ai-2-4', title: 'Unsupervised Learning', description: 'K-Means, PCA, clustering techniques', resourceUrl: 'https://scikit-learn.org/stable/unsupervised_learning.html', resourceName: 'Sklearn Unsupervised', estimatedDays: 7 },
          { id: 'ai-2-5', title: 'Ensemble Methods', description: 'Random Forests, XGBoost, LightGBM', resourceUrl: 'https://xgboost.readthedocs.io/', resourceName: 'XGBoost Docs', estimatedDays: 7 },
          { id: 'ai-2-6', title: 'Model Evaluation', description: 'Cross-validation, ROC/AUC, Precision/Recall, F1', resourceUrl: 'https://scikit-learn.org/stable/model_selection.html', resourceName: 'Model Selection (Sklearn)', estimatedDays: 5 },
        ],
      },
      {
        id: 'ai-phase-3',
        number: 3,
        name: 'Deep Learning & LLMs',
        arabicName: 'التعلم العميق',
        durationEstimate: '10–14 weeks',
        description: 'Neural networks, PyTorch, specialized fields (NLP/CV), and modern LLMs.',
        buildProject: 'Deployed LLM/RAG Application',
        buildProjectDescription: 'Build a Retrieval-Augmented Generation (RAG) app to chat with your own documents and deploy it.',
        steps: [
          { id: 'ai-3-1', title: 'Neural Networks Fundamentals', description: 'Perceptrons, backpropagation, activation functions', resourceUrl: 'https://cs50.harvard.edu/ai/', resourceName: 'CS50 AI', estimatedDays: 10 },
          { id: 'ai-3-2', title: 'PyTorch Basics', description: 'Tensors, Datasets, Autograd, Training loops', resourceUrl: 'https://pytorch.org/tutorials/beginner/basics/intro.html', resourceName: 'PyTorch Tutorials', estimatedDays: 10 },
          { id: 'ai-3-3', title: 'Computer Vision (CV) OR NLP', description: 'Choose CV (CNNs/ResNet) or NLP (RNNs/Transformers)', resourceUrl: 'https://huggingface.co/learn/nlp-course', resourceName: 'HuggingFace NLP', estimatedDays: 14 },
          { id: 'ai-3-4', title: 'Transformer Architecture', description: 'Self-attention, encoder-decoder, BERT/GPT', resourceUrl: 'https://arxiv.org/abs/1706.03762', resourceName: 'Attention is All You Need', estimatedDays: 7 },
          { id: 'ai-3-5', title: 'Prompt Eng & LangChain', description: 'RAG, Agents, working with API models (OpenAI/Anthropic)', resourceUrl: 'https://python.langchain.com/docs/get_started/introduction', resourceName: 'LangChain Docs', estimatedDays: 7 },
          { id: 'ai-3-6', title: 'Model Deployment', description: 'FastAPI, Docker, Hugging Face Spaces, ONNX', resourceUrl: 'https://fastapi.tiangolo.com/', resourceName: 'FastAPI Docs', estimatedDays: 7 },
        ],
      },
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    arabicName: 'الأمن السيبراني',
    icon: React.createElement(ShieldAlert),
    description: 'Learn offensive and defensive security, web vulnerabilities, and penetration testing.',
    accentColor: '#FF6B35',
    egyptianMarketNote: 'Cybersecurity is growing rapidly in Egypt driven by banking, telecom, and government requirements. Banks like NBE and CIB have active security teams. The field is less crowded than web dev, meaning less competition for jobs.',
    faqs: [
      { question: 'Is cybersecurity in demand in Egypt?', answer: 'Yes, growing rapidly. Banks, telecom companies, and government agencies all hire security engineers. Starting salaries are competitive with web dev.' },
      { question: 'Do I need to know programming for cybersecurity?', answer: 'Python scripting is essential. You don\'t need to be a software developer, but being able to read code, write scripts, and automate tasks is non-negotiable.' },
      { question: 'Is CTF competition experience required?', answer: 'Not required, but very helpful. CTFs demonstrate practical skills better than any certificate. Try PicoCTF (beginner) then TryHackMe, then HackTheBox.' },
      { question: 'Which certificate should I get first?', answer: 'CompTIA Security+ is the most recognized entry-level cert internationally. CEH is popular in the Middle East. TryHackMe and HackTheBox profiles often matter more for internships at Egyptian companies.' },
    ],
    phases: [
      {
        id: 'cyber-phase-1',
        number: 1,
        name: 'IT & Networking Foundations',
        arabicName: 'أساسيات الشبكات',
        durationEstimate: '6–8 weeks',
        description: 'Understand networks, operating systems, and basic scripting before hacking.',
        buildProject: 'Virtual Homelab Network',
        buildProjectDescription: 'Set up a virtual network with pfSense, an Active Directory domain controller, and Kali Linux using VirtualBox.',
        steps: [
          { id: 'cyber-1-1', title: 'OS Fundamentals (Linux)', description: 'CLI, permissions, processes, bash scripting', resourceUrl: 'https://overthewire.org/wargames/bandit/', resourceName: 'OverTheWire Bandit', estimatedDays: 14 },
          { id: 'cyber-1-2', title: 'OS Fundamentals (Windows)', description: 'Registry, Event Viewer, Active Directory basics', resourceUrl: 'https://tryhackme.com/path/outline/activedirectory', resourceName: 'THM Active Directory', estimatedDays: 10 },
          { id: 'cyber-1-3', title: 'Networking Fundamentals', description: 'OSI Model, TCP/IP, DNS, DHCP, Subnetting', resourceUrl: 'https://www.youtube.com/playlist?list=PLDQaRcbiSnqF5U8ffMgZzS7fq1g1s841O', resourceName: 'Network+ Series', estimatedDays: 14 },
          { id: 'cyber-1-4', title: 'Network Protocols', description: 'HTTP/HTTPS, SSH, FTP, SMB', resourceUrl: 'https://tryhackme.com/path/outline/presecurity', resourceName: 'THM Pre-Security', estimatedDays: 7 },
          { id: 'cyber-1-5', title: 'Python for Security', description: 'Sockets, requests, parsing logs, automating tasks', resourceUrl: 'https://cs50.harvard.edu/python/', resourceName: 'CS50P', estimatedDays: 10 },
        ],
      },
      {
        id: 'cyber-phase-2',
        number: 2,
        name: 'Web Security & Penetration Testing',
        arabicName: 'اختراق الويب',
        durationEstimate: '8–12 weeks',
        description: 'Learn offensive security methodologies and web application vulnerabilities.',
        buildProject: 'Vulnerability Assessment Report',
        buildProjectDescription: 'Perform a full penetration test on a deliberately vulnerable VM (like Metasploitable) and write a professional report.',
        steps: [
          { id: 'cyber-2-1', title: 'Information Gathering', description: 'OSINT, Nmap scanning, directory enumeration', resourceUrl: 'https://tryhackme.com/path/outline/jrpenetrationtester', resourceName: 'THM Jr. Pentester', estimatedDays: 7 },
          { id: 'cyber-2-2', title: 'Burp Suite Mastery', description: 'Proxying, Intruder, Repeater for web testing', resourceUrl: 'https://portswigger.net/burp/documentation', resourceName: 'Burp Suite Docs', estimatedDays: 7 },
          { id: 'cyber-2-3', title: 'OWASP Top 10', description: 'SQLi, XSS, CSRF, SSRF, Broken Access Control', resourceUrl: 'https://portswigger.net/web-security', resourceName: 'PortSwigger Web Academy', estimatedDays: 21 },
          { id: 'cyber-2-4', title: 'Exploitation Basics', description: 'Reverse shells, Metasploit, public exploits', resourceUrl: 'https://www.metasploit.com/', resourceName: 'Metasploit Docs', estimatedDays: 10 },
          { id: 'cyber-2-5', title: 'Privilege Escalation', description: 'Linux (LinPEAS, SUID) & Windows (WinPEAS)', resourceUrl: 'https://tryhackme.com/room/linuxprivprivesc', resourceName: 'THM PrivEsc', estimatedDays: 10 },
        ],
      },
      {
        id: 'cyber-phase-3',
        number: 3,
        name: 'Defense, AD & Certifications',
        arabicName: 'المتقدم والشهادات',
        durationEstimate: '10–14 weeks',
        description: 'Active Directory exploitation, SOC operations, and certification prep.',
        buildProject: 'CTF Writeups & HackTheBox',
        buildProjectDescription: 'Solve 10+ retired HackTheBox machines and publish detailed writeups on a personal blog.',
        steps: [
          { id: 'cyber-3-1', title: 'Active Directory Attacks', description: 'BloodHound, Kerberoasting, AS-REP Roasting', resourceUrl: 'https://app.hackthebox.com/tracks', resourceName: 'HackTheBox AD Track', estimatedDays: 14 },
          { id: 'cyber-3-2', title: 'Defensive Security (SOC)', description: 'SIEM (Splunk/Elastic), IDS/IPS, Log analysis', resourceUrl: 'https://tryhackme.com/path/outline/soclevel1', resourceName: 'THM SOC Path', estimatedDays: 14 },
          { id: 'cyber-3-3', title: 'Cryptography', description: 'Hashing, symmetric vs asymmetric encryption', resourceUrl: 'https://www.khanacademy.org/computing/computer-science/cryptography', resourceName: 'Khan Academy Crypto', estimatedDays: 5 },
          { id: 'cyber-3-4', title: 'Security+ or CEH Prep', description: 'CompTIA Security+ (global) or CEH (Middle East)', resourceUrl: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/', resourceName: 'Professor Messer Sec+', estimatedDays: 14 },
          { id: 'cyber-3-5', title: 'Advanced CTFs', description: 'Participate in HackTheBox and CTFtime events', resourceUrl: 'https://ctftime.org/', resourceName: 'CTFtime', estimatedDays: 21 },
        ],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    arabicName: 'تطوير التطبيقات',
    icon: React.createElement(Smartphone),
    description: 'Build mobile apps with Flutter for Android and iOS.',
    accentColor: '#06D6A0',
    egyptianMarketNote: 'Flutter is the dominant mobile framework in Egypt. Halan, Vezeeta, Breadfast, and most Egyptian apps are built with Flutter. React Native exists but Flutter dominates locally. Strong Arabic text support is a plus.',
    faqs: [
      { question: 'Flutter or React Native for Egypt?', answer: 'Flutter. Egyptian companies strongly prefer Flutter. Halan, Vezeeta, Breadfast use Flutter. React Native is less common locally. Flutter also has better Arabic text support.' },
      { question: 'Should I learn Dart before Flutter?', answer: 'Yes, spend 1–2 weeks on Dart basics. The Dart tour (dart.dev) is enough to get started. Dart is easy if you know any C-family language.' },
      { question: 'Do I need a Mac to develop Flutter apps?', answer: 'You don\'t need a Mac to build Android apps with Flutter. For iOS, you need a Mac. For most Egyptian jobs, Android testing is sufficient for the interview stage.' },
      { question: 'How important is state management in interviews?', answer: 'Very important. Know at least Provider well. Riverpod is increasingly popular. Being able to explain why you chose a state management solution shows seniority.' },
    ],
    phases: [
      {
        id: 'mobile-phase-1',
        number: 1,
        name: 'Dart & Core Concepts',
        arabicName: 'مفاهيم دارت',
        durationEstimate: '3–4 weeks',
        description: 'Master Dart perfectly before touching the UI framework.',
        buildProject: 'CLI Application in Dart',
        buildProjectDescription: 'Build a command-line tool (like a todo list or weather fetcher) entirely in Dart without Flutter.',
        steps: [
          { id: 'mobile-1-1', title: 'Variables & Data Types', description: 'Primitives, Lists, Maps, Enums', resourceUrl: 'https://dart.dev/language/built-in-types', resourceName: 'Dart Types', estimatedDays: 3 },
          { id: 'mobile-1-2', title: 'Control Flow', description: 'If/else, loops, switch statements, pattern matching', resourceUrl: 'https://dart.dev/language/control-flow', resourceName: 'Dart Control Flow', estimatedDays: 3 },
          { id: 'mobile-1-3', title: 'Functions', description: 'Parameters, arrow functions, anonymous functions', resourceUrl: 'https://dart.dev/language/functions', resourceName: 'Dart Functions', estimatedDays: 3 },
          { id: 'mobile-1-4', title: 'OOP in Dart', description: 'Classes, constructors, inheritance, mixins, interfaces', resourceUrl: 'https://dart.dev/language/classes', resourceName: 'Dart OOP', estimatedDays: 7 },
          { id: 'mobile-1-5', title: 'Asynchronous Programming', description: 'Futures, async/await, Streams', resourceUrl: 'https://dart.dev/codelabs/async-await', resourceName: 'Dart Async', estimatedDays: 5 },
          { id: 'mobile-1-6', title: 'Null Safety', description: 'Understanding nullable vs non-nullable types', resourceUrl: 'https://dart.dev/null-safety/understanding-null-safety', resourceName: 'Dart Null Safety', estimatedDays: 2 },
        ],
      },
      {
        id: 'mobile-phase-2',
        number: 2,
        name: 'Flutter UI & State',
        arabicName: 'واجهة المستخدم',
        durationEstimate: '6–8 weeks',
        description: 'Building beautiful UIs and managing local state.',
        buildProject: 'Complex UI Clone',
        buildProjectDescription: 'Clone the UI of a complex app (like WhatsApp or Instagram) focusing strictly on pixel-perfect layouts.',
        steps: [
          { id: 'mobile-2-1', title: 'Flutter Basics', description: 'Widget tree, BuildContext, MaterialApp', resourceUrl: 'https://docs.flutter.dev/get-started/codelab', resourceName: 'Flutter Codelab', estimatedDays: 5 },
          { id: 'mobile-2-2', title: 'Layout Widgets', description: 'Row, Column, Stack, Expanded, Padding, Align', resourceUrl: 'https://docs.flutter.dev/ui/widgets/layout', resourceName: 'Layouts Guide', estimatedDays: 7 },
          { id: 'mobile-2-3', title: 'Scrollable Widgets', description: 'ListView, GridView, SingleChildScrollView, Slivers', resourceUrl: 'https://docs.flutter.dev/ui/widgets/scrolling', resourceName: 'Scrolling Guide', estimatedDays: 7 },
          { id: 'mobile-2-4', title: 'Interactive Widgets', description: 'Buttons, TextFields, Forms, Gestures', resourceUrl: 'https://docs.flutter.dev/ui/interactivity', resourceName: 'Interactivity', estimatedDays: 5 },
          { id: 'mobile-2-5', title: 'Local State Management', description: 'StatefulWidget, setState, InheritedWidget', resourceUrl: 'https://docs.flutter.dev/data-and-backend/state-mgmt/intro', resourceName: 'State Intro', estimatedDays: 5 },
          { id: 'mobile-2-6', title: 'Navigation (Routing)', description: 'Navigator 2.0, GoRouter package', resourceUrl: 'https://docs.flutter.dev/ui/navigation', resourceName: 'Navigation', estimatedDays: 5 },
        ],
      },
      {
        id: 'mobile-phase-3',
        number: 3,
        name: 'Architecture & Production',
        arabicName: 'جاهز للإنتاج',
        durationEstimate: '8–10 weeks',
        description: 'Advanced state, networking, storage, and publishing.',
        buildProject: 'Full App on Play Store',
        buildProjectDescription: 'Build a complete app with an API, local storage, complex state, and publish it to the Google Play Store.',
        steps: [
          { id: 'mobile-3-1', title: 'Global State Management', description: 'Riverpod (recommended) or Bloc/Provider', resourceUrl: 'https://riverpod.dev/docs/introduction/getting_started', resourceName: 'Riverpod Docs', estimatedDays: 14 },
          { id: 'mobile-3-2', title: 'Networking & APIs', description: 'http/dio, JSON serialization, models', resourceUrl: 'https://docs.flutter.dev/data-and-backend/networking', resourceName: 'Networking Guide', estimatedDays: 7 },
          { id: 'mobile-3-3', title: 'Local Storage', description: 'SharedPreferences, Isar, SQFlite', resourceUrl: 'https://docs.flutter.dev/data-and-backend/local-storage', resourceName: 'Local Storage', estimatedDays: 7 },
          { id: 'mobile-3-4', title: 'Animations', description: 'Implicit animations, AnimationController, Hero transitions', resourceUrl: 'https://docs.flutter.dev/ui/animations', resourceName: 'Animations Docs', estimatedDays: 7 },
          { id: 'mobile-3-5', title: 'Clean Architecture', description: 'Separation of concerns, repositories, services', resourceUrl: 'https://resocoder.com/category/tutorials/flutter/tdd-clean-architecture/', resourceName: 'ResoCoder Clean Arch', estimatedDays: 14 },
          { id: 'mobile-3-6', title: 'Publishing & CI/CD', description: 'App signing, Play Console, fastlane, testing', resourceUrl: 'https://docs.flutter.dev/deployment/android', resourceName: 'Deployment guide', estimatedDays: 7 },
        ],
      },
    ],
  },
  {
    id: 'cloud_devops',
    name: 'Cloud & DevOps',
    arabicName: 'الحوسبة السحابية',
    icon: React.createElement(Cloud),
    description: 'Master cloud platforms, containers, CI/CD, and infrastructure automation.',
    accentColor: '#FFE500',
    egyptianMarketNote: 'Cloud/DevOps engineers are highly paid in Egypt and globally. Companies like Microsoft Egypt, IBM, and Vodafone hire cloud engineers. Remote opportunities in this track are excellent due to global skill shortage.',
    faqs: [
      { question: 'AWS, Azure, or GCP for Egypt?', answer: 'AWS is most in-demand globally. Azure is strong in Egypt due to Microsoft\'s presence and NBE Azure partnership. GCP is less common locally. AWS + Azure certifications are the most valuable.' },
      { question: 'Do I need Linux to be a DevOps engineer?', answer: 'Absolutely. Linux is the foundation of everything in DevOps. You need to be comfortable with the command line, bash scripting, and system administration.' },
      { question: 'How long does it take to get a cloud engineer job?', answer: 'With AWS Cloud Practitioner cert + practical projects: 6–9 months. Hiring managers look for certifications + hands-on experience (real AWS deployments). Free tier makes practice accessible.' },
      { question: 'Is DevOps or Cloud better for remote work?', answer: 'Both are excellent for remote work. Cloud/infrastructure engineering is one of the highest-paying remote tracks. English communication skills matter even more here.' },
    ],
    phases: [
      {
        id: 'cloud-phase-1',
        number: 1,
        name: 'OS & Networking',
        arabicName: 'أنظمة التشغيل والشبكات',
        durationEstimate: '4–6 weeks',
        description: 'Master Linux, networking, and scripting before touching the cloud.',
        buildProject: 'Automated Local Server',
        buildProjectDescription: 'Configure a local Linux server (VM) that serves a website, runs a database, and has automated daily backups via bash scripts.',
        steps: [
          { id: 'cloud-1-1', title: 'Linux Administration', description: 'Processes, permissions, networking, systemd, SSH', resourceUrl: 'https://linuxjourney.com/', resourceName: 'Linux Journey', estimatedDays: 14 },
          { id: 'cloud-1-2', title: 'Networking Fundamentals', description: 'OSI Model, TCP/IP, DNS, Load Balancing (Nginx/HAProxy)', resourceUrl: 'https://www.youtube.com/playlist?list=PLDQaRcbiSnqF5U8ffMgZzS7fq1g1s841O', resourceName: 'Network+ Series', estimatedDays: 10 },
          { id: 'cloud-1-3', title: 'Bash & Python Scripting', description: 'Write scripts to automate server tasks, parse logs', resourceUrl: 'https://www.shellscript.sh/', resourceName: 'Shell Scripting', estimatedDays: 7 },
          { id: 'cloud-1-4', title: 'Git & Version Control', description: 'Branching, merging, rebasing, collaborative workflows', resourceUrl: 'https://learngitbranching.js.org/', resourceName: 'Learn Git Branching', estimatedDays: 5 },
        ],
      },
      {
        id: 'cloud-phase-2',
        number: 2,
        name: 'Containers & CI/CD',
        arabicName: 'الحاويات والأتمتة',
        durationEstimate: '6–8 weeks',
        description: 'Learn to package apps and automate their deployment pipelines.',
        buildProject: 'Containerized CI/CD Pipeline',
        buildProjectDescription: 'Containerize an app with Docker and set up a GitHub Actions pipeline that builds, tests, and pushes the image on every commit.',
        steps: [
          { id: 'cloud-2-1', title: 'Docker Fundamentals', description: 'Containers, Dockerfiles, Volumes, Networking', resourceUrl: 'https://docs.docker.com/get-started/', resourceName: 'Docker Docs', estimatedDays: 10 },
          { id: 'cloud-2-2', title: 'Docker Compose', description: 'Multi-container applications, environment variables', resourceUrl: 'https://docs.docker.com/compose/', resourceName: 'Docker Compose', estimatedDays: 5 },
          { id: 'cloud-2-3', title: 'CI/CD Pipelines (GitHub Actions/GitLab)', description: 'Workflows, jobs, steps, runners, secrets', resourceUrl: 'https://docs.github.com/en/actions', resourceName: 'GitHub Actions', estimatedDays: 10 },
          { id: 'cloud-2-4', title: 'Infrastructure as Code (Terraform)', description: 'Providers, state, modules, variables', resourceUrl: 'https://developer.hashicorp.com/terraform/tutorials', resourceName: 'Terraform Tutorials', estimatedDays: 14 },
        ],
      },
      {
        id: 'cloud-phase-3',
        number: 3,
        name: 'Cloud Infrastructure & Kubernetes',
        arabicName: 'البنية السحابية',
        durationEstimate: '10–14 weeks',
        description: 'Deploy to the cloud at scale, manage Kubernetes clusters, and implement observability.',
        buildProject: 'Highly Available Cloud Infrastructure',
        buildProjectDescription: 'Use Terraform to provision a VPC, EKS cluster, and RDS database on AWS. Deploy a microservices app using Helm and monitor with Prometheus.',
        steps: [
          { id: 'cloud-3-1', title: 'Cloud Provider Fundamentals (AWS)', description: 'VPC, EC2, S3, RDS, IAM, Lambda', resourceUrl: 'https://aws.amazon.com/training/', resourceName: 'AWS Skill Builder', estimatedDays: 21 },
          { id: 'cloud-3-2', title: 'Kubernetes (K8s)', description: 'Pods, Deployments, Services, Ingress, ConfigMaps', resourceUrl: 'https://kubernetes.io/docs/tutorials/', resourceName: 'K8s Tutorials', estimatedDays: 21 },
          { id: 'cloud-3-3', title: 'Helm & Kustomize', description: 'Package management and configuration for K8s', resourceUrl: 'https://helm.sh/docs/', resourceName: 'Helm Docs', estimatedDays: 5 },
          { id: 'cloud-3-4', title: 'Observability (Prometheus & Grafana)', description: 'Metrics collection, dashboards, alerting', resourceUrl: 'https://prometheus.io/docs/introduction/overview/', resourceName: 'Prometheus Docs', estimatedDays: 10 },
          { id: 'cloud-3-5', title: 'Log Management', description: 'ELK Stack (Elasticsearch, Logstash, Kibana) or Datadog', resourceUrl: 'https://www.elastic.co/what-is/elk-stack', resourceName: 'ELK Guide', estimatedDays: 7 },
        ],
      },
    ],
  },
  {
    id: 'data_engineering',
    name: 'Data Engineering',
    arabicName: 'هندسة البيانات',
    icon: React.createElement(Database),
    description: 'Build data pipelines, warehouses, and analytics infrastructure at scale.',
    accentColor: '#FF0F80',
    egyptianMarketNote: 'Data engineering is growing in Egypt driven by fintech, e-commerce, and telecom. MaxAB, Breadfast, and Halan have data teams. The field offers strong remote opportunities globally.',
    faqs: [
      { question: 'Data Engineering vs Data Science — which is better for Egypt?', answer: 'Both are good but data engineering is less competitive. Fewer people know Spark, Airflow, and data pipelines. If you\'re comfortable with infrastructure and Python, data engineering often pays better locally.' },
      { question: 'SQL is enough for a data engineering job?', answer: 'Strong SQL is the foundation, but not sufficient alone. You also need Python + Pandas, basic cloud (AWS/GCP), and at least one pipeline tool (Airflow is most common).' },
      { question: 'Is dbt used in Egypt?', answer: 'Increasingly yes. Companies with mature data teams use dbt. It\'s a differentiating skill that signals you understand modern data practices.' },
      { question: 'Should I know Spark as a data engineer?', answer: 'For roles at larger companies with big data: yes. For smaller Egyptian companies: Python + Pandas + SQL is often sufficient. Spark is a bonus that opens more doors.' },
    ],
    phases: [
      {
        id: 'data-phase-1',
        number: 1,
        name: 'Data Foundations & SQL',
        arabicName: 'أساسيات البيانات',
        durationEstimate: '4–6 weeks',
        description: 'Master SQL perfectly and learn basic data modeling concepts.',
        buildProject: 'Complex Data Analysis',
        buildProjectDescription: 'Find an Egyptian dataset, design a normalized database schema, load the data using Python, and perform complex SQL window functions to extract insights.',
        steps: [
          { id: 'data-1-1', title: 'Advanced SQL', description: 'Window functions, CTEs, indexing, query optimization', resourceUrl: 'https://cs50.harvard.edu/sql/', resourceName: 'CS50 SQL', estimatedDays: 14 },
          { id: 'data-1-2', title: 'Data Modeling (RDBMS)', description: 'Normalization (1NF-3NF), ER diagrams', resourceUrl: 'https://www.guru99.com/database-normalization.html', resourceName: 'Guru99 Normalization', estimatedDays: 7 },
          { id: 'data-1-3', title: 'Python for Data', description: 'Pandas, fetching data via API, JSON/CSV parsing', resourceUrl: 'https://www.kaggle.com/learn/pandas', resourceName: 'Kaggle Pandas', estimatedDays: 10 },
          { id: 'data-1-4', title: 'Data Warehousing Concepts', description: 'OLTP vs OLAP, Star/Snowflake schemas, Fact/Dimension tables', resourceUrl: 'https://www.startdataengineering.com/post/data-engineering-project-for-beginners/', resourceName: 'Start Data Engineering', estimatedDays: 7 },
        ],
      },
      {
        id: 'data-phase-2',
        number: 2,
        name: 'ETL & Orchestration',
        arabicName: 'خطوط بيانات الأتمتة',
        durationEstimate: '8–10 weeks',
        description: 'Build robust data pipelines and schedule them using modern tools.',
        buildProject: 'Automated ETL Pipeline',
        buildProjectDescription: 'Extract data from public APIs (e.g., weather or finance), transform it in pandas, load it to PostgreSQL, and orchestrate daily runs via Airflow.',
        steps: [
          { id: 'data-2-1', title: 'Data Transformation', description: 'Data cleaning, type casting, handling anomalies', resourceUrl: 'https://pandas.pydata.org/docs/user_guide/10min.html', resourceName: '10 Min Pandas', estimatedDays: 7 },
          { id: 'data-2-2', title: 'Workflow Orchestration', description: 'Apache Airflow, Prefect, or Dagster', resourceUrl: 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html', resourceName: 'Airflow Tutorial', estimatedDays: 14 },
          { id: 'data-2-3', title: 'Data Transformation (dbt)', description: 'SQL-based transformations, models, testing, documentation', resourceUrl: 'https://docs.getdbt.com/docs/get-started-dbt', resourceName: 'dbt Intro', estimatedDays: 10 },
          { id: 'data-2-4', title: 'Cloud Data Warehouses', description: 'BigQuery, Snowflake, or Amazon Redshift basics', resourceUrl: 'https://cloud.google.com/bigquery/docs/quickstarts', resourceName: 'BigQuery Docs', estimatedDays: 7 },
        ],
      },
      {
        id: 'data-phase-3',
        number: 3,
        name: 'Big Data & Streaming',
        arabicName: 'البيانات الضخمة',
        durationEstimate: '8–12 weeks',
        description: 'Process massive datasets across clusters and handle real-time streaming data.',
        buildProject: 'Real-time Analytics Dashboard',
        buildProjectDescription: 'Stream live data (e.g., tweets or crypto prices) via Kafka, process it with Spark Streaming, load it to a warehouse, and connect a BI dashboard.',
        steps: [
          { id: 'data-3-1', title: 'Distributed Processing', description: 'Apache Spark architecture, RDDs, DataFrames, PySpark', resourceUrl: 'https://spark.apache.org/docs/latest/quick-start.html', resourceName: 'Spark Quick Start', estimatedDays: 14 },
          { id: 'data-3-2', title: 'Message Brokers & Streaming', description: 'Apache Kafka, Pub/Sub, Kinesis', resourceUrl: 'https://kafka.apache.org/quickstart', resourceName: 'Kafka Quickstart', estimatedDays: 10 },
          { id: 'data-3-3', title: 'Data Lakes', description: 'S3/GCS storage, Parquet/ORC formats, Delta Lake', resourceUrl: 'https://delta.io/learn/', resourceName: 'Delta Lake Guide', estimatedDays: 7 },
          { id: 'data-3-4', title: 'Data Quality & Governance', description: 'Great Expectations, data catalogs, lineage', resourceUrl: 'https://docs.greatexpectations.io/', resourceName: 'Great Expectations', estimatedDays: 7 },
          { id: 'data-3-5', title: 'BI Tools', description: 'Connect Metabase, Superset, or Tableau to your warehouse', resourceUrl: 'https://superset.apache.org/', resourceName: 'Apache Superset', estimatedDays: 5 },
        ],
      },
    ],
  },
]
