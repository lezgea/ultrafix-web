import { NextRequest, NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { COMMERCIAL_SERVICES_LIST, RESIDENCIAL_SERVICES_LIST } from 'constants/services';
import { fetchCitiesMinlist } from '@utils/fetchAdditionalData';


export async function GET(req: NextRequest) {
    const sitemap = new SitemapStream({ hostname: 'https://ultrafix.com/' });

    sitemap.write({ url: '/', lastmod: '2025-03-06', changefreq: 'weekly', priority: 1.0 });

    const residential_services = RESIDENCIAL_SERVICES_LIST.map(service => service.link);
    const commercial_services = COMMERCIAL_SERVICES_LIST.map(service => service.link);

    const cities = await fetchCitiesMinlist({ skip: 1000, limit: 1000 });

    if (cities?.data?.length) {
        cities.data.forEach((city: any) => {
            sitemap.write({
                url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}`,
                lastmod: '2025-03-06',
                changefreq: 'weekly',
                priority: 0.8,
            });
            residential_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}/residential/${service}`,
                    lastmod: '2025-03-06',
                    changefreq: 'weekly',
                    priority: 0.7,
                });
            });
            commercial_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}/commercial/${service}`,
                    lastmod: '2025-03-06',
                    changefreq: 'weekly',
                    priority: 0.7,
                });
            });
        });
    }

    sitemap.end();

    const xml = await streamToPromise(sitemap).then(data => data.toString());

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
