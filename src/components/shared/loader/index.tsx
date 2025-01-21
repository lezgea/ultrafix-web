import { LogoIcon } from '@assets/icons';
import Image from 'next/image';
import React from 'react';


export const Loader: React.FC = () => {
    return (
        <div className="z-20 loader-page-wrapper w-screen min-h-screen bg-white/3">
            {/* <div className="z-20 flex loader-wrapper w-screen h-screen">
                <div className="overflow-box"></div>
                <LogoIcon className="h-20 w-20 animate-loader" />
            </div> */}
        </div>

    )
}