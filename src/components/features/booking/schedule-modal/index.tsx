import React from 'react';
import { STATES } from 'constants/locations';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon } from '@assets/icons';
import { DaySelect, Modal, TimeSelect } from '@components/shared';


interface IScheduleModalProps {
    visible: boolean,
    onClose: () => void,
    onConfirm?: () => void,
}

export const ScheduleModal: React.FC<IScheduleModalProps> = (props) => {
    let { visible, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent onClose={onClose} />
            }
            onClose={onClose}
        />
    )
}


const DAYS = [
    { id: 1, day: 4, weekDay: 'Wednesday', date: '4 Dec 2024' },
    { id: 2, day: 5, weekDay: 'Thursday', date: '5 Dec 2024' },
    { id: 3, day: 6, weekDay: 'Friday', date: '6 Dec 2024' },
    { id: 4, day: 7, weekDay: 'Saturday', date: '7 Dec 2024' },
    { id: 5, day: 8, weekDay: 'Sunday', date: '8 Dec 2024' },
]

const TIMES = [
    { id: 1, label: '8 am - 11 am' },
    { id: 2, label: '9 am - 12 pm' },
    { id: 3, label: '10 am - 1 pm' },
    { id: 4, label: '11 am - 2 pm' },
    { id: 5, label: '12 pm - 15 pm' },
    { id: 6, label: '13 pm - 16 pm' },
    { id: 7, label: '14 pm - 17 pm' },
    { id: 8, label: '15 pm - 18 pm' },
    { id: 9, label: '16 pm - 19 pm' },
    { id: 10, label: '17 pm - 20 pm' },
]

interface IModalContent {
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { onClose } = props;

    const [selectedDate, setSelectedDate] = React.useState<string>();
    const [selectedDay, setSelectedDay] = React.useState<number>(1);
    const [selectedTime, setSelectedTime] = React.useState<number>(0);


    return (
        <div className="flex relative flex-col md:max-w-[80vw] md:min-w-[80vw] max-h-[90vh] rounded-lg overflow-scroll space-y-5 text-center">
            <div className="z-50 backdrop-blur-xl flex items-center justify-center bg-white/60 absolute w-full py-2 md:py-3">
                <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                    Let us know your availability
                </h2>
                <div className="z-200 absolute top-5 right-5 cursor-pointer hover:text-primary" onClick={onClose}><CloseIcon /></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-[50px] pt-[100px] gap-[40px]">
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex gap-3'>
                        {
                            DAYS.map(day =>
                                <DaySelect
                                    key={day.id}
                                    selected={day.id == selectedDay}
                                    onSelect={() => { setSelectedDay(day.id); setSelectedDate(day.date) }}
                                    {...day}
                                />
                            )
                        }
                    </div>
                    <p className='text-gray-500'>OR</p>
                    <button
                        // type="submit"
                        // onClick={showModal}
                        className="w-full max-w-[250px] h-[45px] font-regmed border-2 border-primary text-primary px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:bg-primary hover:text-white hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Select from Calendar
                    </button>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <h3 className='font-medium text-xl text-gray-400'>{DAYS[selectedDay - 1]?.weekDay}</h3>
                        <h4 className='font-regmed text-3xl'>{selectedDate}</h4>
                    </div>
                    <p className='text-gray-400'>Please select the arrival time that best fits your schedule</p>
                    <div className='flex flex-wrap items-center justify-center gap-3 max-w-[80%]'>
                        {
                            TIMES.map(time =>
                                <TimeSelect
                                    key={time.id}
                                    selected={time.id == selectedTime}
                                    onSelect={() => setSelectedTime(time.id)}
                                    {...time}
                                />
                            )
                        }
                    </div>
                </div>

                <div className='flex flex-col items-center gap-3'>
                    <div className='bg-[#F3EFFA] border-2 border-[#B1A7C7] text-[#85799F] rounded-xl px-10 py-5 max-w-[80%]'>
                        A technician will visit your location to inspect the appliance and assess the necessary repairs. They will provide a detailed quote based on their findings. If you choose to proceed with the repair, the $89 service call fee will be applied toward the total repair cost.

                        If you decide not to move forward with the repair, you will only be responsible for the $89 service call fee.
                    </div>

                    <div className="flex justify-between items-center pt-3 select-none">
                        <label className="inline-flex items-center cursor-pointer">
                            {/* Hidden native checkbox */}
                            <input
                                type="checkbox"
                                className="hidden peer"
                            // onChange={() => acceptTerms(!terms)}
                            />
                            {/* Custom checkbox */}
                            <span className="w-6 h-6 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white peer-checked:bg-blue-400 peer-checked:border-transparent transition-colors duration-200">
                                {/* Checkmark Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-white hidden peer-checked:block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="ml-2 text-gray-700">I acknowledge that the service price is <strong className='text-lg'>$185</strong></span>
                        </label>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <button
                        // type="submit"
                        // onClick={showModal}
                        className="w-full max-w-[300px] h-[45px] font-regmed bg-primary text-white px-6 py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Book Appointment
                    </button>
                    <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                </div>
            </div>
        </div>
    )
}
