export type Locale = "en" | "fr";

export const detectLocale = (): Locale => {
  if (typeof navigator === "undefined") return "en";

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  return candidates.some((value) => value.startsWith("fr")) ? "fr" : "en";
};

export const appContent = {
  en: {
    meta: {
      title: "Evan Hopkins | Solution Master & IT Professional",
      lang: "en",
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hireMe: "Hire Me",
    hero: {
      badge: "Available for Strategic Solutions",
      title: "Solution Master",
      summary:
        "20+ years of engineering solutions across the full technology stack. From bare-metal infrastructure and AI integration to complex system architecture. I don't just fix problems; I eliminate them.",
      caseStudiesCta: "View Case Studies",
      stats: [
        { value: "20+", label: "Years" },
        { value: "36", label: "Skills" },
        { value: "8", label: "Companies" },
      ],
    },
    about: {
      subtitle: "The Profile",
      title: "Root Cause Resolution Engineering",
      lead:
        "A results-driven IT professional with over 20 years of hands-on experience. When no solution is found, I fix the problem by ensuring the root cause is identified and eliminated.",
      body:
        "I engineer solutions supporting the full technology stack — from bare-metal infrastructure to cloud-native deployments and AI integration. My expertise spans datacenters, clusters, multi-system administration, network engineering, and cybersecurity. I specialize in high-availability systems, DevOps automation, and AI-augmented workflows.",
      pillars: [
        { title: "Security First", desc: "PCI compliance & hardened infra" },
        { title: "Root Cause", desc: "Eliminating recurring issues" },
        { title: "Automation", desc: "DevOps & smart workflows" },
        { title: "AI Integration", desc: "Modernizing legacy stacks" },
      ],
      certificatesTitle: "HackerRank Verified Certificates",
      certificatesDescription:
        "9 verified certificates surfaced directly from your HackerRank profile, with the blue role certificates shown first and every credential linked individually.",
      viewProfile: "View HackerRank Profile",
      roleCertificates: "Role Certificates",
      skillCertificates: "Skill Certificates",
      roleCertificateLabel: "Verified role certificate",
      skillCertificateLabel: "Verified skill certificate",
      technicalFocusTitle: "Technical Focus",
      technicalFocus: [
        { label: "System Admin", value: 100 },
        { label: "Network Eng.", value: 95 },
        { label: "DevOps", value: 90 },
        { label: "AI/R&D", value: 85 },
      ],
      corePrinciplesTitle: "Core Principles",
      corePrinciples: [
        "No Band-aid Solutions",
        "Scalability by Design",
        "Security at the Edge",
        "Workflow Optimization",
      ],
      hackerRankCardTitle: "HackerRank Certified",
      hackerRankCardDescription:
        "9 verified certificates total — 2 blue role certifications first, followed by 7 direct skill certificate links below.",
      openFullProfile: "Open full profile",
      communicationTitle: "Communication",
      communicationTags: ["English (Fluent)", "French (Fluent)", "Technical Systems"],
    },
    skillsSection: {
      subtitle: "Expertise",
      title: "36 Verified Aptitude Skills",
      categories: [
        {
          title: "Systems & OS",
          skills: [
            "Linux (RHEL/CentOS/Debian)",
            "Windows Server",
            "FreeBSD",
            "System Administration",
            "Bare-metal Infrastructure",
          ],
        },
        {
          title: "Networking & Security",
          skills: [
            "Cisco Technologies",
            "Firewalls (ASA/IPTables)",
            "DNS/DHCP",
            "Network Administration",
            "Cybersecurity",
          ],
        },
        {
          title: "Virtualization & Cloud",
          skills: ["VMware", "VirtualBox", "Xen", "OpenStack", "Cloud-native Deployments"],
        },
        {
          title: "DevOps & Automation",
          skills: [
            "Puppet",
            "Bash/Shell Scripting",
            "Python Automation",
            "Nagios Monitoring",
            "System Deployment",
          ],
        },
        {
          title: "Databases",
          skills: ["MySQL Cluster", "PostgreSQL", "Database Administration", "NFS Clustering"],
        },
        {
          title: "Communications",
          skills: ["VoIP / SIP", "Asterisk", "FreeSwitch", "Trixbox", "Nortel PBX"],
        },
        {
          title: "Development",
          skills: ["Python", "PHP", "JavaScript", "HTML5", "Android Development"],
        },
        {
          title: "AI & Workflow",
          skills: [
            "AI-augmented Solutions",
            "Intelligent Workflow",
            "Automation Engineering",
            "Root Cause Analysis",
          ],
        },
      ],
    },
    projectsSection: {
      subtitle: "Proven Solutions",
      title: "Featured Case Studies",
      cases: [
        {
          title: "Municipal Electoral Infrastructure",
          client: "Ville de Montréal",
          challengeLabel: "Challenge",
          solutionLabel: "Solution",
          challenge:
            "Need for high-availability, secure systems for electoral and municipal operations.",
          solution:
            "Designed and implemented a redundant Linux/Windows hybrid stack with strict PCI compliance and custom monitoring.",
          tags: ["High Availability", "Security", "Linux"],
        },
        {
          title: "Startup Scale-up (2 to 100+)",
          client: "Orderin",
          challengeLabel: "Challenge",
          solutionLabel: "Solution",
          challenge:
            "Rapid growth required immediate infrastructure scaling without downtime.",
          solution:
            "Built a full-stack IT department from scratch. Implemented Gentoo-based firewalls, Asterisk VoIP, and automated server deployment.",
          tags: ["Scaling", "VoIP", "Infrastructure"],
        },
        {
          title: "ISP R&D & Server Migration",
          client: "Kontego Networks",
          challengeLabel: "Challenge",
          solutionLabel: "Solution",
          challenge:
            "Transitioning from web-facing IPs to a secure DMZ model while clustering databases.",
          solution:
            "Migrated PostgreSQL to a clustered model and implemented NFS bootable systems for rapid recovery.",
          tags: ["ISP", "Database Clustering", "NFS"],
        },
      ],
    },
    specialtiesSection: {
      subtitle: "Beyond the Screen",
      title: "Hardware & Specialized Systems",
      items: [
        { title: "Data Centers", desc: "Rack servers, QoS, & Networking" },
        { title: "Electronics", desc: "Arcade machines, kiosks, & consoles" },
        { title: "IOT & Security", desc: "Cameras, access control, & sensors" },
        { title: "Mobile Dev", desc: "iOS, Android, & Legacy platforms" },
      ],
    },
    experienceSection: {
      subtitle: "The Journey",
      title: "Experience & Impact",
      items: [
        {
          company: "Ville de Montréal",
          role: "Consultant / System Administrator",
          period: "2011 – April 2026",
          description:
            "System Administrator for Municipal, Electoral, Business & Professional Clients. Creating systems that eliminate problems. Expert in Windows, Linux, BSD, and VoIP (Cisco, Asterisk). Managed workflow compliance (PCI) and complex hardware infrastructure.",
          highlights: ["Electoral Systems", "VOIP Specialist", "PCI Compliance"],
        },
        {
          company: "Kontego Networks",
          role: "System Administrator / R&D",
          period: "Jul – Oct 2011",
          description:
            "R&D for an ISP. Migrated servers to DMZ model. Clustered PostgreSQL and implemented NFS bootable systems. Worked with Cisco AS5300 and various clustering technologies (Xen, OpenStack).",
          highlights: ["ISP R&D", "PostgreSQL Clustering", "DMZ Migration"],
        },
        {
          company: "Ajilon",
          role: "System Analyst",
          period: "Jul 2009 – Jul 2011",
          description:
            "Virtualized servers for Target Corp. Scripted task-automation utilities and debugged builds. Escalated complex issues across server teams as assistant supervisor.",
          highlights: ["Target Corp Project", "Automation Scripting", "Virtualization"],
        },
        {
          company: "EVO Canada",
          role: "Senior Technical Consultant / SysAdmin",
          period: "Aug – Dec 2009",
          description:
            "Sole IT manager for 125 staff + 40 remote agents. Implemented Cisco ASA, VPNs, and Kantech access systems. Solutions Architect and Workflow Manager.",
          highlights: ["Sole IT Manager", "Cisco ASA", "Solutions Architecture"],
        },
        {
          company: "Orderin",
          role: "Director of Information Technology",
          period: "2005 – 2007",
          description:
            "Scaled company from 2 to 100+ employees. Managed entire IT stack including Gentoo firewalls, Asterisk VoIP, and SEO. Achieved Director level at age 20.",
          highlights: ["Grew Company 50x", "Infrastructure Scaling", "Director at 20"],
        },
      ],
    },
    contactSection: {
      subtitle: "Get In Touch",
      title: "Available for Consulting",
      heading: "Let's discuss your next infrastructure challenge.",
      body:
        "Whether it's scaling a startup from 2 to 100 employees or optimizing municipal-level IT systems, I deliver results that last.",
      badges: ["Consulting / Full-time", "Greater Montreal / Remote"],
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
      subject: "New website contact form message",
    },
    terminal: {
      title: "evan-hopkins-cli",
      history: ["Welcome to Evan Hopkins OS v2.0.0", 'Type "help" to see available commands.'],
      responses: {
        help: "Available commands: about, skills, experience, contact, clear, whoami, uptime, status",
        about:
          "Evan Hopkins: Solution Master & IT Professional with 20+ years of experience. Expert in finding root causes and engineering full-stack solutions.",
        skills:
          "Expertise: Linux, Windows, DevOps, AI Integration, Security, Networking, VoIP, Cloud, Automation, and more...",
        experience:
          "15 years at Ville de Montréal, Director of IT at Orderin (age 20), Senior Technician at Netchamp (age 18). Total 20+ years.",
        contact: "Connect via LinkedIn or visit miscpc.github.io",
        whoami: "user@evan-hopkins-terminal:~$ A curious visitor seeking the best Solution Master.",
        uptime: "System up for 41 years (Evan Hopkins v1985)",
        status: "Ready to engineer your next big solution. All systems nominal.",
      },
      aliases: {},
      notFound: 'Command not found: {{cmd}}. Type "help" for options.',
    },
    footer: "Built with precision.",
  },
  fr: {
    meta: {
      title: "Evan Hopkins | Maître des solutions et professionnel TI",
      lang: "fr-CA",
    },
    nav: [
      { label: "À propos", href: "#about" },
      { label: "Compétences", href: "#skills" },
      { label: "Projets", href: "#projects" },
      { label: "Expérience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hireMe: "M'embaucher",
    hero: {
      badge: "Disponible pour des mandats stratégiques",
      title: "Maître des solutions",
      summary:
        "20+ ans à concevoir des solutions sur toute la pile technologique. De l'infrastructure bare metal à l'intégration IA, en passant par l'architecture de systèmes complexes. Je ne corrige pas juste les problèmes : je les élimine à la source.",
      caseStudiesCta: "Voir les études de cas",
      stats: [
        { value: "20+", label: "Ans" },
        { value: "36", label: "Compétences" },
        { value: "8", label: "Entreprises" },
      ],
    },
    about: {
      subtitle: "Profil",
      title: "Ingénierie de résolution à la cause racine",
      lead:
        "Professionnel TI axé sur les résultats avec plus de 20 ans d'expérience terrain. Quand aucune solution n'existe, je règle le problème en identifiant et en éliminant la cause racine.",
      body:
        "Je conçois des solutions qui couvrent l'ensemble de la pile technologique — de l'infrastructure bare metal aux déploiements cloud natifs, jusqu'à l'intégration de l'IA. Mon expertise touche les centres de données, les grappes, l'administration multisystème, l'ingénierie réseau et la cybersécurité. Je me spécialise dans la haute disponibilité, l'automatisation DevOps et les flux de travail augmentés par l'IA.",
      pillars: [
        { title: "Sécurité d'abord", desc: "Conformité PCI et infrastructures durcies" },
        { title: "Cause racine", desc: "Éliminer les problèmes récurrents" },
        { title: "Automatisation", desc: "DevOps et workflows intelligents" },
        { title: "Intégration IA", desc: "Moderniser les environnements hérités" },
      ],
      certificatesTitle: "Certifications HackerRank vérifiées",
      certificatesDescription:
        "9 certificats vérifiés tirés directement de votre profil HackerRank, avec les certifications de rôle en bleu affichées en premier et chaque titre lié individuellement.",
      viewProfile: "Voir le profil HackerRank",
      roleCertificates: "Certifications de rôle",
      skillCertificates: "Certifications de compétences",
      roleCertificateLabel: "Certification de rôle vérifiée",
      skillCertificateLabel: "Certification de compétence vérifiée",
      technicalFocusTitle: "Focus technique",
      technicalFocus: [
        { label: "Admin système", value: 100 },
        { label: "Ing. réseau", value: 95 },
        { label: "DevOps", value: 90 },
        { label: "IA / R-D", value: 85 },
      ],
      corePrinciplesTitle: "Principes clés",
      corePrinciples: [
        "Aucune solution temporaire",
        "Évolutif dès la conception",
        "Sécurité à la périphérie",
        "Optimisation des workflows",
      ],
      hackerRankCardTitle: "Certifié HackerRank",
      hackerRankCardDescription:
        "9 certificats vérifiés au total — 2 certifications de rôle en bleu d'abord, suivies de 7 liens directs vers les certificats de compétences.",
      openFullProfile: "Ouvrir le profil complet",
      communicationTitle: "Communication",
      communicationTags: ["Anglais (courant)", "Français (courant)", "Systèmes techniques"],
    },
    skillsSection: {
      subtitle: "Expertise",
      title: "36 compétences validées par aptitude",
      categories: [
        {
          title: "Systèmes et OS",
          skills: [
            "Linux (RHEL/CentOS/Debian)",
            "Windows Server",
            "FreeBSD",
            "Administration système",
            "Infrastructure bare metal",
          ],
        },
        {
          title: "Réseaux et sécurité",
          skills: [
            "Technologies Cisco",
            "Pare-feu (ASA/IPTables)",
            "DNS/DHCP",
            "Administration réseau",
            "Cybersécurité",
          ],
        },
        {
          title: "Virtualisation et cloud",
          skills: ["VMware", "VirtualBox", "Xen", "OpenStack", "Déploiements cloud natifs"],
        },
        {
          title: "DevOps et automatisation",
          skills: [
            "Puppet",
            "Scripts Bash/Shell",
            "Automatisation Python",
            "Surveillance Nagios",
            "Déploiement de systèmes",
          ],
        },
        {
          title: "Bases de données",
          skills: ["MySQL Cluster", "PostgreSQL", "Administration de bases de données", "Grappes NFS"],
        },
        {
          title: "Communications",
          skills: ["VoIP / SIP", "Asterisk", "FreeSwitch", "Trixbox", "Nortel PBX"],
        },
        {
          title: "Développement",
          skills: ["Python", "PHP", "JavaScript", "HTML5", "Développement Android"],
        },
        {
          title: "IA et workflow",
          skills: [
            "Solutions augmentées par l'IA",
            "Workflow intelligent",
            "Ingénierie d'automatisation",
            "Analyse de cause racine",
          ],
        },
      ],
    },
    projectsSection: {
      subtitle: "Solutions éprouvées",
      title: "Études de cas en vedette",
      cases: [
        {
          title: "Infrastructure électorale municipale",
          client: "Ville de Montréal",
          challengeLabel: "Défi",
          solutionLabel: "Solution",
          challenge:
            "Besoin de systèmes hautement disponibles et sécurisés pour les opérations électorales et municipales.",
          solution:
            "Conception et déploiement d'une pile hybride Linux/Windows redondante avec conformité PCI stricte et surveillance sur mesure.",
          tags: ["Haute disponibilité", "Sécurité", "Linux"],
        },
        {
          title: "Croissance éclair d'une startup (2 à 100+)",
          client: "Orderin",
          challengeLabel: "Défi",
          solutionLabel: "Solution",
          challenge:
            "Une croissance rapide exigeait une montée en capacité immédiate de l'infrastructure, sans interruption.",
          solution:
            "Mise sur pied d'un département TI complet à partir de zéro. Déploiement de pare-feu Gentoo, de VoIP Asterisk et d'automatisation du déploiement des serveurs.",
          tags: ["Croissance", "VoIP", "Infrastructure"],
        },
        {
          title: "R-D FSI et migration de serveurs",
          client: "Kontego Networks",
          challengeLabel: "Défi",
          solutionLabel: "Solution",
          challenge:
            "Passer de serveurs exposés au web à un modèle DMZ sécurisé tout en mettant en grappe les bases de données.",
          solution:
            "Migration de PostgreSQL vers un modèle en grappe et mise en place de systèmes amorçables NFS pour accélérer la reprise.",
          tags: ["FSI", "Grappes PostgreSQL", "NFS"],
        },
      ],
    },
    specialtiesSection: {
      subtitle: "Au-delà de l'écran",
      title: "Matériel et systèmes spécialisés",
      items: [
        { title: "Centres de données", desc: "Serveurs en rack, QoS et réseautique" },
        { title: "Électronique", desc: "Bornes d'arcade, kiosques et consoles" },
        { title: "IOT et sécurité", desc: "Caméras, contrôle d'accès et capteurs" },
        { title: "Dév mobile", desc: "iOS, Android et plateformes héritées" },
      ],
    },
    experienceSection: {
      subtitle: "Le parcours",
      title: "Expérience et impact",
      items: [
        {
          company: "Ville de Montréal",
          role: "Consultant / Administrateur système",
          period: "2011 – avril 2026",
          description:
            "Administrateur système pour des clients municipaux, électoraux, d'affaires et professionnels. Création de systèmes qui éliminent les problèmes. Expert Windows, Linux, BSD et VoIP (Cisco, Asterisk). Gestion de la conformité des processus (PCI) et d'infrastructures matérielles complexes.",
          highlights: ["Systèmes électoraux", "Spécialiste VOIP", "Conformité PCI"],
        },
        {
          company: "Kontego Networks",
          role: "Administrateur système / R-D",
          period: "juill. – oct. 2011",
          description:
            "R-D pour un fournisseur Internet. Migration des serveurs vers un modèle DMZ. Mise en grappe de PostgreSQL et implantation de systèmes amorçables NFS. Travail avec Cisco AS5300 et diverses technologies de clustering (Xen, OpenStack).",
          highlights: ["R-D FSI", "Grappes PostgreSQL", "Migration DMZ"],
        },
        {
          company: "Ajilon",
          role: "Analyste système",
          period: "juill. 2009 – juill. 2011",
          description:
            "Virtualisation de serveurs pour Target Corp. Développement d'outils d'automatisation et débogage de builds. Escalade d'incidents complexes entre équipes serveurs à titre d'assistant superviseur.",
          highlights: ["Projet Target Corp", "Scripts d'automatisation", "Virtualisation"],
        },
        {
          company: "EVO Canada",
          role: "Consultant technique senior / Admin système",
          period: "août – déc. 2009",
          description:
            "Seul responsable TI pour 125 employés et 40 agents à distance. Mise en place de Cisco ASA, de VPN et de systèmes d'accès Kantech. Architecte de solutions et gestionnaire des workflows.",
          highlights: ["Responsable TI unique", "Cisco ASA", "Architecture de solutions"],
        },
        {
          company: "Orderin",
          role: "Directeur des technologies de l'information",
          period: "2005 – 2007",
          description:
            "Croissance de l'entreprise de 2 à plus de 100 employés. Gestion de toute la pile TI, incluant les pare-feu Gentoo, la VoIP Asterisk et le SEO. Atteinte d'un poste de directeur à 20 ans.",
          highlights: ["Croissance x50", "Montée d'infrastructure", "Directeur à 20 ans"],
        },
      ],
    },
    contactSection: {
      subtitle: "Entrer en contact",
      title: "Disponible pour consultation",
      heading: "Parlons de votre prochain défi d'infrastructure.",
      body:
        "Que ce soit pour faire passer une startup de 2 à 100 employés ou pour optimiser des systèmes TI de niveau municipal, je livre des résultats durables.",
      badges: ["Consultation / Temps plein", "Grand Montréal / Télétravail"],
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre courriel",
      messagePlaceholder: "Votre message",
      submit: "Envoyer le message",
      subject: "Nouveau message du formulaire du site web",
    },
    terminal: {
      title: "evan-hopkins-cli",
      history: ["Bienvenue dans Evan Hopkins OS v2.0.0", 'Tapez "help" pour voir les commandes disponibles.'],
      responses: {
        help: "Commandes disponibles : help, about, skills, experience, contact, clear, whoami, uptime, status",
        about:
          "Evan Hopkins : maître des solutions et professionnel TI avec 20+ ans d'expérience. Expert pour trouver la cause racine et concevoir des solutions full stack.",
        skills:
          "Expertise : Linux, Windows, DevOps, intégration IA, sécurité, réseautique, VoIP, cloud, automatisation, et plus encore...",
        experience:
          "15 ans à la Ville de Montréal, directeur TI chez Orderin (à 20 ans), technicien senior chez Netchamp (à 18 ans). Total : 20+ ans.",
        contact: "Connectez-vous via LinkedIn ou visitez miscpc.github.io",
        whoami: "user@evan-hopkins-terminal:~$ Un visiteur curieux à la recherche du meilleur maître des solutions.",
        uptime: "Système actif depuis 41 ans (Evan Hopkins v1985)",
        status: "Prêt à concevoir votre prochaine grande solution. Tous les systèmes sont nominales.",
      },
      aliases: {
        aide: "help",
        apropos: "about",
        a_propos: "about",
        competences: "skills",
        compétences: "skills",
        contact: "contact",
        effacer: "clear",
        experience: "experience",
        expérience: "experience",
        statut: "status",
      },
      notFound: 'Commande introuvable : {{cmd}}. Tapez "help" pour voir les options.',
    },
    footer: "Conçu avec précision.",
  },
} as const;

export type LocaleContent = (typeof appContent)[Locale];
