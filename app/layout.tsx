import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Turso Starter",
  description: "Get started with Next.js and Turso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <ClerkProvider>
          <header className="flex h-16 items-center justify-between border-b border-foreground/10 px-6">
            <Link href="/" className="text-sm font-black tracking-tight">
              Next.js Turso Starter
            </Link>
            <nav className="flex items-center gap-2">
              <Show when="signed-out">
                <SignInButton>
                  <button
                    type="button"
                    className="cursor-pointer rounded px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
                  >
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button
                    type="button"
                    className="cursor-pointer rounded bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90"
                  >
                    Sign up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </nav>
          </header>
          <main className="flex flex-1 flex-col">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
