import { RootState } from '@store/store';
import React from 'react';
import { useSelector } from 'react-redux';


interface ISectionFooterProps {
    showFee?: boolean,
    isContinueDisabled?: boolean,
    onGoBack?: () => void,
    onClick?: () => void,
}

export const SectionFooter: React.FC<ISectionFooterProps> = (props) => {
    let { isContinueDisabled, showFee, onGoBack, onClick } = props;

    const { serviceData } = useSelector((state: RootState) => state.booking);


    return (
        <div className="backdrop-blur-xl bg-white/10 w-full fixed bottom-0 z-30 h-[100px] select-none">
            <div aria-label="Booking navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-start px-5 md:px-10 xl:px-0 py-5 h-full">

                <div className="flex flex-col items-start justify-center cursor-pointer w-[100%] lg:space-x-0">
                    {
                        showFee &&
                        <>
                            <div className='text-xl font-light'>Service Fee: <strong className='font-semi text-2xl'>${serviceData?.total_fee}</strong></div>
                            <p className='text-gray-400 text-sm'>The service call fee will be applied towards the repair cost if you proceed with repairs</p>
                        </>
                    }
                </div>
                <div className="flex justify-end lg:flex lg:w-[40%] h-full gap-3">
                    <button
                        type="button"
                        onClick={onGoBack}
                        className="w-full h-[50px] max-w-[300px] font-regmed text-primaryDark py-2 rounded-lg hover:bg-primaryDark hover:text-white focus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Go Back
                    </button>
                    <button
                        type="button"
                        disabled={isContinueDisabled}
                        onClick={onClick}
                        className="w-full h-[50px] max-w-[300px] font-regmed bg-primary text-white py-2 rounded-lg hover:bg-primaryDark sfocus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}