import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Database, 
  Cpu, 
  Code2, 
  Cloud,
  Terminal as TerminalIcon
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Systems & OS',
    icon: <Server className="w-5 h-5" />,
    skills: ['Linux (RHEL/CentOS/Debian)', 'Windows Server', 'FreeBSD', 'System Administration', 'Bare-metal Infrastructure']
  },
  {
    title: 'Networking & Security',
    icon: <Shield className="w-5 h-5" />,
    skills: ['Cisco Technologies', 'Firewalls (ASA/IPTables)', 'DNS/DHCP', 'Network Administration', 'Cybersecurity']
  },
  {
    title: 'Virtualization & Cloud',
    icon: <Cloud className="w-5 h-5" />,
    skills: ['VMware', 'VirtualBox', 'Xen', 'OpenStack', 'Cloud-native Deployments']
  },
  {
    title: 'DevOps & Automation',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Puppet', 'Bash/Shell Scripting', 'Python Automation', 'Nagios Monitoring', 'System Deployment']
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['MySQL Cluster', 'PostgreSQL', 'Database Administration', 'NFS Clustering']
  },
  {
    title: 'Communications',
    icon: <TerminalIcon className="w-5 h-5" />,
    skills: ['VoIP / SIP', 'Asterisk', 'FreeSwitch', 'Trixbox', 'Nortel PBX']
  },
  {
    title: 'Development',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['Python', 'PHP', 'JavaScript', 'HTML5', 'Android Development']
  },
  {
    title: 'AI & Workflow',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['AI-augmented Solutions', 'Intelligent Workflow', 'Automation Engineering', 'Root Cause Analysis']
  }
];

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="font-semibold text-zinc-200">{category.title}</h3>
          </div>
          <ul className="space-y-2">
            {category.skills.map((skill, sIdx) => (
              <li key={sIdx} className="text-sm text-zinc-400 flex items-center gap-2">
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
