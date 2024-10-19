import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
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
                hostname: 'lezgea.com', // Replace with your image host domain
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false, // Optional: Disable SVGO optimizations if necessary
                    },
                },
            ],
        });
        return config;
    },
    async headers() {
        return [
            {
                // Apply to all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload', // HSTS Header
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff', // Prevent MIME type sniffing
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY', // Prevent clickjacking
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin', // Set referrer policy
                    },
                    // {
                    //     key: 'Content-Security-Policy',
                    //     value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none';", // Updated CSP
                    // },
                ],
            },
        ];
    },
};

// Wrap your Next.js config with the bundle analyzer
export default withBundleAnalyzer({ enabled: isAnalyze })(nextConfig);
