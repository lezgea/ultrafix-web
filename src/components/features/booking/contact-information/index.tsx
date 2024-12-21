import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { SectionFooter } from '../section-footer';
import AddressAutocomplete from '@components/shared/address-autocomplete';
import { SimpleInput } from '@components/shared/simple-input';
import { setBookingData } from '@slices/booking-slice';
import { useDispatch } from 'react-redux';


interface IContactInformationProps {
    setStep: (step: number) => void,
    showModal: () => any,
}


export const ContactInformation: React.FC<IContactInformationProps> = (props) => {
    let { setStep, showModal } = props;

    const dispatch = useDispatch();
    const { bookingData, serviceData } = useSelector((state: RootState) => state.booking);


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-20">
                <div className="flex flex-col space-y-10 text-center items-center select-none min-w-[30%]">
                    <div className='flex flex-col items-center space-y-6'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Service address
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 max-w-[60%]">
                            <div className='flex w-full gap-4'>
                                <div className='w-full'>
                                    {/* <AddressAutocomplete /> */}
                                    <SimpleInput
                                        type='text'
                                        name='address'
                                        placeholder="Address"
                                        defaultValue={bookingData.address}
                                        onChange={(e: any) => dispatch(setBookingData({ address: e.target.value }))}
                                    />
                                    <AddressAutocomplete
                                        // className={`w-full h-[50px] px-5 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                                    />
                                </div>
                                <div className='max-w-40'>
                                    <SimpleInput
                                        type='text'
                                        name='unit'
                                        placeholder="Unit or Apt"
                                        defaultValue={bookingData.unit}
                                        onChange={(e: any) => dispatch(setBookingData({ unit: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full gap-4'>
                                <SimpleInput
                                    type='text'
                                    name='city'
                                    placeholder="City"
                                    defaultValue={bookingData.city}
                                    onChange={(e: any) => dispatch(setBookingData({ city: e.target.value }))}
                                />
                                <SimpleInput
                                    type='text'
                                    name='state'
                                    placeholder="State"
                                    defaultValue={bookingData.state}
                                    onChange={(e: any) => dispatch(setBookingData({ state: e.target.value }))}
                                />
                                <SimpleInput
                                    type='text'
                                    name='zip'
                                    placeholder="Zip code"
                                    defaultValue={bookingData.zip}
                                    onChange={(e: any) => dispatch(setBookingData({ zip: e.target.value }))}
                                />
                            </div>
                            {/* <FormInput
                                type='text'
                                name='address'
                                placeholder="Address line 2 (optional)"
                                register={register}
                                errors={errors}
                            /> */}
                        </div>
                    </div>

                    <div className='flex w-full flex-col items-center space-y-6'>
                        <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Contact Information
                        </h3>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-4 max-w-[60%]">
                            <div className='flex w-full gap-4'>
                                <SimpleInput
                                    type='text'
                                    name='firstname'
                                    placeholder="First name"
                                    defaultValue={bookingData.firstname}
                                    onChange={(e: any) => dispatch(setBookingData({ firstname: e.target.value }))}
                                />
                                <SimpleInput
                                    type='text'
                                    name='lastname'
                                    placeholder="Last name"
                                    defaultValue={bookingData.lastname}
                                    onChange={(e: any) => dispatch(setBookingData({ lastname: e.target.value }))}
                                />
                            </div>
                            <div className='flex w-full gap-4'>
                                <SimpleInput
                                    type='text'
                                    name='customer_email'
                                    placeholder="E-mail"
                                    defaultValue={bookingData.customer_email}
                                    onChange={(e: any) => dispatch(setBookingData({ customer_email: e.target.value }))}
                                />
                                <SimpleInput
                                    type='text'
                                    name='customer_phone'
                                    placeholder="Phone"
                                    defaultValue={bookingData.customer_phone}
                                    onChange={(e: any) => dispatch(setBookingData({ customer_phone: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>

                    <SectionFooter showFee onGoBack={() => setStep(2)} onClick={showModal} />
                </div>
            </div>
        </SectionLayout>

    )
}