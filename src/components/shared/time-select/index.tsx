import React from 'react';


interface ITimeSelectProps {
    selected?: boolean,
    label: string,
    onSelect: () => void,
}


export const TimeSelect: React.FC<ITimeSelectProps> = (props) => {
    let { selected, label, onSelect } = props;

    return (
        <div
            onClick={onSelect}
            className={`min-w-[150px] rounded-full px-4 py-2 text-md text-gray-400 font-medium cursor-pointer ${selected ? 'bg-primary text-white' : 'border border-gray-200 hover:text-primaryDark hover:shadow-md'}`}
        >
            {label}
        </div>
    )
}