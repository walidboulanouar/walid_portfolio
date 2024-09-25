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
                  apiKey: "93b15570-22e1-4629-a5d1-bdc74f551f2d",
                  assistant: "59daa356-099b-48b0-bbd9-ea8dd661ff6e",
                  config: {
                    position: "bottom-right",
                    offset: "40px",
                    width: "50px",
                    height: "50px",
                    idle: {
                      color: 'rgb(93, 254, 202)',
                      type: 'pill',
                       title: 'Avez-vous un problème ?',
                        subtitle: 'Nous sommes ici pour vous aider. Parlez à notre assistant IA',
                      icon: 'https://unpkg.com/lucide-static@0.321.0/icons/phone.svg',
                    },
                    loading: {
                      color: 'rgb(93, 124, 202)',
                      type: 'pill',
                        title: 'Connexion en cours...',
                        subtitle: 'Veuillez patienter',
                      icon: 'https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg',
                    },
                    active: {
                      color: 'rgb(255, 0, 0)',
                      type: 'pill',
                      title: 'Appel en cours...',
              subtitle: "Terminez l'appel.",
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
