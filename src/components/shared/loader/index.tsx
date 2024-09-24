import { LogoIcon } from '@assets/icons';
import Image from 'next/image';
import React from 'react';


export const Loader: React.FC = () => {
    return (
        <div className="loader-page-wrapper w-screen min-h-screen bg-white/3">
            <div className="loader-wrapper">
                <div className="overflow-box"></div>
                <LogoIcon className="h-20 w-20 animate-loader" />
            </div>
        </div>

    )
}