"use client";

import React, { useEffect, useState } from 'react';
import { ContactForm } from '@components/features/sign-up';
import SectionLayout from '@components/layout/section-layout';
import 'jsvectormap'; // Import jsvectormap
import jsVectorMap from 'jsvectormap'; // Importing the jsvectormap module
import '@utils/us-aea-en'; // Ensure this imports the correct map data

export const MapSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            console.log('MapSection mounted');

            const mapOne = new jsVectorMap({
                selector: '#mapOne',
                map: 'us_aea_en',
                zoomOnScroll: false,
                regionsSelectable: true,
                zoomButtons: false,
                selectedRegions: ['US-CA', 'US-FL', 'US-GA', 'US-IL', 'US-MA', 'US-MD', 'US-MO', 'US-PA', 'US-TX', 'US-VA', 'US-NC', 'US-NJ'],
                regionStyle: {
                    initial: {
                        fill: '#C8D0D8',
                    },
                    hover: {
                        fillOpacity: 1,
                        fill: '#3056D3',
                    },
                    // select: {
                    //     fill: 'red'
                    // },
                    selected: {
                        // fill: 'red',
                    }
                    // selected: { fill: 'red' },
                },
                regionLabelStyle: {
                    initial: {
                        fontFamily: 'Satoshi',
                        fontWeight: 'semibold',
                        fill: '#fff',
                    },
                    hover: {
                        cursor: 'pointer',
                    },
                },
                labels: {
                    regions: {
                        render(code: string) {
                            return code.split('-')[1];
                        },
                    },
                },
                markerStyle: {
                    initial: {
                        stroke: '#676767',
                        strokeWidth: 2.5,
                        fill: '#ff5566',
                        fillOpacity: 1
                    },
                    hover: {},
                    selected: {},
                    selectedHover: {}
                },
                markers: [
                    { coords: [29.7601, 95.3701] },
                    // { coords: [72, -42] },
                    // { coords: [56, -106] },
                    // { coords: [31.5, 34.8] },
                    // { coords: [-14.2350, -51.9253] },
                    // { coords: [35.8617, 104.1954] }
                ],
                // Adding tooltip configuration
                // tooltip: {
                //     content: (code: string) => {
                //         return `Region: ${code}`; // Tooltip content
                //     },
                // },
                onRegionClick: (event: any, code: string) => {
                    console.log('-------', event)
                },
                onRegionTooltipShow: (event: any, tooltip: any, code: string) => {
                    tooltip.text(
                        `<h5>${tooltip.text()} - Country</h5>` +
                        `<p class="text-xs">This message is gonna appear when hovering over every single region.</p>`,
                        true // Enables HTML
                    )
                    console.log(`Hovered over region: ${code}`); // Log to verify the event fires
                },
                // onRegionOut: (event: any, code: string) => {
                //     console.log(`Left region: ${code}`); // Log to verify the event fires
                // },
            });

            return () => {
                // if (mapOne) {
                //     mapOne.destroy(); // Cleanup the map instance
                // }
            };
        }
    }, [mounted]);

    return (
        <SectionLayout
            scrollId="map"
            title="Our Locations"
            description="We have been providing top service in 100 cities all over the United States"
        >
            <div id="mapOne" className="h-[200px] lg:h-[700px] w-auto relative" />
        </SectionLayout>
    );
}

MapSection.displayName = "MapSection";
