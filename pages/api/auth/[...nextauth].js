import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.username = account.providerAccountId;
        token.accessTokenExpires = account.expires_at * 1000;
      }

      return token;
    },
    async session({ token, session }) {
      session.user.accessToken = token.accessToken;
      session.user.username = token.username;

      return session;
    },
  },
});
