"use client";

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from 'constants/locations';
import { FacebookIcon, InstagramIcon, LinkedinIcon, LogoWhite, YoutubeIcon } from '@assets/icons';


export const Footer: React.FC = () => {
    const pathname = usePathname();

    const { state, city } = useParams();

    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    const hideHeaderRoutes = React.useMemo(() => ["/apply"], []);
    const shouldHideFooter = React.useMemo(() => hideHeaderRoutes.includes(pathname), [pathname]);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (shouldHideFooter) return null;

    return (
        <footer className="bg-primaryDark" role="contentinfo">
            <div className="container mx-auto w-full max-w-[1200px] py-[50px] px-20 md:px-0 space-y-7">
                <section className="grid gap-10 grid-cols-1 md:grid-cols-[3fr_3fr_2fr] text-white text-center md:text-start">
                    <div className="space-y-6 flex flex-col items-center md:items-start md:pr-40">
                        <LogoWhite className="w-auto h-[40px]" />
                        <p className="font-light text-sm">
                            Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-semibold">Company</h2>
                        <ul className=" flex flex-wrap text-sm font-light gap-4">
                            <li className="w-[40%] cursor-pointer hover:text-primary" onClick={() => handleScroll('services')}>Services</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary" onClick={() => handleScroll('about_us')}>About Us</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary" onClick={() => handleScroll('brands')}>Brands</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary" onClick={() => handleScroll('reviews')}>Reviews</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary" onClick={() => handleScroll('why_us')}>Why Us</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-semibold">Contact us</h2>
                        <ul className="text-sm font-light space-y-4">
                            <li>
                                <Link href="mailto:info@ultrafixappliance.com" className="hover:text-primary">
                                    <strong className='font-medium'>E-mail:</strong>
                                    <span className='ml-2'>info@ultrafixappliance.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`tel:${cityData?.phone ? cityData?.phone : '(888) 998-6263'}`} className="hover:text-primary">
                                    <strong className='font-medium'>Phone:</strong>
                                    <span className='ml-2'>
                                        {cityData?.phone ? cityData?.phone : '(888) 998-6263'}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {
                                    cityData?.address
                                        ?
                                        <Link
                                            href={`https://www.google.com/maps?q=${encodeURIComponent(cityData.address)},${cityData.title},${cityData.state}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary"
                                        >
                                            {cityData.address}
                                        </Link>
                                        :
                                        <Link
                                            href="https://www.google.com/maps?q=2742+Janetta+St+%23722,+Houston,+TX+77063"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary"
                                        >
                                            31602 Roldan Ln, Fulshear, TX 77441
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
                    <span className="text-white">UltraFix Appliance Repair, LLC</span>
                    <div className="flex space-x-5 justify-center">
                        <Link href="https://www.instagram.com/ultrafixappliancerepair/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <InstagramIcon className="w-[30px] h-[30px]" />
                            <span className="sr-only" aria-label='Instagram page'>Instagram page</span>
                        </Link>
                        <a href="https://www.facebook.com/ultrafixappliance" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <FacebookIcon className="w-[30px] h-[30px]" />
                            <span className="sr-only" aria-label='Twitter page'>Facebook page</span>
                        </a>
                        <a href="https://www.youtube.com/@ultrafixappliance" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <YoutubeIcon className="w-[30px] h-[30px]" />
                            <span className="sr-only" aria-label='YouTube page'>YouTube page</span>
                        </a>
                        <a href="https://www.linkedin.com/company/ultrafix-appliance-repair-llc/posts/?feedView=all" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <LinkedinIcon className="w-[30px] h-[30px]" />
                            <span className="sr-only" aria-label='LinkedIn page'>LinkedIn page</span>
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );
};
