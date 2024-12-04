import React from 'react';
import * as Yup from 'yup';
import { FormInput } from '@components/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContactUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import SectionLayout from '@components/layout/section-layout';
import { SelectButton } from '@components/shared/select-button';




const BUILTIN_TYPES = [
    { id: 1, label: 'Yes' },
    { id: 2, label: 'No' },
]

const BRANDS = [
    { id: 1, label: 'Samsung' },
    { id: 2, label: 'LG' },
    { id: 3, label: 'Kenmore' },
    { id: 4, label: 'Viking' },
    { id: 5, label: 'Dacor' },
    { id: 6, label: 'Amana' },
    { id: 7, label: 'U-line' },
    { id: 8, label: 'Asko' },
    { id: 9, label: 'Subzero' },
    { id: 10, label: 'Maytag' },
]

const ISSUES = [
    { id: 1, label: 'Not cooling' },
    { id: 2, label: 'Leaking' },
    { id: 3, label: 'Noising' },
    { id: 4, label: 'Other' },
]


interface IBookingForm {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Fullname is required'),
    phone: Yup.string()
        .required('Phone number is required'),
    address: Yup.string()
        .required('Address is required'),
});


interface IIssueSelectProps {
    setStep: (step: number) => void,
}


export const IssueSelect: React.FC<IIssueSelectProps> = (props) => {
    let { setStep } = props;

    const [selectedType, setSelectedType] = React.useState<number>(0);
    const [selectedBrand, setSelectedBrand] = React.useState<number>(0);
    const [selectedIssue, setSelectedIssue] = React.useState<number>(0);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookingForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    // const [sendRequest, { isLoading, error }] = useContactUserMutation();

    const onSubmit: SubmitHandler<IBookingForm> = async (data) => {
        // try {
        //     await sendRequest(data).unwrap();
        //     showEmailSent(true);
        //     toast.success("Thank you for contacting us! We have received your message and will get back to you shortly.");
        //     reset();
        // } catch (err: any) {
        //     console.error('Unknown error:', err);
        //     toast.error(err.data?.message || 'An unexpected error occurred');
        // }
    };


    return (
        <SectionLayout noYPadding>
            <div className="flex w-full justify-center space-y-10">
                <form className="flex flex-col space-y-20 text-center items-center select-none min-w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-6'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                            Is your refrigerator built-in ?
                        </h2>
                        <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                            {
                                BUILTIN_TYPES.map(type =>
                                    <SelectButton
                                        label={type.label}
                                        selected={type?.id == selectedType}
                                        onSelect={() => setSelectedType(type.id)}
                                    />
                                )
                            }
                        </div>
                    </div>

                    {
                        !!selectedType &&
                        <div className='space-y-6'>
                            <h3 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                What’s is the brand of refrigerator ?
                            </h3>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    BRANDS?.map(brand =>
                                        <SelectButton
                                            label={brand.label}
                                            selected={brand?.id == selectedBrand}
                                            onSelect={() => setSelectedBrand(brand.id)}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }

                    {
                        !!selectedBrand &&
                        <div className='space-y-6'>
                            <h4 className="text-[1.7rem] leading-[2.5rem] md:text-[2rem] md:leading-[3.5rem] text-center font-semibold text-primaryDark">
                                Select the issue
                            </h4>
                            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-5">
                                {
                                    ISSUES?.map(issue =>
                                        <SelectButton
                                            key={issue.id}
                                            label={issue.label}
                                            selected={issue?.id == selectedIssue}
                                            onSelect={() => setSelectedIssue(issue.id)}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    }

                    {
                        !!selectedBrand &&
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
                    }

                    <div className='flex flex-col items-center gap-4'>
                        <button
                            // type="submit"
                            onClick={() => setStep(3)}
                            className="w-full max-w-[300px] h-[45px] font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                        >
                            Continue
                        </button>
                        <p className='text-gray-400'>Questions ? Call (888) 998-6263</p>
                    </div>
                </form>
            </div>
        </SectionLayout>

    )
}