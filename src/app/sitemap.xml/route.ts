import { NextRequest, NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { COMMERCIAL_SERVICES_LIST, RESIDENCIAL_SERVICES_LIST } from 'constants/services';
import { CITIES, STATES } from 'constants/locations';
import { fetchAllBlogs, fetchBrandsList, fetchCitiesMinlist } from '@utils/fetchAdditionalData';


export async function GET(req: NextRequest) {
    const sitemap = new SitemapStream({ hostname: 'https://ultrafix.com/' });

    sitemap.write({ url: '/', lastmod: '2024-12-14', changefreq: 'weekly', priority: 1.0 });
    sitemap.write({ url: '/book', lastmod: '2024-12-27', changefreq: 'weekly', priority: 0.8 });
    sitemap.write({ url: '/blog', lastmod: '2024-12-14', changefreq: 'weekly', priority: 0.8 });
    sitemap.write({ url: '/apply', lastmod: '2024-12-14', changefreq: 'weekly', priority: 0.7 });
    sitemap.write({ url: '/faq', lastmod: '2024-12-14', changefreq: 'weekly', priority: 0.7 });

    const states = Object.values(STATES);
    // const cities = Object.values(CITIES).map(city => city.value);
    const residential_services = RESIDENCIAL_SERVICES_LIST.map(service => service.link);
    const commercial_services = COMMERCIAL_SERVICES_LIST.map(service => service.link);

    const cities = await fetchCitiesMinlist();
    const brands = await fetchBrandsList();

    if (cities?.data?.length) {
        cities.data.forEach((city: any) => {
            sitemap.write({
                url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}`,
                lastmod: '2025-02-11',
                changefreq: 'weekly',
                priority: 0.8,
            });
            residential_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}/residential/${service}`,
                    lastmod: '2025-02-11',
                    changefreq: 'weekly',
                    priority: 0.7,
                });
            });
            commercial_services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${city.stateShort.toLocaleLowerCase()}/${city.value}/commercial/${service}`,
                    lastmod: '2025-02-11',
                    changefreq: 'weekly',
                    priority: 0.7,
                });
            });
        });
    }

    residential_services.forEach(service => {
        sitemap.write({
            url: `/appliance-services/residential/${service}/`,
            lastmod: '2025-02-11',
            changefreq: 'weekly',
            priority: 0.8,
        });
    });

    commercial_services.forEach(service => {
        sitemap.write({
            url: `/appliance-services/commercial/${service}/`,
            lastmod: '2025-02-11',
            changefreq: 'weekly',
            priority: 0.8,
        });
    });

    const blogs = await fetchAllBlogs(0, 100); // Adjust the skip and limit as needed

    if (blogs?.data?.length) {
        blogs.data.forEach((blog: any) => {
            sitemap.write({
                url: `/blog/${blog.id}`,
                lastmod: blog.updatedAt || '2025-02-25',
                changefreq: 'weekly',
                priority: 0.8,
            });
        });
    }

    if (brands?.data?.length) {
        brands.data.forEach((brand: any) => {
            sitemap.write({
                url: `/brand/${brand.id}`,
                lastmod: '2025-02-25',
                changefreq: 'weekly',
                priority: 0.7,
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
