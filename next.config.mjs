/** @type {import('next').NextConfig} */
const apiKey = process.env.API_KEY;

const nextConfig = {

    exportPathMap: async function () {
        return {
            '/': { page: '/' }, // Example: Export the root URL
            '/test': { page: '/test' }, // Example: Export the root URL
            // Add other routes as needed
        };
    },
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiKey,
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/', // Change this to your desired entry point
    //             permanent: true,
    //         },
    //     ];
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'th.bing.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'youtube.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
