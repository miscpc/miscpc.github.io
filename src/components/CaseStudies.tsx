import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { LocaleContent } from '../content';

interface CaseStudiesProps {
  cases: LocaleContent['projectsSection']['cases'];
}

export const CaseStudies = ({ cases }: CaseStudiesProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cases.map((item, idx) => (
        <motion.div
          key={`${item.client}-${item.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all overflow-hidden"
        >
          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2 block">
              {item.client}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {item.title}
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <div className="shrink-0 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-300 font-medium">{item.challengeLabel}:</span> {item.challenge}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-300 font-medium">{item.solutionLabel}:</span> {item.solution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
