"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { CallIcon, CloseIcon, HamburgerIcon, UltrafixLogo } from '@assets/icons';
import { Sidebar } from '../sidebar';
import { CITIES, STATES, STATES_LIST } from 'constants/locations';
import { Dropdown } from '@components/shared/dropdown';
import { motion } from 'framer-motion';


const NAV_ROUTES: { id: string; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'locations', label: 'Locations' },
    { id: 'about_us', label: 'About Us' },
    { id: 'brands', label: 'Brands' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'apply', label: 'Apply Now' },
    { id: 'why_us', label: 'Why Us' },
];


export const Header: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
    const [selectedId, setSelectedId] = React.useState<string>()

    const pathname = usePathname();
    const router = useRouter();
    const { state, city, service } = useParams();

    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    const hideHeaderRoutes = React.useMemo(() => ["/apply"], []);
    const shouldHideHeader = hideHeaderRoutes.includes(pathname);

    const handleScroll = (sectionId: string) => {
        setSelectedId(sectionId)
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        // router.push('/')
    };

    const navLinks = React.useMemo(() => {
        return NAV_ROUTES.map((item, i) => (
            <li key={i} onClick={() => handleScroll(item.id)}>
                {
                    item.id === 'locations'
                        ?
                        <Dropdown content={<LocationsDropdownContent onCloseSidebar={() => setSidebarOpen(false)} />}>
                            <div className="relative flex items-center space-x-3 cursor-pointer">
                                {(item.id === selectedId) && (
                                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                )}
                                <div className={`text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                    {item.label}
                                </div>
                            </div>
                        </Dropdown>
                        : item.id === 'apply' ?
                            <Link href="/apply" className="relative flex items-center space-x-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                {(item.id === selectedId) && (
                                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                )}
                                <div className={`text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
                                    {item.label}
                                </div>
                            </Link>
                            :
                            <div className="relative flex items-center space-x-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                {(item.id === selectedId) && (
                                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-primary" aria-hidden="true" />
                                )}
                                <div className={`text-sm text-gray-600 hover:text-primary transition-all duration-200 ease-in-out ${item.id === selectedId ? 'font-medium' : ''}`}>
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

    // if (shouldHideHeader) return null;

    return (
        <>
            <header className="backdrop-blur-xl bg-white/60 w-full fixed z-30 h-[65px] border-b border-gray-100 select-none">
                <nav role="navigation" aria-label="Main navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-center px-3 md:px-10 xl:px-0 py-0 h-full space-x-5">
                    <div className="flex items-center cursor-pointer w-[100%] justify-between lg:w-[20%] lg:space-x-0">
                        <Link href="/" passHref aria-label="UltraFix Logo">
                            <UltrafixLogo className="h-auto w-[120px] lg:w-[150px]" />
                        </Link>
                        <div className="w-[30px] flex lg:hidden">
                            {
                                isSidebarOpen
                                    ? <CloseIcon onClick={toggleSidebar} data-testid="close-icon" />
                                    : <HamburgerIcon onClick={toggleSidebar} data-testid="hamburger-icon" />
                            }
                        </div>
                    </div>

                    <ul className="hidden lg:flex md:space-x-5 xl:space-x-10 items-center">
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

            <Link href={`tel:${cityData?.phone ? cityData.phone : '(888) 998-6263'}`}>
                <div onClick={(e) => e.stopPropagation()} className="lg:hidden fixed bottom-10 right-10 z-40">
                    <motion.div
                        initial={{ rotate: 0, scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1,
                            repeatDelay: 4,
                        }}
                        className="p-3 h-[70px] w-[70px] flex items-center justify-center rounded-full bg-primary hover:text-primary shadow-xs"
                        style={{
                            boxShadow: "0 4px 30px rgba(0, 0, 255, 0.5)", // Blue blur shadow
                        }}
                    >
                        <CallIcon className="w-[35px]" fill="white" />
                    </motion.div>
                </div>
            </Link>
        </>
    );
};


interface ILocationsDropdownContentProps {
    onCloseSidebar: () => void,
}

const LocationsDropdownContent: React.FC<ILocationsDropdownContentProps> = (props) => {
    let { onCloseSidebar } = props;
    const { state, city, service } = useParams();

    const router = useRouter();

    const onNavigate = (stateKey: string, city: string): void => {
        router.replace(`/locations/${stateKey.toLowerCase()}/${city.toLowerCase()}`);
    }

    return (
        <div className="columns-2 lg:columns-3 max-h-[400px] md:max-h-[700px] p-4 overflow-y-scroll">
            {
                STATES_LIST.map((state) => {
                    const stateKey = state.value as keyof typeof STATES;

                    return (
                        <div key={state.id} className="break-inside-avoid mb-4 w-[120px] lg:w-[150px]">
                            <div className="text-xs text-primary font-semibold mb-2">{state.title}</div>
                            <div className="flex flex-col space-y-1">
                                {
                                    STATES[stateKey].map((city) =>
                                        <div
                                            key={city.id}
                                            onClick={() => { onNavigate(stateKey, city.value); onCloseSidebar() }}
                                            className="text-sm font-light text-gray-500 cursor-pointer hover:text-primary hover:underline"
                                        >
                                            {city.title}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div >
    );
}



