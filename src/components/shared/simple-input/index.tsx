import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';


interface ISimpleInputProps {
    label?: string;
    type?: string;
    placeholder: string;
    value?: string | number,
    defaultValue?: string | number,
    name: string;
    icon?: JSX.Element;
    isTextarea?: boolean;
    labelStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    onClickIcon?: () => void;
    onChange: (val: any) => void,
}

export const SimpleInput: React.FC<ISimpleInputProps> = (props) => {
    let {
        isTextarea,
        label,
        type,
        placeholder,
        value,
        defaultValue,
        icon,
        name,
        labelStyle,
        inputStyle,
        onClickIcon,
        onChange,
    } = props;

    return (
        <div className="relative w-full">
            <div className="relative">
                {
                    !!label &&
                    <label htmlFor={name} className="block text-gray-700 mb-2" style={labelStyle}>
                        {label}
                    </label>
                }
                {
                    isTextarea
                        ?
                        <textarea
                            id={name}
                            value={value}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            className={`w-full h-[200px] px-4 py-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                            style={inputStyle}
                            onChange={onChange}
                        />
                        :
                        <input
                            type={type}
                            id={name}
                            value={value}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            className={`w-full h-[50px] px-4 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out transform`}
                            style={inputStyle}
                            onChange={onChange}
                        />
                }
                {
                    icon &&
                    <div className="absolute h-[50px] right-5 bottom-0 flex items-center" onClick={onClickIcon}>
                        {icon}
                    </div>
                }
            </div>
        </div>
    )
}
