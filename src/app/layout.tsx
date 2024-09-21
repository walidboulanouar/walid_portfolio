// app/layout.tsx

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

import Script from 'next/script';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // ... your metadata here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.vapiSDK) {
        // Initialize Vapi instance
        const vapiInstance = window.vapiSDK.run({
          apiKey: "your_actual_public_api_key", // Replace with your Vapi Public API key
          assistant: "your_actual_assistant_id", // Replace with your Assistant ID
          config: {
            position: "bottom-right",
            offset: "40px",
            width: "50px",
            height: "50px",
            idle: {
              color: `rgb(93, 254, 202)`,
              type: "pill",
              title: "Have a quick question?",
              subtitle: "Talk with our AI assistant",
              icon: `/icons/phone.svg`,
            },
            loading: {
              color: `rgb(93, 124, 202)`,
              type: "pill",
              title: "Connecting...",
              subtitle: "Please wait",
              icon: `/icons/loader-2.svg`,
            },
            active: {
              color: `rgb(255, 0, 0)`,
              type: "pill",
              title: "Call in progress...",
              subtitle: "End the call.",
              icon: `/icons/phone-off.svg`,
            },
          },
        });

        window.vapiInstance = vapiInstance;

        // Open the Vapi assistant immediately
        vapiInstance.open();

        // Re-open assistant when it's closed
        vapiInstance.on('widget-closed', () => {
          vapiInstance.open();
        });

        // Add event listeners if needed
        vapiInstance.on('call-start', () => {
          console.log('Call has started');
        });
        
        vapiInstance.on('call-end', () => {
          console.log('Call has ended');
        });
      } else {
        console.error('Vapi SDK is not available.');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       
      </head>
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
       {/* Ensure that the Vapi script is included in the head */}
       <Script
          src="https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js"
          strategy="beforeInteractive"
        />
    </html>
  );
}
