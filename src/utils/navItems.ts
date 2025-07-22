export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Code',
    // href: '/code',
    children: [
      { label: 'Exercises', href: '/code/exercises' },
      { label: 'Context' },
      // { label: 'Context', href: '/code/context' },
      { label: 'Utilities' },
      // { label: 'Utilities', href: '/code/utilities' },
    ],
  },
  { label: 'Projects' },
  // { label: 'Projects', href: '/projects' },
  { label: 'UI' },
  // { label: 'UI', href: '/ui' },
  { label: 'Contact' },
  // { label: 'Contact', href: '/contact' },
];