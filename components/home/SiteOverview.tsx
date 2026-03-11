import { NeoCard } from '@/components/ui/NeoCard'
import { NeoButton } from '@/components/ui/NeoButton'
import { Map, BookOpen, Briefcase, Wrench, FileText, ArrowRight } from 'lucide-react'

const pages = [
  {
    title: 'Learning Roadmaps',
    description: 'Step-by-step guides for 6 tracks. Web, AI, Security, Mobile, Cloud, and Data. Follow the phases, build real things.',
    icon: Map,
    href: '/roadmaps',
    accent: '#4361EE',
  },
  {
    title: 'Free Courses',
    description: '200+ curated courses rated by real students. Filter by track, language, and type. Arabic content labeled.',
    icon: BookOpen,
    href: '/courses',
    accent: '#06D6A0',
  },
  {
    title: 'Careers in Egypt',
    description: 'How Egyptian hiring actually works, which companies to target, and a complete guide to remote work.',
    icon: Briefcase,
    href: '/careers',
    accent: '#FF6B35',
  },
  {
    title: 'Developer Tools',
    description: 'Free tools, cloud credits, the GitHub Student Pack, and Egyptian-specific payment tools.',
    icon: Wrench,
    href: '/tools',
    accent: '#9B5DE5',
  },
  {
    title: 'CV & Projects',
    description: 'CV tips for Egyptian hiring managers and 20+ project ideas across all difficulty levels.',
    icon: FileText,
    href: '/cv-projects',
    accent: '#FF0F80',
  },
]

export function SiteOverview() {
  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="font-heading font-black text-3xl md:text-4xl mb-2 reveal">What&apos;s inside</h2>
        <p className="font-body text-gray-600 dark:text-gray-400 mb-8 reveal">Everything you need in one place.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pages.map((page, i) => {
            const Icon = page.icon
            return (
              <NeoCard key={page.href} className={`p-6 flex flex-col reveal stagger-${i + 1} group`} accent={page.accent}>
                <div
                  className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center mb-4 flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  style={{ backgroundColor: page.accent }}
                >
                  <Icon size={24} className="text-black dark:text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{page.title}</h3>
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 flex-1 mb-4">{page.description}</p>
                <NeoButton
                  href={page.href}
                  variant="secondary"
                  size="sm"
                  icon={<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />}
                  iconPosition="right"
                >
                  Explore
                </NeoButton>
              </NeoCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
