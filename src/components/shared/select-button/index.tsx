import React from 'react';


interface ISelectButtonProps {
    selected?: boolean,
    label: string,
    onSelect: () => void,
}


export const SelectButton: React.FC<ISelectButtonProps> = (props) => {
    let { selected, label, onSelect } = props;

    return (
        <div
            onClick={onSelect}
            className={`shadow rounded-full px-6 py-2.5 md:text-md text-gray-400 font-medium cursor-pointer ${selected ? 'bg-[#0551A8] text-white' : 'border border-gray-50 hover:text-primaryDark hover:shadow-md'}`}
        >
            {label}
        </div>
    )
}