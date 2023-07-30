/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Authen Google
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    // Authen Facebook
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    
    // Smart Contract Address
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    
    // Next Auth Secret
    SECRET: process.env.SECRET,
  },
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
