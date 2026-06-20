import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Award, Code2, Cpu, ExternalLink, FileText, MessageSquare, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import { appContent, detectLocale, Locale } from './content';
import { CaseStudies } from './components/CaseStudies';
import { ConstellationBackground } from './components/ConstellationBackground';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Skills } from './components/Skills';

const roleCertificates = [
  {
    title: 'Frontend Developer (React)',
    fileName: 'frontend-developer-react.pdf',
    url: 'https://www.hackerrank.com/certificates/d7c56cab142f',
  },
  {
    title: 'Software Engineer',
    fileName: 'software-engineer.pdf',
    url: 'https://www.hackerrank.com/certificates/a8cf9e91b741',
  },
];

const skillCertificates = [
  {
    title: 'Problem Solving (Basic)',
    fileName: 'problem-solving-basic.pdf',
    url: 'https://www.hackerrank.com/certificates/e39a1ae30201',
  },
  {
    title: 'SQL (Advanced)',
    fileName: 'sql-advanced.pdf',
    url: 'https://www.hackerrank.com/certificates/226bf09ed897',
  },
  {
    title: 'SQL (Intermediate)',
    fileName: 'sql-intermediate.pdf',
    url: 'https://www.hackerrank.com/certificates/f3ad0148db4e',
  },
  {
    title: 'SQL (Basic)',
    fileName: 'sql-basic.pdf',
    url: 'https://www.hackerrank.com/certificates/c2dd536232d3',
  },
  {
    title: 'JavaScript (Intermediate)',
    fileName: 'javascript-intermediate.pdf',
    url: 'https://www.hackerrank.com/certificates/5bc9451ebcd0',
  },
  {
    title: 'JavaScript (Basic)',
    fileName: 'javascript-basic.pdf',
    url: 'https://www.hackerrank.com/certificates/5c101dfd26cf',
  },
  {
    title: 'Angular (Intermediate)',
    fileName: 'angular-intermediate.pdf',
    url: 'https://www.hackerrank.com/certificates/f9034a8a19bd',
  },
];

const App = () => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('resume-locale');
      if (saved === 'en' || saved === 'fr') {
        return saved;
      }
    }
    return detectLocale();
  });
  const content = useMemo(() => appContent[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = content.meta.lang;
    document.title = content.meta.title;
    window.localStorage.setItem('resume-locale', locale);
  }, [content, locale]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <ConstellationBackground />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#050505]/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="text-xl font-bold text-white tracking-tighter">
            EH<span className="text-emerald-500">.</span>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 p-1">
              {(['en', 'fr'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest transition-colors ${
                    locale === lang
                      ? 'bg-emerald-500 text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-pressed={locale === lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-8">
              {content.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-500 transition-colors"
              >
                {content.hireMe}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Section id="home" className="pt-0">
          <Hero content={content.hero} terminal={content.terminal} />
        </Section>

        <Section
          id="about"
          subtitle={content.about.subtitle}
          title={content.about.title}
          className="bg-zinc-900/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl text-zinc-300 leading-relaxed">
                {locale === 'fr' ? (
                  <>
                    Professionnel TI axé sur les résultats avec plus de <span className="text-[#00ff66] font-bold">20 ans</span> d'expérience terrain. Quand aucune solution n'existe, je règle le problème en identifiant et en éliminant la cause racine.
                  </>
                ) : (
                  <>
                    A results-driven IT professional with over <span className="text-[#00ff66] font-bold">20 years</span> of hands-on experience. When no solution is found, I fix the problem by ensuring the root cause is identified and eliminated.
                  </>
                )}
              </p>
              <p className="text-zinc-400 leading-relaxed">{content.about.body}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, ...content.about.pillars[0] },
                  { icon: <Target className="w-5 h-5" />, ...content.about.pillars[1] },
                  { icon: <Zap className="w-5 h-5" />, ...content.about.pillars[2] },
                  { icon: <Cpu className="w-5 h-5" />, ...content.about.pillars[3] },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex gap-4">
                    <div className="text-[#00ff66] shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-[#00ff66]/8 border border-[#00ff66]/20 p-6 md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-[#00ff66] font-bold text-sm uppercase tracking-[0.2em] mb-2">
                      {content.about.certificatesTitle}
                    </h4>
                    <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                      {content.about.certificatesDescription}
                    </p>
                  </div>
                  <a
                    href="https://www.hackerrank.com/profile/evanh720"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#00ff66] hover:text-white transition-colors"
                  >
                    {content.about.viewProfile} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-sky-400 font-bold mb-3">
                      {content.about.roleCertificates}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {roleCertificates.map((cert) => (
                        <a
                          key={cert.url}
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-2xl bg-sky-500/10 border border-sky-500/20 p-4 hover:border-sky-400/50 hover:bg-sky-500/15 transition-all"
                        >
                          <Award className="w-6 h-6 text-sky-400 mb-3" />
                          <div className="text-[11px] font-mono text-sky-300 break-all mb-2">{cert.fileName}</div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h5 className="text-white text-sm font-semibold group-hover:text-sky-300 transition-colors">
                                {cert.title}
                              </h5>
                              <p className="text-xs text-zinc-400 mt-1">{content.about.roleCertificateLabel}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-[#00ff66] font-bold mb-3">
                      {content.about.skillCertificates}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skillCertificates.map((cert) => (
                        <a
                          key={cert.url}
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 hover:border-[#00ff66]/40 hover:bg-[#00ff66]/5 transition-all"
                        >
                          <FileText className="w-6 h-6 text-[#00ff66] mb-3" />
                          <div className="text-[11px] font-mono text-[#8cffbf] break-all mb-2">{cert.fileName}</div>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h5 className="text-white text-sm font-semibold group-hover:text-[#00ff66] transition-colors">
                                {cert.title}
                              </h5>
                              <p className="text-xs text-zinc-500 mt-1">{content.about.skillCertificateLabel}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#00ff66] shrink-0 mt-0.5 transition-colors" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#00ff66]/5 border border-[#00ff66]/15">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#00ff66]" />
                  {content.about.technicalFocusTitle}
                </h4>
                <div className="space-y-4">
                  {content.about.technicalFocus.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">{stat.label}</span>
                        <span className="text-[#00ff66]">{stat.value}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00ff66] rounded-full" style={{ width: `${stat.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h4 className="text-white font-bold mb-4">{content.about.corePrinciplesTitle}</h4>
                <ul className="space-y-3">
                  {content.about.corePrinciples.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1 h-1 rounded-full bg-[#00ff66]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#00ff66]/10 border border-[#00ff66]/20">
                <h4 className="text-[#00ff66] font-bold mb-2 text-sm">{content.about.hackerRankCardTitle}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">{content.about.hackerRankCardDescription}</p>
                <a
                  href="https://www.hackerrank.com/profile/evanh720"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#00ff66] hover:text-white transition-colors"
                >
                  {content.about.openFullProfile} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h4 className="text-white font-bold mb-3 text-sm">{content.about.communicationTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {content.about.communicationTags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" subtitle={content.skillsSection.subtitle} title={content.skillsSection.title}>
          <Skills categories={content.skillsSection.categories} />
        </Section>

        <Section id="projects" subtitle={content.projectsSection.subtitle} title={content.projectsSection.title}>
          <CaseStudies cases={content.projectsSection.cases} />
        </Section>

        <Section
          id="specialties"
          subtitle={content.specialtiesSection.subtitle}
          title={content.specialtiesSection.title}
          className="bg-zinc-900/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.specialtiesSection.items.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center group hover:bg-emerald-500/5 transition-colors"
              >
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          subtitle={content.experienceSection.subtitle}
          title={content.experienceSection.title}
          className="bg-zinc-900/30"
        >
          <Experience items={content.experienceSection.items} />
        </Section>

        <Section id="contact" subtitle={content.contactSection.subtitle} title={content.contactSection.title}>
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{content.contactSection.heading}</h3>
                <p className="text-zinc-400 mb-8">{content.contactSection.body}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span>{content.contactSection.badges[0]}</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span>{content.contactSection.badges[1]}</span>
                  </div>
                </div>
              </div>

              <form action="https://formspree.io/f/mqevzkbr" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value={content.contactSection.subject} />
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder={content.contactSection.namePlaceholder}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder={content.contactSection.emailPlaceholder}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={content.contactSection.messagePlaceholder}
                    rows={4}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {content.contactSection.submit} <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 py-12 border-t border-zinc-800/50 text-center">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Evan Hopkins. All rights reserved. {content.footer}
        </div>
      </footer>
    </div>
  );
};

export default App;
