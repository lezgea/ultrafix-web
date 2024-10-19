import { CITIES, STATES_LIST } from 'constants/locations';
import { SERVICES_LIST } from 'constants/services';
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';


const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
    const sitemap = new SitemapStream({ hostname: 'https://ultrafix.com/' });

    sitemap.write({ url: '/', lastmod: '2024-10-19', changefreq: 'weekly', priority: 1.0 });
    sitemap.write({ url: '/appliance-services/', lastmod: '2024-10-19', changefreq: 'monthly', priority: 0.8 });

    const states = [...STATES_LIST.map(state => state.title.toLowerCase())];
    const cities = [...Object.values(CITIES).map(city => city.abbreviation)];
    const services = [...SERVICES_LIST.map(service => service.value)];

    states.forEach(state => {
        cities.forEach(city => {
            services.forEach(service => {
                sitemap.write({
                    url: `/appliance-repair/${state}/${city}/${service}/`,
                    lastmod: '2024-10-19',
                    changefreq: 'monthly',
                    priority: 0.7,
                });
            });
        });
    });

    services.forEach(service => {
        sitemap.write({
            url: `/appliance-services/${service}/`,
            lastmod: '2024-10-19',
            changefreq: 'monthly',
            priority: 0.8,
        });
    });

    sitemap.end();

    const xml = await streamToPromise(sitemap).then(data => data.toString());

    res.setHeader('Content-Type', 'application/xml');
    res.write(xml);
    res.end();
};

export default Sitemap;
