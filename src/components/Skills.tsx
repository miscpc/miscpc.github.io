import { motion } from 'framer-motion';
import { Cloud, Code2, Cpu, Database, Server, Shield, Terminal as TerminalIcon } from 'lucide-react';
import { LocaleContent } from '../content';

interface SkillsProps {
  categories: LocaleContent['skillsSection']['categories'];
}

const icons = [
  <Server className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
  <Cloud className="w-5 h-5" />,
  <Cpu className="w-5 h-5" />,
  <Database className="w-5 h-5" />,
  <TerminalIcon className="w-5 h-5" />,
  <Code2 className="w-5 h-5" />,
  <Cpu className="w-5 h-5" />,
];

export const Skills = ({ categories }: SkillsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, idx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              {icons[idx]}
            </div>
            <h3 className="font-semibold text-zinc-200">{category.title}</h3>
          </div>
          <ul className="space-y-2">
            {category.skills.map((skill) => (
              <li key={skill} className="text-sm text-zinc-400 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};
