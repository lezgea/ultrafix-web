"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { CloseIcon, HamburgerIcon, UltrafixLogo } from '@assets/icons';
import { Sidebar } from '../sidebar';


const NAV_ROUTES: { route: string; label: string }[] = [
    { route: '/#services', label: 'Services' },
    // { route: '/#locations', label: 'Locations' },
    { route: '/#about-us', label: 'About Us' },
    { route: '/#brands', label: 'Brands' },
    { route: '/#reviews', label: 'Reviews' },
    { route: '/#contact-us', label: 'Why Us' },
];


export const Header: React.FC = () => {
    const pathname = usePathname();
    const params = useSearchParams();
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    const hideHeaderRoutes = React.useMemo(() => ["/apply"], []);
    const shouldHideHeader = hideHeaderRoutes.includes(pathname);

    const navLinks = React.useMemo(() => {
        return NAV_ROUTES.map((item, i) => (
            <li key={i} className="relative flex items-center space-x-3">
                {pathname === item.route && (
                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                )}
                <Link href={item.route} className={`text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${pathname === item.route ? 'font-medium' : ''}`}>
                    {item.label}
                </Link>
            </li>
        ));
    }, [pathname]);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    if (shouldHideHeader) return null;

    return (
        <>
            <header className="backdrop-blur-xl bg-white/60 w-full fixed z-30 h-[65px] border-b border-gray-100 select-none">
                <nav role="navigation" aria-label="Main navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-center px-3 py-0 h-full space-x-5 md:px-0">
                    <div className="flex items-center cursor-pointer lg:w-[20%] space-x-3 lg:space-x-0">
                        <div className="w-[30px] ml-3 flex lg:hidden">
                            {
                                isSidebarOpen
                                    ? <CloseIcon onClick={toggleSidebar} data-testid="close-icon" />
                                    : <HamburgerIcon onClick={toggleSidebar} data-testid="hamburger-icon" />
                            }
                        </div>
                        <Link href="/" passHref aria-label="UltraFix Logo">
                            <UltrafixLogo className="h-auto w-[150px]" />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex space-x-10 items-center">
                        {navLinks}
                    </ul>

                    <div className="flex items-center justify-end lg:w-[20%] h-full">
                        <Link href="/apply">
                            <button type="button" className="hidden md:inline-flex w-auto text-center items-center px-4 py-2 text-white transition-all bg-primary rounded-lg sm:w-auto hover:text-white shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="lg:hidden">
                <Sidebar
                    navLinks={navLinks}
                    visible={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
        </>
    );
};
