import React from 'react';
import * as motion from "framer-motion/client"



interface ISelectButtonProps {
    selected?: boolean,
    label: string,
    onSelect: () => void,
}


export const SelectButton: React.FC<ISelectButtonProps> = (props) => {
    let { selected, label, onSelect } = props;

    return (
        <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: 0.3,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
            }}
            onClick={onSelect}
            className={`shadow rounded-full px-6 py-2.5 md:text-md text-gray-400 font-medium cursor-pointer ${selected ? 'bg-[#0551A8] text-white' : 'border border-gray-50 hover:text-primaryDark hover:shadow-md'}`}
        >
            {label}
        </motion.div>
    )
}