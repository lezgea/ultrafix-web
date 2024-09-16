import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "DataRace.ai",
    description: "DataRace is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="w-full bg-gray-50">
                <section className="relative flex w-full mx-auto max-w-[1200px] flex-col py-[120px] items-between">
                    <div className="flex flex-col w-full absolute space-y-5 text-end justify-end items-end">
                        <h1 className="text-[4rem] leading-[5rem] max-w-[60%] font-semibold text-gray-800">
                            Make Appliances Great Again !
                        </h1>
                        <p className="text-xl text-gray-600">
                            Call now and book your service technician
                        </p>
                        <Link
                            href="/"
                            className="inline-flex w-auto text-center items-center px-6 py-3 text-white transition-all bg-primary rounded-xl sm:w-auto hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                            aria-label="See our races"
                        >
                            Book Now
                        </Link>
                    </div>
                    <div className="flex items-start justify-start animate-left-svg">
                        <Image
                            src="/img/houston_car.webp"
                            width={800}
                            height={300}
                            className="w-auto"
                            alt="UltraFix Car Image"
                            loading="lazy"
                            sizes="(max-width: 1200px) 100vw, 800px"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home
