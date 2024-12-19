import React from 'react';
import { FormInput } from '@components/shared';
import { useForm } from 'react-hook-form';
import SectionLayout from '@components/layout/section-layout';
import { SelectButton } from '@components/shared/select-button';
import { SectionFooter } from '../section-footer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useLazyGetBrandsQuery } from '@api/booking-api';
import { setSelectedAppliances } from '@slices/booking-slice';


interface IBookingForm {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

interface IIssueSelectProps {
    setStep: (step: number) => void,
}


export const IssueSelect: React.FC<IIssueSelectProps> = (props) => {
    let { setStep } = props;

    const dispatch = useDispatch();
    const { bookingData, brands, serviceData } = useSelector((state: RootState) => state.booking);

    // RTK Query mutation hook
    const [triggerGetBrands] = useLazyGetBrandsQuery();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });


    const onSelectBrand = (brandId: number | string, applianceIndex: number) => {
        const updatedAppliances = bookingData.appliances.map((appliance, index) => {
            if (index === applianceIndex) {
                return {
                    ...appliance,
                    brand: brandId,
                };
            }
            return appliance;
        });
        dispatch(setSelectedAppliances(updatedAppliances));
    }


    const onSelectIssue = (issueId: number | string, applianceIndex: number) => {
        const updatedAppliances = bookingData.appliances.map((appliance, index) => {
            if (index === applianceIndex) {
                return {
                    ...appliance,
                    problem: issueId,
                };
            }
            return appliance;
        });
        dispatch(setSelectedAppliances(updatedAppliances));
    }


    const isBrandSelected = (brandId: number | string, applianceIndex: number) => {
        let selectedAppliances = bookingData.appliances;
        let applianceToUpdate = selectedAppliances[applianceIndex];
        let isBrandSelected = applianceToUpdate?.brand == brandId;
        return isBrandSelected;
    }


    const isIssueSelected = (issueId: number | string, applianceIndex: number) => {
        let selectedAppliances = bookingData.appliances;
        let applianceToUpdate = selectedAppliances[applianceIndex];
        let isProblemSelected = applianceToUpdate?.problem == issueId;
        return isProblemSelected;
    }

    const onSearchBrand = async (e: any) => {
        try {
            triggerGetBrands({ query: e.target.value, skip: 0, limit: 6 }).unwrap();
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }


    React.useEffect(() => {
        try {
            triggerGetBrands({ query: '', skip: 0, limit: 6 }).unwrap();
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }, [])


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <div className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]">
                    {
                        serviceData?.services?.map((appliance, i) =>
                            <div key={appliance.id} className='flex flex-col gap-10'>
                                <div className='space-y-6 flex flex-col items-center'>
                                    <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                        What’s is the brand of your <strong className='font-medium text-primary'>{appliance.type} {appliance.title}</strong> ?
                                    </h3>
                                    <div className="flex flex-col w-full max-w-[300px]">
                                        <input
                                            placeholder="Search your brand"
                                            onChange={onSearchBrand}
                                            className={`w-full h-[50px] px-5 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                        {
                                            brands?.map((brand) =>
                                                <SelectButton
                                                    key={brand.value}
                                                    label={brand.title}
                                                    selected={isBrandSelected(brand.value, i)}
                                                    onSelect={() => onSelectBrand(brand.value, i)}
                                                />
                                            )
                                        }
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <h4 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                        Select the issue
                                    </h4>
                                    <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                        {
                                            appliance.issues?.map(issue =>
                                                <SelectButton
                                                    key={issue.value}
                                                    label={issue.label}
                                                    selected={isIssueSelected(issue.value, i)}
                                                    onSelect={() => onSelectIssue(issue.value, i)}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='space-y-6'>
                        <h5 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Please, describe the issue in detail
                        </h5>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                            <FormInput
                                isTextarea
                                type='text'
                                name='fullname'
                                placeholder="Describe the issue (optional)"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>

                    <SectionFooter onGoBack={() => setStep(1)} onClick={() => setStep(3)} />
                </div>
            </div>
        </SectionLayout>

    )
}