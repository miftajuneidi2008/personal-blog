"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { links } from './data';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const path= usePathname()
  return (
    <header className="px-8 sm:px-16 md:px-32 lg:px-64 sticky top-0 h-20 bg-slate-200 z-50">
      <nav className="h-full">
        {/* large screen*/}
        <div className="flex gap-8 items-center h-full justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Pro-Blog</h1>
          <div className="flex gap-4 items-center">
            {links.map((link) => (
              <Link
                href={link.to}
                className={cn("text-slate-700 hover:border-b-[1px] border-slate-700",
                  path===link.to && 'font-semibold text-slate-600'
                )}
                key={link.name}
              >
               {link.name}
              </Link>
            ))}
         
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar