/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Assuming Pexels uses HTTPS
        hostname: "images.pexels.com",
      },

      {
        protocol: "https", // Assuming Pexels uses HTTPS
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
