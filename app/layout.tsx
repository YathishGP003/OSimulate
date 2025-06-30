import type React from "react";
import type { Metadata } from "next/types";
import { Solway, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { AuthProvider } from "@/contexts/auth-context";
import GoogleAnalytics from "@/components/google-analytics";

const solway = Solway({ weight: ["400", "700"], subsets: ["latin"] });
const dmmono = DM_Mono({ weight: "400", subsets: ["latin"] });

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
        <GoogleAnalytics />
      </head>
      <body
        className={`${solway.className} min-h-screen flex flex-col font-sans`}
      >
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
