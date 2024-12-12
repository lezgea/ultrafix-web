import React from 'react';
import SectionLayout from '@components/layout/section-layout';
import { toast } from 'react-toastify';
import { SelectButton } from '@components/shared/select-button';
import { SectionFooter } from '../section-footer';
import { useGetServicesQuery } from '@api/booking-api';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useDispatch } from 'react-redux';
import { setSelectedAppliances } from '@slices/booking-slice';



interface IApplianceSelectProps {
    setStep: (step: number) => void,
}

export const ApplianceSelect: React.FC<IApplianceSelectProps> = (props) => {
    let { setStep } = props;

    const dispatch = useDispatch();
    const { bookingData, services } = useSelector((state: RootState) => state.booking);

    // RTK Query mutation hook
    const { data: servicesList, isLoading } = useGetServicesQuery({ zip: bookingData?.zip });


    const onSelectAppliance = (applianceId: number | string, type: string, title: string) => {
        let selectedAppliances = bookingData.appliances;
        let isApplianceSelected = isSelected(applianceId, type);

        if (isApplianceSelected) {
            let newApps = selectedAppliances.filter(item => item.service_id !== applianceId);
            dispatch(setSelectedAppliances(newApps));
        } else {
            if (selectedAppliances?.length > 2) {
                toast.warning('Appliance select limit exceeded!');
                return;
            }
            dispatch(setSelectedAppliances([
                ...selectedAppliances,
                {
                    brand: '',
                    problem: '',
                    service_id: applianceId,
                    type,
                    title,
                }
            ]));
        }
    }


    const isSelected = (applianceId: number | string, type: string) => {
        let selectedAppliances = bookingData.appliances;
        let isApplianceSelected = selectedAppliances.some(item => (item.service_id == applianceId) && (item.type == type));
        return isApplianceSelected;
    }


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <div className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]">
                    {
                        !!services?.residential?.length &&
                        <div className='space-y-6'>
                            <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                Select <span className='text-primary'>residential</span> appliance to repair
                            </h2>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    services?.residential?.map(appliance =>
                                        <SelectButton
                                            key={appliance.id}
                                            label={appliance.text}
                                            selected={isSelected(appliance.id, 'residential')}
                                            onSelect={() => onSelectAppliance(appliance.id, 'residential', appliance.text)}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }
                    {
                        !!services?.commercial?.length &&
                        <div className='space-y-6'>
                            <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                Select <span className='text-primary'>commercial</span> appliance to repair
                            </h3>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    services?.commercial?.map(appliance =>
                                        <SelectButton
                                            key={appliance.id}
                                            label={appliance.text}
                                            selected={isSelected(appliance.id, 'commercial')}
                                            onSelect={() => onSelectAppliance(appliance.id, 'commercial', appliance.text)}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }
                    <SectionFooter
                        isContinueDisabled={!bookingData.appliances.length}
                        onClick={() => setStep(2)}
                    />
                </div>
            </div>
        </SectionLayout>
    )
}