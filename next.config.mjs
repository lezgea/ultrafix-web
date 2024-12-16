import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            // Fallback for client-side code only
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
            };
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: { svgo: false },
                },
            ],
        });
        return config;
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                ],
            },
        ];
    },
};

export default withBundleAnalyzer({ enabled: isAnalyze })(nextConfig);

