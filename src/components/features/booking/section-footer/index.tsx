import { RootState } from '@store/store';
import React from 'react';
import { useSelector } from 'react-redux';


interface ISectionFooterProps {
    // fee: string | number,
    onClick?: () => void,
}

export const SectionFooter: React.FC<ISectionFooterProps> = (props) => {
    let { onClick } = props;

    const { } = useSelector((state: RootState) => state.booking);


    return (
        <div className="backdrop-blur-xl bg-white/10 w-full fixed bottom-0 z-30 h-[100px] select-none">
            <div aria-label="Booking navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-start px-5 md:px-10 xl:px-0 py-5 h-full">
                <div className="flex flex-col items-start justify-center cursor-pointer w-[100%] lg:space-x-0">
                    <div className='text-xl font-light'>Service Fee: <strong className='font-semi text-2xl'>$80</strong></div>
                    <p className='text-gray-400 text-sm'>Questions ? Call (888) 998-6263</p>
                </div>

                <div className="flex justify-end lg:flex lg:w-[40%] h-full gap-3">
                    <button
                        type="button"
                        className="w-full h-[50px] max-w-[300px] font-regmed bg-gray-400 text-white py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Go Back
                    </button>
                    <button
                        // type="submit"
                        onClick={onClick}
                        className="w-full h-[50px] max-w-[300px] font-regmed bg-primary text-white py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}