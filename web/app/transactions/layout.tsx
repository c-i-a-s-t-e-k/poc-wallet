import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'Make Transaction',
  description:
    'availble to make transaction from thi account to another, working on',
  images: 'themes.png',
  pathname: 'transaction',
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
