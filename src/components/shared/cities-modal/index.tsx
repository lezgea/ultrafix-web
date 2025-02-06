import React from 'react';
import { Modal } from '../modal';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon } from '@assets/icons';
import { useLazyGetAllCitiesQuery } from '@api/location-api';


interface ICitiesModalProps {
    visible: boolean,
    stateShort: string,
    stateFull: string,
    onClose: () => void,
    onConfirm?: () => void,
}

export const CitiesModal: React.FC<ICitiesModalProps> = (props) => {
    let { visible, onClose } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent {...props} />
            }
            onClose={onClose}
        />
    )
}


interface IModalContent extends ICitiesModalProps {
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    let { stateShort, stateFull, onClose } = props;

    const [triggerGetCities, { data: citiesList, isLoading: isCitiesLoading }] = useLazyGetAllCitiesQuery();

    async function getAllCitiesList() {
        try {
            await triggerGetCities({ state: stateShort }).unwrap();
        } catch (err: any) {
            console.error('Unable to fetch cities list: ', err)
        }
    }


    React.useEffect(() => {
        if (stateShort)
            getAllCitiesList();
    }, [stateShort])


    return (
        <div className="flex relative flex-col md:max-w-[80vw] max-h-[90vh] rounded-lg overflow-hidden space-y-5 text-center">
            <div className="z-50 backdrop-blur-xl flex items-center justify-center bg-white/60 absolute w-full py-2 md:py-3">
                <h2 className="text-lg md:text-2xl text-gray-500 mt-3">Our Locations in <strong className="font-medium">{stateFull}</strong></h2>
                <div className="z-200 absolute top-5 right-5 cursor-pointer hover:text-primary" onClick={onClose}><CloseIcon /></div>
            </div>
            <div className="w-full columns-2 lg:columns-3 p-7 pt-[50px] md:pt-[60px] md:p-7 overflow-y-scroll">
                {
                    citiesList?.data?.map((city) =>
                        <Link
                            key={city.id}
                            href={`/appliance-repair/${city.state_short.toLowerCase()}/${city.name.toLowerCase()}`}
                        >
                            <div className="relative rounded-xl md:rounded-2xl h-[100px] max-h-[100px] md:h-[150px] md:max-h-[150px] overflow-hidden mb-4 border border-gray-300">
                                <div className="text-gray-500 cursor-pointer shadow-top-lg hover:shadow-lg group rounded-xl md:rounded-2xl overflow-hidden">
                                    <Image
                                        width={300}
                                        height={200}
                                        src={city.image || '/svg/no_img.svg'}
                                        alt={`${city.name} Image`}
                                        className="w-full min-h-[100px] max-h-[100px] md:h-[150px] md:max-h-[150px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-xl md:rounded-2xl border border-gray-100"
                                        sizes="(max-width: 1200px) 200px, (min-width: 1200px) 200px"
                                    />
                                    <div className="absolute z-60 flex items-center justify-center top-0 w-full h-full rounded-xl md:rounded-2xl py-5 bg-white/30 backdrop-blur-xl group-hover:backdrop-blur-none group-hover:bg-transparent text-lg md:text-xl font-semibold text-center text-white">
                                        {city.name}
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
