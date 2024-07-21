"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {
    const path = usePathname();

    return (
        <header className="flex p-4 items-center justify-between bg-white dark:bg-gray-800 shadow-md">
            <Link href="/">
                <h1 className="text-3xl font-extrabold cursor-pointer text-gray-800 dark:text-white">
                    Mocker.AI
                </h1>
            </Link>
            <nav>
                <ul className="hidden md:flex gap-8">
                    <NavItem href="/dashboard" path={path} label="Dashboard" />
                    {/* <NavItem href="/dashboard/questions" path={path} label="Questions" /> */}
                    <NavItem href="/dashboard/upgrade" path={path} label="Upgrade" />
                    <NavItem href="/dashboard/how-it-works" path={path} label="How it Works?" />
                </ul>
            </nav>
            <div className="flex items-center gap-4">
                <UserButton />
            </div>
        </header>
    );
}

function NavItem({ href, path, label }) {
    return (
        <Link href={href}>
            <li className={`px-3 py-1 rounded-md cursor-pointer transition-all 
                ${path === href ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold' : 'text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
            `}>
                {label}
            </li>
        </Link>
    );
}

export default Header;
