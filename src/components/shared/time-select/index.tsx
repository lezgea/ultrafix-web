import React from 'react';


interface ITimeSelectProps {
    selected?: boolean,
    available?: boolean,
    label: string,
    onSelect: () => void,
}


export const TimeSelect: React.FC<ITimeSelectProps> = (props) => {
    let { selected, available, label, onSelect } = props;

    if (!available) {
        return (
            <div aria-disabled className={`min-w-[150px] rounded-full px-4 py-2 text-md text-gray-400 font-medium cursor-pointer bg-gray-300 text-white`}
            >
                {label}
            </div>
        )
    }

    return (
        <div
            onClick={onSelect}
            className={`min-w-[150px] rounded-full px-4 py-2 text-md text-gray-400 font-medium cursor-pointer ${selected ? 'bg-[#0551A8] text-white' : 'border border-gray-200 hover:text-primaryDark hover:shadow-md'}`}
        >
            {label}
        </div>
    )
}