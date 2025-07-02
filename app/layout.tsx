import type React from "react";
import type { Metadata } from "next/types";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { AuthProvider } from "@/contexts/auth-context";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
  title: "OSimulate - Learn Operating Systems Visually",
  description:
    "Interactive visualizations for learning Operating System concepts",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <AnimatedBackground />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
