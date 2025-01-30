import React from 'react';


interface IBookingInfoSidebar {

}

export const BookingInfoSidebar: React.FC<IBookingInfoSidebar> = (props) => {
    let { } = props;

    return (
        <div>
            <div className='fixed flex flex-col h-screen justify-center'>
                {/* <div className='absolute flex items-center justify-center text-sm text-white bg-primaryLight z-10 w-5 h-5 rounded-full right-0'>3</div> */}
                <button
                    type="button"
                    className="inline-flex -ml-14 w-auto text-center text-lg items-center px-5 pt-2 pb-5 text-white transition-all bg-primaryMedium rounded-lg sm:w-auto hover:bg-primaryDark shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px focus:shadow-none rotate-90"
                    onClick={() => { }}
                >
                    Booking Info
                </button>
            </div>
        </div>
    )
}