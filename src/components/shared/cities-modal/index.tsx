import React from 'react';
import { Modal } from '../modal';
import { STATES } from 'constants/locations';
import Image from 'next/image';
import Link from 'next/link';


interface ICitiesModalProps {
    visible: boolean,
    state: string,
    onClose: () => void,
    onConfirm?: () => void,
}

export const CitiesModal: React.FC<ICitiesModalProps> = (props) => {
    let { visible, state, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent state={state} onClose={onClose} />
            }
            onClose={onClose}
        />
    )
}

interface IModalContent {
    state: string,
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { state, onClose } = props;

    const stateKey = state as keyof typeof STATES;


    return (
        <div className="flex relative flex-col md:max-w-[80vw] max-h-[90vh] rounded-lg overflow-hidden space-y-5 text-center">
            <div className="z-50 backdrop-blur-xl flex items-center justify-center bg-white/60 absolute w-full py-3">
                <h2 className="text-xl md:text-2xl text-gray-500 mt-3">Our Locations in <strong className="font-medium">{STATES[stateKey][0]?.state}</strong></h2>
            </div>
            <div className="w-full columns-2 lg:columns-3 p-7 md:pt-[60px] md:p-7 overflow-y-scroll">
                {
                    STATES[stateKey].map((city) =>
                        <Link
                            key={city.id}
                            href={`/appliance-repair/${state.toLowerCase()}/${city.value}`}
                        >
                            <div className="relative rounded-2xl max-h-[100px] md:h-[200px] md:max-h-[200px] overflow-hidden mb-4">
                                <div className="text-gray-500 cursor-pointer shadow-top-lg hover:shadow-lg group rounded-2xl overflow-hidden">
                                    <Image
                                        src={city.img}
                                        width={300}
                                        height={200}
                                        className="w-full max-h-[100px] md:h-[200px] md:max-h-[200px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        alt={`${city.title} Image`}
                                        loading="lazy"
                                        sizes="(max-width: 1200px) 200px, (min-width: 1200px) 200px"
                                    />
                                    <div className="absolute z-60 flex items-center justify-center top-0 w-full h-full rounded-2xl py-5 bg-white/30 backdrop-blur-xl group-hover:backdrop-blur-none group-hover:bg-transparent text-xl font-semibold text-center text-white"
                                    >
                                        {city.title}
                                    </div>
                                </div>
                            </div>

                        </Link>
                    )
                }
            </div>
        </div>
    )
}