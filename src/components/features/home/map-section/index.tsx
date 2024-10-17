"use client";

import React, { useEffect, useState } from 'react';
import SectionLayout from '@components/layout/section-layout';
import 'jsvectormap';
import jsVectorMap from 'jsvectormap';
import '@utils/us-aea-en';
import { CITIES, STATES } from 'constants/locations';


export const MapSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    const SELECTED_REGIONS = [
        'US-AL', 'US-AK', 'US-AZ', 'US-AR', 'US-CO',
        'US-CT', 'US-DE', 'US-HI', 'US-ID', 'US-IN',
        'US-IA', 'US-KS', 'US-KY', 'US-LA', 'US-ME',
        'US-MI', 'US-MN', 'US-MS', 'US-MT', 'US-NE',
        'US-NV', 'US-NH', 'US-NM', 'US-NY', 'US-ND',
        'US-OH', 'US-OK', 'US-OR', 'US-RI', 'US-SC',
        'US-SD', 'US-TN', 'US-UT', 'US-VT', 'US-WA',
        'US-WV', 'US-WI', 'US-WY'
    ]


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
                // regionsSelectable: true,
                zoomButtons: false,
                selectedRegions: SELECTED_REGIONS,
                // selectedRegions: ['US-CA', 'US-FL', 'US-GA', 'US-IL', 'US-MA', 'US-MD', 'US-MO', 'US-PA', 'US-TX', 'US-VA', 'US-NC', 'US-NJ'],
                regionStyle: {
                    initial: {
                        fill: '#A0ACB5',
                    },
                    hover: {
                        fillOpacity: 1,
                        fill: '#3056D3',
                    },
                    // select: {
                    //     fill: 'red'
                    // },
                    selected: {
                        fill: '#C8D0D8',
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
                tooltip: {
                    content: (code: string) => {
                        return `Region: ${code}`; // Tooltip content
                    },
                },
                onRegionClick: (event: any, code: string) => {
                    console.log('-------', event)
                },
                onRegionTooltipShow: (event: any, tooltip: any, code: string) => {
                    if (SELECTED_REGIONS.includes(code)) {
                        tooltip.text(
                            `<h5>${tooltip.text()}</h5>` +
                            `<p class="text-xs">We have no locations in this area yet</p>`,
                            true // Enables HTML
                        )
                    } else {
                        let state = code.split('-')[1]
                        const stateKey = state as keyof typeof STATES;
                        console.log('@@@@@', STATES[stateKey])

                        let cities = STATES[stateKey]
                            .filter(item => item.title)
                            .map(item => item.title)
                            .join(', ');

                        tooltip.text(
                            `<h5>${tooltip.text()} locations</h5>` +
                            `<p class="text-xs">We are in ${cities}</p> `,
                            true // Enables HTML
                        )
                    }

                },
                // onRegionOut: (event: any, code: string) => {
                //     console.log(`Left region: ${code}`); // Log to verify the event fires
                // },
            });

            return () => {
                if (mapOne) {
                    mapOne.destroy(); // Ensure the map instance is cleaned up
                }
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
