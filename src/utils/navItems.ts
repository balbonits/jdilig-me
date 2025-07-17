export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Code',
    href: '/code',
    children: [
      { label: 'Exercises', href: '/code/exercises' },
      { label: 'Context', href: '/code/context' },
      { label: 'Utilities', href: '/code/utilities' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'UI', href: '/ui' },
  { label: 'Contact', href: '/contact' },
];