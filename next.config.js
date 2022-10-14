/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   async redirects() {
    return [
      {
        source: "/SalesSheet",
        permanent: true,
        destination:
          "https://getstables.s3-us-west-2.amazonaws.com/SalesSheet.pdf",
      },
    ];
  }
};

module.exports = nextConfig;
