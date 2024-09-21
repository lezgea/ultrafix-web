import SectionLayout from '@components/layout/section-layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const TOP_SERVICES = [
    {
        alt: "Google",
        url: "https://www.google.com/search?q=ultrafix+appliance+repair&rlz=1C5CHFA_enAZ963AZ963&sxsrf=APq-WBssJpKsgnoLNInPVzokEE5Ly-oBww%3A1646594356729&ei=NAklYvOALKjprgTzxrXABA&ved=0ahUKEwjz6uL9mbL2AhWotIsKHXNjDUgQ4dUDCA4&oq=ultrafix+appliance+repair&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABKBAhGGABQAFgAYABoAHAAeACAAQCIAQCSAQCYAQA&sclient=gws-wiz#lrd=0x8640c33ffbd59fcd:0x86ed469b52b0e240,1,,,",
        src: "/img/logos/google-logo.webp",
    },
    {
        alt: "Best Business Bureau",
        url: "https://www.bbb.org/us/tx/houston/profile/appliance-repair/ultrafix-appliance-repair-0915-90064027",
        src: "/img/logos/bbb-logo.webp",
    },
    {
        alt: "Best Pick Reports",
        url: "https://www.bestpickreports.com/appliance-repair/houston/ultrafix-appliance-repair",
        src: "/img/logos/best-pick-logo.webp",
    },
    {
        alt: "Yelp",
        url: "https://www.yelp.com/biz/ultrafix-appliance-repair-houston",
        src: "/img/logos/yelp-logo.webp",
    },
    // {
    //     alt: "Thumbtack",
    //     url: "https://www.thumbtack.com/tx/houston/appliance-repair/ultrafix-appliance-repair-llc/service/428552679308009500?utm_medium=web&utm_source=txt&surface=sp",
    //     src: "/img/logos/thumbtack-logo.webp",
    // },
]

export const LogosSection: React.FC = () => {
    return (
        <SectionLayout noYPadding>
            <ul className="flex w-full items-center justify-center gap-10 -mt-[120px] mb-10">
                {
                    TOP_SERVICES.map(({ src, alt }, i) =>
                        <li key={i}>
                            <Image
                                src={src}
                                width={10}
                                height={10}
                                className="w-auto h-[60px]"
                                alt={alt}
                                loading="lazy"
                                sizes="(max-width: 1200px) 100vw, 200px"
                            />
                        </li>
                    )
                }
            </ul>
        </SectionLayout>
    )
}