/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        // This disallows the site from being embedded within an iframe.
        // Setting the value to DENY would disallow any domain from framing the content.
        // SAMEORIGIN allows the current site to frame the content.
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/gallery",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "mdxshiqvnowbdtbspsrw.supabase.co",
      },
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "pbxt.replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default config;
