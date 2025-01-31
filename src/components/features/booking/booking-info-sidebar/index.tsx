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

    const dispatch = useDispatch();
    const { bookingData, serviceData } = useSelector((state: RootState) => state.booking);

    const onUnselectAppliance = (applianceId: number | string) => {
        let selectedAppliances = bookingData.appliances;
        let newApps = selectedAppliances.filter(item => item.service_id !== applianceId);
        dispatch(setSelectedAppliances(newApps));
    }


    return (
        <div>
            <div className='fixed z-40 flex flex-col h-screen pt-[50px] pr-[20px] pb-[60px]'>
                {/* <div className='absolute flex items-center justify-center text-sm text-white bg-primaryLight z-10 w-5 h-5 rounded-full right-0'>3</div> */}
                {/* <button
                    type="button"
                    className="inline-flex -ml-14 w-auto text-center text-lg items-center px-5 pt-2 pb-5 text-white transition-all bg-primaryMedium rounded-lg sm:w-auto hover:bg-primaryDark shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none rotate-90"
                    onClick={() => { }}
                >
                    Booking Info
                </button> */}
                <div className='bg-white border-2 border-secondary rounded-xl p-5 pl-6 min-w-[400px] -ml-2'>
                    {
                        !!bookingData.appliances?.length &&
                        <div>
                            <div className='flex items-center'>
                                <div className='text-lg font-light'>Selected Services:</div>
                            </div>
                            <div className='flex gap-2'>
                                {bookingData.appliances.map(item =>
                                    <div className='flex items-center shadow rounded-full px-4 py-1.5 md:text-md font-medium cursor-pointer bg-primaryDark text-white'>
                                        <div className='flex flex-col items-start'>
                                            <div className='text-sm'>{item.title}</div>
                                            <div className='text-xs font-light -mt-1 text-primaryLight'>{item.type}</div>
                                        </div>
                                        <CloseIcon className="w-4 h-4 ml-2 stroke-[#fff]" onClick={() => onUnselectAppliance(item.service_id)} />
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>


        </div>
    )
}