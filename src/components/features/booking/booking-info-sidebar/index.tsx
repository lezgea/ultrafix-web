import { CloseIcon } from '@assets/icons';
import { setSelectedAppliances } from '@slices/booking-slice';
import { RootState } from '@store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


interface IBookingInfoSidebar {

}

export const BookingInfoSidebar: React.FC<IBookingInfoSidebar> = (props) => {
    let { } = props;

    const [infoModal, showInfoModal] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const { bookingData, serviceData } = useSelector((state: RootState) => state.booking);


    return (
        <div>
            <div className='flex z-30 md:hidden fixed items-center justify-end h-screen -left-[60px] bg-red'>
                <button
                    type="button"
                    className="absolute left-0 inline-flex w-auto text-center text-lg items-center px-5 pt-2 pb-5 text-white transition-all bg-primaryMedium rounded-lg sm:w-auto hover:bg-primaryDark shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none rotate-90"
                    onClick={() => showInfoModal(true)}
                >
                    Booking Info
                </button>
            </div>

            <div className='fixed z-20 flex flex-col h-screen pt-[50px] px-[20px] pb-[60px]'>
                {
                    !!bookingData.appliances?.length &&
                    <div className='hidden lg:flex backdrop-blur-xl bg-gray-400/10 shadow rounded-xl p-5 pb-20 min-w-[300px] max-w-[300px] min-h-[600px]'>
                        <div className='flex flex-col w-full gap-2'>
                            {/* <button
                                type="button"
                                className="inline-flex w-auto text-center text-lg items-center px-5 py-2 text-white transition-all bg-primaryMedium rounded-lg sm:w-auto hover:bg-primaryDark shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none"
                                onClick={() => { }}
                            >
                                Close
                            </button> */}
                            <div className='flex items-center'>
                                <div className='text-[14px] text-gray-400 font-regmed'>Booking Information</div>
                            </div>
                            <div className='flex flex-col w-full gap-2'>
                                {bookingData.appliances.map(item =>
                                    <div className='flex flex-col w-full rounded-xl md:text-md font-medium cursor-pointer shadow overflow-hidden bg-white'>
                                        <div className='flex w-full items-center justify-between bg-primaryDark px-3 py-1'>
                                            <div className='flex flex-col items-start'>
                                                <div className='text-white text-sm'>{item.title}</div>
                                                <div className='text-xs font-light -mt-1 text-primaryLight'>{item.type}</div>
                                            </div>
                                        </div>
                                        {
                                            !!item.brand &&
                                            <div className='flex flex-col px-3 pt-1.5 pb-2.5'>
                                                <div className='pb-2'>
                                                    <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Brand</label>
                                                    <p className='text-[15px] leading-[16px]'>{item.brand}</p>
                                                </div>
                                                {
                                                    !!item.issue &&
                                                    <div className='border-t'>
                                                        <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Issue</label>
                                                        <p className='text-[15px] leading-[16px]'>{item.issue}</p>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                            {
                                !!bookingData?.address &&
                                <div className='flex flex-col w-full rounded-xl md:text-md font-medium cursor-pointer shadow overflow-hidden px-3 pt-1.5 pb-2.5 bg-white'>
                                    {
                                        !!bookingData?.address &&
                                        <div className='pb-2'>
                                            <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Address</label>
                                            <p className='text-[15px] leading-[16px]'>{bookingData.address}, {bookingData.city}, {bookingData.state}, {bookingData.zip}</p>
                                        </div>
                                    }
                                    {
                                        !!bookingData?.firstname &&
                                        <div className='border-t pb-2'>
                                            <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Fullname</label>
                                            <p className='text-[15px] leading-[16px]'>{bookingData.firstname} {bookingData.lastname}</p>
                                        </div>
                                    }
                                    {
                                        !!bookingData?.customer_email &&
                                        <div className='border-t pb-2'>
                                            <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Email</label>
                                            <p className='text-[15px] leading-[16px]'>{bookingData.customer_email}</p>
                                        </div>
                                    }
                                    {
                                        !!bookingData?.customer_phone &&
                                        <div className='border-t pb-2'>
                                            <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Phone</label>
                                            <p className='text-[15px] leading-[16px]'>{bookingData.customer_phone}</p>
                                        </div>
                                    }
                                </div>
                            }

                        </div>
                    </div>
                }
            </div>


            {// MOBILE info modal
                infoModal &&
                <div className='fixed z-40 w-full flex lg:hidden flex-col h-screen pt-[15px]'>
                    {
                        !!bookingData.appliances?.length &&
                        <div className='flex backdrop-blur-xl bg-white/40 shadow p-5 pb-20 w-full min-w-[300px] h-full min-h-[400px] overflow-scroll'>
                            <div className='flex flex-col w-full gap-2'>
                                <button
                                    type="button"
                                    className="inline-flex ml-auto w-auto text-center text-lg items-center justify-center px-4 py-1.5 text-white transition-all bg-primaryMedium rounded-lg sm:w-auto hover:bg-primaryDark shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none"
                                    onClick={() => showInfoModal(false)}
                                >
                                    {'< CLOSE'}
                                </button>
                                <div className='flex items-center'>
                                    <div className='text-[14px] text-gray-400 font-regmed'>Booking Information</div>
                                </div>
                                <div className='flex flex-col w-[100%] gap-2'>
                                    {bookingData.appliances.map(item =>
                                        <div className='flex flex-col w-full rounded-xl md:text-md font-medium cursor-pointer shadow overflow-hidden bg-white'>
                                            <div className='flex w-full items-center justify-between bg-primaryDark px-3 py-1.5'>
                                                <div className='flex flex-col items-start'>
                                                    <div className='text-white text-sm'>{item.title}</div>
                                                    <div className='text-xs font-light -mt-1 text-primaryLight'>{item.type}</div>
                                                </div>
                                            </div>
                                            {
                                                !!item.brand &&
                                                <div className='flex flex-col px-3 pt-1.5 pb-2.5'>
                                                    <div className='pb-2'>
                                                        <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Brand</label>
                                                        <p className='text-[15px] leading-[16px]'>{item.brand}</p>
                                                    </div>
                                                    {
                                                        !!item.issue &&
                                                        <div className='border-t'>
                                                            <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Issue</label>
                                                            <p className='text-[15px] leading-[16px]'>{item.issue}</p>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    )}
                                </div>
                                {
                                    !!bookingData?.address &&
                                    <div className='flex flex-col w-full rounded-xl md:text-md font-medium cursor-pointer shadow overflow-hidden px-3 pt-1.5 pb-2.5 bg-white'>
                                        {
                                            !!bookingData?.address &&
                                            <div className='pb-2'>
                                                <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Address</label>
                                                <p className='text-[15px] leading-[16px]'>{bookingData.address}, {bookingData.city}, {bookingData.state}, {bookingData.zip}</p>
                                            </div>
                                        }
                                        {
                                            !!bookingData?.firstname &&
                                            <div className='border-t pb-2'>
                                                <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Fullname</label>
                                                <p className='text-[15px] leading-[16px]'>{bookingData.firstname} {bookingData.lastname}</p>
                                            </div>
                                        }
                                        {
                                            !!bookingData?.customer_email &&
                                            <div className='border-t pb-2'>
                                                <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Email</label>
                                                <p className='text-[15px] leading-[16px]'>{bookingData.customer_email}</p>
                                            </div>
                                        }
                                        {
                                            !!bookingData?.customer_phone &&
                                            <div className='border-t pb-2'>
                                                <label className='text-gray-400 font-regmed text-[13px] leading-[13px]'>Phone</label>
                                                <p className='text-[15px] leading-[16px]'>{bookingData.customer_phone}</p>
                                            </div>
                                        }
                                    </div>
                                }

                            </div>
                        </div>
                    }
                </div>
            }


        </div>
    )
}