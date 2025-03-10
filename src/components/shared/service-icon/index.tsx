import { CooktopIcon, DishwasherIcon, DryerIcon, FreezerIcon, GarbageDisposalIcon, IceMachineIcon, MicrowaveIcon, OvenIcon, RangeIcon, RefrigeratorIcon, StoveIcon, VentHoodIcon, WarmerDrawerIcon, WasherIcon, WineCoolerIcon } from '@assets/icons';
import React from 'react';


interface IServiceIconProps {
    value: string,
    className?: string,
}

export const ServiceIcon: React.FC<IServiceIconProps> = ({ value, className }) => {
    switch (value) {
        case 'refrigerator': return <RefrigeratorIcon className={className} />;
        case 'ice-machine': return <IceMachineIcon className={className} />;
        case 'washer': return <WasherIcon className={className} />;
        case 'dryer': return <DryerIcon className={className} />;
        case 'dishwasher': return <DishwasherIcon className={className} />;
        case 'oven': return <OvenIcon className={className} />;
        case 'stove': return <StoveIcon className={className} />;
        case 'range': return <RangeIcon className={className} />;
        case 'cooktop': return <CooktopIcon className={className} />;
        case 'microwave': return <MicrowaveIcon className={className} />;
        case 'wine-cooler': return <WineCoolerIcon className={className} />;
        case 'freezer': return <FreezerIcon className={className} />;
        case 'warmer-drawer': return <WarmerDrawerIcon className={className} />;
        case 'vent-hood': return <VentHoodIcon className={className} />;
        case 'garbage-disposal': return <GarbageDisposalIcon className={className} />;
        default: return null;
    }
}