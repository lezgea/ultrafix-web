import { CloseIcon } from '@assets/icons';
import { setSelectedAppliances } from '@slices/booking-slice';
import { RootState } from '@store/store';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


interface ISectionFooterProps {
    showFee?: boolean,
    isContinueDisabled?: boolean,
    onGoBack?: () => void,
    onClick?: () => void,
}

export const SectionFooter: React.FC<ISectionFooterProps> = (props) => {
    let { isContinueDisabled, showFee, onGoBack, onClick } = props;

    const dispatch = useDispatch();
    const { serviceData, bookingData } = useSelector((state: RootState) => state.booking);


    const onUnselectAppliance = (applianceId: number | string) => {
        let selectedAppliances = bookingData.appliances;
        let newApps = selectedAppliances.filter(item => item.service_id !== applianceId);
        dispatch(setSelectedAppliances(newApps));
    }

    return (
        <div className="backdrop-blur-xl bg-white/10 w-full fixed bottom-0 z-30 min-h-[60px] md:min-h-[90px] select-none">
            <div aria-label="Booking navigation" className="container w-full max-w-[1200px] mx-auto flex flex-col gap-5 md:gap-0 justify-between items-end md:flex-row px-5 md:px-10 xl:px-0 py-3 md:py-5 h-full">
                <div className="flex flex-col gap-4 items-start justify-start md:justify-center cursor-pointer w-[100%] lg:space-x-0">
                    {
                        // !!bookingData.appliances?.length &&
                        // <div>
                        //     <div className='flex items-center'>
                        //         <div className='text-lg font-light'>Selected Services:</div>
                        //     </div>
                        //     <div className='flex gap-2'>
                        //         {bookingData.appliances.map(item =>
                        //             <div className='flex items-center shadow rounded-full px-5 py-2 md:text-md font-medium cursor-pointer bg-primaryDark text-white'>
                        //                 <div className='flex flex-col items-start'>
                        //                     <div>{item.title}</div>
                        //                     <div className='text-xs font-light -mt-1 text-primaryLight'>{item.type}</div>
                        //                 </div>
                        //                 <CloseIcon className="w-4 h-4 ml-4 stroke-[#fff]" onClick={() => onUnselectAppliance(item.service_id)} />
                        //             </div>
                        //         )}
                        //     </div>
                        // </div>
                    }
                    {
                        showFee &&
                        <div>
                            <p className='text-gray-400 text-sm text-start'>The service call fee will be applied towards the repair cost if you proceed with repairs</p>
                            <div className='flex items-center'>
                                <div className='text-lg font-light'>Service Fee: <strong className='font-semi text-2xl'>${serviceData?.total_fee}</strong></div>
                            </div>
                        </div>
                    }
                </div>
                <div className="flex justify-end w-full lg:flex lg:w-[40%] h-full gap-3">
                    <button
                        type="button"
                        onClick={onGoBack}
                        className="w-full px-3 h-[50px] max-w-[300px] font-regmed text-primaryDark py-2 rounded-lg hover:bg-primaryDark hover:text-white focus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Go Back
                    </button>
                    <button
                        type="button"
                        disabled={isContinueDisabled}
                        onClick={onClick}
                        className="w-full px-3 h-[50px] max-w-[300px] font-regmed  bg-[#0551A8] hover:bg-primaryDark text-white py-2 rounded-lg focus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}