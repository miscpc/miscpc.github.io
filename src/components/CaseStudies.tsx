import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    title: 'Municipal Electoral Infrastructure',
    client: 'Ville de Montréal',
    challenge: 'Need for high-availability, secure systems for electoral and municipal operations.',
    solution: 'Designed and implemented a redundant Linux/Windows hybrid stack with strict PCI compliance and custom monitoring.',
    tags: ['High Availability', 'Security', 'Linux']
  },
  {
    title: 'Startup Scale-up (2 to 100+)',
    client: 'Orderin',
    challenge: 'Rapid growth required immediate infrastructure scaling without downtime.',
    solution: 'Built a full-stack IT department from scratch. Implemented Gentoo-based firewalls, Asterisk VoIP, and automated server deployment.',
    tags: ['Scaling', 'VoIP', 'Infrastructure']
  },
  {
    title: 'ISP R&D & Server Migration',
    client: 'Kontego Networks',
    challenge: 'Transitioning from web-facing IPs to a secure DMZ model while clustering databases.',
    solution: 'Migrated PostgreSQL to a clustered model and implemented NFS bootable systems for rapid recovery.',
    tags: ['ISP', 'Database Clustering', 'NFS']
  }
];

export const CaseStudies = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cases.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-6 h-6 text-emerald-500" />
          </div>
          
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
                <span className="text-zinc-300 font-medium">Challenge:</span> {item.challenge}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-300 font-medium">Solution:</span> {item.solution}
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
