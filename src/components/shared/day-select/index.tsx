import React from 'react';


interface IDaySelectProps {
    selected?: boolean,
    date: any,
    weekDay?: string,
    onSelect: () => void,
}


export const DaySelect: React.FC<IDaySelectProps> = (props) => {
    let { selected, date, weekDay, onSelect } = props;

    return (
        <div
            onClick={onSelect}
            className={`rounded-full flex flex-col items-center justify-center min-w-[65px] max-w-[65px] min-h-[65px] max-h-[65px] text-md text-gray-400 font-medium cursor-pointer group ${selected ? 'bg-primary' : 'border border-gray-200 hover:shadow-md'}`}
        >
            <p className={`text-gray-700 text-xl leading-lg ${selected ? 'text-white' : 'group-hover:text-primaryDark'}`}>{date}</p>
            <span className={`text-gray-500 font-regular ${selected ? 'text-white' : 'group-hover:text-primaryDark'}`}>{weekDay}</span>
        </div>
    )
}