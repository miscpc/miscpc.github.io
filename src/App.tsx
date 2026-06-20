import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Code2, 
  Cpu, 
  Users, 
  MessageSquare,
  ArrowUpRight,
  Award,
  ExternalLink,
  FileText
} from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#050505]/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tighter">
            EH<span className="text-emerald-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-500 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Section id="home" className="pt-0">
          <Hero />
        </Section>

        <Section 
          id="about" 
          subtitle="The Profile" 
          title="Root Cause Resolution Engineering"
          className="bg-zinc-900/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl text-zinc-300 leading-relaxed">
                A results-driven IT professional with over <span className="text-[#00ff66] font-bold">20 years</span> of hands-on experience. 
                When no solution is found, I fix the problem by ensuring the root cause is identified and eliminated.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I engineer solutions supporting the full technology stack — from bare-metal infrastructure to cloud-native deployments and AI integration. 
                My expertise spans datacenters, clusters, multi-system administration, network engineering, and cybersecurity. 
                I specialize in high-availability systems, DevOps automation, and AI-augmented workflows.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Security First', desc: 'PCI compliance & hardened infra' },
                  { icon: <Target className="w-5 h-5" />, title: 'Root Cause', desc: 'Eliminating recurring issues' },
                  { icon: <Zap className="w-5 h-5" />, title: 'Automation', desc: 'DevOps & smart workflows' },
                  { icon: <Cpu className="w-5 h-5" />, title: 'AI Integration', desc: 'Modernizing legacy stacks' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex gap-4">
                    <div className="text-[#00ff66] shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl border border-[#00ff66]/35 bg-zinc-950/95 shadow-[0_0_0_1px_rgba(0,255,102,0.08),0_18px_60px_rgba(0,255,102,0.10)]">
                <div className="h-1 w-full bg-gradient-to-r from-[#00ff66] via-sky-400 to-[#00ff66]" />
                <div className="bg-gradient-to-br from-[#00ff66]/14 via-zinc-950/96 to-zinc-950 p-6 md:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h4 className="text-[#00ff66] font-bold text-sm uppercase tracking-[0.2em] mb-2">
                        HackerRank Verified Certificates
                      </h4>
                      <p className="text-sm text-zinc-200 max-w-2xl leading-relaxed">
                        9 verified certificates surfaced directly from your HackerRank profile, with the blue role certificates shown first and every credential linked individually.
                      </p>
                    </div>
                    <a
                      href="https://www.hackerrank.com/profile/evanh720"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#00ff66] hover:text-white transition-colors"
                    >
                      View HackerRank Profile <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-sky-400 font-bold mb-3">
                        Role Certificates
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {roleCertificates.map((cert) => (
                          <a
                            key={cert.url}
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-2xl bg-sky-500/12 border border-sky-400/35 p-4 shadow-[0_10px_30px_rgba(14,165,233,0.08)] hover:border-sky-300/70 hover:bg-sky-500/18 transition-all"
                          >
                            <Award className="w-6 h-6 text-sky-300 mb-3" />
                            <div className="text-[11px] font-mono text-sky-200 break-all mb-2">
                              {cert.fileName}
                            </div>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h5 className="text-white text-sm font-semibold group-hover:text-sky-200 transition-colors">
                                  {cert.title}
                                </h5>
                                <p className="text-xs text-zinc-300 mt-1">Verified role certificate</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-[#00ff66] font-bold mb-3">
                        Skill Certificates
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillCertificates.map((cert) => (
                          <a
                            key={cert.url}
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-2xl bg-zinc-900 border border-[#00ff66]/20 p-4 shadow-[0_10px_30px_rgba(0,255,102,0.05)] hover:border-[#00ff66]/55 hover:bg-[#00ff66]/10 transition-all"
                          >
                            <FileText className="w-6 h-6 text-[#00ff66] mb-3" />
                            <div className="text-[11px] font-mono text-[#b8ffd6] break-all mb-2">
                              {cert.fileName}
                            </div>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h5 className="text-white text-sm font-semibold group-hover:text-[#7dffaf] transition-colors">
                                  {cert.title}
                                </h5>
                                <p className="text-xs text-zinc-300 mt-1">Verified skill certificate</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#00ff66] shrink-0 mt-0.5 transition-colors" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#00ff66]/5 border border-[#00ff66]/15">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#00ff66]" />
                  Technical Focus
                </h4>
                <div className="space-y-4">
                  {[
                    { label: 'System Admin', value: 100 },
                    { label: 'Network Eng.', value: 95 },
                    { label: 'DevOps', value: 90 },
                    { label: 'AI/R&D', value: 85 },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">{stat.label}</span>
                        <span className="text-[#00ff66]">{stat.value}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#00ff66] rounded-full" 
                          style={{ width: `${stat.value}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h4 className="text-white font-bold mb-4">Core Principles</h4>
                <ul className="space-y-3">
                  {['No Band-aid Solutions', 'Scalability by Design', 'Security at the Edge', 'Workflow Optimization'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1 h-1 rounded-full bg-[#00ff66]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#00ff66]/10 border border-[#00ff66]/20">
                <h4 className="text-[#00ff66] font-bold mb-2 text-sm">HackerRank Certified</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  9 verified certificates total — 2 blue role certifications first, followed by 7 direct skill certificate links below.
                </p>
                <a
                  href="https://www.hackerrank.com/profile/evanh720"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#00ff66] hover:text-white transition-colors"
                >
                  Open full profile <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <h4 className="text-white font-bold mb-3 text-sm">Communication</h4>
                <div className="flex flex-wrap gap-2">
                  {['English (Fluent)', 'French (Fluent)', 'Technical Systems'].map((lang) => (
                    <span key={lang} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" subtitle="Expertise" title="36 Verified Aptitude Skills">
          <Skills />
        </Section>

        <Section id="projects" subtitle="Proven Solutions" title="Featured Case Studies">
          <CaseStudies />
        </Section>

        <Section id="specialties" subtitle="Beyond the Screen" title="Hardware & Specialized Systems" className="bg-zinc-900/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Data Centers', desc: 'Rack servers, QoS, & Networking' },
              { title: 'Electronics', desc: 'Arcade machines, kiosks, & consoles' },
              { title: 'IOT & Security', desc: 'Cameras, access control, & sensors' },
              { title: 'Mobile Dev', desc: 'iOS, Android, & Legacy platforms' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center group hover:bg-emerald-500/5 transition-colors">
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" subtitle="The Journey" title="Experience & Impact" className="bg-zinc-900/30">
          <Experience />
        </Section>

        <Section id="contact" subtitle="Get In Touch" title="Available for Consulting">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's discuss your next infrastructure challenge.</h3>
                <p className="text-zinc-400 mb-8">
                  Whether it's scaling a startup from 2 to 100 employees or optimizing municipal-level IT systems, I deliver results that last.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span>Consulting / Full-time</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span>Greater Montreal / Remote</span>
                  </div>
                </div>
              </div>
              
              <form
                action="https://formspree.io/f/mqevzkbr"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New website contact form message" />
                <div>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Your Name"
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Your Email"
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                  Send Message <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-zinc-800/50 text-center">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Evan Hopkins. All rights reserved. Built with precision.
        </div>
      </footer>
    </div>
  );
};

export default App;
