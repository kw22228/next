/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;

    if (isServer) {
    } else {
    }

    config.module.rules.push({
      test: /\.js/,
      use: [
        options.defaultLoaders.babel,
        // {
        //   loader: 'my-custom-loader',
        //   options: loaderOptions,
        // },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
