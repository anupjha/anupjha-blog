import { BrandIcons } from '@/components/icons/brand-icons';


export const author = {
  slug: 'anupjha',
  name: 'anupjha',
  image: '/images/avatars/anupjha.jpg',
  twitter: 'imanupjha',
};

export const tags: Record<
  string,
  { name: string; icon: keyof typeof BrandIcons }
> = {
  systemdesign: { name: 'System Design', icon: 'system' },
  nextjs: { name: 'Next.js', icon: 'nextjs' },
  tailwind: { name: 'Tailwind CSS', icon: 'tailwind' },
  typescript: { name: 'TypeScript', icon: 'ts' },
  javascript: { name: 'JavaScript', icon: 'js' },
};
