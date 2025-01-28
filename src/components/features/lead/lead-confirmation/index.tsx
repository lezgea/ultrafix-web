import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { BlueCheckIcon } from '@assets/icons';
import Link from 'next/link';


interface ILeadConfirmationProps {

}


export const LeadConfirmation: React.FC<ILeadConfirmationProps> = (props) => {
    let { } = props;

    return (
        <SectionLayout>
            <div className="flex flex-col w-full items-center justify-center space-y-5 px-10">
                <BlueCheckIcon className='w-[100px] mt-20' />
                <div className='flex flex-col items-center'>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                        Your booking is confirmed!
                    </h2>
                    <p className='text-gray-400 text-center'>We have sent your appointment details to your email</p>
                </div>
                <Link href='/'>
                    <button
                        className="w-full mt-10 max-w-[300px] h-[45px] font-regmed bg-primary text-white px-6 py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Home Page
                    </button>
                </Link>
            </div>
        </SectionLayout>

    )
}