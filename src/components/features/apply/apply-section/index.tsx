import { BGUltraIllustration, UltrafixLogo } from '@assets/icons';
import SectionLayout from '@components/layout/section-layout';
import { ApplyForm } from '@components/shared';
import React from 'react';


export const ApplySection = () => {
    return (
        <SectionLayout
            scrollId="apply"
        >
            <div className="flex items-stretch shadow rounded-2xl overflow-hidden justify-center h-full">
                {/* Left side banner */}
                <div className="hidden md:flex md:w-1/2 relative justify-center flex-col px-[50px] space-y-10 bg-gradient-to-bl from-primary to-[#0E5EBB]">
                    <div className='w-full text-end text-white'>
                        <span className="text-[2rem] font-thin">Let's Make</span>
                        <h1 className="text-[3rem] leading-[3.5rem] text-white font-medium">Appliances Great Again</h1>
                    </div>
                    <p className="text-lg text-end md:max-w-full md:text-sm font-thin text-white">
                        Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by each member of our service team. We have been providing top service!
                    </p>
                    <BGUltraIllustration className="absolute h-[400px] bottom-0" />
                </div>

                {/* Right side with form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center px-5 lg:px-[50px] py-[30px] overflow-y-scroll">
                    <h2 className="text-[1.2rem] leading-[3rem] md:text-[1.5rem] md:leading-[4rem] text-end font-semibold text-primaryDark">
                        Apply Now
                    </h2>
                    <ApplyForm />
                </div>
            </div>
        </SectionLayout>
    );
}
