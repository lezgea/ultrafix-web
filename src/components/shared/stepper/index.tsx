import React from 'react';


interface IStepperProps {
    step: number,
}

export const Stepper: React.FC<IStepperProps> = (props) => {
    let { step } = props;

    return (
        <div className='flex'>
            <Step active={!!step} step={1} />
            <Step active={step > 1} step={2} />
            <Step active={step > 2} step={3} />
        </div>
    )
}


interface IStepProps {
    active: boolean,
    step: number,
}

const Step: React.FC<IStepProps> = ({ active, step }) => {
    return (
        <div className='flex items-center'>
            {step > 1 && <div className={`w-40 h-1 ${active ? 'bg-primary' : 'bg-gray-200'}`} />}
            <div className={`w-3 h-3 rounded-full ${active ? 'bg-primary' : 'bg-gray-200'}`} />
        </div>
    )
}