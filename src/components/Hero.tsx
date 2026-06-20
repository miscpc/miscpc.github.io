import { motion } from 'framer-motion';
import { ChevronRight, Code, Link2 } from 'lucide-react';
import { LocaleContent } from '../content';
import { Terminal } from './Terminal';

interface HeroProps {
  content: LocaleContent['hero'];
  terminal: LocaleContent['terminal'];
}

export const Hero = ({ content, terminal }: HeroProps) => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 blur-sm scale-110">
          <img src="/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {content.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Evan Hopkins
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {content.title}
            </span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">{content.summary}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition-all flex items-center gap-2"
            >
              {content.caseStudiesCta} <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/evan-hopkins-329237a3/"
              className="text-zinc-500 hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Link2 className="w-6 h-6" />
            </a>
            <a href="https://github.com/miscpc" className="text-zinc-500 hover:text-emerald-500 transition-colors" aria-label="GitHub">
              <Code className="w-6 h-6" />
            </a>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex gap-4">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <Terminal content={terminal} />
        </motion.div>
      </div>
    </div>
  );
};
