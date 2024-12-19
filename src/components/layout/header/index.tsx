"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { CallIcon, CloseIcon, HamburgerIcon, UltrafixLogo } from '@assets/icons';
import { Sidebar } from '../sidebar';
import { CITIES } from 'constants/locations';
import { Dropdown } from '@components/shared/dropdown';


const NAV_ROUTES: { id: string; label: string }[] = [
    { id: 'res_services', label: 'Residential' },
    { id: 'com_services', label: 'Commercial' },
    // { id: 'locations', label: 'Locations' },
    { id: 'about_us', label: 'About Us' },
    // { id: 'brands', label: 'Brands' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'apply', label: 'Apply Now' },
];


export const Header: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
    const [selectedId, setSelectedId] = React.useState<string>()

    const pathname = usePathname();
    const { state, city } = useParams();

    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    const handleScroll = (sectionId: string) => {
        setSelectedId(sectionId)
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hideHeaderRoutes = React.useMemo(() => [`/admin/sign-in`, `/admin/blogs`, `/admin/blogs/create`, `/admin/blogs/update/[blogId]`], []);
    const shouldHideHeader = hideHeaderRoutes.some(route => pathname.startsWith(route));


    const navLinks = React.useMemo(() => {
        return NAV_ROUTES.map((item, i) => (
            <li key={i} onClick={() => handleScroll(item.id)}>
                {
                    item.id === 'services'
                        ?
                        <Dropdown content={<ServicesDropdownContent onClose={() => setSidebarOpen(false)} />}>
                            <div className="relative flex items-center space-x-3 cursor-pointer">
                                {(item.id === selectedId) && (
                                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                )}
                                <div className={`text-xl md:text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                    {item.label}
                                </div>
                            </div>
                        </Dropdown>
                        :
                        item.id === 'apply' ?
                            <Link href="/apply" title='Link for apply' className="relative flex items-center space-x-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                {(item.id === selectedId) && (
                                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                )}
                                <div className={`text-xl md:text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                    {item.label}
                                </div>
                            </Link>
                            : (item.id === 'faq' || item.id === 'blog') ?
                                <Link href={`/${item.id}`} title='Link for Blog and FAQ' className="relative flex items-center space-x-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                    {(item.id === selectedId) && (
                                        <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                    )}
                                    <div className={`text-xl md:text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                        {item.label}
                                    </div>
                                </Link>
                                :
                                <div className="relative flex items-center space-x-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                    {(item.id === selectedId) && (
                                        <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                    )}
                                    <div className={`text-xl md:text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                        {item.label}
                                    </div>
                                </div>
                }
            </li>
        ));
    }, [selectedId]);


    const onDeal = () => {
        window.location.href = `tel:${cityData?.phone ? cityData?.phone : '(888) 998-6263'}`;
    }

    const phoneButton = React.useMemo(() => (
        <button
            type="button"
            className="hidden md:inline-flex w-auto text-center items-center px-4 py-2 text-white transition-all bg-primary rounded-lg sm:w-auto hover:text-white shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none"
            onClick={onDeal}
        >
            {cityData?.phone ? cityData?.phone : '(888) 998-6263'}
        </button>
    ), [cityKey, pathname]);


    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);


    if (shouldHideHeader) return null;

    return (
        <>
            <header className="backdrop-blur-xl bg-white/10 w-full fixed z-30 h-[65px] select-none">
                <nav role="navigation" aria-label="Main navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 md:px-10 xl:px-0 py-0 h-full space-x-5">
                    <div className="flex items-center cursor-pointer w-[100%] justify-between lg:w-[20%] lg:space-x-0">
                        <Link href="/" passHref aria-label="UltraFix Logo">
                            <UltrafixLogo className="h-auto w-[160px]" />
                        </Link>
                        <div className="w-[60px] flex lg:hidden">
                            {
                                isSidebarOpen
                                    ? <CloseIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="close-icon" />
                                    : <HamburgerIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="hamburger-icon" />
                            }
                        </div>
                    </div>

                    <ul className="hidden lg:flex md:space-x-3 xl:space-x-10 items-center">
                        {navLinks}
                    </ul>

                    <div className="flex hidden items-center justify-end lg:flex lg:w-[20%] h-full">
                        {phoneButton}
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

            <div className='flex fixed md:hidden backdrop-blur-xl items-center bottom-[25px] left-[70px] right-[70px] z-50 rounded-full bg-[#0551A8] shadow-lg'>
                <div
                    onClick={() => handleScroll('contact')}
                    className='w-full flex items-center pl-5 justify-center text-xl text-white font-medium h-[55px] rounded-full cursor-pointer hover:shadow-lg'
                >
                    Book Now
                </div>

                <a href={`tel:${cityData?.phone ? cityData.phone : '(888) 998-6263'}`} className="call-btn backdrop-blur-xl bg-primary">
                    <CallIcon className="w-[35px]" fill="white" />
                </a>
            </div>
        </>
    );
};


interface IServicesDropdownContentProps {
    onClose: () => void,
}

const ServicesDropdownContent: React.FC<IServicesDropdownContentProps> = (props) => {
    let { onClose } = props;

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            onClose();
        }
    };

    return (
        <div className="flex flex-col items-center px-3">
            <div className="break-inside-avoid space-y-3 py-3 px-1 w-[150px] lg:w-[150px] text-gray-500 cursor-pointer">
                <div
                    onClick={() => handleScroll('res_services')}
                    className="text-sm mb-1 text-gray-700 hover:text-primary hover:underline"
                >
                    Residential
                </div>
                <div
                    onClick={() => handleScroll('com_services')}
                    className="text-sm mb-1 text-gray-700 hover:text-primary hover:underline"
                >
                    Commercial
                </div>
            </div>
        </div>
    );
}