export interface JobBoard {
  id: string
  name: string
  url: string
  description: string
  bestFor: string
  type: 'local' | 'global' | 'remote'
}

export const jobBoards: JobBoard[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn Jobs',
    url: 'https://www.linkedin.com/jobs/search/?location=Egypt',
    description: 'The most important job platform globally. Filter by "Egypt" for local or "Remote" for remote. Most companies now list here.',
    bestFor: 'All levels, remote jobs, networking with employees before applying',
    type: 'global',
  },
  {
    id: 'wuzzuf',
    name: 'Wuzzuf',
    url: 'https://wuzzuf.net/',
    description: 'Egypt\'s largest job board. Nearly every Egyptian company posts here. Wide range from entry-level to senior.',
    bestFor: 'Local Egyptian jobs, finding company names, internships',
    type: 'local',
  },
  {
    id: 'forasna',
    name: 'Forasna',
    url: 'https://www.forasna.com/',
    description: 'Egyptian job board focused on mid-market and SME companies. Less filtered than Wuzzuf but has unique listings.',
    bestFor: 'SMEs, smaller companies, diverse local listings',
    type: 'local',
  },
  {
    id: 'bayt',
    name: 'Bayt',
    url: 'https://www.bayt.com/en/egypt/',
    description: 'MENA-focused job board. Great for Gulf remote roles and companies that operate regionally.',
    bestFor: 'MENA remote roles, Gulf companies, regional tech companies',
    type: 'global',
  },
  {
    id: 'indeed',
    name: 'Indeed Egypt',
    url: 'https://eg.indeed.com/',
    description: 'Global job aggregator. Useful for entry-level search and finding less-advertised positions.',
    bestFor: 'Entry-level search, aggregated listings',
    type: 'global',
  },
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    url: 'https://www.glassdoor.com/Job/egypt-jobs-SRCH_IL.0,5_IN71.htm',
    description: 'Use Glassdoor to check company reviews and salary ranges BEFORE interviewing. Essential research tool.',
    bestFor: 'Company research, salary benchmarks, interview prep',
    type: 'global',
  },
  {
    id: 'weworkremotely',
    name: 'We Work Remotely',
    url: 'https://weworkremotely.com/',
    description: 'Remote-only tech jobs from global companies. Most are async-friendly. Great for experienced developers.',
    bestFor: 'Remote-only tech jobs, experienced developers',
    type: 'remote',
  },
  {
    id: 'remote_co',
    name: 'Remote.co',
    url: 'https://remote.co/remote-jobs/',
    description: 'Curated remote tech jobs from vetted companies. Smaller volume but higher quality listings.',
    bestFor: 'Curated remote tech positions',
    type: 'remote',
  },
  {
    id: 'wellfound',
    name: 'Wellfound (AngelList)',
    url: 'https://wellfound.com/jobs',
    description: 'Startup job board. Global startups, some Egypt-based. Shows salary and equity upfront.',
    bestFor: 'Startup jobs, transparent salary info, tech-first companies',
    type: 'global',
  },
  {
    id: 'remoteok',
    name: 'Remote OK',
    url: 'https://remoteok.com/',
    description: 'Popular remote job board with tech-focused listings. Updated daily. Good filters by stack.',
    bestFor: 'Remote tech jobs, filtering by specific technologies',
    type: 'remote',
  },
]
