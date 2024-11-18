import { FLMapIcon, ILMapIcon, MAMapIcon, NJMapIcon, NYMapIcon, PAMapIcon, TXMapIcon, VAMapIcon } from '@assets/icons';
import React from 'react';


interface IMapIconProps {
    value: string,
    className?: string,
}

export const MapIcon: React.FC<IMapIconProps> = ({ value, className }) => {
    switch (value) {
        case 'TX': return <TXMapIcon className={className} />;
        case 'IL': return <ILMapIcon className={className} />;
        case 'MA': return <MAMapIcon className={className} />;
        case 'FL': return <FLMapIcon className={className} />;
        case 'PA': return <PAMapIcon className={className} />;
        case 'VA': return <VAMapIcon className={className} />;
        case 'NJ': return <NJMapIcon className={className} />;
        case 'NY': return <NYMapIcon className={className} />;
        default: return null;
    }
}