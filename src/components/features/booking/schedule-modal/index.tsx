"use client";

import React from 'react';
import Link from 'next/link';
import { CloseIcon } from '@assets/icons';
import { DaySelect, Modal, TimeSelect } from '@components/shared';
import { format, addDays } from "date-fns";
import { useBookAppointmentMutation, useLazyGetTimeSlotsQuery } from '@api/booking-api';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { setBookingData, setSelectedBookingDate, setSelectedSlot } from '@slices/booking-slice';
import { useDispatch } from 'react-redux';
import { UlDayPicker } from '@components/shared/day-picker';
import { SlotsSkeleton } from '@components/shared/skeletons';


interface IScheduleModalProps {
    visible: boolean,
    onClose: () => void,
    onConfirm: () => void,
}

export const ScheduleModal: React.FC<IScheduleModalProps> = (props) => {
    let { visible, onConfirm, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent onClose={onClose} onConfirm={onConfirm} />
            }
            onClose={onClose}
        />
    )
}


interface IModalContent {
    onConfirm: () => void,
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { onConfirm, onClose } = props;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { bookingData, slots, serviceData, selectedBookingDate, loading } = useSelector((state: RootState) => state.booking);

    const dispatch = useDispatch();
    const [triggerTimeSlots] = useLazyGetTimeSlotsQuery();
    const [bookAppointment] = useBookAppointmentMutation();

    const [isDatePickerVisible, setDatePickerVisible] = React.useState<boolean>(false);
    const [selectedDate, setSelectedDate] = React.useState<any>();

    const [selectedDay, setSelectedDay] = React.useState<number>(1);
    const [selectedTime, setSelectedTime] = React.useState<number | string>(0);

    const dates = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i));


    const handleDateClick = (date: Date) => {
        setSelectedDate(format(date, "yyyy-MM-dd"));
        dispatch(setBookingData({ order_at: format(date, "yyyy-MM-dd") }));
        dispatch(setSelectedBookingDate({
            date: format(date, "MMM dd, yyyy"),
            weekDay: format(date, "EEEE")
        }));
        handleSlotClick({ value: 0, label: '' });
    };


    const handleSlotClick = ({ value, label }: { value: number | string, label: string }) => {
        setSelectedTime(value);
        dispatch(setBookingData({ time_slot: value }))
        dispatch(setSelectedSlot({ value, label }))
    };


    const onClickSelectCalendar = () => {
        setDatePickerVisible(!isDatePickerVisible); // Toggle visibility
    }

    const onSelectDate = (date: Date) => {
        setSelectedDate(format(date, "yyyy-MM-dd"));
        dispatch(setBookingData({ order_at: format(date, "yyyy-MM-dd") }));
        dispatch(setSelectedBookingDate({
            date: format(date, "MMM dd, yyyy"),
            weekDay: format(date, "EEEE")
        }));
        handleSlotClick({ value: 0, label: '' });
    }

    const gtag_report_conversion = (url?: string) => {
        const callback = () => {
            // if (typeof url !== "undefined") {
            //     window.location.href = url;
            // }
        };
        if (typeof window?.gtag === "function") {
            window?.gtag("event", "conversion", {
                send_to: "AW-16752527414/04JgCNu4woIaELaQnbQ-",
                event_callback: callback,
            });
        }
        return false;
    };

    const onBook = async () => {
        try {
            let response = await bookAppointment(bookingData).unwrap();
            if (response.status === 'success') {
                onConfirm();
                gtag_report_conversion("https://ultrafix.com/book");
                onClose();
            }
        } catch (err: any) {
            console.error('Error: ', err);
        }
    };


    React.useEffect(() => {
        dispatch(setBookingData({ order_at: format(new Date(), "yyyy-MM-dd") }));
    }, [])


    React.useEffect(() => {
        try {
            if (!!bookingData.order_at) {
                triggerTimeSlots({
                    zip: bookingData.zip,
                    date: bookingData.order_at,
                    timezone: timezone,
                    appliances: bookingData.appliances,
                    latitude: bookingData.latitude,
                    longitude: bookingData.longitude,
                }).unwrap()
            }
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }, [bookingData.order_at]);


    return (
        <div className="flex relative flex-col md:max-w-[65vw] md:min-w-[70%] max-h-[90vh] rounded-lg overflow-scroll space-y-5 text-center">
            <div className="z-50 backdrop-blur-xl flex items-center justify-center bg-white/60 absolute w-full py-3 md:py-10">
                <h2 className="text-[1.7rem] leading-[2.5rem] text-center font-semibold text-primaryDark">
                    Let us know your availability
                </h2>
                <div className="z-200 absolute top-5 right-5 cursor-pointer hover:text-primary" onClick={onClose}><CloseIcon /></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-[50px] pt-[100px] gap-[40px]">
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex gap-3'>
                        {
                            dates.map((date, i) =>
                                <DaySelect
                                    key={i}
                                    selected={bookingData.order_at === format(date, "yyyy-MM-dd")}
                                    onSelect={() => handleDateClick(date)}
                                    date={format(date, "dd")}
                                    weekDay={format(date, "EEE")}
                                />
                            )
                        }
                    </div>
                    <p className='text-gray-500'>OR</p>
                    <button
                        type='button'
                        onClick={onClickSelectCalendar}
                        className="w-full max-w-[250px] h-[45px] font-regmed border-2 border-primaryDark text-primaryDark px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:bg-primaryDark hover:text-white hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Select from Calendar
                    </button>
                    <UlDayPicker
                        visible={isDatePickerVisible}
                        onClose={() => setDatePickerVisible(false)}
                        onChangeDate={onSelectDate}
                    />
                </div>
                <div className='flex flex-col items-center gap-5'>
                    {
                        !!selectedBookingDate?.date &&
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-medium text-xl text-gray-700'>{selectedBookingDate?.weekDay}</h3>
                            <h4 className='font-light text-3xl'>{selectedBookingDate?.date}</h4>
                        </div>
                    }
                    {
                        !!slots?.length &&
                        <p className='text-gray-400'>Please select the arrival time that best fits your schedule</p>
                    }
                    {
                        loading
                            ? <SlotsSkeleton />
                            : <div className='flex flex-wrap items-center justify-center gap-3 md:max-w-[80%]'>
                                {
                                    slots.map(time =>
                                        <TimeSelect
                                            key={time.value}
                                            selected={time.value == selectedTime}
                                            onSelect={() => handleSlotClick(time)}
                                            {...time}
                                        />
                                    )
                                }
                            </div>
                    }
                </div>

                <div className='flex flex-col items-center gap-3'>
                    <div className='bg-[#F3EFFA] border-2 border-[#B1A7C7] text-[#85799F] rounded-xl px-10 py-5 md:max-w-[80%]'>
                        The <strong className='text-xl font-medium'>${serviceData?.total_fee}</strong> service call fee will be applied towards the repair cost if you proceed with repairs
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <button
                        disabled={!selectedTime}
                        onClick={onBook}
                        className="w-full max-w-[300px] h-[45px] font-regmed bg-[#0551A8] hover:bg-primaryDark text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Book Appointment
                    </button>
                    <p className='text-gray-400'>Questions ? Call
                        <Link
                            href={`tel:(888) 998-6263`}
                            className='text-primaryDark font-medium hover:underline cursor-pointer ml-2'
                        >
                            (888) 998-6263
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
