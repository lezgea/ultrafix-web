"use client";

import React from 'react';
import { STATES } from 'constants/locations';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon } from '@assets/icons';
import { DaySelect, Modal, TimeSelect } from '@components/shared';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays } from "date-fns";
import { useBookAppointmentMutation, useLazyGetTimeSlotsQuery } from '@api/booking-api';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { setBookingData, setSelectedBookingDate, setSelectedSlot } from '@slices/booking-slice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


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

    const { bookingData, slots, serviceData, selectedBookingDate } = useSelector((state: RootState) => state.booking);

    const dispatch = useDispatch();
    const [triggerTimeSlots] = useLazyGetTimeSlotsQuery();
    const [bookAppointment] = useBookAppointmentMutation();

    const [isDatePickerVisible, setDatePickerVisible] = React.useState<boolean>(false);
    const [selectedDate, setSelectedDate] = React.useState(format(new Date(), "yyyy-MM-dd"));
    const [customDate, setCustomDate] = React.useState<Date | null>(null);

    const [selectedDay, setSelectedDay] = React.useState<number>(1);
    const [selectedTime, setSelectedTime] = React.useState<number | string>(0);

    const dates = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i + 1));


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


    const onBook = async () => {
        try {
            await bookAppointment(bookingData).then(() => {
                onConfirm();
                onClose();
                toast.success('Your booking is confirmed! We have sent your appointment details to your email!');
            });
        } catch (err: any) {
            console.error('Error: ', err);
            toast.error(err?.message || 'Unable to book appointment');
        }
    };



    React.useEffect(() => {
        try {
            triggerTimeSlots({
                zip: bookingData.zip,
                date: bookingData.order_at,
                appliances: bookingData.appliances,
            }).unwrap()
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }, [selectedDate]);



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
                            dates.map((date, i) =>
                                <DaySelect
                                    key={i}
                                    selected={selectedDate === format(date, "yyyy-MM-dd")}
                                    onSelect={() => handleDateClick(date)}
                                    date={format(date, "dd")}
                                    weekDay={format(date, "EEE")}
                                />
                            )
                        }
                    </div>
                    <p className='text-gray-500'>OR</p>
                    {
                        isDatePickerVisible &&
                        <div className='z-999'>
                            <DatePicker onChange={(date) => console.log('@@@@', date)} />
                        </div>
                    }
                    <button
                        // type="submit"
                        onClick={onClickSelectCalendar}
                        className="w-full max-w-[250px] h-[45px] font-regmed border-2 border-primary text-primary px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-neutral-300 hover:bg-primary hover:text-white hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Select from Calendar
                    </button>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    {
                        !!selectedBookingDate?.date &&
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-medium text-xl text-gray-700'>{selectedBookingDate?.weekDay}</h3>
                            <h4 className='font-light text-3xl'>{selectedBookingDate?.date}</h4>
                        </div>
                    }
                    <p className='text-gray-400'>Please select the arrival time that best fits your schedule</p>
                    <div className='flex flex-wrap items-center justify-center gap-3 md:max-w-[80%]'>
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
