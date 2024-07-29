/** @type {import('next').NextConfig} */
const nextConfig = {
    // 引入@svgr/webpack 还需要配置 webpack如下
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    }
}

module.exports = nextConfig
