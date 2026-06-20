import { motion } from 'framer-motion';
import { LocaleContent } from '../content';

interface ExperienceProps {
  items: LocaleContent['experienceSection']['items'];
}

export const Experience = ({ items }: ExperienceProps) => {
  return (
    <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
      {items.map((exp, idx) => (
        <motion.div
          key={`${exp.company}-${exp.role}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative pl-8"
        >
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
              <p className="text-emerald-500 font-medium">{exp.company}</p>
            </div>
            <span className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              {exp.period}
            </span>
          </div>
          <p className="text-zinc-400 mb-4 max-w-3xl leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.highlights.map((highlight) => (
              <span
                key={highlight}
                className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 px-2 py-0.5 rounded"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
