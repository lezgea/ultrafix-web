import { NextRequest, NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { fetchBrandsList, fetchCitiesMinlist } from '@utils/fetchAdditionalData';


export async function GET(req: NextRequest) {
    const sitemap = new SitemapStream({ hostname: 'https://ultrafix.com/' });

    sitemap.write({ url: '/', lastmod: '2025-03-06', changefreq: 'weekly', priority: 1.0 });

    const cities = await fetchCitiesMinlist({ skip: 500, limit: 500 });
    const brands = await fetchBrandsList();

    if (brands?.data?.length) {
        brands.data.forEach((brand: any) => {
            sitemap.write({
                url: `/brand/${brand.text.toLocaleLowerCase()}`,
                lastmod: '2025-03-06',
                changefreq: 'weekly',
                priority: 0.9,
            });
        });
    }

    if (cities?.data?.length) {
        cities.data?.forEach((city: any) => {
            if (brands?.data?.length) {
                brands.data.forEach((brand: any) => {
                    sitemap.write({
                        url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}/brand/${brand.text.toLocaleLowerCase()}`,
                        lastmod: '2025-03-06',
                        changefreq: 'weekly',
                        priority: 0.8,
                    });
                });
            }
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
