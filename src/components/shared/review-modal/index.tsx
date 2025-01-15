import React from 'react';
import { Modal } from '../modal';
import { STATES } from 'constants/locations';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon, StarsIcon } from '@assets/icons';


interface ICitiesModalProps {
    visible: boolean,
    content: {
        userName: string,
        userAvatar: string,
        description: string,
    },
    onClose: () => void,
    onConfirm?: () => void,
}

export const ReviewModal: React.FC<ICitiesModalProps> = (props) => {
    let { visible, content, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent content={content} onClose={onClose} />
            }
            onClose={onClose}
        />
    )
}

interface IModalContent {
    content: {
        userName: string,
        userAvatar: string,
        description: string,
    },
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { content, onClose } = props;

    // const stateKey = state as keyof typeof STATES;


    return (
        <div className="flex relative flex-col md:max-w-[40vw] p-6 rounded-lg overflow-hidden space-y-5">
            <div className='flex flex-col gap-2'>
                <Image
                    src={content.userAvatar || '/'}
                    alt={content.userName}
                    width={70}
                    height={70}
                    className='text-white min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full flex items-center justify-center text-lg'
                />
                <div className='flex flex-col items-start justify-start text-start gap-2'>
                    <div className='font-medium text-lg'>{content.userName}</div>
                    <StarsIcon className="w-[110px] h-[20px]" />
                </div>
            </div>
            <div className='text-[15px]'>{content.description}</div>
        </div>
    )
}
