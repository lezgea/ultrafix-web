import { RootState } from '@store/store';
import React from 'react';
import { useSelector } from 'react-redux';


interface ISectionFooterProps {
    // fee: string | number,
}

export const SectionFooter: React.FC<ISectionFooterProps> = (props) => {
    let { } = props;

    const { isAuthenticated } = useSelector((state: RootState) => state.user);


    return (
        <div className="backdrop-blur-xl bg-white/10 w-full fixed bottom-0 z-30 h-[65px] select-none">
            <div aria-label="Booking navigation" className="container w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 md:px-10 xl:px-0 py-0 h-full space-x-5">
                <div className="flex items-center cursor-pointer w-[100%] justify-between lg:w-[20%] lg:space-x-0">
                    {/* <Link href="/" passHref aria-label="UltraFix Logo">
                            <UltrafixLogo className="h-auto w-[160px]" />
                        </Link>
                        <div className="w-[60px] flex lg:hidden">
                            {
                                isSidebarOpen
                                    ? <CloseIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="close-icon" />
                                    : <HamburgerIcon onClick={toggleSidebar} className="h-[30px] w-[70px]" data-testid="hamburger-icon" />
                            }
                        </div> */}
                </div>

                <div className="flex items-center justify-end lg:flex lg:w-[20%] h-full">
                    <button
                        type="button"
                        className="w-full h-[45px] max-w-[300px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="w-full h-[45px] max-w-[300px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                    <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                </div>
            </div>
        </div>
    )
}