import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Modal } from '../modal';


interface IUlDayPickerProps {
    visible: boolean,
    onClose: () => void,
    onChangeDate: (val: Date) => void,
}

export function UlDayPicker(props: IUlDayPickerProps) {
    let { visible, onClose, onChangeDate } = props;

    const [selected, setSelected] = React.useState<Date>();

    const today = new Date();

    function onSelectDate(val: Date) {
        onChangeDate(val);
        onClose();
    }

    React.useEffect(() => {
        if (!!selected)
            onSelectDate(selected);
    }, [selected])

    return (
        <Modal
            visible={visible}
            onClose={onClose}
            content={
                <div className='flex items-center justify-center p-10'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        disabled={{ before: today }}
                    // footer={
                    //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                    // }
                    />
                </div>
            }
        />
    );
}