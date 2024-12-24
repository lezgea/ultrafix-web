import { BlueCheckIcon } from '@assets/icons';
import React from 'react';


interface IStepperProps {
    step: number,
}

export const Stepper: React.FC<IStepperProps> = (props) => {
    let { step } = props;

    return (
        <div className='flex'>
            <Step active={!!step} step={1} title="Appliance" />
            <Step active={step > 1} step={2} title="Brand & Issue" />
            <Step active={step > 2} step={3} title="Contact" />
        </div>
    )
}


interface IStepProps {
    title: string,
    active: boolean,
    step: number,
}

const Step: React.FC<IStepProps> = ({ active, title, step }) => {
    return (
        <div className='flex items-center'>
            {step > 1 && <div className={`w-[100px] md:w-40 ${active ? 'h-0.5 md:h-1 bg-primaryLight' : 'h-0.5 bg-gray-200'}`} />}
            <div className={`flex relative items-center justify-center rounded-full ${active ? 'w-5 h-5 bg-white' : 'w-3 h-3 md:w-4 md:h-4 bg-gray-200'}`} >
                {active && <BlueCheckIcon />}
                <p className='absolute text-xs md:text-sm bottom-7 md:bottom-10 text-center min-w-[100px]'>{title}</p>
            </div>
        </div>
    )
}