const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
