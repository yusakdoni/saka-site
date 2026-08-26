/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/kontak", destination: "/work-with-us", permanent: true },
      { source: "/layanan", destination: "/services", permanent: true },
      { source: "/layanan/:slug", destination: "/services/:slug", permanent: true },
      { source: "/industri", destination: "/our-work", permanent: true },
      { source: "/industri/:slug", destination: "/our-work/:slug", permanent: true },
      { source: "/tentang-kami", destination: "/our-company", permanent: true },
    ];
  },
};

export default nextConfig;
