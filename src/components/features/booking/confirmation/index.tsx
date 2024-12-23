import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { BlueCheckIcon } from '@assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { format } from 'date-fns';
import Link from 'next/link';


interface IConfirmationProps {
    // setStep: (step: number) => void,
}


export const Confirmation: React.FC<IConfirmationProps> = (props) => {
    let { } = props;

    const { bookingData, serviceData, selectedSlot, selectedBookingDate } = useSelector((state: RootState) => state.booking);

    return (
        <SectionLayout>
            <div className="flex flex-col w-full items-center justify-center space-y-5">
                <BlueCheckIcon className='w-[100px]' />
                <div className='flex flex-col items-center'>
                    <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                        Your booking is confirmed, {bookingData?.firstname} !
                    </h2>
                    <p className='text-gray-400'>We have sent your appointment details to your email</p>
                </div>
                <div className="flex shadow bg-white rounded-2xl overflow-hidden">
                    <div className='space-y-3 p-7 min-w-[500px]'>
                        <div>
                            <div className='text-gray-400'>Address:</div>
                            <div className='text-primaryDark'>{bookingData?.address}</div>
                        </div>
                        <div>
                            <div className='text-gray-400'>Phone:</div>
                            <div className='text-primaryDark text-xl'>{bookingData?.customer_phone}</div>
                        </div>
                        {
                            !!bookingData?.appliances?.length && bookingData?.appliances?.map(appliance =>
                                <div key={appliance.service_id} className='space-y-3'>
                                    <div>
                                        <div className='text-gray-400'>Appliance:</div>
                                        <div className='text-primaryDark'>{appliance.title} ({appliance.brand})</div>
                                    </div>
                                    <div>
                                        <div className='text-gray-400'>Problem:</div>
                                        <div className='text-primaryDark'>{appliance.issue}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col items-end justify-between bg-[#113064] text-white p-7 min-w-[150px]'>
                        <div className='flex flex-col space-y-5'>
                            {
                                !!selectedBookingDate &&
                                <div className='flex flex-col items-center'>
                                    <div className='font-medium'>{selectedBookingDate?.weekDay}</div>
                                    <div className='text-xl font-light'>{selectedBookingDate?.date}</div>
                                </div>
                            }
                            <div className='bg-[#00A2FF] px-4 py-2 rounded-lg'>{selectedSlot.label}</div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className='font-light'>Service Call</div>
                            <div className='font-medium text-2xl'>${serviceData.total_fee}</div>
                        </div>
                    </div>
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