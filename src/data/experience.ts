export interface ExperienceEntry {
  organization: string;
  role: string;
  period?: string;
  logo: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'Sagemcom Software & Technologies',
    role: 'AI Engineering Intern',
    period: 'Oct 2026 – Present',
    logo: '/logos/sagemcom.svg',
    summary:
      'Exploring agentic AI and intelligent reasoning for automated security testing, vulnerability analysis, and adaptive penetration testing workflows.',
    highlights: [
      'Developing an agentic AI approach to orchestrate Android TV penetration testing using System-One decision-making models.',
      'Exploring local LLM-based Linux kernel CVE applicability analysis using vulnerability metadata and kernel configuration evidence.',
    ],
    stack: [
      'Python', 'LLMs', 'Ollama', 'Qwen', 'Agentic AI', 'LangGraph',
      'Cybersecurity', 'Linux',
    ],
  },
  {
    organization: 'ACTIA Engineering Services · Synergy Lab',
    role: 'Engineering Intern — Embedded AI',
    period: 'Jul 2026 – Sep 2026',
    logo: '/logos/actia.svg',
    summary:
      'Designed a deep learning-based Non-Intrusive Load Monitoring (NILM) system, from energy data processing and appliance disaggregation to embedded deployment investigation.',
    highlights: [
      'Built a UK-DALE data pipeline using NILMTK, HDF5, YAML metadata parsing, and memory-efficient streaming extraction.',
      'Developed a convolutional denoising autoencoder for unknown appliance detection through residual-based novelty detection.',
      'Evaluated model performance and investigated deployment constraints on the STM32MP157F-DK2 embedded platform.',
    ],
    stack: [
      'Python', 'PyTorch', 'BiLSTM', 'Autoencoders', 'NILMTK',
      'Time Series', 'TFLite', 'STM32MP157F-DK2',
    ],
  },
  {
    organization: 'Ordering Dashboard Solutions (ODS)',
    role: 'Marketing Content Creator',
    period: 'May 2026 – Present',
    logo: '/logos/ods.svg',
    summary:
      'Creating digital content and communication materials for a Tunisian delivery platform connecting customers with nearby delivery providers and local businesses.',
    highlights: [
      'Developing social media content and promotional concepts for a mobile delivery application.',
    ],
    stack: [
      'Content Strategy', 'Social Media', 'Digital Marketing',
      'Copywriting', 'French',
    ],
  },
  {
    organization: 'IEEE SUP’COM Robotics and Automation Society',
    role: 'Community Manager',
    period: 'Jun 2025 – Jun 2026',
    logo: '/logos/ieee-ras.svg',
    summary:
      'Contributed to the student robotics and automation community through communication, event promotion, and community engagement.',
    highlights: [
      'Managed community communication and promoted technical workshops and chapter activities.',
    ],
    stack: [
      'Community Management', 'Communication', 'Teamwork',
      'Event Coordination', 'Robotics',
    ],
  },
  {
    organization: 'Rosenberger MEA',
    role: 'IT Intern — Network Infrastructure & IT Operations',
    period: 'Jul 2025 – Aug 2025',
    logo: '/logos/rosenberger.svg',
    summary:
      'Gained practical experience in enterprise IT infrastructure, network operations, and internal technical support.',
    highlights: [
      'Explored infrastructure monitoring, technical troubleshooting, and operational workflows.',
    ],
    stack: [
      'IT Infrastructure', 'Networking', 'System Administration',
      'Monitoring', 'Technical Support',
    ],
  },
  {
    organization: 'The University of Tokyo · Matsuo-Iwasawa Laboratory',
    role: 'Global Consumer Intelligence (GCI) Program Participant',
    period: 'Apr 2026',
    logo: '/logos/university-of-tokyo.svg',
    summary:
      'Completed an international Data Science and AI learning program focused on fundamental concepts and practical implementations.',
    highlights: [
      'Studied core concepts and methodologies in Data Science and Artificial Intelligence.',
    ],
    stack: [
      'Data Science', 'Python', 'Machine Learning', 'Data Analysis',
    ],
  },
  {
    organization: 'SUP’COM — École Supérieure des Communications de Tunis',
    role: 'ICT Engineering Student · Multimodal Information Application',
    period: 'Sep 2024 – Jan 2027',
    logo: '/logos/supcom.png',
    summary:
      'Engineering degree in Telecommunications and ICT, with a focus on artificial intelligence, machine learning, signal processing, and multimodal applications.',
    highlights: [],
    stack: [
      'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn',
      'Computer Vision', 'Signal Processing', 'Machine Learning',
    ],
  },
  {
    organization: 'IPEIM — Preparatory Institute for Engineering Studies of Monastir',
    role: 'Scientific Preparatory Classes — Mathematics & Physics',
    period: 'Sep 2022 – May 2024',
    logo: '/logos/ipeim.svg',
    summary:
      'Completed an intensive mathematics and physics preparatory curriculum for competitive engineering school admission.',
    highlights: [
      'Developed strong foundations in advanced mathematics, physics, and analytical problem solving.',
      'Ranked 159th among 1,714 candidates in the national engineering school entrance examination.',
    ],
    stack: [
      'Advanced Mathematics', 'Physics', 'Scientific Computing',
      'Problem Solving',
    ],
  },
];
