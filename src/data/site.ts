// Single source of truth for identity, navigation and links.
// Replace every YOUR_USERNAME / placeholder below.

export const site = {
  name: 'Nour Gaïda',
  title: 'Nour Gaïda — AI Engineer & Researcher',
  description:
    'Nour Gaïda builds intelligent systems at the intersection of AI, healthcare and signal processing.',
  url: 'https://nourgaida.vercel.app/', // keep identical to `site` in astro.config.mjs
  avatar: '/profile.jpg', // replace with /profile.jpg once you add public/profile.jpg
  tagline: 'I build intelligent systems at the intersection of AI, healthcare and signal processing.',
  role: "ICT Engineering Student · SUP'COM Tunisia",
  about:
    "I'm an engineering student working on machine learning, deep learning and embedded AI. My interests include medical imaging, neuroscience, biomedical signals and efficient AI systems.",
  location: 'Tunisia',
  email: 'nour.gaida@supcom.tn',
  nav: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Projects', href: '/projects/', icon: 'folder' },
    { label: 'Writing', href: '/writing/', icon: 'pen' },
    { label: 'Experience', href: '/experience/', icon: 'briefcase' },
    { label: 'Publications', href: '/publications/', icon: 'book' },
    { label: 'About', href: '/about/', icon: 'user' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/NourGaida', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nour-ga%C3%AFda-782925347/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:nour.gaida@supcom.tn', icon: 'mail' },
    { label: 'RSS', href: '/rss.xml', icon: 'rss' },
  ],
};
