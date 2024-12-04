import React from 'react';


export const Stepper = () => {
    return (
        <div className='flex'>
            <Step />
            <Step />
            <Step />
        </div>
    )
}


const Step = () => {
    return (
        <div className='flex items-center'>
            <div className='w-40 h-1 bg-gray-200' />
            <div className='w-3 h-3 rounded-full bg-gray-200' />
        </div>
    )
}