'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';

const sidebarOptions = [
  { name: 'Home', href: '/' },
  { name: 'Stages & Checklist', href: '/stages-checklist' },
  { name: 'Upload Docs', href: '/upload-docs' },
  { name: 'Preferred Vendors', href: '/preferred-vendors' },
  { name: 'Tech Stack', href: '/tech-stack' },
  { name: 'Targets', href: '/targets' },
  { name: 'Zee Sales Targets', href: '/zee-sales-targets' },
  { name: 'MAI Settings', href: '/mai-settings' },
  { name: 'Pending Questions', href: '/pending-questions', badge: 3 },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        className="md:hidden fixed top-0 left-1 z-50 bg-[#11455D] text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 bottom-0 w-[248px] bg-[#11455D] text-white flex flex-col justify-between py-10 px-4 z-40 transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
            'md:translate-x-0 md:static md:flex': true,
          }
        )}
      >
        <nav className="flex flex-col gap-3">
          {sidebarOptions.map(({ name, href, badge }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              <div
                className={clsx(
                  'flex items-center justify-between px-4 py-2 text-base rounded-sm transition-colors',
                  pathname === href
                    ? 'bg-white/20 text-[#2FBCFE] font-medium'
                    : 'text-white/60 hover:bg-white/10'
                )}
              >
                <span className="truncate leading-5">{name}</span>
                {badge !== undefined && (
                  <span className="ml-2 text-xs bg-white text-cyan-900 rounded-full px-2 py-0.5 font-semibold">
                    {badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>
        <div className="px-3 text-sm text-white/60 hover:text-white cursor-pointer">
          Logout
        </div>
      </aside>
    </>
  );
};
