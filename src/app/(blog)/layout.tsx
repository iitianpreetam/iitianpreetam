import Navbar from '@/components/Navbar';
import Rightbar from '@/components/Rightbar';
import Sidebar from '@/components/Sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Preetam Raj',
  description: 'A fullstack web developer',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <Sidebar />
      <ScrollArea className='flex flex-col w-full h-screen overflow-y-auto'>
        <Navbar />
        <div className='w-screen md:w-full px-4 sm:px-8 md:px-10 py-4 flex flex-col xl:flex-row space-x-0 space-y-4 xl:space-x-10'>
          <div className='flex-1'>{children}</div>
          <Rightbar />
        </div>
      </ScrollArea>
    </div>
  );
}
