import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { BlueCheckIcon } from '@assets/icons';


interface IConfirmationProps {
    // setStep: (step: number) => void,
}


export const Confirmation: React.FC<IConfirmationProps> = (props) => {
    let { } = props;


    return (
        <SectionLayout>
            <div className="flex flex-col w-full items-center justify-center space-y-5">
                <BlueCheckIcon className='w-[100px]' />
                <div className='flex flex-col items-center'>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                        Your booking is confirmed, Muslim !
                    </h2>
                    <p className='text-gray-400'>We have sent your appointment details to your email</p>
                </div>
                <div className="flex shadow bg-white rounded-2xl overflow-hidden">
                    <div className='space-y-3 p-7 min-w-[500px]'>
                        <div>
                            <div className='text-gray-400'>Address:</div>
                            <div className='text-primaryDark'>2323 Naperville Rd #299, Naperville, IL 60563</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Phone:</div>
                            <div className='text-primaryDark text-xl'>(331) 244-6442</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Appliance:</div>
                            <div className='text-primaryDark'>Refrigerator (Samsung)</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Problem:</div>
                            <div className='text-primaryDark'>Not cooling</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-between bg-[#113064] text-white p-7'>
                        <div className='flex flex-col space-y-5'>
                            <div className='flex flex-col items-center'>
                                <div className='font-medium'>Tuesday</div>
                                <div className='text-xl'>19 Nov 2024</div>
                            </div>
                            <div className='bg-[#00A2FF] px-4 py-2 rounded-lg'>10 am - 12 pm</div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className='font-light'>Service Call</div>
                            <div className='font-medium text-2xl'>$185</div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>

    )
}