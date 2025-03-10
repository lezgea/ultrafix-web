"use client";

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from 'constants/locations';
import { FacebookIcon, InstagramIcon, LinkedinIcon, LogoWhite, YoutubeIcon } from '@assets/icons';
import { PrivacyModal, TermsModal } from '@components/shared';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';


export const Footer: React.FC = () => {
    const pathname = usePathname();

    const { state, city } = useParams();
    const [showTerms, setShowTerms] = React.useState(false);
    const [showPrivacy, setShowPrivacy] = React.useState(false);

    const { cityInfo } = useSelector((state: RootState) => state.location);

    const cityKey = `${state}_${city}` as keyof typeof CITIES;
    const cityData = CITIES[cityKey];

    const validRoutePatterns = new Set([
        '/',
        '/apply',
        '/faq',
        '/brand',
        '/blog',
        '/about_us',
        '/res_services',
        '/com_services',
    ]);

    const dynamicRoutes = [
        /^\/brand\/[^/]+$/,
        /^\/brand\/[^/]+\/[^/]+$/,
        /^\/blog\/[^/]+$/,                              // Matches `/blog/[blogId]`
        /^\/blog\/[^/]+\/[^/]+$/,
        /^\/appliance-repair\/[^/]+\/[^/]+\/brand\/[^/]+$/,
        /^\/appliance-repair\/[^/]+\/[^/]+$/,          // Matches `/appliance-repair/state/city`
        /^\/appliance-repair\/[^/]+\/[^/]+\/faq$/,     // Matches `/appliance-repair/state/city/faq`
        /^\/appliance-repair\/[^/]+\/[^/]+\/commercial\/[^/]+$/,  // Matches `/appliance-repair/state/city/commercial/service`
        /^\/appliance-repair\/[^/]+\/[^/]+\/residential\/[^/]+$/, // Matches `/appliance-repair/state/city/residential/service`
        /^\/appliance-services\/commercial\/[^/]+$/,  // Matches `/appliance-services/commercial/service`
        /^\/appliance-services\/residential\/[^/]+$/  // Matches `/appliance-services/residential/service`
    ];


    const hideHeaderRoutes = [
        '/admin/sign-in',
        '/admin/blogs',
        '/admin/blogs/create',
        '/admin/blogs/update/',
    ];


    // Check if the current route is valid
    const isValidRoute =
        validRoutePatterns.has(pathname) ||
        dynamicRoutes.some((pattern) => pattern.test(pathname));

    // Hide header for invalid or restricted routes
    const shouldHideFooter = !isValidRoute || hideHeaderRoutes.some(route => pathname.startsWith(route));


    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (shouldHideFooter) return null;

    return (
        <footer className="bg-primaryDark" role="contentinfo">
            <div className="container mx-auto w-full max-w-[1200px] py-[50px] px-5 md:px-0 space-y-7">
                <section className="grid gap-10 grid-cols-1 md:grid-cols-[3fr_3fr_2fr] text-white text-center md:text-start">
                    <div className="space-y-6 flex flex-col items-center md:items-start md:pr-40">
                        <LogoWhite className="w-auto h-[30px] lg:h-[40px]" />
                        <p className="font-light text-sm">
                            Our business model is built on respect, promptness, honesty, and taking pride in our work. When you choose us for your appliance repair, you learn how closely we hold to these values.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-semibold">Company</h2>
                        <ul className="flex flex-wrap text-sm text-center md:text-start font-light gap-4">
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('res_services')}>Residential</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('com_services')}>Commercial</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('about_us')}>About Us</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('brands')}>Brands</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('reviews')}>Reviews</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0" onClick={() => handleScroll('why_us')}>Why Us</li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0">
                                <Link href="/faq">
                                    FAQ
                                </Link>
                            </li>
                            <li className="w-[40%] cursor-pointer hover:text-primary ml-5 md:ml-0">
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-semibold">Contact us</h2>
                        <ul className="text-sm font-light space-y-4">
                            <li>
                                <Link href="mailto:info@ultrafix.com" className="hover:text-primary">
                                    <strong className='font-medium'>E-mail:</strong>
                                    <span className='ml-2'>info@ultrafix.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={`tel:${cityInfo?.phone ? cityInfo?.phone : '(888) 998-6263'}`} className="hover:text-primary">
                                    <strong className='font-medium'>Phone:</strong>
                                    <span className='ml-2'>
                                        {cityInfo?.phone ? cityInfo?.phone : '(888) 998-6263'}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                {
                                    cityInfo?.address
                                        ?
                                        <Link
                                            href={`https://www.google.com/maps?q=${encodeURIComponent(cityInfo.address)},${cityInfo.title},${cityInfo.state_full}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary"
                                        >
                                            {cityInfo.address}
                                        </Link>
                                        :
                                        <Link
                                            href="https://www.google.com/maps/place/1718+N+Fry+Rd+APT+152,+Houston,+TX+77084,+USA/@29.7917586,-95.7193547,17z/data=!3m1!4b1!4m6!3m5!1s0x8640d891cb4ff4cb:0xc69b9f931a476413!8m2!3d29.7917586!4d-95.7167798!16s%2Fg%2F11sn00tcgd?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                                            // href="https://www.google.com/maps?q=31602+Roldan+Ln,+Fulshear,+TX+77441"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary"
                                        >
                                            1718 N Fry Rd #152, Houston, TX 77084
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-10 md:flex-row md:justify-between pb-40 md:pb-20">
                    <div className="flex flex-col space-y-2 items-center md:items-start mt-10 md:mt-5">
                        {/* <span className="text-white text-lg">UltraFix Appliance Repair, LLC</span> */}
                        <span className="text-white text-lg">UltraFix Appliance Store, LLC</span>
                        <div className="text-white text-md font-thin">
                            <span className="cursor-pointer hover:text-primary hover:underline" onClick={() => setShowTerms(true)}>Terms & Conditions</span>
                            <span className="text-sm"> and </span>
                            <span className="cursor-pointer hover:text-primary hover:underline" onClick={() => setShowPrivacy(true)}>Privacy Policy</span>
                        </div>
                    </div>
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

            <TermsModal
                visible={showTerms}
                onClose={() => setShowTerms(false)}
            />
            <PrivacyModal
                visible={showPrivacy}
                onClose={() => setShowPrivacy(false)}
            />
        </footer>
    );
};