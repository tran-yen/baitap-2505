/**  @type {import('next').NextConfig} */
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig

// if (typeof require !== "undefined") {
//   require.extensions[".less"] = (file) => {};
// }



// const styleConfig = withCSS({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]___[hash:base64:5]",
//     },
//     ...withLess(
//       withSass({
//         lessLoaderOptions: {
//           javascriptEnabled: true,
//         },
//       })
//     ),
//   })

// module.exports = withPlugins([
//   [withCSS]
// ], nextConfig);