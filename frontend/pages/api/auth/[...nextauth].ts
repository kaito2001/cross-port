import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // Add other providers here if needed (e.g., GitHub, Facebook, etc.)
  ],
  // Add any additional NextAuth.js configurations here
  secret: 'e3d2dac37c25707598555ef8d47d4ab39e9de98cfa32fa26fe79718b47d105821a4861f13a9ab9f875cf642f8af2a8d9f4985b9d1594d85d9726f5b9b60ef25b'
})
