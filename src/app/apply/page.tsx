import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BGUltraIllustration, LogoWhite, UltrafixLogo } from '@assets/icons';
import { ApplyForm } from '@components/shared';


export const metadata: Metadata = {
    title: "Apply | UlrtaFix Appliance Repair",
};


const Apply: React.FC = () => {
    return (
        <div className="min-h-screen max-h-screen flex items-center justify-center">
            {/* Left side with image */}
            <div className="w-full hidden md:flex md:w-1/2 relative h-screen flex flex-col text-center items-center px-20 justify-center space-y-10 bg-gradient-to-bl from-primary to-[#0E5EBB]">
                {/* <Link href="/">
                    <LogoWhite className="w-[200px]" />
                </Link> */}
                <div className='w-full text-center text-white'>
                    <span className="text-[2rem] font-thin">Let's Make</span>
                    <h1 className="text-[3rem] leading-[3.5rem] text-white font-medium"> Appliances Great Again</h1>
                </div>
                <p className="text-lg lg:px-20 md:max-w-full md:text-sm font-thin text-white">
                    Our pledge is to establish lasting relationships with our customers by exceeding their expectations and gaining their trust through exceptional performance by each member of our service team. We have been providing top service!
                </p>
                <BGUltraIllustration className="absolute max-h-[500px] bottom-0" />
            </div>

            {/* Right side with form */}
            <div className="w-full md:w-1/2 bg-white h-full flex flex-col items-center justify-center px-10 lg:px-[100px] py-[30px] overflow-y-scroll space-y-[60px]">
                <UltrafixLogo />
                <ApplyForm />
            </div>
        </div>
    );
};

export default Apply;
