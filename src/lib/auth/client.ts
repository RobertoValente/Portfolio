import { createAuthClient } from "better-auth/react";

export const authClient =  createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_SITE_URL!,
});

export const { signIn, signOut, signUp, useSession, sendVerificationEmail, forgetPassword, resetPassword  } = authClient;