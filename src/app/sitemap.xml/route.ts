// app/sitemap.xml/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { CITIES, STATES_LIST } from 'constants/locations';
import { COMMERCIAL_SERVICES_LIST, RESIDENCIAL_SERVICES_LIST } from 'constants/services';


export async function GET(req: NextRequest) {
    const sitemap = new SitemapStream({ hostname: 'https://ultrafix.com/' });

    sitemap.write({ url: '/', lastmod: '2024-10-19', changefreq: 'weekly', priority: 1.0 });
    sitemap.write({ url: '/appliance-services/', lastmod: '2024-10-19', changefreq: 'monthly', priority: 0.8 });

    const states = STATES_LIST.map(state => state.title.toLowerCase());
    const cities = Object.values(CITIES).map(city => city.value);
    const residential_services = RESIDENCIAL_SERVICES_LIST.map(service => service.value);
    const commercial_services = COMMERCIAL_SERVICES_LIST.map(service => service.value);

    states.forEach(state => {
        cities.forEach(city => {
            residential_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${state}/${city}/residential/${service}/`,
                    lastmod: '2024-11-01',
                    changefreq: 'monthly',
                    priority: 0.7,
                });
            });
            commercial_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${state}/${city}/commercial/${service}/`,
                    lastmod: '2024-11-01',
                    changefreq: 'monthly',
                    priority: 0.7,
                });
            });
        });
    });

    residential_services.forEach(service => {
        sitemap.write({
            url: `/appliance-services/residential/${service}/`,
            lastmod: '2024-11-01',
            changefreq: 'monthly',
            priority: 0.8,
        });
    });

    commercial_services.forEach(service => {
        sitemap.write({
            url: `/appliance-services/commercial/${service}/`,
            lastmod: '2024-11-01',
            changefreq: 'monthly',
            priority: 0.8,
        });
    });

    sitemap.end();

    const xml = await streamToPromise(sitemap).then(data => data.toString());

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
