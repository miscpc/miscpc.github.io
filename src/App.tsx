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
  ArrowUpRight
} from 'lucide-react';

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
                A results-driven IT professional with over <span className="text-emerald-400 font-bold">20 years</span> of hands-on experience. 
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
                    <div className="text-emerald-500 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-500" />
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
                        <span className="text-emerald-500">{stat.value}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
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
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-bold mb-2 text-sm">HackerRank Certified</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Verified excellence in problem solving, algorithms, and technical aptitude.
                </p>
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
