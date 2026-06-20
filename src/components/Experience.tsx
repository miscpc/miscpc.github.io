import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Ville de Montréal',
    role: 'Consultant / System Administrator',
    period: '2011 – April 2026',
    description: 'System Administrator for Municipal, Electoral, Business & Professional Clients. Creating systems that eliminate problems. Expert in Windows, Linux, BSD, and VoIP (Cisco, Asterisk). Managed workflow compliance (PCI) and complex hardware infrastructure.',
    highlights: ['Electoral Systems', 'VOIP Specialist', 'PCI Compliance']
  },
  {
    company: 'Kontego Networks',
    role: 'System Administrator / R&D',
    period: 'Jul – Oct 2011',
    description: 'R&D for an ISP. Migrated servers to DMZ model. Clustered PostgreSQL and implemented NFS bootable systems. Worked with Cisco AS5300 and various clustering technologies (Xen, OpenStack).',
    highlights: ['ISP R&D', 'PostgreSQL Clustering', 'DMZ Migration']
  },
  {
    company: 'Ajilon',
    role: 'System Analyst',
    period: 'Jul 2009 – Jul 2011',
    description: 'Virtualized servers for Target Corp. Scripted task-automation utilities and debugged builds. Escalated complex issues across server teams as assistant supervisor.',
    highlights: ['Target Corp Project', 'Automation Scripting', 'Virtualization']
  },
  {
    company: 'EVO Canada',
    role: 'Senior Technical Consultant / SysAdmin',
    period: 'Aug – Dec 2009',
    description: 'Sole IT manager for 125 staff + 40 remote agents. Implemented Cisco ASA, VPNs, and Kantech access systems. Solutions Architect and Workflow Manager.',
    highlights: ['Sole IT Manager', 'Cisco ASA', 'Solutions Architecture']
  },
  {
    company: 'Orderin',
    role: 'Director of Information Technology',
    period: '2005 – 2007',
    description: 'Scaled company from 2 to 100+ employees. Managed entire IT stack including Gentoo firewalls, Asterisk VoIP, and SEO. Achieved Director level at age 20.',
    highlights: ['Grew Company 50x', 'Infrastructure Scaling', 'Director at 20']
  }
];

export const Experience = () => {
  return (
    <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
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
          <p className="text-zinc-400 mb-4 max-w-3xl leading-relaxed">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.highlights.map((h, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 px-2 py-0.5 rounded">
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
