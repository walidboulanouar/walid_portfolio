import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head"; // Import next/head for injecting scripts
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
       {/* Inject the Vapi script here */}
       <script
          src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
          async
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                var vapiInstance = window.vapiSDK.run({
                  apiKey: "3fa83ea4-7074-4208-bb78-510e60f6757a",
                  assistant: "deca2a4a-fd01-4acc-9f69-eed0b40c4256",
                  config: {
                    position: "bottom-right",
                    offset: "40px",
                    width: "50px",
                    height: "50px",
                    idle: {
                      color: 'rgb(93, 254, 202)',
                      type: 'pill',
                      title: 'How can we help?',
                      subtitle: 'We’re here to assist you. Talk to our AI assistant for help.',
                      icon: 'https://unpkg.com/lucide-static@0.321.0/icons/phone.svg',
                    },
                    loading: {
                      color: 'rgb(93, 124, 202)',
                      type: 'pill',
                      title: 'Connecting...',
                      subtitle: 'Please wait a moment.',
                      icon: 'https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg',
                    },
                    active: {
                      color: 'rgb(255, 0, 0)',
                      type: 'pill',
                         title: 'Call in Progress...',
                          subtitle: "Please finish the call.",
                      icon: 'https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg',
                    },
                  }
                });
              }
            `,
          }}
        ></script>
    </html>
  );
}
