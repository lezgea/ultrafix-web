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

    console.log('@@@@@', STATES[stateKey])

    return (
        <div className="flex flex-col md:max-w-[80vw] max-h-[80vh] overflow-y-scroll p-7 md:p-10 space-y-5 text-center">
            <h2 className="text-2xl md:text-3xl mb-5">Our Locations in {STATES[stateKey][0]?.state}</h2>
            <div className="w-full columns-2 lg:columns-3">
                {
                    STATES[stateKey].map((city) =>
                        <Link
                            key={city.id}
                            href={`/appliance-repair/${state.toLowerCase()}/${city.value}`}
                        >
                            <div className="break-inside-avoid mb-5 text-gray-500 cursor-pointer bg-white rounded-3xl shadow-top-lg overflow-hidden hover:shadow-lg group">
                                <div className='max-h-[100px] md:h-[200px] md:max-h-[200px] overflow-hidden'>
                                    <Image
                                        src={city.img}
                                        width={300}
                                        height={200}
                                        className="w-full max-h-[100px] md:h-[200px] md:max-h-[200px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                        alt={`${city.title} Image`}
                                        loading="lazy"
                                        sizes="(max-width: 1200px) 200px, (min-width: 1200px) 200px"
                                    />
                                </div>
                                <div className="text-md font-semibold text-center text-primaryDark mb-1 text-gray-700 group-hover:text-primary px-5 py-3"
                                >
                                    {city.title}
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="flex w-full justify-end space-x-3">
                <button
                    onClick={onClose}
                    className="inline-flex text-center justify-center px-4 py-2 text-primaryDark transition-all border border-primaryDark rounded-lg hover:bg-primaryDark hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none animate-button"
                    aria-label="Join the Race"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
